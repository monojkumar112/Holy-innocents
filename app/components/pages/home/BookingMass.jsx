import Image from "next/image";
import React from "react";

const BookingMass = () => {
  return (
    <>
      <section
        className="booking-mass cpb-6"
        data-aos="fade-up"
        data-aos-duration="3000"
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="booking-img">
                <Image
                  src={"/assets/images/mass.png"}
                  width={636}
                  height={636}
                  alt="Mass"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="booking-content">
                <h2 className="section-title">Booking a Mass Intention</h2>
                <p>
                  You can book a Mass intention by contacting the parish office
                  during office hours or by using the form below.
                </p>
                <div className="booking-btn-group">
                  <button className="custom-btn learn-more-btn">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BookingMass;
