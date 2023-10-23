import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
const {store} = require('./app/store');
const {Provider} = require('react-redux')


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <Provider store={store}>  
    <App />
    </Provider>
 
);
reportWebVitals();
