import React from "react";
import { IoIosCall } from "react-icons/io";
import { MdOutlineMail } from "react-icons/md";

const ContactUs = () => {
  return (
    <>
      <section className="contact-us">
        <div className="container">
          <div className="contact-us-header">
            <h2 className="section-title" id="contact">
              Contact Us
            </h2>
            <p>
              We would love to hear from you! Whether you have questions, need
              assistance, or want to get involved, feel free to reach out to us.
            </p>
          </div>
          <div className="contact-us-content">
            <div className="row">
              <div className="col-lg-3">
                <ul className="contact-us-list">
                  <li>
                    <div className="contact-us-social">
                      <span>
                        <IoIosCall />
                      </span>
                      <h5>Call To Us</h5>
                    </div>
                    <p>
                      ​Natasha Wheeler, our Parish Secretary, works in the
                      Parish Office from 10.30 am to 3.30 pm on Mondays,
                      Wednesdays and Fridays.
                    </p>
                    <p>
                      <span className="address-text">Phone: </span> +01689
                      817537
                    </p>
                  </li>
                  <li>
                    <div className="contact-us-social">
                      <span>
                        <MdOutlineMail />
                      </span>
                      <h5>Write To US</h5>
                    </div>
                    <p>
                      <span className="address-text">Address:</span> Strickland
                      Way, Orpington, Kent, BR6 9UE
                    </p>
                  </li>
                </ul>
              </div>
              <div className="col-lg-9">
                <div className="contact-us-form">
                  <form action="#">
                    <div className="row">
                      <div className="col-md-6">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="First Name *"
                        />
                      </div>
                      <div className="col-md-6">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Last Name *"
                        />
                      </div>
                      <div className="col-md-6">
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Your Email"
                        />
                      </div>
                      <div className="col-md-6">
                        <input
                          type="number"
                          className="form-control"
                          placeholder="Your Phone *"
                        />
                      </div>
                      <div className="col-md-12">
                        <textarea
                          name=""
                          id=""
                          cols="30"
                          rows="5"
                          className="form-control"
                          placeholder="Your Message"
                        ></textarea>
                      </div>
                      <div className="col-md-12">
                        <button className="custom-btn learn-more-btn">
                          Send Massage
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
