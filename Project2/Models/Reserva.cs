using System;
using System.Collections.Generic;

namespace Project2.Models;

public partial class Reserva
{
    public Guid Id { get; set; }

    public Guid IdLibro { get; set; }

    public Guid IdUsuario { get; set; }

    public DateTime? FechaReserva { get; set; }

    public string? Estado { get; set; }

    public DateTime? FechaCreacion { get; set; }

    public DateTime? FechaActualizacion { get; set; }

    public virtual Libro IdLibroNavigation { get; set; } = null!;

    public virtual Usuario IdUsuarioNavigation { get; set; } = null!;
}
