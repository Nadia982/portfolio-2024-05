import React, { useState, useEffect } from "react";
import styles from "./Projects.module.css";
import data from "../../data/projects.json";
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
  const [projects, setProjects] = useState(data);
  const [selectTab, setSelectTab] = useState("all");

  const technologies = [
    "CSS",
    "JavaScript/ES6",
    "React",
    // "TypeScript",
    "Styled components"
  ];

  useEffect(() => {
    if (selectTab === "all") {
      setProjects(data);
    }

    if (selectTab === "CSS") {
      const filteredData = data.filter((item) =>
        item.skills.includes("CSS")
      );
      setProjects(filteredData);
    }

    if (selectTab === "JavaScript/ES6") {
      const filteredData = data.filter((item) =>
        item.skills.includes("JavaScript/ES6")
      );
      setProjects(filteredData);
    }

    if (selectTab === "React") {
      const filteredData = data.filter((item) => item.skills.includes("React"));
      setProjects(filteredData);
    }

    if (selectTab === "Styled components") {
      const filteredData = data.filter((item) => item.skills.includes("Styled components"));
      setProjects(filteredData);
    }

    // if (selectTab === "TypeScript") {
    //   const filteredData = data.filter((item) =>
    //     item.skills.includes("TypeScript")
    //   );
    //   setProjects(filteredData);
    // }
  }, [selectTab]);



  return (
    <section id="projects" className={styles.container}>
      <h2 className={styles.title}>Projects</h2>
    
<div className={styles.buttonContainer}>
<p className={styles.filterBySkill}>Filter projects<br/> by skill:</p>
      {/* <button className={`${styles.filterButton} ${selectTab && styles.selected}`} onClick={() => setSelectTab("all")}>All</button> */}
      <button className={`${styles.filterButton}`} onClick={() => setSelectTab("all")}>All</button>

      {technologies.map((technology, id) => (
      <button className={styles.filterButton} key={id} onClick={() => setSelectTab(technology)}>
         {technology}
        </button>
      ))}
</div>
      
      <div className={styles.projects}>
        {projects.map((project, id) => {
          return <ProjectCard key={id} project={project} />;
        })}
      </div>
    </section>
  );
};
