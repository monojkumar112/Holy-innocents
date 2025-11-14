import Image from "next/image";
import React from "react";

const NewHere = () => {
  return (
    <>
      <section className="new-here" data-aos="fade-up" data-aos-duration="3000">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="new-image-left">
                <Image
                  src={"/assets/images/new-here.png"}
                  width={636}
                  height={636}
                  alt="New Here"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="new-here-right">
                <h2 className="section-title">New Here?</h2>
                <p>
                  We’re so glad you found us! Whether you’re new to the area,
                  looking for a new parish to belong, or just exploring faith,
                  we welcome you with open arms.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NewHere;
