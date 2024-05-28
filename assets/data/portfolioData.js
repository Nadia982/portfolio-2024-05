// import portfolioImg01 from "../images/portfolio-01.jpg";
import portfolioImg01 from "../projects/portfolioImg1.jpg";
import portfolioImg02 from "../projects/portfolioImg2.jpg";
import portfolioImg03 from "../projects/portfolioImg3.jpg";

const projects = [
{
id:"01",
imgUrl: portfolioImg01,
category: ["javascript", "react"],
title: "Grammar Quiz for Year 6 Kids",
description: "I created this project to fulfil a need for my child to practice answering grammar-related questions before his SATS (UK school standard assessment tests for 10-11 year-olds). Multiple choice answers and animations that give immediate feedback on responses make this quiz easy and compelling to use. ",
technologies: ["JavaScript"],
siteUrl: "",
gitHub: "",
alt: "A screenshot of project 1: a multiple choice quiz about English grammar on a dark blue background with four possible answers. At the bottom of the screen there are answer indicators indicating whether previous questions have been answered correctly."
},

{id:"02",
imgUrl: portfolioImg02,
category: ["javascript"],
title: "Spelling Game",
description: "Description goes here",
technologies: ["JavaScript"],
siteUrl: "",
gitHub: "",
},
{
id:"03",
imgUrl: portfolioImg03,
category: "javascript",
title: "Landing page",
description: "Description goes here",
technologies: ["React", "Tailwind"],
siteUrl: "",
gitHub: "",
},
]

export default projects;