import React from 'react';
import './App.css';
import PostContainer from './components/postContainer';
import Teams from './components/Teams';
import Dashboard from './components/Dashboard';
import Posts from './components/Posts';
import "./App.css";
//import NavMenu from "./components/NavMenu";
import Footer from "./components/Footer/Footer";
import Card from "./components/card";
import Sponsor from "./components/Sponsor";
import Header from "./components/header";
import NewNav from "./components/NewNav";
import TestComponent from "./components/testComponent"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
var dayjs = require('dayjs');

function App() {
  return (
    <div id="app">
      <Router>
        <main>
        <NewNav/>        
          <Routes>
            <Route path="/" element={
              <> <Header/> <Card/> <PostContainer/>  <Sponsor/> </>
            }/>
            <Route path="/lag" element={<Teams />} />
            <Route path="/posts/:id" element={<Posts />} />
            <Route path="/:id" element={<Dashboard />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;