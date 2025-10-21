import React from "react";
import BannerImage from "../components/pages/donate/BannerImage";
import DonateFrom from "../components/pages/donate/DonateFrom";
import DonateUs from "../components/pages/donate/DonateUs";
import HowToFind from "../components/pages/home/HowToFind";
import Community from "../components/pages/home/Community";
import NewsLetter from "../components/pages/home/NewsLetter";

const DonatePage = () => {
  return (
    <>
      <BannerImage />

      <DonateUs />

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
