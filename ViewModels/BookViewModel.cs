namespace SpstLibrary_Admin.ViewModels;

public class BookViewModel
{
    public string Id { get; set; }
    public string Name { get; set; }
    public string AuthorId { get; set; }
    public string AuthorName { get; set; }
    public string CategoryId { get; set; }
    public string CategoryName { get; set; }
    public int? Year { get; set; }
    public bool IsAvailable { get; set; }
}