import React from "react";
import Banner from "../components/section/Banner";
import AboutSection from "../components/section/AboutSection";
import Team from "../components/pages/home/Team";
import Community from "../components/pages/home/Community";
import NewsLetter from "../components/pages/home/NewsLetter";
export const metadata = {
  title: "About us - Holy Innocents' Catholic Church Orpington",
  description:
    "Welcome to Holy Innocents Catholic Church, a vibrant parish community dedicated to faith, worship, and service. Join us for Mass, events, and spiritual growth.",
  keywords:
    "Holy Innocents, Catholic Church, Parish, Mass Times, Community, Worship, Faith, Events, Spiritual Growth, Ministries, Sacraments",
  icons: {
    icon: "/assets/favicon.png", // or your image path like '/assets/favicon.png'
  },
};

const AboutPage = () => {
  const data = {
    title: "About Us",
    description: `The parish  is not principally a structure, a territory, or a building, but rather, 'the family of God,  a fellowship afire with a unifying spirit', 'a familial and welcoming home', the 'community of the faithful' - Saint John Paul II`,
    urlLink1: "/brief-history",
    urlLink2: "/#event",
    btnText1: "Our parish history",
    btnText2: "Mass Times",
  };

  const communityData = {
    join_our_community_title: "",
    join_our_community_description: "",
    join_our_community_photo: "/assets/images/joidn.png",
  };

  return (
    <>
      <Banner data={data} />
      <AboutSection />
      <Team />
      <Community data={communityData} />
      <NewsLetter />
    </>
  );
};

export default AboutPage;
