import Image from "next/image";
import Link from "next/link";
import React from "react";

const BookingMass = ({ data }) => {
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
              <div className="booking-content">
                <h2 className="section-title">{data?.mass_offer_title}</h2>

                <p>
                  {/* <div dangerouslySetInnerHTML={{ __html: data?.mass_offer_description }} /> */}
                  {data?.mass_offer_description}
                </p>

                <div className="booking-btn-group">
                  <Link
                    href={"/mass-offering"}
                    className="custom-btn learn-more-btn"
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="booking-img">
                {/* {"/assets/images/mass.png"} */}
                <Image
                  src={data?.mass_offer_photo}
                  width={636}
                  height={636}
                  alt="Mass"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BookingMass;
