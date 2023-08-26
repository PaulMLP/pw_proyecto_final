export function obtenerFecha() {
  const fechaHoraActual = new Date();

  const fechaHoraFormateada = fechaHoraActual
    .toISOString()
    .slice(0, 19)
    .replace("T", " ");

  return fechaHoraFormateada;
}
