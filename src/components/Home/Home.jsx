import React from "react";
import JobCategorySection from "../../pages/JobCategorySection";
import HeroSection from "./HeroSection";
import JobsPage from "../../pages/JobsPage";
import AuthUser from "../../Hooks/AuthUser";

const Home = () => {
  const {user} = AuthUser;
  console.log(user)
  return (
    <>
    <HeroSection></HeroSection>
    <JobCategorySection></JobCategorySection>
    <JobsPage></JobsPage>
    </>
  );
};

export default Home;
