import React from 'react';
import './App.css';
import PostContainer from './components/postContainer';
import Teams from './components/Teams';
import Dashboard from './components/Dashboard';
import "./App.css";
//import NavMenu from "./components/NavMenu";
import Footer from "./components/Footer/Footer";
import Card from "./components/card";
import Header from "./components/header";
import NewNav from "./components/NewNav";
import TestComponent from "./components/testComponent"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div id="app">
      <Router>
        <NewNav/>
        
        
          <Routes>
            <Route path="/" element={
              <>  <Header/><Card/><PostContainer/>  </>
            }/>
            <Route path="/teams" element={<Teams />} />
            <Route path="/:id" element={<Dashboard />} />
          </Routes>
        
        <Footer />
      </Router>
    </div>
  );
}

export default App;