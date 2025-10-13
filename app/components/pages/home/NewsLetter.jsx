import Image from "next/image";
import React from "react";

const NewsLetter = () => {
  return (
    <>
      <section className="newsletter">
        <div className="container">
          <div className="newsletter-wrapper">
            <div className="newsletter-left">
              <h2 className="section-title">Current Newsletter</h2>
              <p>
                Stay updated with the latest news and events from our parish
                community.
              </p>
              <div className="mass-event-btn-group">
                <a href="/about.html" className="custom-btn download-btn">
                  Download
                </a>
                <a href="/#contact" className="custom-btn-alt subscribe-btn">
                  Subscribe
                </a>
              </div>
            </div>
            <div className="newsletter-right">
              <Image
                src={"/assets/images/news.png"}
                width={290}
                height={270}
                alt="Newsletter"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NewsLetter;
