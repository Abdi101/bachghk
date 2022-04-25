import React from 'react';
import './App.css';
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
    </div>
  );
}

export default App;