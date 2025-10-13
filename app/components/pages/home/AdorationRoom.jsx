import Image from "next/image";
import React from "react";

const AdorationRoom = () => {
  return (
    <>
      <section
        className="adoration-room"
        data-aos="fade-up"
        data-aos-duration="3000"
      >
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="adoration-img">
                <Image
                  src={"/assets/images/charis.png"}
                  alt="Adoration Room"
                  width={405}
                  height={608}
                />
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
                  typesetting industry. Lorem Ipsum has been the industry&apos;s
                  standard
                </p>
                <ul className="adoration-url-list">
                  <li>
                    <span>
                      <Image
                        src={"/assets/images/icon/add-1.svg"}
                        alt="Icon"
                        width={24}
                        height={24}
                      />
                    </span>
                    <p>Quiet & peaceful prayer space</p>
                  </li>
                  <li>
                    <span>
                      <Image
                        src={"/assets/images/icon/add-2.svg"}
                        alt="Icon"
                        width={24}
                        height={24}
                      />
                    </span>
                    <p>Quiet & peaceful prayer space</p>
                  </li>
                  <li>
                    <span>
                      <Image
                        src={"/assets/images/icon/add-3.svg"}
                        alt="Icon"
                        width={24}
                        height={24}
                      />
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
                  To always be close to Jesus, that&apos;s my life plan. – Carlo
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
