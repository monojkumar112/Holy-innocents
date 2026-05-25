"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FiSearch, FiX } from "react-icons/fi";

const SearchPage = ({ searchParams }) => {
  const [results, setResults] = useState({
    members: [],
    pages: [],
    events: [], // Blogs
    calendarEvents: [], // Calendar events
    notices: [],
    newsletters: [],
  });
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Get the search query from URL params
    const query = searchParams?.q || "";
    if (query) {
      setSearchQuery(query);
      getResults(query);
    }
  }, [searchParams]);

  // Data fetching
  const getResults = async (searchQuery) => {
    if (!searchQuery || !searchQuery.trim()) {
      setResults({
        members: [],
        pages: [],
        events: [],
        calendarEvents: [],
        notices: [],
        newsletters: [],
      });
      return;
    }

    setLoading(true);
    setError(null);
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

    try {
      const res = await fetch(
        `${baseUrl}/api/search?q=${encodeURIComponent(searchQuery)}`
      );
      if (!res.ok) throw new Error("Failed to fetch");
      const response = await res.json();

      // Handle API response structure: { message: "...", data: { members: [], pages: [], blogs: [], events: [], notices: [], newsletters: [] } }
      const data = response.data || response;
      setResults({
        members: Array.isArray(data.members) ? data.members : [],
        pages: Array.isArray(data.pages) ? data.pages : [],
        events: Array.isArray(data.blogs) ? data.blogs : [], // Blogs go to events
        calendarEvents: Array.isArray(data.events) ? data.events : [], // Calendar events
        notices: Array.isArray(data.notices) ? data.notices : [],
        newsletters: Array.isArray(data.newsletters) ? data.newsletters : [],
      });
    } catch (err) {
      console.error(err);
      setError(err.message || "Something went wrong");
      setResults({
        members: [],
        pages: [],
        events: [],
        calendarEvents: [],
        notices: [],
        newsletters: [],
      });
    } finally {
      setLoading(false);
    }
  };

  // Dynamic search
  const handleNewSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      getResults(searchQuery);
    }
  };

  // Reset search form and results
  const handleReset = (e) => {
    e.preventDefault();
    setSearchQuery("");
    setError(null);
    setResults({
      members: [],
      pages: [],
      events: [],
      calendarEvents: [],
      notices: [],
      newsletters: [],
    });
  };

  // Check if any results exist
  const hasResults = () => {
    return (
      (results.members && results.members.length > 0) ||
      (results.pages && results.pages.length > 0) ||
      (results.events && results.events.length > 0) ||
      (results.calendarEvents && results.calendarEvents.length > 0) ||
      (results.notices && results.notices.length > 0) ||
      (results.newsletters && results.newsletters.length > 0)
    );
  };

  // Format date helper
  const formatDate = (dateString) => {
    if (!dateString) return "N/A";
    try {
      return new Date(dateString).toLocaleDateString("en-US", {
        weekday: "long",
        day: "2-digit",
        month: "short",
        year: "numeric",
      });
    } catch {
      return dateString;
    }
  };

  // Format date range helper for calendar events
  const formatDateRange = (startDate, endDate) => {
    if (!startDate) return "N/A";
    try {
      const start = new Date(startDate);
      const startFormatted = start.toLocaleDateString("en-US", {
        weekday: "long",
        day: "2-digit",
        month: "short",
        year: "numeric",
      });

      if (endDate && endDate !== startDate) {
        const end = new Date(endDate);
        const endFormatted = end.toLocaleDateString("en-US", {
          weekday: "long",
          day: "2-digit",
          month: "short",
          year: "numeric",
        });
        return `${startFormatted} - ${endFormatted}`;
      }
      return startFormatted;
    } catch {
      return startDate;
    }
  };


  return (
    <>
      <section className="search-banner-section">
        <div className="container">
          <div className="search-banner-wrapper">
            <h1>Search Results</h1>
            <p>Find what you&apos;re looking for across our website</p>
          </div>
        </div>
      </section>

      <section className="search-results-section">
        <div className="container">
          <div className="search-results-wrapper">
            {/* Search Form */}
            <div className="search-form-wrapper">
              <form onSubmit={handleNewSearch}>
                <div className="search-input-group">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search the website..."
                    className="search-input"
                  />
                  <div className="d-flex gap-2">
                    <button type="submit" className="search-btn">
                      <FiSearch /> Search
                    </button>
                    {(searchQuery || hasResults()) && (
                      <button
                        type="button"
                        onClick={handleReset}
                        className="search-btn"
                        style={{
                          backgroundColor: "#6c757d",
                          borderColor: "#6c757d",
                        }}
                      >
                        <FiX /> Reset
                      </button>
                    )}
                  </div>
                </div>
              </form>
            </div>

            {/* Results */}
            <div className="search-results">
              {loading ? (
                <div className="text-center py-5">
                  <p>Loading results...</p>
                </div>
              ) : error ? (
                <div className="alert alert-danger" role="alert">
                  {error}
                </div>
              ) : !hasResults() ? (
                <div className="text-center py-5">
                  <p>No results found. Please try a different search term.</p>
                </div>
              ) : (
                <div>
                  {/* Members Section */}
                  {results.members && results.members.length > 0 && (
                    <div className="mb-5">
                      <h2 className="mb-4">Members ({results.members.length})</h2>
                      <div className="row">
                        {results.members.map((member) => (
                          <div
                            className="col-md-6 col-lg-4 mb-4"
                            key={member.id || member.member_id}
                          >
                            <div className="card h-100">
                              {member.profile_image && (
                                <img
                                  src={member.profile_image}
                                  className="card-img-top"
                                  alt={member.name || "Member"}
                                  style={{
                                    height: "200px",
                                    objectFit: "cover",
                                  }}
                                />
                              )}
                              <div className="card-body">
                                <h5 className="card-title">
                                  {member.name || "N/A"}
                                </h5>
                                {member.role && (
                                  <p className="card-text text-muted">
                                    {member.role}
                                  </p>
                                )}
                                {(member.email || member.phone) && (
                                  <div className="mt-3">
                                    {member.email && (
                                      <p className="mb-1">
                                        <a
                                          href={`mailto:${member.email}`}
                                          className="text-decoration-none"
                                        >
                                          {member.email}
                                        </a>
                                      </p>
                                    )}
                                    {member.phone && (
                                      <p className="mb-0">
                                        <a
                                          href={`tel:${member.phone}`}
                                          className="text-decoration-none"
                                        >
                                          {member.phone}
                                        </a>
                                      </p>
                                    )}
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Pages Section */}
                  {results.pages && results.pages.length > 0 && (
                    <div className="mb-5">
                      <h2 className="mb-4">Pages ({results.pages.length})</h2>
                      <div className="row">
                        {results.pages.map((page) => (
                          <div
                            className="col-md-12  mb-4"
                            key={page.page_id || page.id}
                          >
                            <div className="card h-100">
                              <div className="card-body">
                                <h3 className="card-title">
                                  <Link
                                    href={`/${page.category_slug || ""}/${page.slug || ""}`}
                                    className="text-decoration-none text-black"
                                  >
                                    {page.page_title || "Untitled Page"}
                                  </Link>
                                </h3>
                                {page.content_data?.paragraph1 && (
                                  <div
                                    className="card-text"
                                    dangerouslySetInnerHTML={{
                                      __html:
                                        page.content_data.paragraph1
                                    }}
                                  />
                                )}

                                <div className="result-meta">
                                  <Link
                                    href={`/${page.category_slug || ""}/${page.slug || ""}`}
                                    className=" mt-3"
                                  >
                                    View Page →
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Events Section */}
                  {results.events && results.events.length > 0 && (
                    <div className="mb-5">
                      <h2 className="mb-4">Events ({results.events.length})</h2>
                      <div className="d-flex flex-column gap-4">
                        {results.events.map((event) => (
                          <div
                            key={event.id || event.event_id}
                            className="card border-0 shadow-sm"
                            style={{
                              transition: "all 0.3s ease",
                              overflow: "hidden",
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.transform = "translateY(-4px)";
                              e.currentTarget.style.boxShadow =
                                "0 8px 25px rgba(0,0,0,0.15)";
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.transform = "translateY(0)";
                              e.currentTarget.style.boxShadow =
                                "0 2px 10px rgba(0,0,0,0.1)";
                            }}
                          >
                            <div className="row g-0">
                              {(event.image || event.banner_image) && (
                                <div className="col-md-4">
                                  <img
                                    src={event.image || event.banner_image}
                                    className="img-fluid rounded-start"
                                    alt={event.title || "Event"}
                                    style={{
                                      width: "100%",
                                      height: "100%",
                                      minHeight: "200px",
                                      objectFit: "cover",
                                    }}
                                  />
                                </div>
                              )}
                              <div
                                className={event.image || event.banner_image ? "col-md-8" : "col-12"}
                              >
                                <div className="card-body p-4">
                                  <h5 className="card-title mb-3">
                                    <Link
                                      href={`/event/${event.slug || ""}`}
                                      className="text-decoration-none text-dark"
                                      style={{
                                        fontSize: "1.5rem",
                                        fontWeight: "600",
                                      }}
                                    >
                                      {event.title || "Untitled Event"}
                                    </Link>
                                  </h5>
                                  <div className="d-flex flex-column gap-2 mb-3">
                                    {(event.start_date || event.event_date) && (
                                      <p className="card-text text-muted mb-0">
                                        <i className="bi bi-calendar3 me-2"></i>
                                        <strong>Date:</strong>{" "}
                                        {formatDate(
                                          event.start_date || event.event_date
                                        )}
                                      </p>
                                    )}
                                    {event.location && (
                                      <p className="card-text text-muted mb-0">
                                        <i className="bi bi-geo-alt me-2"></i>
                                        <strong>Location:</strong> {event.location}
                                      </p>
                                    )}
                                    {event.category?.name && (
                                      <p className="card-text text-muted mb-0">
                                        <i className="bi bi-tag me-2"></i>
                                        <strong>Category:</strong>{" "}
                                        {event.category.name}
                                      </p>
                                    )}
                                  </div>
                                  <Link
                                    href={`/event/${event.slug || ""}`}
                                    className="custom-btn mt-2"
                                    style={{
                                      borderRadius: "6px",
                                      padding: "8px 24px",
                                    }}
                                  >
                                    View Event →
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Calendar Events Section */}
                  {results.calendarEvents && results.calendarEvents.length > 0 && (
                    <div className="mb-5">
                      <h2 className="mb-4">
                        Calendar Events ({results.calendarEvents.length})
                      </h2>
                      <div className="d-flex flex-column gap-4">
                        {results.calendarEvents.map((event) => (
                          <div
                            key={event.id}
                            className="card border-0 shadow-sm"
                            style={{
                              transition: "all 0.3s ease",
                              overflow: "hidden",
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.transform = "translateY(-4px)";
                              e.currentTarget.style.boxShadow =
                                "0 8px 25px rgba(0,0,0,0.15)";
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.transform = "translateY(0)";
                              e.currentTarget.style.boxShadow =
                                "0 2px 10px rgba(0,0,0,0.1)";
                            }}
                          >
                            <div className="row g-0">
                              {event.banner_image && (
                                <div className="col-md-4">
                                  <img
                                    src={event.banner_image}
                                    className="img-fluid rounded-start"
                                    alt={event.title || "Event"}
                                    style={{
                                      width: "100%",
                                      height: "100%",
                                      minHeight: "200px",
                                      objectFit: "cover",
                                    }}
                                  />
                                </div>
                              )}
                              <div
                                className={event.banner_image ? "col-md-8" : "col-12"}
                              >
                                <div className="card-body p-4">
                                  <h5
                                    className="card-title mb-3"
                                    style={{
                                      fontSize: "1.5rem",
                                      fontWeight: "600",
                                    }}
                                  >
                                    {event.title || "Untitled Event"}
                                  </h5>
                                  {event.description && (
                                    <div
                                      className="card-text text-muted mb-3"
                                      style={{
                                        display: "-webkit-box",
                                        WebkitLineClamp: 3,
                                        WebkitBoxOrient: "vertical",
                                        overflow: "hidden",
                                        textOverflow: "ellipsis",
                                      }}
                                      dangerouslySetInnerHTML={{
                                        __html:
                                          event.description.length > 200
                                            ? event.description.substring(0, 200) +
                                            "..."
                                            : event.description,
                                      }}
                                    />
                                  )}
                                  <div className="d-flex flex-column gap-2 mb-3">
                                    {(event.start_date || event.end_date) && (
                                      <p className="card-text text-muted mb-0">
                                        <i className="bi bi-calendar3 me-2"></i>
                                        <strong>Date:</strong>{" "}
                                        {formatDateRange(
                                          event.start_date,
                                          event.end_date
                                        )}
                                      </p>
                                    )}
                                    {event.location && (
                                      <p className="card-text text-muted mb-0">
                                        <i className="bi bi-geo-alt me-2"></i>
                                        <strong>Location:</strong> {event.location}
                                      </p>
                                    )}
                                    {event.address && (
                                      <p className="card-text text-muted mb-0">
                                        <i className="bi bi-house me-2"></i>
                                        <strong>Address:</strong> {event.address}
                                      </p>
                                    )}
                                    {event.status && (
                                      <p className="card-text mb-0">
                                        <span
                                          className={`badge ${event.status === "upcoming"
                                            ? "bg-primary"
                                            : event.status === "ongoing"
                                              ? "bg-success"
                                              : "bg-secondary"
                                            }`}
                                        >
                                          {event.status.charAt(0).toUpperCase() +
                                            event.status.slice(1)}
                                        </span>
                                      </p>
                                    )}
                                    {event.capacity && (
                                      <p className="card-text text-muted mb-0">
                                        <i className="bi bi-people me-2"></i>
                                        <strong>Capacity:</strong> {event.capacity}
                                      </p>
                                    )}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Notices Section */}
                  {results.notices && results.notices.length > 0 && (
                    <div className="mb-5">
                      <h2 className="mb-4">Notices ({results.notices.length})</h2>
                      <div className="row">
                        {results.notices.map((notice) => (
                          <div
                            className="col-md-12 mb-4"
                            key={notice.id || notice.notice_id}
                          >
                            <div
                              className="card h-100"
                            // style={{
                            //   backgroundColor:
                            //     notice.card_color || "#ffffff",
                            // }}
                            >
                              <div className="card-body">
                                <h5 className="card-title">
                                  {notice.title || "Untitled Notice"}
                                </h5>
                                {notice.body && (
                                  <div
                                    className="card-text"
                                    dangerouslySetInnerHTML={{
                                      __html: notice.body
                                    }}
                                  />
                                )}

                                <div className="mt-3 d-flex flex-column gap-2">
                                  {notice.effective_date && (
                                    <p className="card-text text-muted mb-0">
                                      <i className="bi bi-calendar3 me-2"></i>
                                      <strong>Published Date:</strong>{" "}
                                      {formatDate(notice.effective_date)}
                                    </p>
                                  )}
                                  {notice.file_path && (
                                    <div className="mt-2">
                                      {notice.file_path.match(/\.(jpg|jpeg|png|gif|webp|svg)$/i) ? (
                                        <a
                                          href={notice.file_path}
                                          target="_blank"
                                          rel="noopener noreferrer"
                                          className="d-inline-block"
                                        >
                                          <img
                                            src={notice.file_path}
                                            alt={notice.title || "Notice file"}
                                            className="img-fluid rounded"
                                            style={{
                                              maxHeight: "300px",
                                              maxWidth: "100%",
                                              objectFit: "contain",
                                            }}
                                          />
                                        </a>
                                      ) : (
                                        <a
                                          href={notice.file_path}
                                          target="_blank"
                                          rel="noopener noreferrer"
                                          className="btn btn-primary btn-sm"
                                        >
                                          <i className="bi bi-download me-2"></i>
                                          Download File
                                        </a>
                                      )}
                                    </div>
                                  )}
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Newsletters Section */}
                  {results.newsletters &&
                    results.newsletters.length > 0 && (
                      <div className="mb-5">
                        <h2 className="mb-4">
                          Newsletters ({results.newsletters.length})
                        </h2>
                        <div className="row">
                          {results.newsletters.map((newsletter) => (
                            <div
                              className="col-md-12 mb-4"
                              key={newsletter.id || newsletter.newsletter_id}
                            >
                              <div className="card h-100">
                                <div className="card-body">
                                  <h5 className="card-title">
                                    {newsletter.title || "Untitled Newsletter"}
                                  </h5>
                                  {newsletter.description && (
                                    <div
                                      className="card-text"
                                      dangerouslySetInnerHTML={{
                                        __html:
                                          newsletter.description.length > 150
                                            ? newsletter.description
                                            : newsletter.description,
                                      }}
                                    />
                                  )}
                                  <div>
                                    {newsletter.image && (
                                      <img
                                        style={{ width: "200px" }}
                                        src={newsletter.image}
                                        alt="newsletter"
                                        className="img-fluid"
                                      />
                                    )}

                                  </div>
                                  <div className="mt-3">
                                    {newsletter.file_link && (
                                      <a
                                        href={newsletter.file_link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn btn-primary btn-sm me-2"
                                      >
                                        Download
                                      </a>
                                    )}

                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SearchPage;
