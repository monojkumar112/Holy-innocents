import React from "react";
import EventSection from "../components/section/EventSection";

const EventPage = () => {
  return (
    <>
      <section className="event-banner">
        <div className="container">
          <div className="event-header-content">
            <h1>Recent Events</h1>
            <p>Stay updated with our latest events and activities.</p>
          </div>
        </div>
      </section>
      <EventSection />
    </>
  );
};

export default EventPage;
