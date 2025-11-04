import React from "react";
import Banner from "../components/section/Banner";
import Team from "../components/pages/home/Team";
import Community from "../components/pages/home/Community";
import NewsLetter from "../components/pages/home/NewsLetter";
import FellowshipSection from "../components/section/FellowshipSection";
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

const FellowshipPage = () => {
  const data = {
    title: "Our fellowship ",
    description: `They devoted themselves to the teaching of the apostles and to the communal life, to the breaking of the bread and to the prayers - Acts 2:42`,
    urlLink1: "#",
    urlLink2: "#",
    btnText1: "Get Involved",
    btnText2: "Mass Times",
  };
  return (
    <>
      <Banner data={data} />
      <FellowshipSection />
      <Team />
      <Community />
      <NewsLetter />
    </>
  );
};

export default FellowshipPage;
