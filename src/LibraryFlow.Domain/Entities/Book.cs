using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LibraryFlow.Domain.Entities
{
    public class Book
    {
        public int Id { get; set; }
        public required string Title { get; set; }
        public int AuthorId { get; set; }
        public Author? Author { get; set; }
        public required string ISBN { get; set; }
        public int PublicationYear { get; set; }
        public decimal Price { get; set; }
        public int StockQuantity { get; set; }
    }
}