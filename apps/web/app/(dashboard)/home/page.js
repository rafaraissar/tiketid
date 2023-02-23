"use client";
import React, { useState, useEffect } from "react";
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
