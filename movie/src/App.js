import React from 'react';
import logo from './logo.svg';
import './App.css';
import Routes from './Component/routes';
import { Router } from 'react-router-dom';
import Navbar from './Component/navbar'
import Footer from './Component/footer'

function App() {
  return (
    <div className="App">
      <Router>
        <Provider>
          <Navbar/>
          <Routes/>
          <Footer/>
        </Provider>
      </Router>
      
    </div>
  );
}

export default App;
