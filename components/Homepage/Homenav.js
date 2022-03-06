import React from "react";
import styles from "./Homenav.module.css";
import Link from "next/link";
function Homenav() {
  return (
    <div className={styles.nav}>
      <div className={styles.nav__left}>
        <h2>Pluto</h2>
      </div>
      <div className={styles.nav__right}>
        <ul>
          <li>Benefits</li>
          <li>Faq</li>
          <li>
            <span>Login</span>
          </li>
        </ul>
        <div className={styles.dwnld}>Download Now</div>
      </div>
    </div>
  );
}

export default Homenav;
