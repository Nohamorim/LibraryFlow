using LibraryFlow.Application.DTOs;
using LibraryFlow.Domain.Entities;
using LibraryFlow.Domain.Interfaces;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace LibraryFlow.Application.Services
{
    public class BookService
    {
        private readonly IBookRepository _bookRepository;

        public BookService(IBookRepository bookRepository)
        {
            _bookRepository = bookRepository;
        }

        public async Task<IEnumerable<BookDTO>> GetAll()
        {
            var books = await _bookRepository.GetAll();
            var bookDTOs = new List<BookDTO>();

            foreach (var book in books)
            {
                bookDTOs.Add(new BookDTO
                {
                    Id = book.Id,
                    Title = book.Title,
                    ISBN = book.ISBN,
                    AuthorId = book.AuthorId,
                    AuthorName = book.Author.Name,
                    PublicationYear = book.PublicationYear,
                    Price = book.Price,
                    StockQuantity = book.StockQuantity
                });
            }

            return bookDTOs;
        }

        // Implementar outros métodos (GetById, Add, Update, Delete)
    }
}