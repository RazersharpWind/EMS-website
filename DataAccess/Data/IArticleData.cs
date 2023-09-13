using DataAccess.Models;

namespace DataAccess.Data;
public interface IArticleData
{
    Task CreateArticle(News singleArticle);
    Task<IEnumerable<News>> GetArticles();
}