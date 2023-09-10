using DataAccess.DBAccess;
using DataAccess.Models;

namespace DataAccess.Data;
public class AttendeeData : IAttendeeData
{
    private readonly ISqlDataAccess _db;

    public AttendeeData(ISqlDataAccess db)
    {
        _db = db;
    }

    public Task<IEnumerable<Attendee>> GetAttendees() =>
        _db.LoadData<Attendee, dynamic>(storedProcedure: "dbo.GetAttendees", new { });

    public async Task<IEnumerable<Attendee?>> GetEventAttendees(int event_id)
    {
        var result = await _db.LoadData<Attendee, dynamic>(
            storedProcedure: "dbo.GetEventAttendees",
            new { id = event_id });

        return result;
    }
}
