import Image from "next/image";
import React from "react";

const ParishCentre = () => {
  return (
    <>
      <section
        className="parish-centre"
        data-aos="fade-up"
        data-aos-duration="3000"
      >
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="parish-contentss">
                <h2 className="section-title">The Father Phelan Centre</h2>
                <p>
                  A space for gatherings, community events, and parish
                  activities.
                </p>
                <div className="parish-btn-group">
                  <a href="#" className="custom-btn learn-more-btn">
                    Book the Centre
                  </a>
                  {/* <a href="/#contact" className="custom-btn-alt get-qucte-btn">
                    Check Availability
                  </a> */}
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="parish-img">
                <Image
                  src={"/assets/images/parish.png"}
                  width={636}
                  height={404}
                  alt="Parish"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ParishCentre;
