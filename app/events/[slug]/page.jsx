"use client";
import Link from "next/link";
import React, { useState } from "react";

const EventsPage = () => {
  // Example event data (replace with your API later)
  const allEvents = [
    {
      id: 1,
      title: "A Celebration of the Rosary by the Filipino Community",
      date: "31st October 2025",
      image: "/assets/images/event4.jpg",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic perspiciatis laudantium temporibus neque enim quia iste quam tenetur velit similique illum atque",
    },
    {
      id: 2,
      title: "Annual Parish Picnic and Family Gathering",
      date: "15th November 2025",
      image: "/assets/images/event2.jpg",
      description:
        "Join us for a day of fun, food, and fellowship at the parish picnic! Everyone is welcome to bring family and friends.",
    },
    {
      id: 3,
      title: "Christmas Eve Mass and Carol Singing",
      date: "24th December 2025",
      image: "/assets/images/event3.jpg",
      description:
        "Celebrate the joy of Christmas with a beautiful Mass followed by carols and refreshments in the parish hall.",
    },
  ];

  const [currentPage, setCurrentPage] = useState(0);
  const eventsPerPage = 1; // Show one event per page
  const totalPages = Math.ceil(allEvents.length / eventsPerPage);

  const handleNext = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 0) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const currentEvent = allEvents[currentPage];

  return (
    <section className="event-page ">
      <div className="container">
        <div className="row">
          {/* Left Section */}
          <div className="col-lg-9">
            <div className="event-wrapper">
              <h3>{currentEvent.title}</h3>
              <p>{currentEvent.date}</p>
              <div className="event-content-item">
                <div className="event-img-item">
                  <img
                    src={currentEvent.image}
                    alt={currentEvent.title}
                    style={{ width: "100%", borderRadius: "8px" }}
                  />
                </div>
                <p className="pt-4">{currentEvent.description}</p>
              </div>

              {/* Pagination Buttons */}
              <div className="d-flex justify-content-between align-items-center mt-4">
                <button
                  className="custom-btn"
                  onClick={handlePrevious}
                  disabled={currentPage === 0}
                >
                  ← Previous
                </button>
                <span>
                  Page {currentPage + 1} of {totalPages}
                </span>
                <button
                  className="custom-btn"
                  onClick={handleNext}
                  disabled={currentPage === totalPages - 1}
                >
                  Next →
                </button>
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="col-lg-3">
            <div className="event-right-side">
              <h4>Events Archives</h4>
              <ul>
                {allEvents.map((event) => (
                  <li key={event.id}>
                    <Link href={`/events/${event.id}`}>{event.date}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsPage;
