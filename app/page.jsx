import Navbar from "./components/common/Navbar";
import HomeContainer from "./components/home/HomeContainer";
import HomeMessage from "./components/home/HomeMessage";
import Projects from "./components/projects-section/Projects";

export default function Home() {
  return (
    <>
      <Navbar />
      <HomeContainer />
      <HomeMessage />
      <Projects />
    </>
  );
}
