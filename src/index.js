import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProviderWrapper } from './context/auth.context';
import App from './App'
import { MessageProviderWrapper } from './context/message.context';

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <AuthProviderWrapper>
                <MessageProviderWrapper>
                    <App />
                </MessageProviderWrapper>
            </AuthProviderWrapper>
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
);


