import React from "react";
import styles from "./ProjectCard.module.css";
import { getImageUrl } from "../../utils";

export const ProjectCard = ({
  project: { title, imgUrl, description, skills, siteUrl, gitHub, alt },
}) => {
  return (
    <div className={styles.container}>
      <img src={getImageUrl(imgUrl)} alt={alt} className={styles.image}/>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <ul className={styles.skills}>
        {skills.map((skill, id) => {
          <li className={styles.skill} key={id}>{skill}</li>;
          1;
        })}
      </ul>
      <div className={styles.links}>
        <a href={siteUrl} className={styles.link}>Live</a>
        <a href={gitHub} className={styles.link}>Code</a>
      </div>
    </div>
  );
};
