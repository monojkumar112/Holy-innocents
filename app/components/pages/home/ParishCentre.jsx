import React from "react";

const ParishCentre = () => {
  return (
    <>
      <section className="parish-centre">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="parish-contentss">
                <h2 className="section-title">Parish Centre Hire</h2>
                <p>
                  A space for gatherings, community events, and parish
                  activities.
                </p>
                <div className="parish-btn-group">
                  <a href="/about.html" className="custom-btn learn-more-btn">
                    Book the Centre
                  </a>
                  <a href="/#contact" className="custom-btn-alt get-qucte-btn">
                    Check Availability
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="parish-img">
                <img src="/assets/images/parish.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ParishCentre;
