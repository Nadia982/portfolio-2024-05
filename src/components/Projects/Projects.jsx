import React, { useState, useEffect } from "react";
import styles from "./Projects.module.css";
import data from "../../data/projects.json";
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
  const [projects, setProjects] = useState(data);
  const [selectTab, setSelectTab] = useState("all");

  const technologies = [
    "JavaScript/ES6",
    "React",
    "APIs",
    "Styled components", 
    "Small business websites",
    "Educational websites"
  ];

  useEffect(() => {
    if (selectTab === "all") {
      setProjects(data);
    }
    for (const technology of technologies) {
      if (selectTab === technology) {
          const filteredData = data.filter((item) =>
            item.skills.includes(technology)
          );
          setProjects(filteredData);
        }
    }   
  }, [selectTab]);



  return (
    <section id="projects" className={styles.container}>
      <h2 className={styles.title}>Projects</h2>
    
<div className={styles.buttonContainer}>
<p className={styles.filterBySkill}>Filter projects<br/> by skill/type:</p>
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
