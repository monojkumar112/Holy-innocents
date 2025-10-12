import React from "react";

const Minitries = () => {
  return (
    <>
      <section className="minitries cpb-6">
        <div className="container">
          <div className="minitries-header">
            <h2 className="section-title">Our Ministries – Get Involved</h2>
            <p>
              Explore our diverse ministries and find your place to serve and
              grow in faith.
            </p>
          </div>
          <div className="minitries-wrapper">
            <div className="row">
              <div className="col-md-6 col-lg-4">
                <div className="minitries-item">
                  <div className="minitries-img">
                    <img src="/assets/images/icon/audio.svg" alt="" />
                  </div>
                  <div className="minitries-content">
                    <h3>Choir Ministry</h3>
                    <p>
                      Nurturing the faith of our youngest members through
                      engaging activities and teachings.
                    </p>
                    <a href="/about.html" className="custom-btn learn-more-btn">
                      Get Involved
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="minitries-item youth-item">
                  <div className="minitries-img">
                    <img src="/assets/images/icon/star.svg" alt="" />
                  </div>
                  <div className="minitries-content">
                    <h3>Youth Ministry</h3>
                    <p>
                      Nurturing the faith of our youngest members through
                      engaging activities and teachings.
                    </p>
                    <a href="/about.html" className="custom-btn learn-more-btn">
                      Get Involved
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="minitries-item charity-item">
                  <div className="minitries-img">
                    <img src="/assets/images/icon/ministry.svg" alt="" />
                  </div>
                  <div className="minitries-content">
                    <h3>Charity Ministry</h3>
                    <p>
                      Nurturing the faith of our youngest members through
                      engaging activities and teachings.
                    </p>
                    <a href="/about.html" className="custom-btn learn-more-btn">
                      Get Involved
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Minitries;
