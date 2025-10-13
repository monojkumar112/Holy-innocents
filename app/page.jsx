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
import NewHere from "./components/pages/home/NewHere";
import Evangelisation from "./components/pages/home/Evangelisation";

export const metadata = {
  title: "Holy Innocents Catholic Church",
  description:
    "Welcome to Holy Innocents Catholic Church, a vibrant parish community dedicated to faith, worship, and service. Join us for Mass, events, and spiritual growth.",
  keywords:
    "Holy Innocents, Catholic Church, Parish, Mass Times, Community, Worship, Faith, Events, Spiritual Growth, Ministries, Sacraments",
};
export default function Home() {
  return (
    <>
      <HeroSlider />
      <MassEvent />
      <BookingMass />
      <NewsLetter />
      <Notice />
      <NewHere />
      <Team />
      <Community />
      <Evangelisation />
      <Minitries />
      <AdorationRoom />
      <ParishCentre />
      <HowToFind />
      <Touch />
      <ContactUs />
    </>
  );
}
