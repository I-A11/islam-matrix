"use client";

import Canvas from "./WakeUp";
import { useColorContext } from "../context/color_context";
import { GiRabbit } from "react-icons/gi";
import Link from "next/link";
import Image from "next/image";
import Media from "../assets/images/media.png";
import MediaColored from "../assets/images/media-1.png";
import Painting from "../assets/images/paint-1.png";

const HomeHero = () => {
  const { color } = useColorContext();
  return (
    <div
      className={` ${color ? "bg-indigo-300" : "bg-amber-300"} h-56 xs:h-80`}
    >
      <div className="flex xs:flex-row flex-col justify-center xs:pr-8 pr-0 items-center xs:max-w-[36rem] mx-auto ">
        <Canvas />
        <div className="">
          <Link href="/matrix">
            <GiRabbit size={60} fill="white" className="" />
          </Link>
        </div>
      </div>

      <div className=" -mt-8 grid xs:grid-cols-11 grid-cols-3 max-w-[50rem] mx-auto">
        <div className=" col-start-1 col-end-5 hidden xs:block">
          <Image src={Painting} alt="Paintings" width={250} className="ml-6" />
        </div>
        {/* <div className="xs:col-start-6 xs:col-end-7 col-start-2 col-end-3">
          <Link href="/matrix">
            <GiRabbit size={72} fill="white" className="ml-4 xs:ml-0" />
          </Link>
        </div> */}

        <div className="col-start-8 col-end-12 self-end hidden xs:block">
          {color ? (
            <Image src={Media} alt="media" width={600} />
          ) : (
            <Image src={MediaColored} alt="media" width={600} />
          )}
        </div>
      </div>
    </div>
  );
};
export default HomeHero;
