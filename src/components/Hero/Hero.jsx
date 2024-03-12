import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Mihir</h1>
        <ul className={styles.description}>
         <li> I'm a full-stack developer with 2 years of experience using React and
          NodeJS</li>
        <li>  I have also developed projects in Python,Flask,ExpressJs using MongoDB.
        </li> 
         <li>  I also have experience in writing articles.
         </li>
        </ul>
        <div className="container">
        <a href="https://medium.com/@rajmihir945" className={styles.contactBtn}>
          Medium
        </a>
        <a href="https://www.youtube.com/channel/UC0SC4xiG9VXZRfdSGTqjvFQ" className={styles.contactBtn}>
          Youtube
        </a>
        </div>
      </div>
      <img
        src={getImageUrl("hero/heros.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
