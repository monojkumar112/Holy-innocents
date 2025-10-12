"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import Link from "next/link";

const HeroSlider = () => {
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
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="slider-item-con">
            <div className="sider-img">
              <img
                src="/assets/images/slider-1.png"
                alt="Holy Innocents Church"
              />
            </div>
            <div className="slider-content">
              <h1>Welcome Holy Innocents Catholic Church</h1>
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

        {/* Slide 2 */}
        <SwiperSlide>
          <div className="slider-item-con">
            <div className="sider-img">
              <img
                src="/assets/images/slider-2.png"
                alt="Holy Innocents Church"
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
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default HeroSlider;
