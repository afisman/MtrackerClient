import React from 'react';
import "semantic-ui-css/semantic.min.css";
import "./App.css";

import Navigation from "./components/layout/Navbar";
import AppRoutes from './components/routes/AppRoutes';
import UserMessage from './components/layout/UserMessage';

function App() {
    return (
        <div className='App'>
            <Navigation />
            <AppRoutes />
            <UserMessage />
        </div>
    )
}



export default App;