import React from 'react';
import './App.css';
import PostContainer from './components/postContainer';
import Teams from './components/Teams';
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
        <NewNav /> 
        <Header/>
        <Card/>
          <Routes>
            <Route path="/teams" element={<Teams />} />
          </Routes>
        <PostContainer/>
        <Footer />
      </Router>
    </div>
  );
}

export default App;