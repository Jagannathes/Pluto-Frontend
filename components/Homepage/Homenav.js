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
            <li>
              <Link href="/dashboard">
                <a>{user && "Profile"}</a>
              </Link>
            </li>
            <li onClick={logout}>
                {user && "Logout"}
            </li>
            <li>
              <Link href="/createAccount">
                <a>{user === null && "Create Account"}</a>
              </Link>
            </li>
            <li>
              <Link href="/login">
                <span>{user === null && "Login"}</span>
              </Link>
            </li>
          </ul>
        )}

        <div className={styles.dwnld}>Download Now</div>
      </div>
    </div>
  );
}

export default Homenav;
