"use client";
import React, { useState, useEffect } from "react";
import Banner from "../components/section/Banner";
import Image from "next/image";
import { FaPhoneAlt, FaRegEnvelope } from "react-icons/fa";
import HowToFind from "../components/pages/home/HowToFind";

const ContactUsPage = () => {
  const data = {
    title: "Parish Contacts",
  };
  // get  home data from api
  const [homeData, setHomeData] = useState();
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  useEffect(() => {
    const load = async () => {
      const res = await fetch(`${baseUrl}/api/home-settings`);
      const json = await res.json();
      const payload = res?.data ?? json;
      setHomeData(payload[0]);
    };
    load();
  }, [baseUrl]);
  return (
    <>
      <Banner data={data} />

      <section
        className="team contact-us-team "
        data-aos="fade-up"
        data-aos-duration="3000"
      >
        <div className="container">
          <div className="team-wrapper">
            <div className="team-item-name">
              <h2> Our Clergy Team</h2>
              <div className="row justify-content-center">
                <div className="col-md-4 col-lg-3 mb-4">
                  <div className="team-item">
                    <div className="team-img">
                      <Image
                        src={"/assets/images/team-1.png"}
                        width={416}
                        height={416}
                        alt={"Team Member"}
                      />
                    </div>
                    <div className="team-content">
                      <h3>Fr Victor Vella</h3>
                      <p>Parish Priest</p>
                      <ul className="team-social-list">
                        <li>
                          <a
                            href={"mailto:victorvella@rcaos.org.uk"}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <FaRegEnvelope />
                            <span>victorvella@rcaos.org.uk</span>
                          </a>
                        </li>
                        <li>
                          <a
                            href="tel:+07802721306"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <FaPhoneAlt />
                            <span>07802721306</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-3 mb-4">
                  <div className="team-item">
                    <div className="team-img">
                      <Image
                        src={"/assets/images/team-3.png"}
                        width={416}
                        height={416}
                        alt={"Team Member"}
                      />
                    </div>
                    <div className="team-content">
                      <h3>Deacon Wayne</h3>
                      <p>DuPreez</p>
                      <ul className="team-social-list">
                        <li>
                          <a
                            href={"mailto:waynedupreez@rcaos.org.uk"}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <FaRegEnvelope />
                            <span>waynedupreez@rcaos.org.uk</span>
                          </a>
                        </li>
                        <li>
                          <a
                            href="tel:+07500009281"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <FaPhoneAlt />
                            <span>07500009281</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-3 mb-4">
                  <div className="team-item">
                    <div className="team-img">
                      <Image
                        src={"/assets/images/team-2.png"}
                        width={416}
                        height={416}
                        alt={"Team Member"}
                      />
                    </div>
                    <div className="team-content">
                      <h3>Deacon Barry</h3>
                      <p>Chalkley</p>
                      <ul className="team-social-list">
                        <li>
                          <a
                            href={"mailto:barrychalkley@rcaos.org.uk"}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <FaRegEnvelope />
                            <span>barrychalkley@rcaos.org.uk</span>
                          </a>
                        </li>
                        <li>
                          <a
                            href="tel:+07917132472"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <FaPhoneAlt />
                            <span>07917132472</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="team-item-name">
              <h2>Our Parish Team</h2>
              <div className="row justify-content-center">
                <div className="col-md-4 col-lg-3 mb-4">
                  <div className="team-item">
                    <div className="team-img">
                      <Image
                        src={"/assets/images/team-4.png"}
                        width={419}
                        height={419}
                        alt={"Team Member"}
                      />
                    </div>
                    <div className="team-content">
                      <h3>Natasha Wheeler</h3>
                      <p>Parish Secretary</p>
                      <ul className="team-social-list">
                        <li>
                          <a
                            href={"mailto:orpington@rcaos.org.uk "}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <FaRegEnvelope />
                            <span>orpington@rcaos.org.uk </span>
                          </a>
                        </li>
                        <li>
                          <a
                            href="tel:+01689 817537"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <FaPhoneAlt />
                            <span>01689 817537</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-3 mb-4">
                  <div className="team-item">
                    <div className="team-img">
                      <Image
                        src={"/assets/images/team-5.png"}
                        width={416}
                        height={416}
                        alt={"Team Member"}
                      />
                    </div>
                    <div className="team-content">
                      <h3>Cecilia Skudder</h3>
                      <p>Website Editor</p>
                      <ul className="team-social-list">
                        <li>
                          <a
                            href={"mailto:orpington@rcaos.org.uk "}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <FaRegEnvelope />
                            <span>orpingtoncc@rcaos.org.uk </span>
                          </a>
                        </li>
                        <li>
                          <a
                            href="tel:+07956452571"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <FaPhoneAlt />
                            <span>07956452571</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-3 mb-4">
                  <div className="team-item">
                    <div className="team-img">
                      <Image
                        src={"/assets/images/team-6.png"}
                        width={416}
                        height={416}
                        alt={"Team Member"}
                      />
                    </div>
                    <div className="team-content">
                      <h3>Maria Nethercot</h3>
                      <p>Chair Finance Committee</p>
                      <ul className="team-social-list">
                        <li>
                          <a
                            href={"mailto:orpingtonfinance@rcaos.org.uk "}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <FaRegEnvelope />
                            <span>orpingtonfinance@rcaos.org.uk </span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="team-item-name">
              <h2>Parish Co-Responsibility Team</h2>
              <div className="row justify-content-center">
                <div className="col-md-4 col-lg-3 mb-4">
                  <div className="team-item">
                    <div className="team-img">
                      <Image
                        src={"/assets/images/team-7.png"}
                        width={419}
                        height={419}
                        alt={"Team Member"}
                      />
                    </div>
                    <div className="team-content">
                      <h3>Mike Delaney </h3>
                      <p>Parish </p>
                      <ul className="team-social-list">
                        <li>
                          <a
                            href={"mailto:orpington@rcaos.org.uk "}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <FaRegEnvelope />
                            <span>orpington@rcaos.org.uk </span>
                          </a>
                        </li>
                        <li>
                          <a
                            href="tel:+01689 817537"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <FaPhoneAlt />
                            <span>01689 817537</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-3 mb-4">
                  <div className="team-item">
                    <div className="team-img">
                      <Image
                        src={"/assets/images/team-8.png"}
                        width={419}
                        height={419}
                        alt={"Team Member"}
                      />
                    </div>
                    <div className="team-content">
                      <h3>Andrea Tutt</h3>
                      <p>Parish </p>
                      <ul className="team-social-list">
                        <li>
                          <a
                            href={"mailto:orpington@rcaos.org.uk "}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <FaRegEnvelope />
                            <span>orpington@rcaos.org.uk </span>
                          </a>
                        </li>
                        <li>
                          <a
                            href="tel:+01689 817537"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <FaPhoneAlt />
                            <span>01689 817537</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-3 mb-4">
                  <div className="team-item">
                    <div className="team-img">
                      <Image
                        src={"/assets/images/team-9.png"}
                        width={419}
                        height={419}
                        alt={"Team Member"}
                      />
                    </div>
                    <div className="team-content">
                      <h3> Aidan Twomey </h3>
                      <p>Parish </p>
                      <ul className="team-social-list">
                        <li>
                          <a
                            href={"mailto:orpington@rcaos.org.uk "}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <FaRegEnvelope />
                            <span>orpington@rcaos.org.uk </span>
                          </a>
                        </li>
                        <li>
                          <a
                            href="tel:+01689 817537"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <FaPhoneAlt />
                            <span>01689 817537</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-3 mb-4">
                  <div className="team-item">
                    <div className="team-img">
                      <Image
                        src={"/assets/images/team-10.png"}
                        width={419}
                        height={419}
                        alt={"Team Member"}
                      />
                    </div>
                    <div className="team-content">
                      <h3>Jackie Low </h3>
                      <p>Parish </p>
                      <ul className="team-social-list">
                        <li>
                          <a
                            href={"mailto:orpington@rcaos.org.uk "}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <FaRegEnvelope />
                            <span>orpington@rcaos.org.uk </span>
                          </a>
                        </li>
                        <li>
                          <a
                            href="tel:+01689 817537"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <FaPhoneAlt />
                            <span>01689 817537</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="team-item-content">
              <p>
                ​Natasha Wheeler, our Parish Secretary, works in the Parish
                Office from 10.30 am to 3.30 pm on Mondays, Wednesdays and
                Fridays. ​ Strickland Way, Orpington, Kent, BR6 9UE 01689 817537
                orpington@rcaos.org.uk
              </p>
              <div>
                <p>
                  Strickland Way, Orpington, Kent, BR6 9UE
                  <br />
                  <span>
                    <a href="tel:+01689 817537">01689 817537</a>
                  </span>
                  <br />
                  <span>
                    <a href="mailto:orpington@rcaos.org.uk">
                      orpington@rcaos.org.uk
                    </a>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <HowToFind data={homeData} />
    </>
  );
};

export default ContactUsPage;
