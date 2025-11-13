import Link from "next/link";
import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import Image from "next/image";
import { FiSearch } from "react-icons/fi";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="footer-wrapper">
            <div className="row">
              <div className="col-lg-3">
                <div className="footer-logo-wrapper">
                  <div className="footer-logo">
                    <a href="#" className="footer-img">
                      <Image
                        src="/assets/images/logo.png"
                        alt="logo"
                        width={248}
                        height={60}
                      />
                    </a>
                  </div>
                  <p>
                    Once you have provided all necessary information and
                    completed
                  </p>
                </div>
              </div>
              <div className="col-lg-9">
                <div className="footer-quick-link">
                  <div className="search-item-wrapp">
                    <div className="footer-quick-title">
                      <h3>Quick Links</h3>
                    </div>
                    <div className="footer-quick-search">
                      <form action="">
                        <div className="search-from">
                          <input type="text" placeholder="Search" />
                          <button className="search-btn">
                            <FiSearch />
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-4">
                      <ul className="footer-link-list">
                        <li>
                          <Link href="/https://www.rcsouthwark.co.uk">
                            Diocese of Southwark{" "}
                          </Link>
                        </li>
                        <li>
                          <Link href="/getting-involved"> Get Involved </Link>
                        </li>
                        <li>
                          <Link href="/leadership"> ​Our Leadership </Link>
                        </li>
                        <li>
                          <Link href="/liturgy"> Our Liturgy </Link>
                        </li>
                        <li>
                          <Link href="/mission"> ​Our Mission </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="col-lg-4">
                      <ul className="footer-link-list">
                        <li>
                          <Link href="/sacramental"> Our Sacraments </Link>
                        </li>
                        <li>
                          <Link href="/families-and-youth"> Our Youth </Link>
                        </li>
                        <li>
                          <Link href="/reflection">
                            {" "}
                            ​Parishioner Gospel Reflection{" "}
                          </Link>
                        </li>
                        <li>
                          <Link href="/groups"> Parish Groups </Link>
                        </li>
                        <li>
                          <Link href="/brief-history"> Parish History </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="col-lg-4">
                      <ul className="footer-link-list">
                        <li>
                          <Link href="/our-parish-vision"> Parish Vision </Link>
                        </li>
                        <li>
                          <Link href="/evangelisation">
                            Parish Evangelisation Cells{" "}
                          </Link>
                        </li>
                        <li>
                          <Link href="/prayer-intentions">
                            {" "}
                            Prayer Intentions{" "}
                          </Link>
                        </li>
                        <li>
                          <Link href="https://www.churchservices.tv/">
                            {" "}
                            Streaming Masses{" "}
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© 2025 All Rights Reserved</p>
            <div className="footer-social">
              <h3>Follow Link</h3>
              <div className="footer-social-media">
                <ul>
                  <li>
                    <a
                      href="https://www.facebook.com/HolyInnocentsCC"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaFacebookF />
                    </a>
                  </li>
                  <li>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      <RiTwitterXLine />
                    </a>
                  </li>
                  <li>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      <FaLinkedinIn />
                    </a>
                  </li>
                  <li>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      <FaInstagram />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
