import styles from "./App.module.css";
import {Hero} from "./components/Hero/Hero.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import React from "react";

function App() {
  
  return (
    <div className={styles.App}>
     <Navbar/>
     <Hero/>
    </div>
  )
}

export default App
