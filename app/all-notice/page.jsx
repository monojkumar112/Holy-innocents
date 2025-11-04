import React from "react";
import Banner from "../components/section/Banner";
export const metadata = {
  title: "Holy Innocents' Catholic Church Orpington - Home",
  description:
    "Welcome to Holy Innocents Catholic Church, a vibrant parish community dedicated to faith, worship, and service. Join us for Mass, events, and spiritual growth.",
  keywords:
    "Holy Innocents, Catholic Church, Parish, Mass Times, Community, Worship, Faith, Events, Spiritual Growth, Ministries, Sacraments",
  icons: {
    icon: "/assets/favicon.ico", // or your image path like '/assets/favicon.png'
  },
};

const AllNoticePage = () => {
  const data = {
    title: "Our Notices ",
    description: `Our Christian communities must become genuine schools of prayer `,
  };
  return (
    <>
      <Banner data={data} />
      <section
        className="notice cpy-6"
        data-aos="fade-up"
        data-aos-duration="3000"
      >
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-4 mb-4">
              <div className="notice-left">
                <h2>Parish notice</h2>
                <div className="parish-content">
                  <p>Youth Ministry began 9th May 2025 Catholic Bishops of</p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Iste sapiente voluptatem magnam quos aliquam possimus id
                    deserunt doloremque aperiam earum!
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Iste sapiente voluptatem
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-4">
              <div className="notice-left">
                <h2>Other notice</h2>
                <div className="parish-content">
                  <p>Youth Ministry began 9th May 2025 Catholic Bishops of</p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Iste sapiente voluptatem magnam quos aliquam possimus id
                    deserunt doloremque aperi
                  </p>
                  <p>
                    England, Wales, and Scotland: tatement concerning the Bill
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-4">
              <div className="notice-left">
                <h2>Other notice</h2>
                <div className="parish-content">
                  <p>Youth Ministry began 9th May 2025 Catholic Bishops of</p>
                  <p>
                    magnam quos aliquam possimus id deserunt doloremque aperiam
                    earum!
                  </p>
                  <p>
                    magnam quos aliquam possimus id deserunt doloremque aperiam
                    earum!
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-4">
              <div className="notice-left">
                <h2>Other notice</h2>
                <div className="parish-content">
                  <p>Youth Ministry began 9th May 2025 Catholic Bishops of</p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Iste sapiente voluptatem magnam quos aliquam possimus id
                    deserunt doloremque aperi
                  </p>
                  <p>
                    England, Wales, and Scotland: Statement concerning the Bill
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-4">
              <div className="notice-left">
                <h2>Other notice</h2>
                <div className="parish-content">
                  <p>Youth Ministry began 9th May 2025 Catholic Bishops of</p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Iste sapiente voluptatem magnam quos aliquam possimus id
                    deserunt doloremque aperi
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Iste sapiente voluptatem magnam quos aliquam possimus id
                    deserunt doloremque aperi
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-4">
              <div className="notice-left">
                <h2>Other notice</h2>
                <div className="parish-content">
                  <p>Youth Ministry began 9th May 2025 Catholic Bishops of</p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Iste sapiente voluptatem magnam quos aliquam possimus id
                    deserunt doloremque aperi
                  </p>
                  <p>
                    England, Wales, and Scotland: Statement concerning the Bill
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AllNoticePage;
