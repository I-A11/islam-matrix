"use client";

import HomeHero from "./HomeHero";
import Image from "next/image";
import Base from "../../assets/images/base-1.png";
import { useColorContext } from "../../context/color_context";

const HomeContainer = () => {
  const { color } = useColorContext();

  return (
    <div
      className={` ${color ? "bg-blue-500" : "bg-amber-300"} h pt-4 pb-10 px-6`}
    >
      <HomeHero />
      <Image src={Base} alt="desktop base" width={200} className="mx-auto" />
    </div>
  );
};
export default HomeContainer;
