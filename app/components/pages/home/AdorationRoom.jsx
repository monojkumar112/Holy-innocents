import Image from "next/image";
import React from "react";

const AdorationRoom = ({ data }) => {
  return (
    <>
      <section
        className="adoration-room"
        id="adoration-room"
        data-aos="fade-up"
        data-aos-duration="3000"
      >
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <div className="adoration-img">
                <Image
                  // {"/assets/images/charis.png"}
                  src={data?.adoration_room_photo}
                  alt="Adoration Room"
                  width={405}
                  height={608}
                />
              </div>
            </div>
            <div className="col-md-7">
              <div className="adoration-content">
                <h2> {data?.adoration_room_title} </h2>
                <h5>
                  A sacred quiet and peaceful place for Prayer, Reflection, and
                  Spiritual Connection
                </h5>

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
                    <p>“The Eucharist is my highway to Heaven”</p>
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
                    <p>Open: Monday, Tuesday, Thursday and Friday </p>
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
                    <p>Opening and closing times may vary </p>
                  </li>
                </ul>
                {/* <div className="adoration-btn-group">
                  <button className="custom-btn learn-more-btn">Monday</button>
                  <button className="custom-btn get-qucte-btn">Tuesday</button>
                  <button className="custom-btn get-qucte-btn">Friday</button>
                </div> */}
                <h4>
                  (please check the times in our Calendar under Mass times and
                  Events)
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
