import React from "react"
import styles from "./Hero.module.css";
// import { getImageUrl } from " ../../../utils";

export const Hero = () => {
return ( <section className={styles.container}>
<div className={styles.content}>
<h1 className={styles.title}>Hi, I'm Natalie</h1>
<p className={styles.description}>I'm a UK-based web developer and have been building websites for the past two years. The technologies I use are:</p>
// Carousel showing the technologies I use
<a href="#" className={styles.contactBtn}>Contact Me</a> </div>
{/* <a href="[mailto:email address goes here]" className={styles.contactBtn}>Contact Me</a> </div> */}

See my work
Have a slideshow of websites here 

{/* <img src={getImageurl("hero/heroImage.png")} alt="Natalie Gillam profile photo” className={styles.heroImg}/> */}

<div className={styles.topBlur} /> 
<div className={styles.bottomBlur} />
</section>
);
};
