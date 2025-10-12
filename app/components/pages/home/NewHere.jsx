import React from "react";

const NewHere = () => {
  return (
    <>
      <section className="new-here">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="new-image-left">
                <img src="/assets/images/new-here.png" alt="" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="new-here-right">
                <h2 className="section-title">New Here?</h2>
                <p>
                  We’re so glad you found us! Whether you’re new to the area,
                  looking for a new church home, or just exploring faith, we
                  welcome you with open arms.
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
