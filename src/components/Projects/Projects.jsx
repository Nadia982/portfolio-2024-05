import React, { useState, useEffect } from "react";
import data from "../../../assets/data/portfolioData.js";
import styles from "./Projects.module.css";
// import Modal from "../UI/Modal";

const Projects = () => {
  const [nextItems, setNextItems] = useState(6);
  const [projects, setProjects] = useState(data);
  const [selectTab, setSelectTab] = useState("all");
  const [showModal, setShowModal] = useState(false);
  const [activeID, setActiveID] = useState(null);

  const loadMoreHandler = () => {
    setNextItems((prev) => prev + 3);
  };

  const showModalHandler = (id) => {
    setShowModal(true);
    setActiveID(id);
  };

  useEffect(() => {
    if (selectTab === "all") {
      setProjects(data);
    }

    if (selectTab === "javascript") {
      const filteredData = data.filter((item) =>
        item.category.includes("javascript")
      );
      setProjects(filteredData);
    }

    if (selectTab === "react") {
      const filteredData = data.filter((item) =>
        item.category.includes("react")
      );
      setProjects(filteredData);
    }

    if (selectTab === "typescript") {
      const filteredData = data.filter((item) =>
        item.category.includes("typescript")
      );
      setProjects(filteredData);
    }
  }, [selectTab]);

  return (
    <section className="projects" id="projects">
      <div>
        <div>
          <div>
            <h3>My Skills and Recent Projects</h3>
          </div>
          <div>
            <button onClick={() => setSelectTab("all")}>All</button>
            <button onClick={() => setSelectTab("javascript")}>
              JavaScript
            </button>

            <button onClick={() => setSelectTab("react")}>React</button>

            <button onClick={() => setSelectTab("typescript")}>
              TypeScript
            </button>
          </div>
        </div>

        <div>
          {projects?.slice(0, nextItems)?.map((project, index) => (
            <div>
              {/* <div onClick = {()=>showModalHandler(project.id)}
              key={index}
              // data-aos="fade-zoom-in"
              // data-aos-delay="50"
              // data-aos-duration="1000"
              
            > */}

              <figure>
                <img src={project.imgUrl} alt={project.alt} />
              </figure>
              <h2 className={styles.title}>{project.title}</h2>
              <p className={styles.description}>{project.description}</p>
              <div>
                <h4 className={styles.technologies}>Technologies:</h4>
                {project.technologies.map((item, index) => (
                  <span className={styles.technologies} key={index}>{item}</span>
                ))}
              </div>
              <a href={project.siteUrl}>
                <button>Live Site</button>
              </a>
            </div>
          ))}
        </div>

        <div>
          {nextItems < projects.length && data.length > 6 && (
            <button onClick={loadMoreHandler}>Load more</button>
          )}
        </div>
      </div>
      {showModal && <Modal setShowModal={setShowModal} activeID={activeID} />}
    </section>
  );
};

export default Projects;
