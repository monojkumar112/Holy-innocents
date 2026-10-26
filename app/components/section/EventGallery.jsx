"use client";
import React, { useMemo, useState } from "react";

// Swiper Import
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

// Swiper Styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

const EventGallery = ({ blogImage = [] }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const { videos, images } = useMemo(() => {
    const list = Array.isArray(blogImage) ? blogImage : [];
    return {
      videos: list.filter((item) => item?.video),
      images: list.filter((item) => item?.image),
    };
  }, [blogImage]);

  if (!videos.length && !images.length) return null;

  return (
    <div className="event-gallery-image">
      {/* Video sits above the image slider when backend has uploaded video */}
      {videos.length > 0 && (
        <div className="event-gallery-videos">
          {videos.map((item) => (
            <div key={item.id || item.video} className="event-gallery-video-item">
              <video
                src={item.video}
                controls
                playsInline
                style={{ width: "100%", borderRadius: "12px", display: "block" }}
              />
            </div>
          ))}
        </div>
      )}

      {/* Image slider only — no video slides */}
      {images.length > 0 && (
        <>
          <div className="event-gallery-image-item">
            <Swiper
              style={{
                "--swiper-navigation-color": "#fff",
                "--swiper-pagination-color": "#fff",
              }}
              spaceBetween={10}
              navigation={true}
              thumbs={{
                swiper:
                  thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
              }}
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiper2"
            >
              {images.map((item, index) => (
                <SwiperSlide key={item.id || index}>
                  <div className="event-gallery-img">
                    <img
                      src={item.image}
                      alt={`Slide ${index + 1}`}
                      style={{ width: "100%", borderRadius: "10px" }}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className="event-gallery-image-item-2">
            <Swiper
              onSwiper={setThumbsSwiper}
              spaceBetween={10}
              slidesPerView={6}
              freeMode={true}
              watchSlidesProgress={true}
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiper"
              style={{ marginTop: "15px" }}
            >
              {images.map((item, index) => (
                <SwiperSlide key={item.id || index}>
                  <img
                    src={item.image}
                    alt={`Thumb ${index + 1}`}
                    style={{
                      width: "100%",
                      borderRadius: "6px",
                    }}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </>
      )}
    </div>
  );
};

export default EventGallery;
