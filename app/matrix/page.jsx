"use client";

import Link from "next/link";
import Navbar from "../components/common/matrix/Navbar";
import Footer from "../components/common/matrix/Footer";
import MatrixRain from "../components/MatrixRain";
import MatrixProjectCard from "../components/projects-section/MatrixProjectCard";
import ProjectData from "../components/projects-section/ProjectsData";

const Matrix = () => {
  return (
    <div className="">
      <Navbar />
      <div className=" bg-black">
        <div className="section grid py-10 mx-auto pt-14 px-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {ProjectData.map((project) => {
            const { id, projectTitle, projectImage, siteLink, githubLink } =
              project;
            return (
              <div className="mt-10 md:px-0 sm:px-20 px-0" key={id}>
                <MatrixProjectCard
                  style={{ filter: "grayscale(100%)" }}
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
      <MatrixRain />
      <Footer />
    </div>
  );
};
export default Matrix;
