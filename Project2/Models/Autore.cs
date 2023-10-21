using System;
using System.Collections.Generic;

namespace Project2.Models;

public partial class Autore
{
    public Guid Id { get; set; }

    public string Nombre { get; set; } = null!;

    public string? Nacionalidad { get; set; }

    public DateTime? FechaNacimiento { get; set; }

    public string Biografia { get; set; } = null!;

    public DateTime? FechaCreacion { get; set; }

    public DateTime? FechaActualizacion { get; set; }

    public virtual ICollection<AutoresLibro> AutoresLibros { get; set; } = new List<AutoresLibro>();
}
