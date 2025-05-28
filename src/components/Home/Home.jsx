import React from "react";
import JobCategorySection from "../../pages/JobCategorySection";
import HeroSection from "./HeroSection";
import JobsPage from "../../pages/JobsPage";

const Home = () => {
  return (
    <>
    <HeroSection></HeroSection>
    <JobCategorySection></JobCategorySection>
    <JobsPage></JobsPage>
    </>
  );
};

export default Home;
