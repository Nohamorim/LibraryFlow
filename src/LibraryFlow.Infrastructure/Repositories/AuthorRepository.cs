using LibraryFlow.Domain.Entities;
using LibraryFlow.Domain.Interfaces;
using LibraryFlow.Infrastructure.Data;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace LibraryFlow.Infrastructure.Repositories
{
    public class AuthorRepository : IAuthorRepository
    {
        private readonly ApplicationDbContext _context;

        public AuthorRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<Author>> GetAll()
        {
            return await _context.Authors
            .ToListAsync();
        }

        public async Task<Author> GetById(int id)
        {   
            return await _context.Authors
            .Include(a => a.Books)
            .FirstOrDefaultAsync(a => a.Id == id);
        }

        public async Task Add(Author author)
        {
            _context.Authors.Add(author);
            await _context.SaveChangesAsync();
        }

        public async Task Update(Author author)
        {
            _context.Authors.Attach(author);
            _context.Entry(author).State = EntityState.Modified;
            await _context.SaveChangesAsync();
        }

        public async Task Delete(int id)
        {
            var authorToDelete = new Author { Id = id };
            _context.Entry(authorToDelete).State = EntityState.Deleted;
            await _context.SaveChangesAsync();
        }
    }
}