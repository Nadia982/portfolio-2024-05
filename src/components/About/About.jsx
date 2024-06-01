import React from "react";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About Me</h2>
      {/* <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        /> */}
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="cursor icon" />
            <div className={styles.aboutItemText}>
              
              <p className={styles.aboutItemPara}>
                I have worked in the tech industry for the past 12 years, most
                recently as a Senior Paralegal at a global IT services company
                headquartered in London.
              </p>
              
              <p className={styles.aboutItemPara}>
                In 2021, I taught myself to code, and since then, I have used my
                coding skills to build applications that benefit the students I
                teach Maths and Computer Science to in my spare time.
              </p>
              <p className={styles.aboutItemPara}>
                My real passion and professional focus is now frontend web
                development. I am looking for a role as a React Developer that
                will enable me to learn as much as possible about new and
                existing technologies while building apps and sites to help your
                business flourish. I enjoy collaborating with and learning from
                others while sharing my knowledge and contributing to a team.
              </p>
            </div>
          </li>
        </ul>
      {/* </div> */}
    </section>
  );
};
