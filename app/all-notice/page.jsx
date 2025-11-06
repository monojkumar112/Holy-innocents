"use client";
import React, { useEffect, useState } from "react";
import Banner from "../components/section/Banner";

const AllNoticePage = () => {
  const [notices, setNotices] = useState([]);
  const [loading, setLoading] = useState(false);

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  const fetchAllNotices = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${baseUrl}/api/notices`);
      const data = await response.json();
      setNotices(data.data.data);
    } catch (error) {
      console.error("Error loading notices:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAllNotices();
  }, []);

  const bannerData = {
    title: "Our Notices",
    description:
      "Our Christian communities must become genuine schools of prayer",
  };

  console.log("notices", notices);

  return (
    <>
      <Banner data={bannerData} />

      <section
        className="notice cpy-6"
        data-aos="fade-up"
        data-aos-duration="3000"
      >
        <div className="container">
          {loading ? (
            <p>Loading all notices...</p>
          ) : (
            <div className="row">
              {notices.length === 0 ? (
                <p>No notices available.</p>
              ) : (
                notices.map((notice) => (
                  <div className="col-md-6 col-lg-4 mb-4" key={notice.id}>
                    <div
                      className="notice-left"
                      style={{
                        backgroundColor: notice.card_color || "#ffffff",
                      }}
                    >
                      <h2>{notice.title || "No Title Available"}</h2>

                      <div
                        className="parish-content"
                        dangerouslySetInnerHTML={{
                          __html: notice.body ?? "No Content Available",
                        }}
                      />
                    </div>
                  </div>
                ))
              )}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default AllNoticePage;
