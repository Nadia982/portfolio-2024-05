import React, { useState, useEffect } from "react";
import data from "../../../assets/data/portfolioData.js";
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

  const showModalHandler = id => {
    setShowModal(true);
    setActiveID(id);
  }

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
    <section id="projects">
      <div className="container ">
        <div className="flex items-center justify-between flex-wrap  ">
          <div className="mb-7 sm:mb-0">
            <h3 className="text-headingColor text-[2rem] font-[700]">
              My Skills and Recent Projects
            </h3>
          </div>
          <div className="flex gap-3">
            <button onClick={()=>setSelectTab("all")} className="text-smallTextColor border border-solid border-smallTextColor py-2 px-4 rounded-[0.5rem]">
              All
            </button>
 
            <button onClick={()=>setSelectTab("javascript")} className="text-smallTextColor border border-solid border-smallTextColor py-2 px-4 rounded-[0.5rem]">
              JavaScript
            </button>

            <button onClick={()=>setSelectTab("react")} className="text-smallTextColor border border-solid border-smallTextColor py-2 px-4 rounded-[0.5rem]">
              React
            </button>

            <button onClick={()=>setSelectTab("typescript")} className="text-smallTextColor border border-solid border-smallTextColor py-2 px-4 rounded-[0.5rem]">
              TypeScript
            </button>
          </div>
        </div>

        <div>
          {projects?.slice(0, nextItems)?.map((project, index) => (
            <div onClick = {()=>showModalHandler(project.id)}
              key={index}
              // data-aos="fade-zoom-in"
              // data-aos-delay="50"
              // data-aos-duration="1000"
              
            >
              <figure >
                <img
                  src={project.imgUrl}
                  alt={project.alt}
                />
              </figure>
              <div>
                <div>
                  <button>
                    See details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-6">
          {nextItems < projects.length && data.length > 6 && (
            <button
              onClick={loadMoreHandler}
              className="text-white bg-headingColor hover:bg-smallTextColor py-2 px-4 rounded-[8px] font-[500] ease-in duration-200 "
            >
              Load more
            </button>
          )}
        </div>
      </div>
            {
              showModal && <Modal setShowModal={setShowModal} activeID = {activeID}/>
            }

    </section>
  );
};

export default Projects;
