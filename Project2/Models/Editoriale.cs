using System;
using System.Collections.Generic;

namespace Project2.Models;

public partial class Editoriale
{
    public Guid Id { get; set; }

    public string Nombre { get; set; } = null!;

    public string? Direccion { get; set; }

    public string? Telefono { get; set; }

    public string? SitioWeb { get; set; }

    public DateTime? FechaCreacion { get; set; }

    public DateTime? FechaActualizacion { get; set; }
}
