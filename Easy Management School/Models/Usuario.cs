using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace Easy_Management_School.Models
{
    public class Usuario
    {
        [Key]
        public int Usuario_id { get; set; }
        public string? Nombre_usuario { get; set; }
        public string? Contrasenia_usuario { get; set; }
        public DateTime Fecha_registro_usuario { get; set; }
        public string? Estado_cuenta_usuario { get; set; }
        public int? Dni_id { get; set; }

        [ForeignKey("Dni_id")]
        public Persona? Persona { get; set; }
    }
}
