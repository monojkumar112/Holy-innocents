'use client'
import Image from "next/image";
import React, { useState } from "react";

const NewsLetter = () => {
  // fetch newslatter form api 
  const [newsletter, setNewsletter] = useState(null);
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const fetchNewsletter = async () => {
    const response = await fetch(`${baseUrl}/api/newsletter`);
    const data = await response.json();
    setNewsletter(data.data);
  };
  React.useEffect(() => {
    if (!baseUrl) return;
    fetchNewsletter();
  }, [baseUrl]);
  console.log("Newsletter", newsletter);

  return (
    <>
      <section
        className="newsletter"
        data-aos="fade-up"
        data-aos-duration="3000"
      >
        <div className="container">
          <div className="newsletter-wrapper">
            <div className="newsletter-left">
              <h2 className="section-title">{newsletter?.title ? newsletter.title : "Current Newsletter"}</h2>

              <div dangerouslySetInnerHTML={{
                __html: newsletter?.description
                  ? newsletter.description
                  : "Stay updated with the latest news and events from our parish community.",
              }} />

              <div className="mass-event-btn-group">
                <a target="_blank" href={newsletter?.file_link ? newsletter.file_link : "#"} className="custom-btn download-btn">
                  Download
                </a>
                <a href="/#contact" className="custom-btn-alt subscribe-btn">
                  Subscribe
                </a>
              </div>
            </div>
            <div className="newsletter-right">
              <Image
                src={newsletter?.image ? newsletter.image : "/assets/images/news.png"}
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
