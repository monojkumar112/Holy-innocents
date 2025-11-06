'use client';
import React, { useEffect, useState } from "react";
import Banner from "../components/section/Banner";

const AllNoticePage = () => {
  const data = {
    title: "Our Notices ",
    description: `Our Christian communities must become genuine schools of prayer `,
  };
  const [notices, setNotices] = useState([]);
 
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const getNotices = async () => {
    const response = await fetch(`${baseUrl}/api/all-notices`);
    const data = await response.json();
    console.log(data)
    setNotices(data);
  };
  useEffect(() => {
    getNotices();
  }, []);

  return (
    <>
      <Banner data={data} />
      <section
        className="notice cpy-6"
        data-aos="fade-up"
        data-aos-duration="3000"
      >
        <div className="container">
          <div className="row">
            
            {notices.map((notice) => (
              <div className="col-md-6 col-lg-4 mb-4" key={notice.id}>
                <div className="notice-left" style={{ backgroundColor: notice.card_color || '#ffffff' }}>
                  <h2>{notice?.title}</h2>
                  <div className="parish-content">
                    <div
                      dangerouslySetInnerHTML={{
                        __html: notice?.body ?? 'No Content Available',
                      }}
                    />
                  </div>
                </div>
              </div>
            ))}

           
          </div>
        </div>
      </section>
    </>
  );
};

export default AllNoticePage;
