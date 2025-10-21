"use client";

import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import Link from "next/link";
import Image from "next/image";

const HeroSlider = () => {

  const [carousels, setCarousels] = useState([]);
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  const fetchCarousels = async () => {
    try {
      const response = await fetch(`${baseUrl}/api/carousels`);
      const data = await response.json();
      setCarousels(data);
    } catch (error) {
      console.error("Error fetching carousels:", error);
    }
  };

  useEffect(() => {
    fetchCarousels();
  }, [baseUrl]);

  console.log('carousels', carousels);

  return (
    <section className="hero-section">
      <Swiper
        modules={[Autoplay, EffectFade, Pagination]}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        effect="fade"
        speed={1500}
        pagination={{ clickable: true }}
        className="mySwiper"
      >
        {carousels.map((carousel) => (
          <SwiperSlide key={carousel.id}>
            <div className="slider-item-con">
              <div className="sider-img">
                {carousel.type === 'image' ? (
                  <Image
                    src={carousel.image_path ?? ''}
                    alt="Holy Innocents Church"
                    width={1920}
                    height={857}
                  />
                ) : (
                  carousel.video_embed ? (
                    <div
                      dangerouslySetInnerHTML={{ __html: carousel.video_embed }}
                    />
                  ) : null
                )}
              </div>
              <div className="slider-content">
                <h1>{carousel.title ?? "Welcome Holy Innocents Catholic Church"}</h1>
                <p className="text-white">{carousel.description ?? "Join us for worship and community."}</p>
                <div className="slider-item-btn">
                  <Link href="#" className="custom-btn join-us-btn">
                    Join Us
                  </Link>
                  <Link href="#" className="custom-btn-alt mass-times-btn">
                    Mass Times
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}




        {/* <SwiperSlide>
          <div className="slider-item-con">
            <div className="sider-img">
              <Image
                src={"/assets/images/slider-2.png"}
                alt="Holy Innocents Church"
                width={1920}
                height={857}
              />
            </div>
            <div className="slider-content">
              <h1>Holy innocents Catholic Church </h1>
              <div className="slider-item-btn">
                <Link href="#" className="custom-btn join-us-btn">
                  Join Us
                </Link>
                <Link href="#" className="custom-btn-alt mass-times-btn">
                  Mass Times
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide> */}
      </Swiper>
    </section>
  );
};

export default HeroSlider;
