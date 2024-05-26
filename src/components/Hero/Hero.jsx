import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Natalie</h1>
        <p className={styles.description}>
          I'm a <span className={styles.emphasis}>UK-based</span> web developer with <span className={styles.emphasis}>2&nbsp;years</span> of experience using <span className={styles.emphasis}>React</span>, <span className={styles.emphasis}>JavaScript</span> & <span className={styles.emphasis}>Python</span>. I also tutor Computer&nbsp;Science & Maths online.
        </p>
        <p className={styles.description}>
          Drop me an email or a LinkedIn message if you'd like to get
          in touch.
        </p>
       
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
