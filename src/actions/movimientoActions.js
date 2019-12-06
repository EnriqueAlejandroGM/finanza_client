import MovimientosService from "../services/MovimientosService";
import { MOVIMIENTOS_RECIBIDOS } from "./types";

export const getMovimientos = (
  idUsuario,
  fecha_inicio,
  fecha_fin
) => dispatch => {
  MovimientosService.getMovimientos(
    idUsuario,
    fecha_inicio,
    fecha_fin
  ).then(res => {
    const movimientos = res.data.movimientos;
    dispatch({ type: MOVIMIENTOS_RECIBIDOS, payload: movimientos })
  }).catch(error => {
    console.log(error.response);
  });
};
