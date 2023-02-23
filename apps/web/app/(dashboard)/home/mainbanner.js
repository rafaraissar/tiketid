"use client";
import Link from "next/link";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Mainbanner.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

import Image from "next/image";

import styles from "./Home.module.css";

export default function Mainbanner() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        loop={true}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
      >
        {" "}
        <SwiperSlide>
 
          <Link href="/her" className={styles.mySlidesfadeimg}>
 
            <Image
              priority
              className={styles.mySlidesfadeimg}
              width="0"
              height="0"
              sizes="100vw"
              alt="slide"
              src="/poster/1.jpg"
            />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
 
          <Link href="/her" className={styles.mySlidesfadeimg}>
 
            <Image
              priority
              className={styles.mySlidesfadeimg}
              width="0"
              height="0"
              sizes="100vw"
              alt="slide"
              src="/poster/4.jpg"
            />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
 
          <Link href="/her" className={styles.mySlidesfadeimg}>
 
            <Image
              priority
              className={styles.mySlidesfadeimg}
              width="0"
              height="0"
              sizes="100vw"
              alt="slide"
              src="/poster/5.jpg"
            />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
 
       
          <Link href="/her" className={styles.mySlidesfadeimg}>
 
            <Image
              priority
              className={styles.mySlidesfadeimg}
              width="0"
              height="0"
              alt="slide"
              sizes="100vw"
              src="/poster/6.jpg"
            />
          </Link>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
export const config = {
  unstable_runtimeJS: false,
};
