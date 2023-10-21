using System;
using System.Collections.Generic;

namespace Project2.Models;

public partial class Usuario
{
    public Guid Id { get; set; }

    public Guid? IdRol { get; set; }

    public string Nombre { get; set; } = null!;

    public string Apellido { get; set; } = null!;

    public string? Telefono { get; set; }

    public string Correo { get; set; } = null!;

    public string Contrasena { get; set; } = null!;

    public DateTime? FechaCreacion { get; set; }

    public DateTime? FechaActualizacion { get; set; }

    public virtual Role? IdRolNavigation { get; set; }

    public virtual ICollection<SolicitudesLibro> SolicitudesLibros { get; set; } = new List<SolicitudesLibro>();
}
