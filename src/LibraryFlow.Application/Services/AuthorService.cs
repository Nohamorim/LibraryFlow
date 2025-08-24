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
    }
}