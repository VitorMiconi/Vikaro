import Header from "./components/Header";
import MainSection from "./components/MainSection";
import BigVikaro from "./components/BigVikaro";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";


function App() {
  return (
    <div className="App bg-black">
      <Header/>
      <MainSection/>
      <BigVikaro></BigVikaro>
      <AboutSection></AboutSection>
      <ServicesSection></ServicesSection>
    </div>
  );
}

export default App;
