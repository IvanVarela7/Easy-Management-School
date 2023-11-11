using Easy_Management_School.Datos;
using Easy_Management_School.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;

namespace Easy_Management_School.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsuariosController : ControllerBase
    {
        private readonly ILogger<UsuariosController> _logger;
        private readonly ApplicationDbContext _db;

        public UsuariosController(ILogger<UsuariosController> logger, ApplicationDbContext db)
        {
            _logger = logger;
            _db = db;
        }

        //obtener todos los usuarios
        [HttpGet]
        [Route("GetUsuarios")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        public ActionResult<IEnumerable<Usuario>> GetUsuarios()
        {
            _logger.LogInformation("Obtener todos los usuarios");
            return Ok(_db.Usuarios.ToList());
        }


    }
}
