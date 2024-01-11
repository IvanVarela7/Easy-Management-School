using Easy_Management_School.Datos;
using Easy_Management_School.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace Easy_Management_School.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    
    public class AutenticacionController : ControllerBase
    {

        private readonly ILogger<AutenticacionController> logger;
        private readonly ApplicationDbContext _db;
        private readonly string secretKey;


        public AutenticacionController(ILogger<AutenticacionController> logger, ApplicationDbContext db, IConfiguration config)
        {
            logger = logger;
            _db = db;
            secretKey = config.GetSection("settings").GetSection("secretkey").ToString();
        }

        [HttpPost]
        [Route("Validar")]
        public IActionResult Autenticar([FromBody] Usuario request)
        {
            // Buscar el usuario en la base de datos por nombre de usuario y contraseña
            var usuario = _db.Usuarios.FirstOrDefault(u =>
                u.Nombre_usuario == request.Nombre_usuario &&
                u.Contrasenia_usuario == request.Contrasenia_usuario);

            if (usuario != null)
            {
                // Usuario autenticado correctamente

                var keyBytes = Encoding.ASCII.GetBytes(secretKey);
                var claims = new ClaimsIdentity();

                claims.AddClaim(new Claim(ClaimTypes.NameIdentifier, request.Nombre_usuario));

                var tokenDescriptor = new SecurityTokenDescriptor
                {
                    Subject = claims,
                    Expires = DateTime.UtcNow.AddMinutes(5),
                    SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(keyBytes), SecurityAlgorithms.HmacSha256Signature)

                };

                var tokenHandler = new JwtSecurityTokenHandler();
                var tokenConfig = tokenHandler.CreateToken(tokenDescriptor);

                string tokenCreado = tokenHandler.WriteToken(tokenConfig);

                return StatusCode(StatusCodes.Status200OK, new { token = tokenCreado });

            }
            else
            {
                // Usuario no encontrado o credenciales incorrectas
                return StatusCode(StatusCodes.Status401Unauthorized, new { token = "" });
            }

        }

    }
}
