import React from "react";
import GiftaidFrom from "../components/section/GiftaidFrom";

function GiftAidPage() {
  return (
    <>
      <section className="churchsuite-section">
        <div className="container">
          <div className="churchsuite-wrapper">
            <div className="churchsuite-header">
              <h3>Parish Gift Aid Declaration</h3>
              <h5>
                Parish Gift Aid Declaration – Roman Catholic Archdiocese of
                Southwark
              </h5>
            </div>
            <GiftaidFrom />
          </div>
        </div>
      </section>
    </>
  );
}

export default GiftAidPage;
