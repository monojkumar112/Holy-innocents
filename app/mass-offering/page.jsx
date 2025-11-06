import React from "react";
import Banner from "../components/section/Banner";
import MassOffering from "../components/section/MassOffering";

const MassOfferingPage = () => {
  const data = {
    title: "Our Mass Offering ",
  };
  return (
    <>
      <Banner data={data} />
      <MassOffering />
    </>
  );
};

export default MassOfferingPage;
