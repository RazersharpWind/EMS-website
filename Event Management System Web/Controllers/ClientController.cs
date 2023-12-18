using DataAccess.Data;
using Event_Management_System_Web.Models;
using Event_Management_System_Web.Models.ViewModels;
using Microsoft.AspNetCore.Mvc;

namespace Event_Management_System_Web.Controllers;
public class ClientController : Controller
{
    private readonly IEventData _eventData;
    private readonly IAttendeeData _attendeeData;
    private readonly IArticleData _articleData;

    public ClientController(IEventData eventData, IAttendeeData attendeeData, IArticleData articleData)
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

    public IActionResult News()
    {
        ViewNews news = new ViewNews();
        news.News = _articleData.GetArticles().Result.ToList();
        news.News.Reverse();
        return View(news);
    }

    public IActionResult ContactUs()
    {
        return View();
    }
}
