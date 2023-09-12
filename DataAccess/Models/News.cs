namespace DataAccess.Models;
public class News
{
    public int uID { get; set; }
    public string title { get; set; } = string.Empty;
    public string details { get; set; } = string.Empty;
    public string image { get; set; } = string.Empty;
    public DateTime date { get; set; }
}
