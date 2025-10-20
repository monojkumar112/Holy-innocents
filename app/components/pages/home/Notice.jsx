'use client'
import React, { useState, useEffect, useCallback } from "react";

const Notice = () => {

  const [notices, setNotices] = useState([]);
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  const [nextPageUrl, setNextPageUrl] = useState(null);
  const [loading, setLoading] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);




  const fetchNotices = async () => {

    try {
      setLoading(true);
      const response = await fetch(`${baseUrl}/api/notices`);
      const notice = await response.json();
      setNotices(notice.data.data);
      setNextPageUrl(notice.data.next_page_url);
    } catch (error) {
      console.error('Error fetching notices:', error);
    } finally {
      setLoading(false);
    }
  };

  const loadMore = useCallback(async () => {
    if (!nextPageUrl || loadingMore) return;

    setLoadingMore(true);
    try {
      const response = await fetch(nextPageUrl);
      const data = await response.json();
      setNotices(prevNotices => [...prevNotices, ...data.data.data]);
      setNextPageUrl(data.data.next_page_url);
      console.log('next notice', data.data.data)
    } catch (error) {
      console.error('Error loading more notices:', error);
    } finally {
      setLoadingMore(false);
    }
  }, [nextPageUrl, loadingMore]);

  useEffect(() => {
    fetchNotices();
  }, []);


  // console.log('Notice', notices);

  return (
    <>
      <section
        className="notice cpy-6"
        data-aos="fade-up"
        data-aos-duration="3000"
      >
        <div className="container">
          <div className="row">

            {notices.map((notice) => (
              <div className="col-md-6 col-lg-6 mb-3" key={notice.id}>
                <div
                  className="notice-left"
                  style={{ backgroundColor: notice.card_color || '#ffffff' }}
                >
                  <h2>{notice.title ? notice.title : 'No Title Available'}</h2>
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
          <div>
            {/* see more  */}
            {nextPageUrl && (
              <div className="d-flex see-more-btn justify-content-center">
                <button
                  onClick={loadMore}
                  disabled={loadingMore}
                  className="custom-btn load-more-btn btn-sm"
                  style={{
                    cursor: loadingMore ? 'not-allowed' : 'pointer',
                    opacity: loadingMore ? 0.6 : 1
                  }}
                >
                  {loadingMore ? 'Loading...' : 'See More'}
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Notice;
