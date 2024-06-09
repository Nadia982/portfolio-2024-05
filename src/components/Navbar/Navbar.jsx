import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <nav className={styles.navbar}>
        <a className={styles.contactBtn} href="https://www.linkedin.com/in/natalie-g-b947331a/">
          {/* <a href="mailto:myemail@email.com" className={styles.contactBtn}> */}
          Contact Me
        </a>
        <div className={styles.menu}>
          
          <ul
            className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
            onClick={() => setMenuOpen(false)}
          >
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#experience">Experience</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>

            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
        <img
          tabIndex="0"
            className={styles.menuBtn}
            src={
              menuOpen
                ? getImageUrl("nav/closeIcon.png")
                : getImageUrl("nav/menuIcon.png")
            }
            alt="menu icon"
            onClick={() => setMenuOpen(!menuOpen)}
            // onKeyDown={() => setMenuOpen(!menuOpen)}
            onKeyDown={(e) => ( 
              e.key === "Enter" ? setMenuOpen(!menuOpen) : null,
              e.key === "Escape" ? setMenuOpen(false) : null
            )}
            
          />
      </nav>
    </>
  );
};

export default Navbar;
