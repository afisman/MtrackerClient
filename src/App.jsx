import React, { Component } from 'react';
import "semantic-ui-css/semantic.min.css";
import "./App.css";

import Navigation from "./components/layout/Navbar";
import AppRoutes from './components/routes/AppRoutes';

function App() {
    return (
        <div className='App'>
            <Navigation />
            <AppRoutes />
        </div>
    )
}



export default App;