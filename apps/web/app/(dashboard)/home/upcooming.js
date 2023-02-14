"use client";
import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import styles from "./Home.module.css";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { Swiper, SwiperSlide } from "swiper/react";
import "./Upcooming.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";

export default function Upcooming() {
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
      title: "Lemon",
      img: "/event/1.jpg",
      price: "$5.30",
    },
    {
      title: "Avocado",
      img: "/event/2.jpg",
      price: "$15.70",
    },
    {
      title: "Lemon 2",
      img: "/event/2.jpg",
      price: "$8.00",
    },
    {
      title: "Banana",
      img: "/event/2.jpg",
      price: "$7.50",
    },
    {
      title: "Watermelon",
      img: "/event/2.jpg",
      price: "$12.20",
    },
    {
      title: "Watermelon",
      img: "/event/2.jpg",
      price: "$12.20",
    },
    {
      title: "Watermelon",
      img: "/event/2.jpg",
      price: "$12.00",
    },
  ];

  return (
    <>
      <div className={styles.titlecontentcontainer}>
        <h2 className={styles.titlecontent}>Upcooming Event</h2>
        <Link href="/id" className={styles.titlecontentview}>
          Lihat Semua
          <KeyboardArrowRightIcon />
        </Link>
      </div>
      <Swiper
        slidesPerView={4}
        spaceBetween={10}
        navigation={true}
        modules={[Navigation]}
      >
        {upcooming.map((item, index) => (
          <SwiperSlide>
            <Link href="/id" className={styles.titlecontent}>
              <Card sx={{ maxWidth: 280 }}>
                <CardActionArea>
                  <div>
                    <Image
                      className={styles.upcoomingimg}
                      width={280}
                      height={210}
                      alt={item.title}
                      src={item.img}
                    />
                  </div>

                  <CardContent>
                    <h3>{item.title}</h3>
                    <Typography variant="body2" color="text.secondary">
                      Lizards are a widespread group of squamate reptiles, with
                      over
                    </Typography>
                    <br />
                    <br />
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
export const config = {
  unstable_runtimeJS: false,
};
