import React from "react";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About Me</h2>
  
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img className={styles.aboutImage} src={getImageUrl("about/cursorIcon.png")} alt="cursor icon" />
            <div className={styles.aboutItemText}>
              
              <p className={styles.aboutItemPara}>
                I have worked in the tech industry for the past 12 years, most
                recently as a Senior Paralegal at a global IT services company
                headquartered in London. I also tutor Maths and Computer Science online to GCSE students, having studied Maths to a high level previously.
              </p>
              
              <p className={styles.aboutItemPara}>
                In 2021, I taught myself to code, and since then, I have used my
                coding skills to build applications that benefit the students I
                tutor. My real passion and professional focus is now frontend web
                development. 
              </p>
              <p className={styles.aboutItemPara}>
                I am looking for a role as a React Developer that
                will enable me to indulge in my love of ongoing learning, while building apps and sites to help your
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
