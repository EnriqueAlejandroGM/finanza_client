import api from "./api";
const route ="/movimientos"

export default {
  getMovimientos: (idUsuario, fecha_inicio, fecha_fin) => api.get(`${route}/${idUsuario}?fechaInicio=${fecha_inicio}&fechaFin=${fecha_fin}`)
}