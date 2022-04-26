import React from 'react';
import './App.css';
<<<<<<< HEAD
import Teams from './components/Teams';


function App() {
  return (
    <div className='App'>
      <Teams />
=======
import PostContainer from './components/postContainer';
import "./App.css";
import NavMenu from "./components/NavMenu";
import Footer from "./components/Footer/Footer";
import Card from "./components/card";
import Header from "./components/header";
import TestComponent from "./components/testComponent"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <NavMenu />
        <div className="App">
          <Routes>
            <Route path="/" /*element={<Home />}*/ />
          </Routes>
        </div>
        <Header/>  
        <Card/>
        <PostContainer/>
        <Footer />
      </Router>
>>>>>>> 5af74034fc84bed9f15693c1cb2e474d7ed94cd2
    </div>
  );
}

export default App;