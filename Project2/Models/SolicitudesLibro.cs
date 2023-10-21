using System;
using System.Collections.Generic;

namespace Project2.Models;

public partial class SolicitudesLibro
{
    public Guid Id { get; set; }

    public Guid? IdLibro { get; set; }

    public Guid? IdUsuario { get; set; }

    public DateTime? FechaCreacion { get; set; }

    public DateTime? FechaActualizacion { get; set; }

    public virtual Libro? IdLibroNavigation { get; set; }

    public virtual Usuario? IdUsuarioNavigation { get; set; }
}
