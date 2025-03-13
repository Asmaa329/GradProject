using Microsoft.AspNetCore.Identity;
using System.Collections.Generic;
using GradProject.Models.Entities;


namespace GradProject.Models.Entities
{
    public class User : IdentityUser<int>
    {
        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
        public ICollection<UserVulnerability> UserVulnerabilities { get; set; }
    }
}