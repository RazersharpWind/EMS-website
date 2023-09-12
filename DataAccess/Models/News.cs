namespace DataAccess.Models;
public class News
{
    public int uID { get; set; }
    public string article_title { get; set; } = string.Empty;
    public string article_details { get; set; } = string.Empty;
    public string article_image { get; set; } = string.Empty;
    public DateTime article_date { get; set; }
}
