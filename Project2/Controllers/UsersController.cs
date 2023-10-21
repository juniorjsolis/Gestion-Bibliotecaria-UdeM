using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

using Microsoft.Extensions.Logging;
using Project2.Helpers;
using Project2.Models;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;

namespace Project2.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly ILogger<UsersController> _logger;
        private readonly BibliotecaContext _context;

        public UsersController(ILogger<UsersController> logger, BibliotecaContext context)
        {
            _logger = logger;
            _context = context;
        }

        [HttpGet("GetUsers")]
        public IActionResult GetUsers()
        {
            List<Usuario> usuarios = _context.Usuarios.ToList();
            return Ok(usuarios);
        }

        [HttpPost("Login")]
        public async Task<IActionResult> Login([FromBody] LoginRequest request)
        {
            Usuario usuarioEncontrado = _context.Usuarios.FirstOrDefault(u => u.Correo == request.correo);

            if (usuarioEncontrado == null || !PasswordHelper.VerifyPassword(request.contrasena, usuarioEncontrado.Contrasena))
             {
                 return Unauthorized("Usuario o contraseña incorrectos");
             }

             var claims = new[]
             {
                 new Claim(JwtRegisteredClaimNames.Sub, usuarioEncontrado.Correo),
                 new Claim(JwtRegisteredClaimNames.Jti, System.Guid.NewGuid().ToString())
             };

             var claimsIdentity = new ClaimsIdentity(claims, CookieAuthenticationDefaults.AuthenticationScheme);

             var authProperties = new AuthenticationProperties
             {
                 ExpiresUtc = System.DateTimeOffset.UtcNow.AddMinutes(10),
                 IsPersistent = false,
                 AllowRefresh = false
             };

             await HttpContext.SignInAsync(CookieAuthenticationDefaults.AuthenticationScheme, new ClaimsPrincipal(claimsIdentity), authProperties);
            
            return Ok("Usuario autenticado");
        }

        [HttpPost("Register")]
        public IActionResult Register([FromBody] Usuario usuario)
        {
            Usuario usuarioEncontrado = _context.Usuarios.FirstOrDefault(u => u.Correo == usuario.Correo);

            if (usuarioEncontrado != null)
            {
                return Conflict("Usuario ha sido eliminado");
            }

           usuario.Contrasena = PasswordHelper.EncryptPassword(usuario.Contrasena);

            _context.Usuarios.Add(usuario);
            _context.SaveChanges();

            return Created("api/Users/Register", "Usuario creado");
        }

        [HttpGet("Logout")]
        public async Task<IActionResult> Logout()
        {
            await HttpContext.SignOutAsync();
            return Ok("Usuario desautenticado");
        }

        [HttpGet("GetUser")]
        public IActionResult GetUser()
        {
            var user = HttpContext.User;
            if (user != null && user.Identity.IsAuthenticated)
            {
                return Ok(user.Identity.Name);
            }
            return Unauthorized("Usuario no autenticado");
        }
    }
}
