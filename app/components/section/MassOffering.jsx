"use client";
import React, { useState } from "react";

const MassOffering = () => {
  const [formData, setFormData] = useState({
    intention: "",
    date: "",
    time: "",
    donorName: "",
    phone: "",
    email: "",
    stipend: "",
  });
  const [loading, setLoading] = useState(false);
  const intentions = [
    "RIP",
    "Well-Being",
    "Thanksgiving",
    "Private Intentions",
    "Birthday Thanksgiving",
    "Wedding Anniversary",
    "People of the Parish",
    "Special Intention",
    "Speedy Recovery",
    "God’s Blessings",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Later: send this to backend or email
    console.log(formData);
    alert("Your Mass Offering has been submitted successfully!");
  };

  return (
    <section className="mass-offering ">
      <div className="container">
        <div className="donate-from-wrapper">
          <div className="donate-header">
            <h2 className="donate-from-title">Mass Offering </h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
          <form onSubmit={handleSubmit} className="donate-form">
            <div className="donate-information">
              <div className="row">
                <div className="col-md-6">
                  <label className="form-label fw-semibold">Intention</label>
                  <select
                    name="intention"
                    className="donate-input"
                    required
                    value={formData.intention}
                    onChange={handleChange}
                  >
                    <option value="">Select Intention</option>
                    {intentions.map((item, index) => (
                      <option key={index} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="col-md-6">
                  <label className="form-label fw-semibold">
                    Day or Date of Preferred Mass
                  </label>
                  <input
                    type="date"
                    className=" donate-input"
                    name="date"
                    required
                    value={formData.date}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label fw-semibold">
                    Preferred Time
                  </label>
                  <input
                    type="time"
                    className=" donate-input "
                    name="time"
                    required
                    value={formData.time}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label fw-semibold">Donor Name</label>
                  <input
                    type="text"
                    name="donorName"
                    className="donate-input"
                    placeholder="Enter donor name"
                    required
                    value={formData.donorName}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label fw-semibold">
                    Telephone Number
                  </label>
                  <input
                    type="text"
                    className="donate-input"
                    name="phone"
                    placeholder="Enter phone number"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label fw-semibold">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="form-control donate-input"
                    name="email"
                    placeholder="Enter your email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label fw-semibold">Stipend (£)</label>
                  <input
                    type="number"
                    className="form-control donate-input"
                    name="stipend"
                    placeholder="Enter amount"
                    required
                    value={formData.stipend}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-md-6">
                  <div className="pay-online-btn-item">
                    <a
                      href="https://yourpaymentlink.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="custom-btn-alt"
                    >
                      Pay Stipend Online
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="d-flex justify-content-center">
              <button className="custom-btn" type="submit" disabled={loading}>
                {loading ? "Processing..." : "Submit"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default MassOffering;
