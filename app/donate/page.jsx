import React from "react";
import BannerImage from "../components/pages/donate/BannerImage";
import DonateFrom from "../components/pages/donate/DonateFrom";
import DonateUs from "../components/pages/donate/DonateUs";
import HowToFind from "../components/pages/home/HowToFind";
import Community from "../components/pages/home/Community";
import NewsLetter from "../components/pages/home/NewsLetter";
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

const DonatePage = () => {
  return (
    <>
      {/* <BannerImage /> */}

      {/* <DonateUs /> */}

      <DonateFrom />

      <HowToFind />
      <div className="cpt-6">
        <Community />
      </div>
      <NewsLetter />
    </>
  );
};

export default DonatePage;
