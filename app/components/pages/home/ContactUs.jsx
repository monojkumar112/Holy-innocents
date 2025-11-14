"use client";
import React, { useState } from "react";
import { IoIosCall } from "react-icons/io";
import { MdOutlineMail } from "react-icons/md";

const ContactUs = () => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "";
    setLoading(true);
    setMessage("");

    fetch(`${baseUrl}/api/contact`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then(async (response) => {
        const resData = await response.json();

        if (response.ok) {
          e.target.reset();
          setMessage(
            "✅ Message sent successfully! Our team will contact you very soon."
          );
        } else if (response.status === 422) {
          // Laravel validation errors
          const errorMessages = Object.values(resData.errors).flat().join(" ");
          setMessage(`⚠️ ${errorMessages}`);
        } else {
          setMessage("❌ Failed to send message. Please try again.");
        }
      })
      .catch(() => {
        setMessage("⚠️ Something went wrong.");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <>
      <section
        className="contact-us"
        id="contact"
        data-aos="fade-up"
        data-aos-duration="3000"
      >
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
                      <h5>Call Us</h5>
                    </div>
                    <p>
                      Natasha Wheeler, our Parish Secretary, works in the Parish
                      Office from 10.30 am to 3.30 pm on Mondays, Wednesdays and
                      Fridays.
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
                      <span className="address-text">Address: </span>Strickland
                      Way, Orpington, Kent, BR6 9UE
                    </p>
                    <p>
                      <span className="address-text">Email: </span>
                      <a href="mailto:orpington@rcaos.org.uk">
                        orpington@rcaos.org.uk
                      </a>
                    </p>
                  </li>
                </ul>
              </div>
              <div className="col-lg-9">
                <div className="contact-us-form">
                  <form action="#" onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="col-md-6">
                        <input
                          type="text"
                          className="form-control"
                          name="fname"
                          placeholder="First Name *"
                          required
                        />
                      </div>
                      <div className="col-md-6">
                        <input
                          type="text"
                          className="form-control"
                          name="lname"
                          placeholder="Last Name *"
                          required
                        />
                      </div>
                      <div className="col-md-6">
                        <input
                          type="email"
                          className="form-control"
                          name="email"
                          placeholder="Your Email"
                          required
                        />
                      </div>
                      <div className="col-md-6">
                        <input
                          type="number"
                          className="form-control"
                          name="phone"
                          placeholder="Your Phone *"
                          required
                        />
                      </div>
                      <div className="col-md-12">
                        <textarea
                          id=""
                          cols="30"
                          rows="5"
                          className="form-control"
                          name="message"
                          placeholder="Your Message"
                          required
                        ></textarea>
                      </div>
                      <div className="col-md-12">
                        <button
                          className="custom-btn learn-more-btn"
                          type="submit"
                          disabled={loading}
                        >
                          {loading ? (
                            <>
                              Sending...
                              <div
                                className="spinner-border spinner-border-sm ms-2"
                                role="status"
                              >
                                <span className="visually-hidden">
                                  Loading...
                                </span>
                              </div>
                            </>
                          ) : (
                            "Send Message"
                          )}
                        </button>
                        {message && <p className="mt-3">{message}</p>}
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
