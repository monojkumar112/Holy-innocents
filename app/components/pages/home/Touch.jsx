import React from "react";

const Touch = () => {
  return (
    <>
      <section className="touch">
        <div className="container">
          <div className="touch-wrapper">
            <div className="touch-content">
              <h2 className="section-title">Stay in Touch</h2>
              <p>
                Please register/update your contact details on our parish
                database ChurchSuite.
              </p>
              <div className="how-to-find-btn-group">
                <a href="/#contact" className="custom-btn get-qucte-btn">
                  Register 
                </a>
                <a href="/#contact" className="custom-btn-alt get-qucte-btn">
                  Gift Aid
                </a>
                <a href="/#contact" className="custom-btn-alt get-qucte-btn">
                  QR Code
                </a>
              </div>
            </div>
            <div className="touch-img">
              <img src="/assets/images/tach.png" alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Touch;
