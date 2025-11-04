"use client";
import Image from "next/image";
import React, { useState } from "react";
import { CiCalendar } from "react-icons/ci";
import { IoMdTime } from "react-icons/io";
import { LuMapPin } from "react-icons/lu";

const MassEvent = () => {
  const [massEvents, setMassEvents] = useState([]);
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  return (
    <section
      className="mass-event cpt-6 cpb-6"
      data-aos="fade-up"
      data-aos-duration="2000"
    >
      <div className="container">
        <div className="row">
          {/* Left Content */}
          <div className=" col-lg-6">
            <div className="mass-event-left">
              <h1>Mass Times and Upcoming Events</h1>
              <p>
                Join us for Mass, socials, events, courses, and more. Take a
                look at what&apos;s coming up.
              </p>
              <div className="mass-event-btn-group">
                <a href="/#event" className="custom-btn-alt mass-btn">
                  All Events
                </a>
                <a href="/#event" className="custom-btn-alt get-qucte-btn">
                  Mass times
                </a>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="col-lg-6">
            <div className="mass-event-right" id="event">
              <iframe
                src="https://holyinnocents.churchsuite.co.uk/embed/calendar?view=agenda&hide=daynames,navigation&theme=light&accent=%234a90e2&font=Inter&preview=false"
                width="599"
                height="450"
                style={{
                  border: "none",
                  borderRadius: "10px",
                  padding: "15px",
                  boxShadow: "0 8px 20px rgba(0,0,0,0.09)",
                }}
                frameBorder="0"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MassEvent;
