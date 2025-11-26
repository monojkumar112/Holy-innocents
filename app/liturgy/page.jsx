import React from "react";
import Banner from "../components/section/Banner";
import Team from "../components/pages/home/Team";
import Community from "../components/pages/home/Community";
import NewsLetter from "../components/pages/home/NewsLetter";
import LiturgySection from "../components/section/LiturgySection";
import LiturgyContent from "../components/section/LiturgyContent";
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
      <Community
        data={{
          join_our_community_title: "",
          join_our_community_description: "",
          join_our_community_photo: "/assets/images/joidn.png",
        }}
      />
      <NewsLetter />
    </>
  );
};

export default FellowshipPage;
