using System;
using System.Collections.Generic;

namespace Project2.Models;

public partial class Prestamo
{
    public Guid Id { get; set; }

    public Guid? IdLibro { get; set; }

    public Guid? IdUsuario { get; set; }

    public Guid? IdAprobacion { get; set; }

    public string? Estado { get; set; }

    public DateTime FechaPrestamo { get; set; }

    public DateTime? FechaPevolucionPrevista { get; set; }

    public DateTime? FechaPevolucionPeal { get; set; }

    public DateTime? FechaCreacion { get; set; }

    public DateTime? FechaActualizacion { get; set; }

    public virtual Libro? IdLibroNavigation { get; set; }

    public virtual Usuario? IdUsuarioNavigation { get; set; }

    public virtual ICollection<Multa> Multa { get; set; } = new List<Multa>();
}
