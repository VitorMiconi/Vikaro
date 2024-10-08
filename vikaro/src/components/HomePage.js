import React from "react";
import Header from "./Header";
import MainSection from "./MainSection";
import BigVikaro from "./BigVikaro";
import AboutSection from "./AboutSection";
import ProjectSection from "./ProjectsSection";
import Footer from "./Footer";
import ServicesSection from "./ServicesSection";
import StairsSection from "./StairsSection";
import { useEffect } from 'react';
import AOS from 'aos';


const HomePage = () => {

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);


  return (
    <div className="App bg-black">
      <Header/>
      <MainSection/>
      <StairsSection></StairsSection>
      <BigVikaro></BigVikaro>
      <AboutSection></AboutSection>
      <ServicesSection></ServicesSection>
      <ProjectSection/>
      <Footer></Footer>
    </div>
  );
};

export default HomePage;
