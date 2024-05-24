import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Natalie</h1>
        <p className={styles.description}>
          I'm a UK-based web developer with 2 years of experience using React, JavaScript and Python. I also tutor Computer Science at GCSE. Contact me if you'd like to learn more!
        </p>
        <a href="#" className={styles.contactBtn}>
        {/* <a href="mailto:myemail@email.com" className={styles.contactBtn}> */}
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};