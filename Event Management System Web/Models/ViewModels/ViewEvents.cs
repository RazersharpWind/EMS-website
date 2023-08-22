namespace Event_Management_System_Web.Models.ViewModels;

public class ViewEvents
{
    public List<Event> EventData { get; set; }
    public List<Attendee> Attendees { get; set; }

    public ViewEvents()
    {
        this.EventData = new List<Event>();
        this.Attendees = new List<Attendee>();
    }
}
