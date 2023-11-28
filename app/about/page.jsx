"use client";

import Footer from "../components/common/Footer";
import Navbar from "../components/common/Navbar";
import Image from "next/image";
import IslamImage from "../assets/images/avatar.png";
import ProjectCard from "../components/projects-section/ProjectCard";
import ProjectData from "../components/projects-section/ArchiveData";

const About = () => {
  return (
    <div>
      <Navbar />
      <div className="">
        <div className="bg-amber-300 p-2">
          <div className="pt-12 px-1 w-full mx-auto text-black text-center text-xl sm:text-3xl">
            <h1>
              Hello, I am <span className="text-cyan-700">Islam Aboamh </span>
            </h1>
            <h2 className="text-lg sm:text-2xl mt-6">
              I am a front-end developer{" "}
            </h2>
          </div>
          <div className="flex justify-center mx-auto w-60 sm:w-80 mb-10">
            <Image src={IslamImage} alt="Islam image" />
          </div>
        </div>

        <div className="section flex items-center justify-center mx-auto mt-10 py-4 px-6 lg:px-56 md:px-28">
          <div className="w-full">
            <div className="text-lg font-bold">About Me</div>
            <div className="border-2 border-cyan-700 w-24 mt-1 mb-6"></div>
            <div className="text-base mb-10">
              Creative Front-End Developer with experience building responsive
              websites and apps in fast-paced, collaborative environment.
              Talented in HTML, CSS, JavaScript, React.js and Next.js. Familiar
              with Scrum and Agile.
            </div>
          </div>
        </div>
        <div className="bg-gray-200 pb-16">
          <div className="section grid my-8 mx-auto pt-14 px-6 lg:px-28 grid-cols-1 md:grid-cols-2 gap-10">
            {ProjectData.map((project) => {
              const { id, projectTitle, projectImage, siteLink, githubLink } =
                project;
              return (
                <div className="mt-10 md:px-0 sm:px-20 px-0" key={id}>
                  <ProjectCard
                    image={projectImage}
                    title={projectTitle}
                    siteLink={siteLink}
                    githubLink={githubLink}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default About;
