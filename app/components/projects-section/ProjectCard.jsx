import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

const hiddenMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 30px, rgba(0,0,0,1) 30px, rgba(0,0,0,1) 30px)`;
const visibleMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 0px, rgba(0,0,0,1) 30px)`;

const ProjectCard = ({ image, title, siteLink, githubLink }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);

  return (
    <motion.div
      initial={false}
      animate={
        isLoaded && isInView
          ? { WebkitMaskImage: visibleMask, maskImage: visibleMask }
          : { WebkitMaskImage: hiddenMask, maskImage: hiddenMask }
      }
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      onViewportEnter={() => setIsInView(true)}
      className="bg-gray-300 px-8 py-6"
    >
      <div className="">
        <Image
          width={500}
          alt={title}
          src={image}
          onLoad={() => setIsLoaded(true)}
        />
      </div>
      <h3>{title}</h3>
      <div className="flex justify-center items-center space-x-5 font-bold">
        <a href={siteLink} target="_blank">
          View Project
        </a>
        <a href={githubLink} target="_blank">
          Project Code
        </a>
      </div>
    </motion.div>
  );
};
export default ProjectCard;
