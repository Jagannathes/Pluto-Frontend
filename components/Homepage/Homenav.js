import React, { useContext, useEffect, useState } from "react";
import styles from "./Homenav.module.css";
import Link from "next/link";

function Homenav({ user, userLoading, logout }) {
  return (
    <div className={styles.nav}>
      <div className={styles.nav__left}>
        <h2>Pluto</h2>
      </div>
      <div className={styles.nav__right}>
        {userLoading ? (
          ""
        ) : (
          <ul>
            <li>{user && "Profile"}</li>
            <li>{user}</li>
            <li>
              <Link href="/createAccount">
                {user === null && "Create Account"}
              </Link>
            </li>
            <li>
              <span>{user === null && "Login"}</span>
            </li>
          </ul>
        )}

        <div className={styles.dwnld}>Download Now</div>
      </div>
    </div>
  );
}

export default Homenav;
