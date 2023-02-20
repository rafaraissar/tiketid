"use client";
import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import styles from "./Home.module.css";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { Swiper, SwiperSlide } from "swiper/react";
import Error from "./error";
import "./Upcooming.css";
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";

export default function Upcooming() {
  useEffect(() => {
    window.addEventListener("resize", () => {
      setWindowSize({
        width: window.innerWidth,
      });
    });
    setWindowSize({
      width: window.innerWidth,
    });
  }, []);

  const [windowSize, setWindowSize] = useState({
    width: undefined,
  });

  const isMobile = windowSize.width <= 900;
  const isTablet = windowSize.width <= 1250;
  const upcooming = [
    {
      title: "Festival Pesta Rakyart",
      img: "/event/1.jpg",
      price: "Rp. 213.000",
    },
    {
      title: "Hajatan Anak Medan 2023 - Event",
      img: "/event/2.jpg",
      price: "Rp. 211.000",
    },
    {
      title: "CILPA FEST 2023 BEKASI",
      img: "/event/3.jpg",
      price: "Rp. 185.000",
    },
    {
      title: "Lemonnnnn nnn nnn nnn nnn a b c d",
      img: "/event/1.jpg",
      price: "Rp. 185.000",
    },
    {
      title: "Avocado",
      img: "/event/2.jpg",
      price: "Rp. 185.000",
    },
    {
      title: "Lemon 2",
      img: "/event/2.jpg",
      price: "Rp. 185.000",
    },
    {
      title: "Banana",
      img: "/event/2.jpg",
      price: "Rp. 185.000",
    },
    {
      title: "Watermelon",
      img: "/event/2.jpg",
      price: "Rp. 185.000",
    },
    {
      title: "Watermelon",
      img: "/event/2.jpg",
      price: "Rp. 185.000",
    },
    {
      title: "Watermelon",
      img: "/event/2.jpg",
      price: "Rp. 185.000",
    },
  ];

  return (
    <>
      <div className={styles.titlecontentcontainer}>
        <h2 className={styles.titlecontent}>Upcooming Event</h2>
        <Link href="/id" className={styles.titlecontentview}>
          Lihat Semua
          <KeyboardArrowRightIcon className={styles.titlecontentviewicon} />
        </Link>
      </div>
      <Swiper
        slidesPerView={(isMobile && 1) || (isTablet && 3) || "4"}
        spaceBetween={10}
        navigation={true}
        loop={true}
        modules={[Navigation]}
        className={styles.swiperupcooming}
      >
        {upcooming.map((item, index) => (
          <SwiperSlide>
            <Link href="/id" className={styles.titlecontent}>
              <Card sx={{ maxWidth: 280 }} className={styles.cardupcooming}>
                <CardActionArea>
                  <div>
                    <Image
                      className={styles.upcoomingimg}
                      width={288}
                      height={216}
                      alt={item.title}
                      src={item.img}
                    />
                  </div>

                  <CardContent>
                    <h2 className={styles.upcoomingtitle}>{item.title}</h2>
                    <Typography variant="body2" color="text.secondary">
                      Bandung, Jawa Barat
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      23 Feb 2023
                    </Typography>
                    <br />
                    <div className={styles.upcoominghr}></div>
                    <h2>{item.price}</h2>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
