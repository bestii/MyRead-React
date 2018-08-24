import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRoute} from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <BrowserRoute>
        <App />
    </BrowserRoute>, 
    document.getElementById('root'));
registerServiceWorker();
