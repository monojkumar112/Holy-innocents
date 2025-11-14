"use client";
import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";

const EventGallery = ({ allEvents }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div>
      {/* Image Gallery */}
      <div className="event-gallery-image">
        {allEvents &&
          allEvents.map((item, index) => (
            <div
              className="event-gallery-img-item"
              key={index}
              onClick={() => setSelectedImage(item.image)} // 👉 click করলে modal খুলবে
              style={{ cursor: "pointer" }}
            >
              <img
                src={item.image}
                alt={`Gallery Image ${index + 1}`}
                style={{ width: "100%", borderRadius: "8px" }}
              />
            </div>
          ))}
      </div>

      {/* Modal */}
      {selectedImage && (
        <div
          className="modal-overlay"
          onClick={() => setSelectedImage(null)} // background এ click করলে বন্ধ হবে
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            background: "rgba(0,0,0,0.7)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 9999,
          }}
        >
          <div
            className="modal-gallery-content"
            style={{
              position: "relative",
              padding: "10px",
              borderRadius: "8px",
            }}
            onClick={(e) => e.stopPropagation()} // modal content এ click করলে বন্ধ হবে না
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              style={{
                position: "absolute",
                top: "-5px",
                right: "-5px",
                background: "#b28744",
                color: "#fff",
                border: "none",
                borderRadius: "50%",
                width: "40px",
                height: "40px",
                cursor: "pointer",
                fontSize: "24px",
                lineHeight: "24px",
              }}
            >
              <IoMdClose />
            </button>
            <div className="modal-gallery-image">
              <img
                src={selectedImage}
                alt="Selected"
                className=""
                style={{
                  maxWidth: "100%",
                  borderRadius: "8px",
                }}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EventGallery;
