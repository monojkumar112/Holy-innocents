'use client'
import Image from "next/image";
import React, { useState } from "react";
import { CiCalendar } from "react-icons/ci";
import { IoMdTime } from "react-icons/io";
import { LuMapPin } from "react-icons/lu";

const MassEvent = () => {

  const [massEvents, setMassEvents] = useState([]);
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  const fetchMassEvents = async (url) => {
    const fetchUrl = url ?? `${baseUrl}/api/events`;
    try {
      const response = await fetch(fetchUrl);
      if (!response.ok) throw new Error("Failed to fetch mass events");
      const data = await response.json();
      setMassEvents(data?.events || []);
    } catch (error) {
      console.error("Error fetching mass events:", error);
    }
  };
  React.useEffect(() => {
    if (!baseUrl) return;
    setMassEvents([]); // reset before first load
    fetchMassEvents(); // load page 1
  }, [baseUrl]);
  console.log("Events", massEvents);



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

                  {massEvents.map((event) => (
                    <li key={event.id}>
                      <div className="mass-event-item">
                        <div className="mass-event-contnet-item">
                          <h4>{event.title ? event.title : "N/A"}</h4>
                          <div className="mass-event-date">
                            <CiCalendar />
                            {/* <p>{event.start_date ? event.start_date : "N/A"}</p> */}
                            <p>
                              {event.start_date
                                ? new Date(event.start_date).toLocaleDateString('en-US', {
                                  weekday: 'long', // Thursday
                                  day: '2-digit',  // 28
                                  month: 'short',  // Aug
                                  year: 'numeric'  // 2025
                                }) : "N/A"} - {event.end_date ? new Date(event.end_date).toLocaleDateString('en-US', {
                                  weekday: 'long', // Thursday
                                  day: '2-digit',  // 28
                                  month: 'short',  // Aug
                                  year: 'numeric'  // 2025
                                }) : "N/A"}
                            </p>

                          </div>
                          <div className="mass-event-date">
                            <IoMdTime />
                            {/* <p>10:30am - 11:30am</p> */}
                            <p>
                              {event.start_date && event.end_date
                                ? `${new Date(event.start_date).toLocaleTimeString('en-US', {
                                  hour: '2-digit',
                                  minute: '2-digit',
                                  hour12: true
                                })} - ${new Date(event.end_date).toLocaleTimeString('en-US', {
                                  hour: '2-digit',
                                  minute: '2-digit',
                                  hour12: true
                                })}`
                                : "N/A"}
                            </p>


                          </div>
                          <div className="mass-event-date">
                            <LuMapPin />
                            <p>{event.location ? event.location : "N/A"}</p>
                          </div>
                        </div>
                        <div className="mass-event-img">
                          <Image
                            src={event.banner_image ? event.banner_image : "/assets/images/event-1.png"}
                            width={135}
                            height={135}
                            alt="Event"
                          />
                        </div>
                      </div>
                    </li>
                  ))}
                  {/* <li>
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
                  </li> */}

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
