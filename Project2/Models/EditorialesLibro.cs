using System;
using System.Collections.Generic;

namespace Project2.Models;

public partial class EditorialesLibro
{
    public Guid? IdEditorial { get; set; }

    public Guid? IdLibro { get; set; }

    public DateTime? FechaCreacion { get; set; }

    public DateTime? FechaActualizacion { get; set; }

    public virtual Editoriale? IdEditorialNavigation { get; set; }

    public virtual Libro? IdLibroNavigation { get; set; }
}
