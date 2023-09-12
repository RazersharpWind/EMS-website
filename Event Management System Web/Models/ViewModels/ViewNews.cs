namespace Event_Management_System_Web.Models.ViewModels;

public class ViewNews
{
    public List<News> News { get; set; }
    public News newArticle {  get; set; }
    public ViewNews() 
    {
        this.News = new List<News>();
        this.newArticle = new News();
    }
}
