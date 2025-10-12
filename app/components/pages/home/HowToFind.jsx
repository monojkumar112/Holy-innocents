import React from "react";

const HowToFind = () => {
  return (
    <>
      <section className="how-to-find">
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <div className="how-to-find-img">
                <img src="/assets/images/map.png" alt="" />
              </div>
            </div>

            <div className="col-md-7">
              <div className="how-to-find-wrapper">
                <h2 className="section-title">How to find us </h2>
                <p>Strickland Way, Orpington BR6 9UE</p>
                <p>
                  There is free parking available at the church, accessed via
                  Strickland Way, and unrestricted parking in Mitchell Road.
                  Outside of school hours, additional parking is available in
                  the car park on Mitchell Road, outside Holy Innocents'
                  Catholic School. There are designated parking spaces for the
                  disabled.
                </p>
                <h6>
                  Please do not park in front of the houses in Strickland Way or
                  Taylor Close.
                </h6>
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
