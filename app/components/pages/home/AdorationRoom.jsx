import React from "react";

const AdorationRoom = () => {
  return (
    <>
      <section class="adoration-room">
        <div class="container">
          <div class="row">
            <div class="col-md-4">
              <div class="adoration-img">
                <img src="/assets/images/charis.png" alt="" />
              </div>
            </div>
            <div class="col-md-8">
              <div class="adoration-content">
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
                <ul class="adoration-url-list">
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
                <div class="adoration-btn-group">
                  <a href="/about.html" class="custom-btn learn-more-btn">
                    Plan Your Visit
                  </a>
                  <a href="/#contact" class="custom-btn get-qucte-btn">
                    See Timings
                  </a>
                  <a href="/#contact" class="custom-btn get-qucte-btn">
                    Contact Parish
                  </a>
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
