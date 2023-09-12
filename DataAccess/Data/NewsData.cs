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

    public Task CreateNews(News newNews) =>
        _db.SaveData(storedProcedure: "dbo.CreateNews",
            new
            {
                newNews.article_title,
                newNews.article_details,
                newNews.article_image,
                newNews.article_date
            });
}
