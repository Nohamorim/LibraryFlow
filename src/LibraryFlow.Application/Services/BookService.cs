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
                string nomeAutor = book.Author?.Name ?? "Autor desconhecido";
                bookDTOs.Add(new BookDTO
                {
                    Id = book.Id,
                    Title = book.Title,
                    ISBN = book.ISBN,
                    AuthorId = book.AuthorId,
                    AuthorName = nomeAutor,
                    PublicationYear = book.PublicationYear,
                    Price = book.Price,
                    StockQuantity = book.StockQuantity
                });
            }

            return bookDTOs;
        }

        public async Task<BookDTO?> GetById(int id)
        {
            var book = await _bookRepository.GetById(id);
            if (book == null) return null;

            string nomeAutor = book.Author?.Name ?? "Autor desconhecido";
            return new BookDTO
            {
                Id = book.Id,
                Title = book.Title,
                ISBN = book.ISBN,
                AuthorId = book.AuthorId,
                AuthorName = nomeAutor,
                PublicationYear = book.PublicationYear,
                Price = book.Price,
                StockQuantity = book.StockQuantity
            };
        }

        public async Task Add(Book book)
        {
            await _bookRepository.Add(book);
        }

        public async Task Update(Book book)
        {
            await _bookRepository.Update(book);
        }

        public async Task Delete(int id)
        {
            await _bookRepository.Delete(id);
        }
    }
}