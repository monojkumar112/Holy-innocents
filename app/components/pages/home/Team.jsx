"use client";
import Image from "next/image";
import React, { useState, useCallback } from "react";
import { FaRegEnvelope } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";

const Team = () => {
  const [team, setTeam] = useState([]);
  const [nextPageUrl, setNextPageUrl] = useState(null);
  const [loading, setLoading] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const fetchTeam = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(`${baseUrl}/api/leadership-teams`);
      const data = await response.json();
      setTeam(data.data.data);
      setNextPageUrl(data.data.next_page_url);
    } catch (error) {
      console.error("Error fetching team:", error);
    } finally {
      setLoading(false);
    }
  }, [baseUrl]);

  const loadMore = useCallback(async () => {
    if (!nextPageUrl || loadingMore) return;

    setLoadingMore(true);
    try {
      const response = await fetch(nextPageUrl);
      const data = await response.json();
      setTeam((prevTeam) => [...prevTeam, ...data.data.data]);
      setNextPageUrl(data.data.next_page_url);
    } catch (error) {
      console.error("Error loading more team members:", error);
    } finally {
      setLoadingMore(false);
    }
  }, [nextPageUrl, loadingMore]);
  React.useEffect(() => {
    if (!baseUrl) return;
    fetchTeam();
  }, [baseUrl, fetchTeam]);

  console.log("Team", team);
  return (
    <>
      {/* <!-- ================== Our Team ================ --> */}
      <section
        className="team cpy-6"
        data-aos="fade-up"
        data-aos-duration="3000"
      >
        <div className="container">
          <div className="team-section-title">
            <h2 className="section-title">Our Clergy Team</h2>
            <p>
              Our leadership team is dedicated to serving our community and
              fostering a welcoming environment for all.
            </p>
          </div>
          <div className="team-wrapper">
            {loading ? (
              <div className="d-flex justify-content-center">
                <div className="spinner-border text-primary" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
            ) : (
              <div className="row">
                {team.map((item) => (
                  <div className="col-md-6 col-lg-4 mb-3" key={item.id}>
                    <div className="team-item">
                      <div className="team-img">
                        <Image
                          src={
                            item.profile_image &&
                            item.profile_image !== "members/" &&
                            item.profile_image !== ""
                              ? item.profile_image.startsWith("http")
                                ? item.profile_image
                                : `${baseUrl}/${item.profile_image.replace(
                                    /^\/+/,
                                    ""
                                  )}`
                              : "/assets/blank-profile.png"
                          }
                          width={416}
                          height={416}
                          alt={item.name || "Team Member"}
                        />
                      </div>
                      <div className="team-content">
                        <h3>{item.name ? item.name : "N/A"}</h3>
                        <p>{item.role ? item.role : "N/A"}</p>
                        <ul className="team-social-list">
                          <li>
                            <a
                              href={item.email ? item.email : "#"}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <FaRegEnvelope />
                              <span>{item.email ? item.email : "N/A"}</span>
                            </a>
                          </li>
                          <li>
                            <a
                              href={item.phone ? item.phone : "#"}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <FaPhoneAlt />
                              <span>{item.phone ? item.phone : "N/A"}</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
            {nextPageUrl && (
              <div className="d-flex see-more-btn justify-content-center">
                <button
                  onClick={loadMore}
                  disabled={loadingMore}
                  className="custom-btn load-more-btn btn-sm"
                  style={{
                    cursor: loadingMore ? "not-allowed" : "pointer",
                    opacity: loadingMore ? 0.6 : 1,
                  }}
                >
                  {loadingMore ? "Loading..." : "See More"}
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Team;
