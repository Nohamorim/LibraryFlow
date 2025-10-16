using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LibraryFlow.Application.DTOs
{
    public class UserDTO
    {
        public int Id { get; set; }
        public required string Username { get; set; }
        public required string Email { get; set; }
    }
}