"use client";

import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { ProjectData } from "./projectsData";

const WorkingProjects = () => {
  return (
    <div>
      <div>
        <div className="grid my-8 mx-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {ProjectData.map((project) => {
            const { id, projectTitle, projectImage, siteLink, githubLink } =
              project;
            return (
              <div key={id}>
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
