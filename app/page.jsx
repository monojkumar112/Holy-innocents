'use client';
import Image from "next/image";
import HeroSlider from "./components/pages/home/HeroSlider";
import MassEvent from "./components/pages/home/MassEvent";
import BookingMass from "./components/pages/home/BookingMass";
import NewsLetter from "./components/pages/home/NewsLetter";
import Notice from "./components/pages/home/Notice";
import Team from "./components/pages/home/Team";
import Community from "./components/pages/home/Community";
import Minitries from "./components/pages/home/Minitries";
import AdorationRoom from "./components/pages/home/AdorationRoom";
import ParishCentre from "./components/pages/home/ParishCentre";
import HowToFind from "./components/pages/home/HowToFind";
import Touch from "./components/pages/home/Touch";
import ContactUs from "./components/pages/home/ContactUs";

import Evangelisation from "./components/pages/home/Evangelisation";
import NewHere from "./components/pages/home/NewHere";
import FatherHere from "./components/pages/home/FatherHere";
import Upcoming from "./components/pages/home/Upcoming";

import React, { useState, useCallback } from "react";

// export const metadata = {
//   title: "Holy Innocents' Catholic Church Orpington - Home",
//   description:
//     "Welcome to Holy Innocents Catholic Church, a vibrant parish community dedicated to faith, worship, and service. Join us for Mass, events, and spiritual growth.",
//   keywords:
//     "Holy Innocents, Catholic Church, Parish, Mass Times, Community, Worship, Faith, Events, Spiritual Growth, Ministries, Sacraments",
//   icons: {
//     icon: "/assets/favicon.png",
//   },
// };

export default function Home() {
  // fetch home page data
  const [data, setData] = useState();
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  const fetchHomePageData = useCallback(async () => {
    if (!baseUrl) return;
    try {
      const res = await fetch(`${baseUrl}/api/home-settings`);
      const json = await res.json();

      const payload = json?.data ?? json;
      setData(payload[0]);
    } catch (err) {
      console.error("Error fetching team content:", err);
    }
  }, [baseUrl]);

  React.useEffect(() => {
    if (!baseUrl) return;
    fetchHomePageData();
  }, [baseUrl, fetchHomePageData]);
  // console.log('Home page data: ', data);
  return (
    <>
      <HeroSlider />
      <FatherHere data={data} />
      <NewsLetter />
      <MassEvent data={data} />
      <Upcoming />
      <BookingMass data={data} />
      <NewHere data={data} />
      <Team />
      <Community data={data} />
      <Evangelisation data={data} />
      <Minitries data={data} />
      <AdorationRoom data={data} />
      <ParishCentre data={data} />
      <HowToFind data={data} />
      <Touch data={data} />
      <ContactUs data={data} />
    </>
  );
}
