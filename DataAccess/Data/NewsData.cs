using DataAccess.DBAccess;
using DataAccess.Models;

namespace DataAccess.Data;
public class NewsData : INewsData
{
    private readonly ISqlDataAccess _db;

    public NewsData(ISqlDataAccess db)
    {
        _db = db;
    }

    public Task<IEnumerable<News>> GetAllNews() =>
        _db.LoadData<News, dynamic>(storedProcedure: "dbo.GetAllNews", new { });

    public async Task<News?> GetNews(int id)
    {
        return null;
    }

    public Task CreateNews(News newNews) =>
        _db.SaveData(storedProcedure: "dbo.CreateNews",
            new
            {
                newNews.title,
                newNews.details,
                newNews.image,
                newNews.date
            });

    public Task UpdateNews(News user) =>
        null;
}
