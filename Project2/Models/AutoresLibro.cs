using System;
using System.Collections.Generic;

namespace Project2.Models;

public partial class AutoresLibro
{
    public Guid Id { get; set; }

    public Guid? IdAutor { get; set; }

    public Guid? IdLibro { get; set; }

    public DateTime? FechaCreacion { get; set; }

    public DateTime? FechaActualizacion { get; set; }

    public virtual Autore? IdAutorNavigation { get; set; }

    public virtual Libro? IdLibroNavigation { get; set; }
}
