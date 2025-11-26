import Image from "next/image";
import React from "react";

const HowToFind = ({ data }) => {
  return (
    <>
      <section
        className="how-to-find"
        data-aos="fade-up"
        data-aos-duration="3000"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="how-to-find-img">
                <Image
                  // {"/assets/images/map.png"}
                  src={data?.find_us_photo}
                  width={526}
                  height={559}
                  alt="Map"
                />
              </div>
            </div>

            <div className="col-lg-7">
              <div className="how-to-find-wrapper">
                <h2 className="section-title">{data?.find_us_title}</h2>
                <p>
                  {data?.find_us_description}
                </p>
                <div className="how-to-find-btn-group">
                  <a href="/#contact" className="custom-btn get-qucte-btn">
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HowToFind;
