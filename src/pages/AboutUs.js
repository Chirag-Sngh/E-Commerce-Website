import React from "react";
import { Link } from "react-router-dom";
import styles from "../css/AboutUs.module.css";
import s1Image from "../images/us.jpg";

const AboutUs = (props) => {
  return (
    <div className={styles.container}>
      <main>
        <section
          style={{ backgroundImage: `url(${s1Image})` }}
          className={styles.s1}
        >
          <h1 className={styles.s1Title}>ABOUT US</h1>
          <p className={styles.s1Subtitle}>
           We build innovative products & solutions that deliver unparalleled convenience to urban consumers.<br/>
           The best part? Every bit of your work at will help elevate the lives of our users.<br/>
           Our mission is to elevate the quality of life for the urban consumer with unparalleled convenience.<br/>
           Convenience is what makes us tick. It's what makes us get out of bed and say, "Let's do this."
          </p>
          <br/>
          <br/>
          <br/>
          <br/>
          <p className={styles.s1Title2}>
           Contact Us:
          </p>
          <p className={styles.s1Subtitle2}>
           +919898989898<br/>
           +919999999999
          </p>
        </section>
      </main>
    </div>
  );
};

export default AboutUs;
