"use client";

import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import Link from "next/link";
import Image from "next/image";

// 🔹 Simple Stock Loader (you can style or replace with a library loader)
const StockLoader = () => (
  <div className="stock-loader-wrapper">
    <div className="loader border-t-4 border-blue-500 rounded-full w-12 h-12 animate-spin"></div>
    <style jsx>{`
      .loader {
        border: 4px solid rgba(255, 255, 255, 0.2);
        border-top-color: #3b82f6; /* blue-500 */
      }
    `}</style>
  </div>
);

const HeroSlider = () => {
  const [carousels, setCarousels] = useState([]);
  const [loading, setLoading] = useState(true);
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  const fetchCarousels = async () => {
    try {
      const response = await fetch(`${baseUrl}/api/carousels`, {
        cache: "no-store",
      });
      const data = await response.json();
      setCarousels(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error("Error fetching carousels:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (baseUrl) {
      fetchCarousels();
    }
  }, [baseUrl]);

  // 🔹 Show loader while fetching data
  if (loading) {
    return <StockLoader />;
  }

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
        {carousels.length > 0 ? (
          carousels.map((carousel) => (
            <SwiperSlide key={carousel.id}>
              <div className="slider-item-con">
                <div className="sider-img">
                  {carousel.type === "image" ? (
                    <Image
                      src={
                        carousel?.image_path
                          ? carousel.image_path.startsWith("http")
                            ? carousel.image_path
                            : `/${carousel.image_path.replace(/^\/+/, "")}`
                          : "/assets/images/default-slide.jpg" // fallback image in /public/assets/images/
                      }
                      alt={carousel?.title || "Hero Slide"}
                      width={1920}
                      height={857}
                      priority
                      onError={(e) => {
                        e.currentTarget.src =
                          "/assets/images/default-slide.jpg"; // fallback if image fails
                      }}
                    />
                  ) : carousel.video_embed ? (
                    <div
                      dangerouslySetInnerHTML={{ __html: carousel.video_embed }}
                    />
                  ) : null}
                </div>

                <div className="slider-content">
                  <h1>
                    {carousel.title ?? "Welcome Holy Innocents Catholic Church"}
                  </h1>
                  <p className="text-white">
                    {carousel.description ??
                      "Join us for worship and community."}
                  </p>

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
          ))
        ) : (
          <SwiperSlide>
            <div className="slider-item-con text-center py-40">
              <h2 className="text-white text-3xl">No slides available</h2>
            </div>
          </SwiperSlide>
        )}
      </Swiper>
    </section>
  );
};

export default HeroSlider;
