using Domain;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Persistence
{
    public class AppDbContext(DbContextOptions dbContextOptions): IdentityDbContext<User>(dbContextOptions)
    {
        public required DbSet<Activity> Activities { get; set; }
    }
}
