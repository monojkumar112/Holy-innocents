import React from "react";
import Banner from "../components/section/Banner";
import AboutSection from "../components/section/AboutSection";
import Team from "../components/pages/home/Team";
import Community from "../components/pages/home/Community";
import NewsLetter from "../components/pages/home/NewsLetter";

const AboutPage = () => {
  const data = {
    title: "About Us",
    description: `The parish  is not principally a structure, a territory, or a building, but rather, 'the family of God,  a fellowship afire with a unifying spirit', 'a familial and welcoming home', the 'community of the faithful' - Saint John Paul II`,
    urlLink1: "#",
    urlLink2: "#",
    btnText1: "Our parish history",
    btnText2: "Mass Times",
  };
  return (
    <>
      <Banner data={data} />
      <AboutSection />
      <Team />
      <Community />
      <NewsLetter />
    </>
  );
};

export default AboutPage;
