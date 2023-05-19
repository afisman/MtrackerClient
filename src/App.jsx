import React, { Component } from 'react';
import axios from 'axios';
import "semantic-ui-css/semantic.min.css";
// import "./App.css";
import Home from "./components/pages/Home";
// import Add from "./component/layout/Add";
// import SignUp from "./component/pages/SignUp";
// import LogIn from "./component/pages/LogIn";
import TestUserData from "./dataset/TestUserData";
// import getStartDate from "./component/layout/CoreAlgorithm";
import Navigation from "./components/layout/Navbar";
// import Help from "./component/pages/Help";

function App() {
    return (
        <div className='App'>
            <Navigation />
            <Home />
        </div>
    )
}



export default App;