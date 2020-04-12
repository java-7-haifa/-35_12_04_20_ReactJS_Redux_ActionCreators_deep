import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import { counterReducer } from './redux/counterReducer';

const store = createStore(counterReducer);

ReactDOM.render(<Provider store={store}><App /></Provider>,
  document.getElementById('root')
);
