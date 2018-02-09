import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Game } from './containers';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers';

ReactDOM.render(
  <Provider>
    <Game
      store={createStore(
        reducer,
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
          window.__REDUX_DEVTOOLS_EXTENSION__()
      )}
    />
  </Provider>,
  document.getElementById('root')
);
