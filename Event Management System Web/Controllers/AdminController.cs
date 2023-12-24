using DataAccess.Models;
using Event_Management_System_Web.Models;
using Event_Management_System_Web.Models.ViewModels;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;
using System.Text.Json;

namespace Event_Management_System_Web.Controllers
{
    public class AdminController : Controller
    {
        private readonly IEventData _eventData;
        private readonly IAttendeeData _attendeeData;
        private readonly IArticleData _articleData; 

        public AdminController(IEventData eventData, IAttendeeData attendeeData, IArticleData articleData)
        {
            _eventData = eventData;
            _attendeeData = attendeeData;
            _articleData = articleData;
        }

        public IActionResult Index()
        {
            ViewEvents events = new ViewEvents(_attendeeData);
            events.EventData = _eventData.GetLastSixEvents().Result.ToList();
            return View(events);
        }

        public IActionResult Events()
        {
            ViewEvents events = new ViewEvents(_attendeeData);
            events.EventData = _eventData.GetEvents().Result.ToList();
            events.EventData.Reverse();
            return View(events);
        }
        [HttpPost]
        public IActionResult AddEvent(Event eventData, List<attendeeData> attendees)
        {
            _eventData.CreateEvent(eventData);
            for (int i = 0; i < attendees.Count; i++)
            {
                foreach (var attendee in _attendeeData.GetAttendees().Result)
                {
                    if (attendee.Full_name == attendees[i].Name && attendee.Attendee_id == attendees[i].Id)
                    {
                        _attendeeData.UpdateAttendee(attendee, eventData.event_id);
                    }
                }
            }
            return Json(new { url="/Admin/Events"});
        }
        [HttpPut]
        public IActionResult UpdateEvent(Event eventData, List<attendeeData> attendees)
        {
            _eventData.UpdateEvent(eventData);
            for (int i = 0; i < attendees.Count; i++)
            {
                foreach (var attendee in _attendeeData.GetAttendees().Result)
                {
                    if (attendee.Full_name == attendees[i].Name && attendee.Attendee_id == attendees[i].Id)
                    {
                        _attendeeData.UpdateAttendee(attendee, eventData.event_id);
                    }
                }
            }
            return Json(new { url = "/Admin/Events" });
        }

        [HttpPost]
        public IActionResult DeleteEvent(int event_id, List<attendeeData> attendees)
        {
            for (int i = 0; i < attendees.Count; i++)
            {
                foreach (var attendee in _attendeeData.GetAttendees().Result)
                {
                    if (attendee.Full_name == attendees[i].Name && attendee.Attendee_id == attendees[i].Id)
                    {
                        _attendeeData.ResetAttendee(attendees[i].Id);
                    }
                }
            }
            _eventData.DeleteEvent(event_id);
            return Json(new { url = "/Admin/Events" });
        }

        public IActionResult Attendees()
        {
            ViewEvents events = new ViewEvents(_attendeeData);
            events.EventData = _eventData.GetEvents().Result.ToList();
            events.EventData.Reverse();
            return View(events);
        }
        [HttpPost]
        public IActionResult KickAttendee(attendeeData attendee)
        {
            foreach (var singleAttendee in _attendeeData.GetAttendees().Result)
            {
                if (singleAttendee.Full_name == attendee.Name && singleAttendee.Attendee_id == attendee.Id)
                {
                    _attendeeData.ResetAttendee(attendee.Id);
                }
            }
            return Json(new { url = "/Admin/Attendees" });
        }

        [HttpPost]
        public IActionResult KickAttendees(List<attendeeData> attendees)
        {
            for (int i = 0; i < attendees.Count; i++)
            {
                foreach (var attendee in _attendeeData.GetAttendees().Result)
                {
                    if (attendee.Full_name == attendees[i].Name && attendee.Attendee_id == attendees[i].Id)
                    {
                        _attendeeData.ResetAttendee(attendees[i].Id);
                    }
                }
            }
            return Json(new { url = "/Admin/Attendees" });
        }

        public IActionResult News()
        {
            ViewNews news = new ViewNews();
            news.News = _articleData.GetArticles().Result.ToList();
            news.News.Reverse();
            return View(news);
        }
        [HttpPost]
        public IActionResult AddArticle(News newArticle)
        {
            _articleData.CreateArticle(newArticle);
            return Json(new { url = "/Admin/News" });
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}