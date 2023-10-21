using System;
using System.Collections.Generic;

namespace Project2.Models;

public partial class Libro
{
    public Guid Id { get; set; }

    public string Titulo { get; set; } = null!;

    public byte[]? Imagen { get; set; }

    public string? Editorial { get; set; }

    public int? AnioPublicacion { get; set; }

    public string? Descripcion { get; set; }

    public string? Ubicacion { get; set; }

    public DateTime? FechaCreacion { get; set; }

    public DateTime? FechaActualizacion { get; set; }

    public virtual ICollection<AutoresLibro> AutoresLibros { get; set; } = new List<AutoresLibro>();

    public virtual ICollection<CategoriasLibro> CategoriasLibros { get; set; } = new List<CategoriasLibro>();

    public virtual ICollection<SolicitudesLibro> SolicitudesLibros { get; set; } = new List<SolicitudesLibro>();
}
