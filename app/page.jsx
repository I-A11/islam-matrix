import Image from "next/image";
import Navbar from "./components/Navbar";
import HomeHero from "./components/HomeHero";
import HomeHeroCopy from "./components/HomeHero-copy";

export default function Home() {
  return (
    <>
      <Navbar />
      {/* <HomeHero /> */}
      <HomeHeroCopy />
    </>
  );
}
