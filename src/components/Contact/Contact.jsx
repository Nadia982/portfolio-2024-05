import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../../utils";

export const Contact = () => {
return ( 
<footer id="contact" className={styles.container}>
<div className={styles.content}>
<h2>Contact</h2>
<p>Feel free to connect</p>
</div>
<ul>

<li> 
<img src={getImageUrI("contact/linkedinIcon.png")}
alt="LinkedIn icon"/>
<a href="https://www.linkedin.com/in/natalie-g-b947331a/">https://www.linkedin.com/in/natalie-g-b947331a/</a>
</li> 

<li> 
<img src={getImageUrI("contact/githubIcon.png")}
alt="gitHub icon"/>
<a href="https://github.com/nadia982">https://github.com/nadia982</a>
</li> 


</ul>
</footer>
);
};
