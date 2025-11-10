import Link from "next/link";
import React from "react";

const EventsPage = () => {
  return (
    <>
      <section className="event-page">
        <div className="container">
          <div className="row">
            <div className="col-lg-9">
              <div className="event-wrapper">
                <h3>
                  A Celebration of the Rosary by the Filipino Community followed
                  by Fellowship 31st October 2025
                </h3>
                <p> 1/11/2025</p>

                <div className="event-img-item">
                  <img src="/assets/images/event4.jpg" alt="Event Image" />
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="event-right-side">
                <h4>Events Archives</h4>
                <ul>
                  <li>
                    <Link href="/events/event-1">November 2025</Link>
                  </li>
                  <li>
                    <Link href="/events/event-1">November 2025</Link>
                  </li>
                  <li>
                    <Link href="/events/event-1">November 2025</Link>
                  </li>
                  <li>
                    <Link href="/events/event-1">November 2025</Link>
                  </li>
                  <li>
                    <Link href="/events/event-1">November 2025</Link>
                  </li>
                  <li>
                    <Link href="/events/event-1">November 2025</Link>
                  </li>
                  <li>
                    <Link href="/events/event-1">November 2025</Link>
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

export default EventsPage;
