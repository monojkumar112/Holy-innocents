import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <>
      {/* <!-- ================= HEADER START ================= --> */}
      <nav className="navbar navbar-expand-xl">
        <div className="container">
          {/* <!-- Brand Logo --> */}
          <a className="navbar-brand" href="/">
            <Image
              src={"/assets/images/logo.png"}
              alt="logo"
              width={186}
              height={45}
            />
          </a>

          {/* <!-- Mobile Toggle --> */}
          <button
            className="navbar-toggler collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbar-content"
            aria-expanded="false"
          >
            <div className="hamburger-toggle">
              <div className="hamburger">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </button>

          {/* <!-- Navbar Links --> */}
          <div className="collapse navbar-collapse" id="navbar-content">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              {/* <!-- Home --> */}
              <li className="nav-item">
                <a className="nav-link active" href="/">
                  Home
                </a>
              </li>

              {/* <!-- About --> */}
              <li className="nav-item dropdown dropdown-mega position-static">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  data-bs-toggle="dropdown"
                >
                  About Us
                </a>
                <div className="dropdown-menu shadow py-0">
                  <div className="mega-content container-fluid">
                    <div className="row">
                      <div className="col-12 col-md-6">
                        <div className="dropdown-items">
                          <h6>
                            <strong>ABOUT US</strong>
                          </h6>
                          <ul className="pt-2 pt-md-3">
                            <li>
                              <a href="/about-us" className="dropdown-item">
                                About Us
                              </a>
                            </li>
                            <li>
                              <a href="/mission" className="dropdown-item">
                                Leadership and co-responsibility
                              </a>
                            </li>
                            <li>
                              <a href="/team" className="dropdown-item">
                                Father Victor Vella
                              </a>
                            </li>
                            <li>
                              <a href="/gallery" className="dropdown-item">
                                Deacons
                              </a>
                            </li>
                            <li>
                              <a href="/policy" className="dropdown-item">
                                Sisters of Mercy
                              </a>
                            </li>
                            <li>
                              <a href="/policy" className="dropdown-item">
                                Groups
                              </a>
                            </li>
                            <li>
                              <a href="/policy" className="dropdown-item">
                                Our Parish Vision
                              </a>
                            </li>
                            <li>
                              <a href="/policy" className="dropdown-item">
                                Brief history of our parish
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-12 col-md-6 text-end pe-0">
                        {/* <img
                          src="/assets/images/menu-img.png"
                          alt="menu-img"
                          className="img-fluid d-none d-md-block my-0 ms-auto menu-img-item"
                        /> */}
                        <Image
                          src="/assets/images/menu-img.png"
                          alt="menu-img"
                          className="img-fluid d-none d-md-block my-0 ms-auto menu-img-item"
                          width={557}
                          height={367}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </li>

              {/* <!-- Fellowship --> */}
              <li className="nav-item dropdown dropdown-mega position-static">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  data-bs-toggle="dropdown"
                >
                  Fellowship
                </a>
                <div className="dropdown-menu shadow py-0">
                  <div className="mega-content container-fluid">
                    <div className="row">
                      <div className="col-12 col-md-6">
                        <div className="pt-3 ps-3 ps-md-4">
                          <h6>
                            <strong>Fellowship</strong>
                          </h6>
                          <ul className="pt-2 pt-md-3">
                            <li>
                              <a href="/fellowship" className="dropdown-item">
                                Fellowship
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                className="dropdown-item"
                                target="_blank"
                              >
                                Getting involved
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                className="dropdown-item"
                                target="_blank"
                              >
                                Families and youth
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                className="dropdown-item"
                                target="_blank"
                              >
                                Youth Alpha
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                className="dropdown-item"
                                target="_blank"
                              >
                                Practical and financial
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-12 col-md-6 text-end pe-0">
                        <Image
                          src="/assets/images/menu-img.png"
                          alt="menu-img"
                          className="img-fluid d-none d-md-block my-0 ms-auto menu-img-item"
                          width={557}
                          height={367}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              {/* <!-- Liturgy --> */}
              <li className="nav-item dropdown dropdown-mega position-static">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  data-bs-toggle="dropdown"
                >
                  Liturgy
                </a>
                <div className="dropdown-menu shadow py-0">
                  <div className="mega-content container-fluid">
                    <div className="row">
                      <div className="col-12 col-md-6">
                        <div className="pt-3 ps-3 ps-md-4">
                          <h6>
                            <strong>Liturgy</strong>
                          </h6>
                          <ul className="pt-2 pt-md-3">
                            <li>
                              <a href="/liturgy" className="dropdown-item">
                                Liturgy
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                className="dropdown-item"
                                target="_blank"
                              >
                                Recent events
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                className="dropdown-item"
                                target="_blank"
                              >
                                Social and support
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                className="dropdown-item"
                                target="_blank"
                              >
                                Mission
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                className="dropdown-item"
                                target="_blank"
                              >
                                PECS
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                className="dropdown-item"
                                target="_blank"
                              >
                                Alpha at Holy Innocents
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                className="dropdown-item"
                                target="_blank"
                              >
                                Our evangelisation
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                className="dropdown-item"
                                target="_blank"
                              >
                                Our social action
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-12 col-md-6 text-end pe-0">
                        <Image
                          src="/assets/images/menu-img.png"
                          alt="menu-img"
                          className="img-fluid d-none d-md-block my-0 ms-auto menu-img-item"
                          width={557}
                          height={367}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </li>

              <li className="nav-item">
                <a className="nav-link active" href="/reflection">
                  Reflection
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="/prayer">
                  formation
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="/sacramental">
                  sacramental
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link active" href="/#contact">
                  Contact
                </a>
              </li>
              <li className="nav-item">
                <a className="custom-btn" href="/donate">
                  Donate{" "}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* <!-- ================= HEADER END ================= --> */}
    </>
  );
};

export default Header;
