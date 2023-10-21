using System;
using System.Collections.Generic;

namespace Project2.Models;

public partial class Categoria
{
    public Guid Id { get; set; }

    public string Nombre { get; set; } = null!;

    public string? Descripcion { get; set; }

    public DateTime? FechaCreacion { get; set; }

    public DateTime? FechaActualizacion { get; set; }

    public virtual ICollection<CategoriasLibro> CategoriasLibros { get; set; } = new List<CategoriasLibro>();
}
