"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Upcoming = () => {
  const [event, setEvent] = useState(null);
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const [recentPosts, setRecentPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [imageLoaded, setImageLoaded] = useState(false);
  // Fetch upcoming event
  useEffect(() => {
    fetch(`${baseUrl}/api/events`)
      .then((res) => res.json())
      .then((data) => {
        const events = data.events;
        const latestEvent = events[events.length - 1];
        setEvent(latestEvent);
      })
      .catch((err) => console.log(err));
  }, []);

  // Fetch recent posts
  useEffect(() => {
    fetchRecentPosts();
  }, []);

  const fetchRecentPosts = async () => {
    try {
      const response = await fetch(`${baseUrl}/api/recent-blog-posts`);
      const data = await response.json();
      setRecentPosts(data);
    } catch (error) {
      console.error("Error fetching recent posts:", error);
    } finally {
      setLoading(false);
    }
  };

  const formatEventDate = (dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  if (!event) {
    return <p></p>;
  }

  return (
    <section className="up-coming">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="up-coming-left mass-event-left">
              <h1>Upcoming Events</h1>
              <div className="up-coming-img">
                <Image
                  height={525}
                  width={657}
                  src={event.banner_image}
                  alt={event.title}
                />
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="event-right-side up-coming-right">
              <ul>
                {loading
                  ? [...Array(4)].map((_, index) => (
                      <li key={index}>
                        <div className="event-card-list">
                          <div className="event-card-img">
                            <Skeleton height={60} width={100} />
                          </div>
                          <div className="event-card-title">
                            <h5>
                              <Skeleton width={180} />
                            </h5>
                            <p className="event-card-date">
                              <Skeleton width={120} />
                            </p>
                          </div>
                        </div>
                      </li>
                    ))
                  : recentPosts.map((event) => (
                      <li key={event.id}>
                        <Link href={`/event/${event?.slug}`}>
                          <div className="event-card-list">
                            <div className="event-card-img">
                              <img src={event?.image} alt={event?.title} />
                            </div>
                            <div className="event-card-title">
                              <h5>{event?.title}</h5>
                              <p className="event-card-date">
                                {formatEventDate(event?.event_date)}
                              </p>
                            </div>
                          </div>
                        </Link>
                      </li>
                    ))}

                {!loading && recentPosts.length === 0 && (
                  <p>No upcoming events found.</p>
                )}
              </ul>

              <div className="d-flex justify-content-center">
                <Link href={"/event"} className="custom-btn learn-more-btn">
                  Recent Events
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Upcoming;
