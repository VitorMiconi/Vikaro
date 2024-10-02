import Header from "./components/Header";
import MainSection from "./components/MainSection";
import BigVikaro from "./components/BigVikaro";
import AboutSection from "./components/AboutSection";
import ProjectSection from "./components/ProjectsSection";


function App() {
  return (
    <div className="App bg-black">
      <Header/>
      <MainSection/>
      <BigVikaro></BigVikaro>
      <AboutSection></AboutSection>
      <ProjectSection/>
    </div>
  );
}

export default App;
