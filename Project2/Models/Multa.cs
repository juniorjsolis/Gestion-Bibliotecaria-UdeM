using System;
using System.Collections.Generic;

namespace Project2.Models;

public partial class Multa
{
    public Guid Id { get; set; }

    public Guid? IdPrestamo { get; set; }

    public decimal Monto { get; set; }

    public DateTime? FechaGeneracion { get; set; }

    public string Estado { get; set; } = null!;

    public DateTime? FechaCreacion { get; set; }

    public DateTime? FechaActualizacion { get; set; }

    public virtual Prestamo? IdPrestamoNavigation { get; set; }
}
