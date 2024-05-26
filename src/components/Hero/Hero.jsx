import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Natalie</h1>
        <p className={styles.description}>
          I'm a <span className={styles.emphasis}>UK-based</span> web developer with <span className={styles.emphasis}>2&nbsp;years</span> of experience using <span className={styles.emphasis}>React,</span>
          <span className={styles.emphasis}>JavaScript</span> and <span className={styles.emphasis}>Python</span>. I also provide online Computer&nbsp;Science and Maths tuitions
          to GCSE&nbsp;students.
        </p>
        <p className={styles.description}>
          Drop me an email or a LinkedIn message if you'd like to get
          in touch!
        </p>
        <a href="#" className={styles.contactBtn}>
          {/* <a href="mailto:myemail@email.com" className={styles.contactBtn}> */}
          Contact Me
        </a>
      </div>
      {/* <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      /> */}
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
