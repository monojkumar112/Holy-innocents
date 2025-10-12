import React from "react";

const Community = () => {
  return (
    <>
      <section className="community cpb-6">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="community-wrapper">
                <h2 className="section-title">
                  Looking to Join a Community and Get Involved?
                </h2>
                <p>
                  Become a part of our vibrant parish community. Connect, grow,
                  and make a difference together.
                </p>
                <div className="community-btn-group">
                  <a href="#" className="custom-btn learn-more-btn">
                    Join Us
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="community-img">
                <img src="/assets/images/joidn.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Community;
