"use client";
<<<<<<< HEAD
import React, { useState, useEffect } from "react";
=======
import React from "react";
>>>>>>> 716635c (update)
import Categorysearch from "./categorysearch";
import styles from "./Home.module.css";
import Mainbanner from "./mainbanner";
import Upcooming from "./upcooming";

export default function Home() {
  return (
    <div className={styles.contenthome}>
      <div className={styles.contentitem}>
        <Mainbanner />
      </div>
      <div className={styles.contentitem}>
        <Upcooming />
      </div>
      <div className={styles.contentitem}>
        <Categorysearch />
      </div>
      <br />
    </div>
  );
}
<<<<<<< HEAD
export const config = {
  unstable_runtimeJS: false,
};
=======
>>>>>>> 716635c (update)
