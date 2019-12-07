import React from 'react';
import Movimientos from "./views/Movimientos"
import { Provider } from "react-redux"
import { createStore, applyMiddleware } from 'redux'
import reducers from "./reducers"
import ReduxThunk from "redux-thunk"

const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));


function App() {
  return (
    <Provider store = {store}> 
      <Movimientos />
    </Provider>
  );
}

export default App;
