'use client';
import React, { useState, useEffect } from "react";
import BannerImage from "../components/pages/donate/BannerImage";
import DonateFrom from "../components/pages/donate/DonateFrom";
import DonateUs from "../components/pages/donate/DonateUs";
import HowToFind from "../components/pages/home/HowToFind";
import Community from "../components/pages/home/Community";
import NewsLetter from "../components/pages/home/NewsLetter";

const DonatePage = () => {

  // get data 
  const [homeData, setHomeData] = useState();
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  useEffect(() => {
    const load = async () => {
      const res = await fetch(`${baseUrl}/api/home-settings`);
      const json = await res.json();
      const payload = res?.data ?? json;
      setHomeData(payload[0]);
    };
    load();
  }, [baseUrl]);

  return (
    <>
      {/* <BannerImage /> */}

      {/* <DonateUs /> */}

      <DonateFrom />

      <HowToFind
        data={homeData}
      />
      <div className="cpt-6">
        <Community
          data={homeData}
        />
      </div>
      <NewsLetter data={homeData} />
    </>
  );
};

export default DonatePage;
