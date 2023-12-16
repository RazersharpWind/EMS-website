using Event_Management_System_Web.Models;
using Event_Management_System_Web.Models.ViewModels;
using Microsoft.AspNetCore.Mvc;

namespace Event_Management_System_Web.Controllers;
public class ClientController : Controller
{
    private readonly IEventData _eventData;
    private readonly IAttendeeData _attendeeData;

    public ClientController(IEventData eventData, IAttendeeData attendeeData)
    {
        _eventData = eventData;
        _attendeeData = attendeeData;
    }

    public IActionResult Index()
    {
        ViewEvents events = new ViewEvents(_attendeeData);
        events.EventData = _eventData.GetLastSixEvents().Result.ToList();
        return View(events);
    }

    public IActionResult News()
    {
        return View();
    }

    public IActionResult ContactUs()
    {
        return View();
    }
}
