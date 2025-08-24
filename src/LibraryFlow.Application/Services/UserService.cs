using LibraryFlow.Application.DTOs;
using LibraryFlow.Domain.Interfaces;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace LibraryFlow.Application.Services
{
    public class UserService
    {
        private readonly IUserRepository _userRepository;

        public UserService(IUserRepository userRepository)
        {
            _userRepository = userRepository;
        }

        public async Task<IEnumerable<UserDTO>> GetAll()
        {
            var users = await _userRepository.GetAll();
            var userDTOs = new List<UserDTO>();

            foreach (var user in users)
            {
                userDTOs.Add(new UserDTO
                {
                    Id = user.Id,
                    Username = user.Username,
                    Email = user.Email
                });
            }

            return userDTOs;
        }

        public async Task<UserDTO> GetById(int id)
        {
            var user = await _userRepository.GetById(id);
            if (user == null) return null;

            return new UserDTO
            {
                Id = user.Id,
                Username = user.Username,
                Email = user.Email
            };
        }

        public async Task Add(UserDTO user)
        {
            await _userRepository.Add(user);
        }

        public async Task Update(UserDTO user)
        {
            await _userRepository.Update(user);
        }

        public async Task Delete(int id)
        {
            await _userRepository.Delete(id);
        }
    }
}