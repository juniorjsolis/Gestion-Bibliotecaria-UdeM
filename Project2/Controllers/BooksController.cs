using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Project2.Models;

namespace Project2.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BooksController : ControllerBase
    {
        private readonly ILogger<BooksController> _logger;
        private readonly BibliotecaContext _context;

        public BooksController(ILogger<BooksController> logger, BibliotecaContext context)
        {
            _logger = logger;
            _context = context;
        }

        [HttpGet("GetBooks")]
        public IActionResult GetBooks()
        {
            List<Libro> libros = _context.Libros.ToList();
            return Ok(libros);
        }

       [HttpGet("GetBookById")]
        public IActionResult GetBookById([FromQuery]Guid id)
        {
            if (id == Guid.Empty)
            {
                return BadRequest("El ID del libro no puede estar vacío.");
            }

            Libro libro = _context.Libros.FirstOrDefault(l => l.Id == id);

            if (libro == null)
            {
                return NotFound("Libro no encontrado.");
            }

            var booksWithCategories = from book in _context.Libros
                                      join bookCategory in _context.CategoriasLibros on book.Id equals bookCategory.IdLibro
                                      join category in _context.Categorias on bookCategory.IdCategoria equals category.Id
                                      where book.Id == id
                                      select new
                                      {
                                          category
                                      };

            return Ok(new { libro, categorias = booksWithCategories.ToList() });
        }

        [HttpGet("GetBookByName")]
        public IActionResult GetBookByName([FromQuery] string name)
        {
            if (string.IsNullOrEmpty(name))
            {
                return BadRequest("El nombre del libro no puede estar vacío.");
            }

            Libro libro = _context.Libros.FirstOrDefault(l => l.Titulo == name);
                           
            if (libro == null)
            {
                return NotFound("Libro no encontrado.");
            }

            var booksWithCategories = from book in _context.Libros
                                      join bookCategory in _context.CategoriasLibros on book.Id equals bookCategory.IdLibro
                                      join category in _context.Categorias on bookCategory.IdCategoria equals category.Id
                                      where book.Id == libro.Id
                                      select new
                                      {
                                          category
                                      };

            return Ok(new {libro, Categorias = booksWithCategories.ToList() });
        }
    
        [HttpGet("FindBooksByName")]
        public IActionResult FindBooksByName([FromQuery] string name){
            if (string.IsNullOrEmpty(name))
            {
                return BadRequest("El nombre del libro no puede estar vacío.");
            }

            List<Libro> librosEncontrados = _context.Libros
                .Where(l => l.Titulo.Contains(name))
                .ToList();

            if (librosEncontrados.Count == 0)
            {
                return NotFound("Libro no encontrado.");
            }

            return Ok(librosEncontrados);
        }

        [HttpPost("CreateBook")]
        public IActionResult CreateBook([FromBody] Libro libro)
        {

            Console.WriteLine("save image");
            _context.Libros.Add(libro);
            _context.SaveChanges();

            
            return Ok();
        }
    }
}
