import Link from "next/link";
import React from "react";

const EventSection = () => {
  return (
    <section className="event-section">
      <div className="container">
        <div className="row">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div className="col-lg-4 col-md-6" key={item}>
              <div className="event-card">
                <div className="event-image">
                  <img src="/assets/images/event.jpg" alt="Event 1" />
                </div>
                <div className="event-info">
                  <p className="event-date">Sunday, 18th of February 2025</p>
                  <Link href={"/"} className="event-title">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nobis, libero! Voluptatibus dolorum repudiandae tempora
                    magni est recusandae ullam facere inventore.{" "}
                  </Link>

                  <p className="event-description">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Minus ullam quam, voluptas debitis incidunt repellendus
                    alias quas. Velit nesciunt voluptatibus, mollitia
                    aspernatur, suscipit ipsa quisquam iste ducimus saepe, ex
                    neque.
                  </p>
                  <Link className="read-more" href={"/"}>
                    {" "}
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="View-more-btn d-flex align-items-center justify-content-center mt-4">
          <button className="custom-btn">
            <span>View More Events</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default EventSection;
