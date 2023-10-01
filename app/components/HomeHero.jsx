"use client";

import Canvas from "./WakeUp";
import { useColorContext } from "../context/color_context";
import { GiRabbit } from "react-icons/gi";
import { CgLoadbar } from "react-icons/cg";
import Link from "next/link";
import Image from "next/image";
import Shelf from "../assets/shelf.svg";
import VanPortrait from "../assets/van-portrait.svg";

const HomeHero = () => {
  const { color, changeColor } = useColorContext();
  return (
    <div
      className={` ${color ? "bg-indigo-300" : "bg-amber-300"} h-72 relative`}
    >
      <div>
        <Canvas />
        <div className="flex justify-center mx-auto -mt-4">
          <Link href="/matrix">
            <GiRabbit size={64} fill="white" />
          </Link>
        </div>

        <div className="mx-auto max-w-[40rem] -mt-20">
          <Image
            src={VanPortrait}
            alt="Van Gogh"
            width={96}
            className="rounded-3xl"
          />
        </div>
        {/* <div className="mx-auto max-w-[40rem] -translate-y-28  -translate-x-24">
          <Image src={Shelf} alt="book shelf" width={420} />
        </div> */}
      </div>
    </div>
  );
};
export default HomeHero;
