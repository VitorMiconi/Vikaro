import React from "react";
import Header from "./components/Header";
import MainSection from "./components/MainSection";
import BigVikaro from "./components/BigVikaro";
import AboutSection from "./components/AboutSection";
import ProjectSection from "./components/ProjectsSection";
import Footer from "./components/Footer";
import ServicesSection from "./components/ServicesSection";
import StairsSection from "./components/StairsSection";
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
