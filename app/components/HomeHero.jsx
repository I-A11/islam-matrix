"use client";

import Canvas from "./WakeUp";
import { useColorContext } from "../context/color_context";
import { GiRabbit } from "react-icons/gi";
import Link from "next/link";
import Image from "next/image";
import StarryNight from "../assets/starry-night.jpeg";

const HomeHero = () => {
  const { color, changeColor } = useColorContext();
  return (
    <div className={` ${color ? "bg-red-300" : "bg-amber-300"} h-72 relative`}>
      <div>
        <Canvas />
        <div className="flex justify-center mx-auto -mt-4">
          <Link href="/matrix">
            <GiRabbit size={64} fill="white" />
          </Link>
        </div>
      </div>
    </div>
  );
};
export default HomeHero;
