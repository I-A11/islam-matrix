"use client";

import Canvas from "./WakeUp";
import { useColorContext } from "../context/color_context";
import { GiRabbit } from "react-icons/gi";
import { MdLinkedCamera } from "react-icons/md";
import Link from "next/link";
import Image from "next/image";
import Shelf from "../assets/images/shelf.svg";
import VanPortrait from "../assets/images/van-portrait.svg";
import Painting from "../assets/images/paint-1.png";

const HomeHero = () => {
  const { color, changeColor } = useColorContext();
  return (
    <div className={` ${color ? "bg-indigo-300" : "bg-amber-300"} h-72`}>
      <Canvas />
      <div className=" -mt-4 grid grid-cols-11  max-w-[50rem] mx-auto" ml-4>
        <div className=" col-start-1 col-end-4">
          <Image src={Painting} alt="Van Gogh" width={400} className="ml-6" />
        </div>
        <div className="  col-start-6 col-span-2">
          <Link href="/matrix">
            <GiRabbit size={72} fill="white" />
          </Link>
        </div>

        <div className="col-start-1 col-end-3">
          {/* <Image src={Shelf} alt="book shelf" width={480} /> */}
        </div>
      </div>

      {/* //////////////// */}
    </div>
  );
};
export default HomeHero;
