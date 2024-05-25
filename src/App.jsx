import styles from "./App.module.css";
import {Hero} from "./components/Hero/Hero.jsx";
import {About} from "./components/About/About.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import React from "react";

function App() {
  
  return (
    <div className={styles.App}>
     <Navbar/>
     <Hero/>
     <About/>
    </div>
  )
}

export default App
