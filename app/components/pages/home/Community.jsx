import Image from "next/image";
import Link from "next/link";
import React from "react";

const Community = ({ data }) => {
  return (
    <>
      <section
        className="community cpb-6"
        data-aos="fade-up"
        data-aos-duration="3000"
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="community-wrapper">
                <h2 className="section-title">
                  {data?.join_our_community_title}
                </h2>
                <p>
                  {data?.join_our_community_description}
                </p>
                <div className="community-btn-group">
                  <Link href="/#contact" className="custom-btn learn-more-btn">
                    Join Us
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="community-img">
                {/* {"/assets/images/joidn.png"} */}
                <Image
                  src={data?.join_our_community_photo}
                  width={636}
                  height={636}
                  alt="Join"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Community;
