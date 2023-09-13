using DataAccess.DBAccess;
using DataAccess.Models;

namespace DataAccess.Data;
public class ArticleData : IArticleData
{
    private readonly ISqlDataAccess _db;

    public ArticleData(ISqlDataAccess db)
    {
        _db = db;
    }

    public Task<IEnumerable<News>> GetArticles() =>
        _db.LoadData<News, dynamic>(storedProcedure: "dbo.GetAllNews", new { });

    public Task CreateArticle(News singleArticle) =>
        _db.SaveData(storedProcedure: "dbo.CreateArticle",
            new
            {
                singleArticle.article_title,
                singleArticle.article_details,
                singleArticle.article_image,
                singleArticle.article_date
            });
}
