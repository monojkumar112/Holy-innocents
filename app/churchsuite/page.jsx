import React from "react";
import RegisterFrom from "../components/section/RegisterFrom";

const ChurchsuitePage = () => {
  return (
    <>
      <section className="churchsuite-section">
        <div className="container">
          <div className="churchsuite-wrapper">
            <div className="churchsuite-header">
              <h3>
                We are really pleased you would like to register your details
                with Holy Innocents&apos;. Simply fill in the form below to
                provide your details.
              </h3>
              <h5>​Communications between the Parish and yourself</h5>
              <p>
                We respect your privacy and wish to give you the choice about
                how we communicate with you and your family. Of course, we will
                only use your email to communicate with you directly and we will
                not share your details outside of the church.
              </p>
            </div>
            <RegisterFrom />
          </div>
        </div>
      </section>
    </>
  );
};

export default ChurchsuitePage;
