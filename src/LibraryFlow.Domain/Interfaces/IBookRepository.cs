using LibraryFlow.Domain.Entities;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace LibraryFlow.Domain.Interfaces
{
    public interface IBookRepository
    {
        Task<IEnumerable<Book>> GetAll();
        Task<Book> GetById(int id);
        Task Add(Book book);
        Task Update(Book book);
        Task Delete(int id);
    }
}