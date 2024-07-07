import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AxioProvider } from './AxiosContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <AxioProvider>
        <App />
    </AxioProvider>
);
