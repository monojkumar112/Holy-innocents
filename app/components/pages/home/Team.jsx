import React from "react";

const Team = () => {
  return (
    <>
      {/* <!-- ================== Our Team ================ --> */}
      <section className="team">
        <div className="container">
          <div className="team-section-title">
            <h2 className="section-title">Our Leadership Team</h2>
            <p>
              Our leadership team is dedicated to serving our community and
              fostering a welcoming environment for all.
            </p>
          </div>
          <div className="team-wrapper">
            <div className="row">
              <div className="col-md-6 col-lg-4">
                <div className="team-item">
                  <div className="team-img">
                    <img src="/assets/images/team-1.png" alt="" />
                  </div>
                  <div className="team-content">
                    <h3>Fr. John Smith</h3>
                    <p>CEO, Founder</p>
                    <ul className="team-social-list">
                      <li>
                        <a
                          href="https://www.linkedin.com/in/john-smith"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="fas fa-envelope"></i>
                          <span>father.michael@holyinnocents.org</span>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.linkedin.com/in/john-smith"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="fas fa-phone"></i>
                          <span>(555) 123-4567</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="team-item">
                  <div className="team-img">
                    <img src="/assets/images/team-2.png" alt="" />
                  </div>
                  <div className="team-content">
                    <h3>Parish Priest - Fr Victor Vella</h3>
                    <p>CEO, Founder</p>
                    <ul className="team-social-list">
                      <li>
                        <a
                          href="https://www.linkedin.com/in/john-smith"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="fas fa-envelope"></i>
                          <span>father.michael@holyinnocents.org</span>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.linkedin.com/in/john-smith"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="fas fa-phone"></i>
                          <span>(555) 123-4567</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="team-item">
                  <div className="team-img">
                    <img src="/assets/images/team-3.png" alt="" />
                  </div>
                  <div className="team-content">
                    <h3>Deacon Wayne Du Preez</h3>
                    <p>CEO, Founder</p>
                    <ul className="team-social-list">
                      <li>
                        <a
                          href="https://www.linkedin.com/in/john-smith"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="fas fa-envelope"></i>
                          <span>father.michael@holyinnocents.org</span>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.linkedin.com/in/john-smith"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="fas fa-phone"></i>
                          <span>(555) 123-4567</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="d-flex mt-5 justify-content-center">
              <a href="#" className="custom-btn-alt">
                See More
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Team;
