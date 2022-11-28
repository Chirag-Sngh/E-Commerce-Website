import React from "react";
import { Link } from "react-router-dom";
import styles from "../css/HomePage.module.css";
import s1Image from "../images/rtx-3090.jpg";

const HomePage = (props) => {
  return (
    <div className={styles.container}>
      <main>
        <section
          style={{ backgroundImage: `url(${s1Image})` }}
          className={styles.s1}
        >
          <h1 className={styles.s1Title}>GD Subway</h1>
          <p className={styles.s1Subtitle}>
            Now avalaible to order right from your wings and hostels.
          </p>
          <Link className={styles.s1Link} to="/shopping-cart/catalog">
            Feast Now
          </Link>
        </section>
      </main>
    </div>
  );
};

export default HomePage;
