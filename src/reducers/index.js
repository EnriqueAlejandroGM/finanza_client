import { combineReducers } from 'redux';
import MovimientosReducer from "./MovimientosReducer";

export default combineReducers({
  movimientos: MovimientosReducer
});