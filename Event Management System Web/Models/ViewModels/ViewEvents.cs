namespace Event_Management_System_Web.Models.ViewModels;

public class ViewEvents
{
    private readonly IAttendeeData _attendeeData;
    public List<Event> EventData { get; set; }
    public Event Event { get; set; }

    public ViewEvents(IAttendeeData attendeeData)
    {
        this._attendeeData = attendeeData;
        this.EventData = new List<Event>();
        this.Event = new Event();
    }

    public int GetAttendeeCount(int eventID)
    {
        var attendees = _attendeeData.GetEventAttendees(eventID).Result;
        var AttendeeCount = attendees.Count();
        return AttendeeCount;
    }
    public IEnumerable<Attendee?> GetAttendees(int eventID)
    {
        return _attendeeData.GetEventAttendees(eventID).Result;
    }

    public IEnumerable<Attendee?> GetAllAttendees()
    {
        return _attendeeData.GetAttendees().Result;
    }
}
