import Image from "next/image";
import React from "react";

const DonateFrom = () => {
  return (
    <section
      className="donate-from cpb-6"
      data-aos="fade-up"
      data-aos-duration="3000"
    >
      <div className="container">
        <div className="donate-from-wrapper">
          <div className="donate-header">
            <h2 className="donate-from-title">Donate</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
          <form action="#" className="donate-form">
            <div className="donate-information">
              <h4>Your Details Information:</h4>
              <div className="row">
                <div className="col-md-6">
                  <input
                    type="text"
                    name="first_name"
                    placeholder="First Name *"
                    className="donate-input"
                  />
                </div>
                <div className="col-md-6">
                  <input
                    type="text"
                    name="last_name"
                    placeholder="Last Name *"
                    className="donate-input"
                  />
                </div>
                <div className="col-md-6">
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email *"
                    className="donate-input"
                  />
                </div>
                <div className="col-md-6">
                  <input
                    type="text"
                    name="phone"
                    placeholder="Your Phone *"
                    className="donate-input"
                  />
                </div>
                <div className="col-md-6">
                  <input
                    type="text"
                    name="address"
                    placeholder="Your Address * "
                    className="donate-input"
                  />
                </div>
                <div className="col-12">
                  <textarea
                    name="message"
                    placeholder="Your Message "
                    className="donate-textarea"
                  ></textarea>
                </div>
              </div>
            </div>
            <div className="donate-information">
              <h4>Your Donation:</h4>
              <div className="row">
                <div className="col-md-12">
                  <input
                    type="text"
                    name="custom_amount"
                    placeholder="$20"
                    className="donate-input"
                  />
                </div>
                <div className="choose-donation-wrap">
                  <button className="select-amount-btn">$20</button>
                  <button className="select-amount-btn">$50</button>
                  <button className="select-amount-btn">$100</button>
                  <button className="select-amount-btn">$200</button>
                  <button className="select-amount-btn">Custom</button>
                </div>
              </div>
            </div>
            <div className="donate-information">
              <div className="d-flex align-items-center justify-content-between gap-2">
                <h4>Card information: </h4>
                <Image
                  src="/assets/images/visa.png"
                  alt="About"
                  width={74}
                  height={13}
                />
              </div>
              <div className="row">
                <div className="col-md-6">
                  <input
                    type="number"
                    name="card_number"
                    placeholder="Card Number"
                    className="donate-input"
                  />
                </div>
                <div className="col-md-6">
                  <input
                    type="text"
                    name="card_mm_yy"
                    placeholder="MM/YY"
                    className="donate-input"
                  />
                </div>
              </div>
            </div>
            <button className="custom-btn" type="submit">
              Donate Now
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default DonateFrom;
