using Easy_Management_School.Models;
using Microsoft.EntityFrameworkCore;

namespace Easy_Management_School.Datos
{
    public class ApplicationDbContext: DbContext
    {

        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options): base (options) 
        { 
        }

        public DbSet<Usuario> Usuarios { get; set; }
        public DbSet<Persona> Personas { get; set; }


    }
}
