import React from "react";
import Banner from "../components/section/Banner";
import Team from "../components/pages/home/Team";
import Community from "../components/pages/home/Community";
import NewsLetter from "../components/pages/home/NewsLetter";
import LiturgySection from "../components/section/LiturgySection";
import LiturgyContent from "../components/section/LiturgyContent";

const FellowshipPage = () => {
  const data = {
    title: "Our liturgy",
    description: `The Eucharist is the source and summit of the whole Christian life.  It is the vital centre of all that the Church is and does -  ​One Bread, One Body, Catholic bishops of Britain and Ireland, 1998`,
    urlLink1: "#",
    urlLink2: "#",
    btnText1: "Get Involved",
    btnText2: "Mass Times",
  };
  return (
    <>
      <Banner data={data} />
      <LiturgySection />
      <LiturgyContent />
      <Team />
      <Community />
      <NewsLetter />
    </>
  );
};

export default FellowshipPage;
