"use client";
import Link from "next/link";

import styles from "./Home.module.css";

import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

export default function Categorysearch() {
  return (
    <>
      <div className={styles.titlecontentcontainer}>
        <h2 className={styles.titlecontent}>Browse Category</h2>
        <Link href="/id" className={styles.titlecontentview}>
          Lihat Semua
          <KeyboardArrowRightIcon className={styles.titlecontentviewicon} />
        </Link>
      </div>
      <div className={styles.categorysearchwrapper}>
        <div className={styles.categorysearchcontainer}>
          <Link href="/id" className={styles.categorysearchitem}>
            Music
          </Link>
          <div className={styles.categorysearchitem}>Workshop</div>
          <div className={styles.categorysearchitem}>Jakarta</div>
          <div className={styles.categorysearchitem}>Bandung</div>{" "}
          <div className={styles.categorysearchitem}>Surabaya</div>{" "}
          <div className={styles.categorysearchitem}>Fun Activities</div>{" "}
          <div className={styles.categorysearchitem}>Event Murah</div>{" "}
          <div className={styles.categorysearchitem}>Trending This Week</div>
          <div className={styles.categorysearchitem}>Bulan Ini</div>{" "}
          <div className={styles.categorysearchitem}>Hobbies</div>{" "}
          <div className={styles.categorysearchitem}>Families</div>{" "}
          <div className={styles.categorysearchitem}>Near Event</div>{" "}
          <div className={styles.categorysearchitem}>IBL</div>
          <div className={styles.categorysearchitem}>Lifestyle</div>{" "}
          <div className={styles.categorysearchitem}>Culture</div>{" "}
          <div className={styles.categorysearchitem}>Online Event</div>{" "}
          <div className={styles.categorysearchitem}>Comedy</div>{" "}
          <div className={styles.categorysearchitem}>Tomorrow Event</div>
        </div>{" "}
      </div>
    </>
  );
}
export const config = {
  unstable_runtimeJS: false,
};
