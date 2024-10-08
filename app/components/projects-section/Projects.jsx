"use client";

import ProjectCard from "./ProjectCard";
import ProjectData from "./ProjectsData";

const WorkingProjects = () => {
  return (
    <div>
      <div className="bg-gray-200 pb-16">
        <div className="section grid my-8 mx-auto pt-14 px-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {ProjectData.map((project) => {
            const {
              id,
              projectTitle,
              projectImage,
              siteLink,
              githubLink,
              showCodeButton,
            } = project;
            return (
              <div className="mt-10 md:px-0 sm:px-20 px-0" key={id}>
                <ProjectCard
                  image={projectImage}
                  title={projectTitle}
                  siteLink={siteLink}
                  githubLink={githubLink}
                  showCodeButton={showCodeButton}
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
