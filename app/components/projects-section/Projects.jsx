"use client";

import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { ProjectData } from "./projectsData";

const WorkingProjects = () => {
  return (
    <div>
      <div className="bg-gray-200 pb-16">
        <div className="section grid my-8 mx-auto pt-14 px-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
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
  );
};
export default WorkingProjects;
