import React from "react";
import JobCategorySection from "../../pages/JobCategorySection";
import HeroSection from "./HeroSection";
import JobsPage from "../../pages/JobsPage";
import AuthUser from "../../Hooks/AuthUser";
import FindOneRight from "../../pages/FindOneRight";

const Home = () => {
  return (
    <>
    <HeroSection></HeroSection>
    <JobCategorySection></JobCategorySection>
    <JobsPage></JobsPage>
    <FindOneRight></FindOneRight>
    </>
  );
};

export default Home;
