import React from "react";
import NewsletterSection from "../components/section/NewsletterSection";

const allNewsletterPage = () => {
  return (
    <>
      <section className="event-banner">
        <div className="container">
          <div className="event-header-content">
            <h1>All Newsletters</h1>
          </div>
        </div>
      </section>
      <NewsletterSection />
    </>
  );
};

export default allNewsletterPage;
