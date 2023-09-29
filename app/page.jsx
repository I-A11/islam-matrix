import Image from "next/image";
import Navbar from "./components/Navbar";
import HomeHero from "./components/HomeHero";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="section mx-auto">
        <HomeHero />
      </main>
    </>
  );
}
