import Image from "next/image";
import React from "react";
import { CiCalendar } from "react-icons/ci";
import { IoMdTime } from "react-icons/io";
import { LuMapPin } from "react-icons/lu";

const MassEvent = () => {
  return (
    <>
      <section
        className="mass-event cpt-6 cpb-6"
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-5">
              <div className="mass-event-left">
                <h1>Mass Times and​Upcoming Events</h1>
                <p>
                  Join us for Mass, socials, events, courses, and more. Take a
                  look at what&apos;s coming up.
                </p>
                <div className="mass-event-btn-group">
                  <a href="/about.html" className="custom-btn-alt mass-btn">
                    All Events
                  </a>
                  <a href="/#contact" className="custom-btn-alt get-qucte-btn">
                    Mass times
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-7">
              <div className="mass-event-right">
                <ul>
                  <li>
                    <div className="mass-event-item">
                      <div className="mass-event-contnet-item">
                        <h4>Adoration room Open</h4>
                        <div className="mass-event-date">
                          <CiCalendar />
                          <p>Thursday, 28-Aug-2025</p>
                        </div>
                        <div className="mass-event-date">
                          <IoMdTime />
                          <p>10:30am - 11:30am</p>
                        </div>
                        <div className="mass-event-date">
                          <LuMapPin />
                          <p>The Church</p>
                        </div>
                      </div>
                      <div className="mass-event-img">
                        <Image
                          src={"/assets/images/event-1.png"}
                          width={135}
                          height={135}
                          alt="Event"
                        />
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="mass-event-item">
                      <div className="mass-event-contnet-item">
                        <h4>Adoration room Open</h4>
                        <div className="mass-event-date">
                          <CiCalendar />
                          <p>Thursday, 28-Aug-2025</p>
                        </div>
                        <div className="mass-event-date">
                          <IoMdTime />
                          <p>10:30am - 11:30am</p>
                        </div>
                        <div className="mass-event-date">
                          <LuMapPin />
                          <p>The Church</p>
                        </div>
                      </div>
                      <div className="mass-event-img">
                        <Image
                          src={"/assets/images/event-1.png"}
                          width={135}
                          height={135}
                          alt="Event"
                        />
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="mass-event-item">
                      <div className="mass-event-contnet-item">
                        <h4>Adoration room Open</h4>
                        <div className="mass-event-date">
                          <CiCalendar />
                          <p>Thursday, 28-Aug-2025</p>
                        </div>
                        <div className="mass-event-date">
                          <IoMdTime />
                          <p>10:30am - 11:30am</p>
                        </div>
                        <div className="mass-event-date">
                          <LuMapPin />
                          <p>The Church</p>
                        </div>
                      </div>
                      <div className="mass-event-img">
                        <Image
                          src={"/assets/images/event-1.png"}
                          width={135}
                          height={135}
                          alt="Event"
                        />
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="mass-event-item">
                      <div className="mass-event-contnet-item">
                        <h4>Adoration room Open</h4>
                        <div className="mass-event-date">
                          <CiCalendar />
                          <p>Thursday, 28-Aug-2025</p>
                        </div>
                        <div className="mass-event-date">
                          <IoMdTime />
                          <p>10:30am - 11:30am</p>
                        </div>
                        <div className="mass-event-date">
                          <LuMapPin />
                          <p>The Church</p>
                        </div>
                      </div>
                      <div className="mass-event-img">
                        <Image
                          src={"/assets/images/event-1.png"}
                          width={135}
                          height={135}
                          alt="Event"
                        />
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MassEvent;
