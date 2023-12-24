using DataAccess.DBAccess;
using DataAccess.Models;

namespace DataAccess.Data;
public class EventData : IEventData
{
    private readonly ISqlDataAccess _db;

    public EventData(ISqlDataAccess db)
    {
        _db = db;
    }

    public Task<IEnumerable<Event>> GetEvents() =>
        _db.LoadData<Event, dynamic>(storedProcedure: "dbo.GetAllEvents", new { });

    public async Task<Event?> GetEvent(int id)
    {
        var result = await _db.LoadData<Event, dynamic>(
            storedProcedure: "dbo.GetEvent",
            new { id = id });

        return result.FirstOrDefault();
    }

    public Task<IEnumerable<Event>> GetLastSixEvents() =>
        _db.LoadData<Event, dynamic>(storedProcedure: "dbo.GetLastSixEvents", new { });

    public Task CreateEvent(Event singleEvent) =>
        _db.SaveData(storedProcedure: "dbo.CreateEvent",
            new
            {
                singleEvent.event_name,
                singleEvent.event_description,
                singleEvent.event_date,
                singleEvent.event_time,
                singleEvent.event_image,
                singleEvent.event_location
            });

    public Task UpdateEvent(Event user) =>
        _db.SaveData(storedProcedure: "dbo.UpdateEvent", user);

    public Task DeleteEvent(int event_id) =>
        _db.SaveData(storedProcedure: "dbo.DeleteEvent", new { event_id = event_id });
}
