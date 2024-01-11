using Easy_Management_School.Datos;
using Easy_Management_School.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;

namespace Easy_Management_School.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class UsuariosController : ControllerBase
    {
        private readonly ILogger<UsuariosController> _logger;
        private readonly ApplicationDbContext _db;

        public UsuariosController(ILogger<UsuariosController> logger, ApplicationDbContext db)
        {
            _logger = logger;
            _db = db;
        }

        // Obtener todos los usuarios
        [HttpGet]
        [Route("GetUsuarios")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        public ActionResult<IEnumerable<Usuario>> GetUsuarios()
        {
            _logger.LogInformation("Obtener todos los usuarios");
            return Ok(_db.Usuarios.ToList());
        }


        // Iniciar Sesion
        [HttpGet]
        [Route("IniciarSesion/{nombreUsuario}/{contraseniaUsuario}")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        public ActionResult<List<Usuario>> IniciarSesion(string nombreUsuario, string contraseniaUsuario)
        {
            var usuarios = _db.Usuarios.Where(usuarios => usuarios.Nombre_usuario.Equals(nombreUsuario) && usuarios.Contrasenia_usuario.Equals(contraseniaUsuario)).ToList();

            if (usuarios == null)
            {
                return NotFound();
            }

            return usuarios;

        }


    }
}
