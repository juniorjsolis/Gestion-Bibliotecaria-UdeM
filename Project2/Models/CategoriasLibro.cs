using System;
using System.Collections.Generic;

namespace Project2.Models;

public partial class CategoriasLibro
{
    public Guid Id { get; set; }

    public Guid? IdCategoria { get; set; }

    public Guid? IdLibro { get; set; }

    public DateTime? FechaCreacion { get; set; }

    public DateTime? FechaActualizacion { get; set; }

    public virtual Categoria? IdCategoriaNavigation { get; set; }

    public virtual Libro? IdLibroNavigation { get; set; }
}
