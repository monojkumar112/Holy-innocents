"use client";
import axios from "axios";
import Link from "next/link";
import React, { useState, useRef } from "react";
import { Turnstile } from "@marsidev/react-turnstile";

const MassOffering = () => {
  const [formData, setFormData] = useState({
    intention: "",
    mass_for_name: "",
    date: "",
    time: "",
    name: "",
    number: "",
    email: "",
    amount: "",
    additional_information: "",
  });
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [token, setToken] = useState(null);
  const turnstileRef = useRef(null);
  const loadedAt = useRef(Date.now());
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
    if (!token) {
      setErrorMessage("Please complete the verification check.");
      return;
    }

    setLoading(true);
    setErrorMessage("");
    setSuccessMessage("");

    const payload = {
      ...formData,
      turnstile_token: token,
      form_loaded_at: loadedAt.current,
    };

    axios
      .post(`/api/mass-offering`, payload)
      .then((res) => {
        setSuccessMessage(
          res.data.message || "Mass offering submitted successfully."
        );
        setFormData({
          intention: "",
          mass_for_name: "",
          date: "",
          time: "",
          name: "",
          number: "",
          email: "",
          amount: "",
          additional_information: "",
        });
        e.target.reset();
      })
      .catch((err) => {
        if (err.response) {
          let msg =
            err.response.data?.message ||
            "Something went wrong. Please try again.";
          if (err.response.data?.errors) {
            const errorMessages = Object.values(err.response.data.errors)
              .flat()
              .join(" ");
            if (errorMessages) msg = errorMessages;
          }
          setErrorMessage(msg);
          console.error("Server Error:", err.response.data);
        } else {
          setErrorMessage("Network error. Please check your connection.");
        }
      })
      .finally(() => {
        setLoading(false);
        turnstileRef.current?.reset();
        setToken(null);
      });
  };

  return (
    <section className="mass-offering ">
      <div className="container">
        <div className="donate-from-wrapper">
          <div className="donate-header">
            <h2 className="donate-from-title">Mass Offering </h2>
          </div>
          <form onSubmit={handleSubmit} className="donate-form">
            <input
              type="text"
              name="website"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              style={{ position: "absolute", left: "-9999px" }}
            />
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
                  <label className="form-label fw-semibold">Mass Intention is for (Name)</label>
                  <input
                    type="text"
                    name="mass_for_name"
                    className="donate-input"
                    placeholder="Mass Intention is for (Name)"
                    required
                    value={formData.mass_for_name}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label fw-semibold">
                    Date of Preferred Mass
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
                    name="name"
                    className="donate-input"
                    placeholder="Enter donor name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label fw-semibold">
                    Telephone
                  </label>
                  <input
                    type="text"
                    className="donate-input"
                    name="number"
                    placeholder="Enter telephone number"
                    required
                    value={formData.number}
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
                    name="amount"
                    placeholder="Enter amount"
                    required
                    value={formData.amount}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-md-12">
                  <label className="form-label fw-semibold">
                    Additional Information
                  </label>
                  <textarea
                    rows={2}
                    className="form-control donate-input"
                    name="additional_information"
                    placeholder="Enter additional information"
                    value={formData.additional_information}
                    onChange={handleChange}
                  ></textarea>
                </div>

              </div>
            </div>

            <div className="my-3">
              <Turnstile
                siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY}
                onSuccess={setToken}
                onExpire={() => setToken(null)}
                ref={turnstileRef}
              />
            </div>

            <div className="d-flex justify-content-center">
              <button
                className="custom-btn w-100 justify-content-center mt-0"
                type="submit"
                disabled={loading || !token}
              >
                {loading ? (
                  <>
                    Processing...
                    <div
                      className="spinner-border spinner-border-sm ms-2"
                      role="status"
                    ></div>
                  </>
                ) : (
                  "Submit"
                )}
              </button>
            </div>
            <div className="col-md-12 mt-4">
              <p className="text-muted">If you wish to make your stipend or donation online, please click the button below.</p>
              <div className="pay-online-btn-item mt-2">
                <Link
                  href="https://donate.mydona.com/holy-innocents-orpington"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="custom-btn-alt"
                >
                  Pay Stipend Online
                </Link>
              </div>
            </div>

            {errorMessage && (
              <div className="alert alert-danger mt-2">{errorMessage}</div>
            )}
            {successMessage && (
              <div className="alert alert-success mt-2">{successMessage}</div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default MassOffering;