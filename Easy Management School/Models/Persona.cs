using System.ComponentModel.DataAnnotations;

namespace Easy_Management_School.Models
{
    public class Persona
    {
        [Key]
        public int Dni_id { get; set; }
        public string? Nombre { get; set; }
        public string? Apellido { get; set; }
        public string? Cuil { get; set; }
        public DateTime Fecha_nacimiento { get; set; }
        public string? Genero { get; set; }
        public string? Calle { get; set; }
        public string? Numero { get; set; }
        public string? Mzna { get; set; }
        public string? Lote { get; set; }
        public string? Piso { get; set; }
        public string? Departamento { get; set; }
        public string? Barrio { get; set; }
        public string? Localidad { get; set; }
        public string? Provincia { get; set; }
        public string? telefono { get; set; }
        public string? Email { get; set; }
    }
}
