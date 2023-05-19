import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProviderWrapper } from './context/auth.context';
import App from './App'

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <AuthProviderWrapper>
                <App />
            </AuthProviderWrapper>
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
);


