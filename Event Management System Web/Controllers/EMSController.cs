using Event_Management_System_Web.Models;
using Event_Management_System_Web.Models.ViewModels;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;

namespace Event_Management_System_Web.Controllers
{
    public class EMSController : Controller
    {
        private readonly IEventData _eventData;
        private readonly IAttendeeData _attendeeData;

        public EMSController(IEventData eventData, IAttendeeData attendeeData)
        {
            _eventData = eventData;
            _attendeeData = attendeeData;
        }

        public IActionResult Index()
        {
            ViewEvents events = new ViewEvents();
            events.EventData = _eventData.GetLastThreeEvents().Result.ToList();
            events.Attendees = _attendeeData.GetAttendees().Result.ToList();
            return View(events);
        }

        public IActionResult Events()
        {
            ViewEvents events = new ViewEvents();
            events.EventData = _eventData.GetEvents().Result.ToList();
            events.Attendees = _attendeeData.GetAttendees().Result.ToList();
            return View(events);
        }

        public IActionResult Attendees()
        {
            return View();
        }

        public IActionResult News()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}