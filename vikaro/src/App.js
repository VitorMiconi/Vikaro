import Header from "./components/Header";
import MainSection from "./components/MainSection";
import BigVikaro from "./components/BigVikaro";
import AboutSection from "./components/AboutSection";
import ProjectSection from "./components/ProjectsSection";
import Footer from "./components/Footer";
import ServicesSection from "./components/ServicesSection";


function App() {
  return (
    <div className="App bg-black">
      <Header/>
      <MainSection/>
      <BigVikaro></BigVikaro>
      <AboutSection></AboutSection>
      <ServicesSection></ServicesSection>
      <ProjectSection/>
      <Footer></Footer>
    </div>
  );
}

export default App;
