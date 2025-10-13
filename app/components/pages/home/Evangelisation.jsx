import Image from "next/image";
import Link from "next/link";
import React from "react";

const Evangelisation = () => {
  return (
    <>
      <section className="evangelisation cpb-6">
        <div className="container">
          <div className="row">
            <div className="col-md-9">
              <div className="evangelisation-content">
                <h2 className="section-title">
                  Parish Evangelisation Cells (PECS )
                </h2>
                <h5>
                  At Holy Innocents’ we have embraced a specific form of
                  evangelisation known as the Parish Evangelisation Cell System
                  (PECS). &quot;the PECS  System is not about groups but is a
                  way of life.&quot; Learn more about PECS at Holy
                  Innocents&apos; contact Bob Skudder at robertskudder@sky.com
                </h5>
                <p>
                  Then after that it could have the remaining text as below: 
                </p>
                <h5 className="text-color">
                  The parish is the presence of the Church in a given territory,
                  an environment for hearing God’s word, for growth in the
                  Christian life, for dialogue, proclamation, charitable
                  outreach, worship and celebration. In all its activities the
                  Parish encourages and trains its members to be evangelisers…
                  It is a centre of constant missionary outreach – Pope Francis
                </h5>
                <Link href={"#"} className="custom-btn learn-more-btn">
                  Read More
                </Link>
              </div>
            </div>
            <div className="col-md-3">
              <div className="evangelisation-img">
                <Image
                  src={"/assets/images/evangelisation.png"}
                  width={308}
                  height={708}
                  alt="Evangelisation"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Evangelisation;
