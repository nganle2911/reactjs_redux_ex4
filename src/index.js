import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import { shoesShopReducer } from './ShoesShop_Redux/redux/reducer';
import { Provider } from 'react-redux';


const root = ReactDOM.createRoot(document.getElementById('root'));

// Redux
let store = createStore(shoesShopReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
