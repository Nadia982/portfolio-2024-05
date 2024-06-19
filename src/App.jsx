import styles from "./App.module.css";
import {Hero} from "./components/Hero/Hero.jsx";
import {About} from "./components/About/About.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import React from "react";
import {Projects} from "./components/Projects/Projects.jsx";
import { Experience } from "./components/Experience/Experience.jsx";
import { Contact } from "./components/Contact/Contact.jsx";

function App() {
  
  return (
    <div className={styles.App}>
      <div className={styles.outerContainer}>
     <Navbar/>
     <Hero/>
     <Projects/>
     <Experience/>
     <About/>
     <Contact/>
    </div>
    </div>
  )
}

export default App
