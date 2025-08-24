using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using LibraryFlow.Domain.Interfaces;

namespace LibraryFlow.Application.Services
{
    public class AuthorService
    {
        private readonly IAuthorRepository _authorRepository;

        public AuthorService(IAuthorRepository authorRepository)
        {
            _authorRepository = authorRepository;
        }

        public async Task<IEnumerable<AuthorDTO>> GetAll()
        {
            var authors = await _authorRepository.GetAll();
            var authorDTOs = new List<AuthorDTO>();

            foreach (var author in authors)
            {
                authorDTOs.Add(new AuthorDTO
                {
                    Id = author.Id,
                    Name = author.Name
                });
            }
            return authorDTOs;
        }
        public async Task<AuthorDTO> GetById(int id)
        {
            var author = await _authorRepository.GetById(id);
            if (author == null) return null;

            return new AuthorDTO
            {
                Id = author.Id,
                Name = author.Name
            };
        }
        public async Task Add(Author author)
        {
            await _authorRepository.Add(author);
        }

        public async Task Update(Author author)
        {
            await _authorRepository.Update(author);
        }

        public async Task Delete(int id)
        {
            await _authorRepository.Delete(id);
        }
    }
}