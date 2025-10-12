import React from "react";

const AdorationRoom = () => {
  return (
    <>
      <section className="adoration-room">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="adoration-img">
                <img src="/assets/images/charis.png" alt="" />
              </div>
            </div>
            <div className="col-md-8">
              <div className="adoration-content">
                <h2>Visit our St. Carlo Acutis Adoration Room</h2>
                <h5>
                  A sacred place for prayer, reflection, and spiritual
                  connection.
                </h5>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard
                </p>
                <ul className="adoration-url-list">
                  <li>
                    <span>
                      <img src="/assets/images/icon/add-1.svg" alt="" />
                    </span>
                    <p>Quiet & peaceful prayer space</p>
                  </li>
                  <li>
                    <span>
                      <img src="/assets/images/icon/add-2.svg" alt="" />
                    </span>
                    <p>Quiet & peaceful prayer space</p>
                  </li>
                  <li>
                    <span>
                      <img src="/assets/images/icon/add-3.svg" alt="" />
                    </span>
                    <p>Quiet & peaceful prayer space</p>
                  </li>
                </ul>
                <div className="adoration-btn-group">
                  <button className="custom-btn learn-more-btn">Monday</button>
                  <button className="custom-btn get-qucte-btn">Tuesday</button>
                  <button className="custom-btn get-qucte-btn">Friday</button>
                </div>
                <h4>
                  " To always be close to Jesus, that’s my life plan." – Carlo
                  Acutis
                </h4>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AdorationRoom;
