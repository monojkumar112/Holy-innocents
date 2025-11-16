import Image from "next/image";
import Link from "next/link";
import React from "react";

const FatherHere = () => {
  return (
    <>
      <section
        className="booking-mass cpt-6"
        data-aos="fade-up"
        data-aos-duration="3000"
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="booking-img">
                <Image
                  src={"/assets/images/father.png"}
                  width={636}
                  height={636}
                  alt="Mass"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="booking-content">
                <h2 className="section-title father-title-name">
                  Welcome to Our Parish
                </h2>
                <p>
                  Thank you for visiting our website. I hope you enjoy exploring
                  and discovering more about our vibrant, welcoming, and
                  outward-looking parish community. I am looking forward to
                  meeting you in person and sharing in faith, fellowship, and
                  community life together.
                </p>
                <p>
                  Father Victor Vella <br /> Parish Priest
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FatherHere;
