﻿using Event_Management_System_Web.Models;
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
            ViewEvents events = new ViewEvents(_attendeeData);
            events.EventData = _eventData.GetLastSixEvents().Result.ToList();
            return View(events);
        }

        public IActionResult Events()
        {
            ViewEvents events = new ViewEvents(_attendeeData);
            events.EventData = _eventData.GetEvents().Result.ToList();
            return View(events);
        }
        [HttpPost]
        public IActionResult AddEvent(Event eventData)
        {
            _eventData.CreateEvent(eventData);
            return Json(new { url="/EMS/Events"});
        }
        [HttpPut]
        public IActionResult UpdateEvent(Event eventData)
        {
            _eventData.UpdateEvent(eventData);
            return Json(new { url = "/EMS/Events" });
        }

        public IActionResult Attendees()
        {
            ViewEvents events = new ViewEvents(_attendeeData);
            events.EventData = _eventData.GetEvents().Result.ToList();
            return View(events);
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