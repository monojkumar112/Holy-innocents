import React from "react";
import GiftaidFrom from "../components/section/GiftaidFrom";
export const metadata = {
  title: "Holy Innocents' Catholic Church Orpington - Gift Aid",
  description:
    "Welcome to Holy Innocents Catholic Church, a vibrant parish community dedicated to faith, worship, and service. Join us for Mass, events, and spiritual growth.",
  keywords:
    "Holy Innocents, Catholic Church, Parish, Mass Times, Community, Worship, Faith, Events, Spiritual Growth, Ministries, Sacraments",
  icons: {
    icon: "/icon.png",
  },
};
function GiftAidPage() {
  const disabled = false;
  return (
    <>
      {!disabled ? (
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
      ) : (
        <section className="churchsuite-section">
          <div className="container">
            <div className="churchsuite-wrapper">
              <h2 className="text-center">Gift Aid Form Temporary Closed</h2>
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export default GiftAidPage;
