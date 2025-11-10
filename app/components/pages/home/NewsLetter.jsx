"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { IoMdClose } from "react-icons/io";

const NewsLetter = () => {
  const [newsletter, setNewsletter] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    comment: "",
  });

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  const fetchNewsletter = async () => {
    const response = await fetch(`${baseUrl}/api/newsletter`);
    const data = await response.json();
    setNewsletter(data.data);
  };

  useEffect(() => {
    if (!baseUrl) return;
    fetchNewsletter();
  }, [baseUrl]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // এখানে তোমার API endpoint দাও (example)
    const response = await fetch(`${baseUrl}/api/newsletter/subscribe`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      alert("Subscription successful!");
      setShowModal(false);
      setFormData({ name: "", email: "", comment: "" });
    } else {
      alert("Something went wrong!");
    }
  };

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
              <h2 className="section-title">
                {newsletter?.title ? newsletter.title : "Current Newsletter"}
              </h2>

              <div
                dangerouslySetInnerHTML={{
                  __html: newsletter?.description
                    ? newsletter.description
                    : "Stay updated with the latest news and events from our parish community.",
                }}
              />

              <div className="mass-event-btn-group">
                <a
                  target="_blank"
                  href={newsletter?.file_link ? newsletter.file_link : "#"}
                  className="custom-btn download-btn"
                >
                  Download
                </a>
                <button
                  className="custom-btn-alt subscribe-btn"
                  onClick={() => setShowModal(true)}
                >
                  Subscribe
                </button>
              </div>
            </div>
            <div className="newsletter-right">
              <Image
                src={
                  newsletter?.image
                    ? newsletter.image
                    : "/assets/images/news.png"
                }
                width={290}
                height={270}
                alt="Newsletter"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="modal-close" onClick={() => setShowModal(false)}>
              <IoMdClose />
            </button>
            <h3 className="subscribe-tite-item">Subscribe to our Newsletter</h3>
            <form onSubmit={handleSubmit} className="subscribe-form">
              <div className="form-group">
                <label>
                  Name <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>
                  Email <span className="text-danger">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Comment</label>
                <textarea
                  name="comment"
                  rows="3"
                  value={formData.comment}
                  onChange={handleChange}
                />
              </div>

              <button type="submit" className="custom-btn">
                Submit
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Inline CSS for modal */}
      <style jsx>{`
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.6);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 99969;
        }
        .modal-content {
          background: #fff;
          padding: 25px;
          border-radius: 10px;
          width: 400px;
          position: relative;
        }
        .modal-close {
          position: absolute;
          right: 10px;
          top: 10px;
          border: none;
          background: transparent;
          font-size: 22px;
          cursor: pointer;
        }
        .form-group {
          margin-bottom: 15px;
        }
        input,
        textarea {
          width: 100%;
          padding: 8px;
          border: 1px solid #ccc;
          border-radius: 6px;
          margin-top: 5px;
        }
        h3 {
          text-align: center;
          margin-bottom: 15px;
        }
      `}</style>
    </>
  );
};

export default NewsLetter;
