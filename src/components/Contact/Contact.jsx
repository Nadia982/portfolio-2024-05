import React from "react";
import ScrollToTop from "react-scroll-to-top";
import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.innerContainer}>
        <h2 className={styles.title}>Contact</h2>
        <div className={styles.content}>
          <div className={styles.text}>
            <p>
              The best way to contact me is by sending me a message on LinkedIn.
            </p>
            <p>Feel free to send me a connection request!</p>
          </div>
          <ul className={styles.links}>
            <li className={styles.link}>
              <a href="https://www.linkedin.com/in/natalie-g-b947331a/">
                <img
                  src={getImageUrl("contact/linkedinIcon.png")}
                  alt="LinkedIn icon"
                />
              </a>
              <a
                className={styles.textLink}
                href="https://www.linkedin.com/in/natalie-g-b947331a/"
              >
                https://www.linkedin.com/in/natalie-g-b947331a/
              </a>
            </li>

            <li className={styles.link}>
              <a href="https://github.com/nadia982">
                <img
                  src={getImageUrl("contact/githubIcon.png")}
                  alt="gitHub icon"
                />
              </a>
              <a className={styles.textLink} href="https://github.com/nadia982">
                https://github.com/nadia982
              </a>
            </li>
          </ul>
        </div>
      </div>
      <ScrollToTop smooth className={styles.scrollToTop} />
    </footer>
  );
};
