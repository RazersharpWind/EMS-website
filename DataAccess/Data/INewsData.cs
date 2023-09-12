using DataAccess.Models;

namespace DataAccess.Data;
public interface INewsData
{
    Task CreateNews(News newNews);
    Task<IEnumerable<News>> GetAllNews();
    Task<News?> GetNews(int id);
    Task UpdateNews(News user);
}