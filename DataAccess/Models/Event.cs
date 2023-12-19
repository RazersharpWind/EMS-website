namespace DataAccess.Models;
public class Event
{
    public int event_id { get; set; }
    public string event_name { get; set; } = string.Empty;
    public string event_description { get; set; } = string.Empty;
    public DateTime event_date { get; set; }
    public DateTime event_time { get; set; }
    public string event_image { get; set; } = string.Empty;
    public string event_location {  get; set; } = string.Empty;
}
