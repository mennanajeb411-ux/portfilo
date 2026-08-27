
import logo from './logo.svg';
import './first-section/App.css';
import Header from './first-section/Header';
import React from 'react'; 
import Me from './first-section/me'
import './all.css'
import Skills from './Skills-section/Skills';
import { BrowserRouter as Router , Routes , Route } from "react-router-dom";
import './Skills-section/skills.css'
import Projects from './projects-section/projects';
import './projects-section/projects.css'
import First from './projects-section/1st';
import Contact from './contact';
import Second from './projects-section/2s';

function App() {
  return (
      <div className="App">

        <Header />

        <div id="home">
          <Me />
        </div>

        <div id="skills">
          <Skills />
        </div>

        <div id="projects">
          <Projects />
        </div>

    

      </div>
  );
}

export default App;