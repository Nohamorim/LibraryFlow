namespace LibraryFlow.Application.DTOs
{
    public class BookDTO
    {
        public int Id { get; set; }
        public required string Title { get; set; }
        public required string ISBN { get; set; }
        public required int AuthorId { get; set; }
        public required string AuthorName { get; set; }
        public required int PublicationYear { get; set; }
        public required decimal Price { get; set; }
        public required int StockQuantity { get; set; }
    }
}