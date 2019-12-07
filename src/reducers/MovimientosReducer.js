import { MOVIMIENTOS_RECIBIDOS, SET_PROPIEDAD_MOVIMIENTO, EDIT_MOVIMIENTO } from "../actions/types";

const INITIAL_STATE = {
  movimientos: undefined,
  movimiento: undefined
};

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case MOVIMIENTOS_RECIBIDOS:
      return {...state, movimientos: action.payload}
    case EDIT_MOVIMIENTO:
      return {...state, movimiento: action.payload}
    case SET_PROPIEDAD_MOVIMIENTO:
      let movimiento = {...state.movimiento}
      movimiento[action.payload.key] = action.payload.value;
      return {...state, movimiento}; 

    default:
      return {...state}
  }
}