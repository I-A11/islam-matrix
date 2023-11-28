import Footer from "../components/common/Footer";
import Navbar from "../components/common/Navbar";
import Image from "next/image";
import IslamImage from "../assets/images/avatar.png";

const About = () => {
  return (
    <div>
      <Navbar />
      <div className="p-2">
        <div className="pt-12 px-1 w-full mx-auto text-black text-center text-xl sm:text-3xl">
          <h1>
            Hello, I am <span className="text-cyan-400">Islam Aboamh </span>
          </h1>
          <h2 className="text-lg sm:text-2xl mt-6">
            I am a front-end developer{" "}
          </h2>
        </div>
        <div className="flex justify-center mx-auto w-60 sm:w-80">
          <Image src={IslamImage} alt="Islam image" />
        </div>
        <div className="section flex items-center justify-between py-4 px-16">
          <div className="w-[70%]">
            <div className="text-lg font-bold">About Me</div>
            <div className="border-2 border-black w-28 mt-1"></div>
            <div className="text-base">
              Creative Front-End Developer with experience building responsive
              websites and apps in fast-paced, collaborative environment.
              Talented in HTML/CSS/JavaScript/React.js and Next.js. Familiar
              with Scrum and Agile.
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default About;
