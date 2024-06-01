import React from "react";
import { getImageUrl } from "../../utils";
// {
//     "id":"01",
//     "category": ["javascript", "react"],
//     "title": "Grammar Quiz for Year 6 Kids",
//     "imgUrl": "projects/portfolioImg1.jpg",
//     "description": "I created this project to fulfil a need for my child to practice answering grammar-related questions before his SATS (UK school standard assessment tests for 10-11 year-olds). Multiple choice answers and animations that give immediate feedback on responses make this quiz easy and compelling to use. ",
//     "skills": ["JavaScript", "HTML"],
//     "siteUrl": "",
//     "gitHub": "",
//     "alt": "A screenshot of project 1: a multiple choice quiz about English grammar on a dark blue background with four possible answers. At the bottom of the screen there are answer indicators indicating whether previous questions have been answered correctly."
//     },

export const ProjectCard = ({
  project: { title, imgUrl, description, skills, siteUrl, gitHub, alt },
}) => {
  return (
    <div>
      <img src={getImageUrl(imgUrl)} alt={alt} />
      <h3>{title}</h3>
      <p>{description}</p>
      <ul>
        {skills.map((skill, id) => {
          <li key={id}>{skill}</li>;
          1;
        })}
      </ul>
      <div>
        <a href={siteUrl}>Live</a>
        <a href={gitHub}>Code</a>
      </div>
    </div>
  );
};
