import Image from "next/image";
import React from "react";

const HowToFind = () => {
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
                  src={"/assets/images/map.png"}
                  width={526}
                  height={559}
                  alt="Map"
                />
              </div>
            </div>

            <div className="col-lg-7">
              <div className="how-to-find-wrapper">
                <h2 className="section-title">How to find us </h2>
                <p>Strickland Way, Orpington BR6 9UE</p>
                <p>
                  There is free parking available at the church, accessed via
                  Strickland Way, and unrestricted parking in Mitchell Road.
                  Outside of school hours, additional parking is available in
                  the car park on Mitchell Road, outside Holy Innocents&apos;
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
