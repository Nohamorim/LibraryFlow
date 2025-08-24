using LibraryFlow.Domain.Entities;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace LibraryFlow.Domain.Interfaces
{
    public interface IUserRepository
    {
        Task<IEnumerable<User>> GetAll();
        Task<User> GetById(int id);
        Task Add(User user);
        Task Update(User user);
        Task Delete(int id);
    }
}