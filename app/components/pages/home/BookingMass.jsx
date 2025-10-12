import React from "react";

const BookingMass = () => {
  return (
    <>
      <section className="booking-mass cpb-6">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="booking-img">
                <img src="/assets/images/mass.png" alt="" />
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
