"use client";
import { useState } from "react";
import { useColorContext } from "../../context/color_context";
import { BsCapsule } from "react-icons/bs";
import Link from "next/link";

const Navbar = () => {
  const { color, changeColor } = useColorContext();

  return (
    <div>
      <nav
        className={`w-full ${
          color ? "bg-cyan-300" : "bg-cyan-500"
        }  sticky top-0 shadow-lg`}
      >
        <div className="justify-around items-center hidden md:flex py-6 border-b-1 font-semibold">
          <Link className="hover:underline decoration-1" href="/">
            Islam Aboamh
          </Link>
          <div className="rotate-90 w-20 border-b-2 border-gray-800"></div>
          <div className="flex justify-around space-x-10 ">
            <Link className="hover:underline decoration-1" href="/">
              Home
            </Link>
            <Link className="hover:underline decoration-1" href="/about">
              About
            </Link>
          </div>
          <div className="rotate-90 w-20 border-b-2 border-gray-800 translate-x-5"></div>
          <div className="flex mr-6">
            <button onClick={changeColor}>
              <BsCapsule fill="blue" size={32} className="text-blue-700" />
            </button>
            <Link href="/matrix">
              <BsCapsule fill="red" size={32} className="text-red-700" />
            </Link>
          </div>
        </div>
        {/* Mobile navbar */}
        <div className="container md:hidden  max-w-full h-32 grid grid-cols-[3fr,1fr] font-semibold">
          <Link className="item-1 hover:underline decoration-1" href="/">
            Islam Aboamh
          </Link>
          <div className="horizontal border-t-2 border-gray-800"></div>
          <div className="item-2">
            <Link className="hover:underline decoration-1" href="/">
              Home
            </Link>
            <Link className="hover:underline decoration-1" href="/about">
              About
            </Link>
          </div>
          <div className="rotate-90 -translate-x-16 -translate-y-[3.6rem] w-32 border-b-2 border-gray-800"></div>
          <div className="item-3 ml-6  md:space-x-0">
            <button onClick={changeColor}>
              <BsCapsule fill="blue" size={32} className="text-blue-700" />
            </button>
            <Link href="/matrix">
              <BsCapsule fill="red" size={32} className="text-red-700" />
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
