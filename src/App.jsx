import styles from "./App.module.css";
import {Hero} from "./components/Hero/Hero.jsx";
import {About} from "./components/About/About.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import React from "react";
import Projects from "./components/Projects/Projects.jsx";

function App() {
  
  return (
    <div className={styles.App}>
     <Navbar/>
     <Hero/>
     <Projects/>
     <About/>
    </div>
  )
}

export default App
