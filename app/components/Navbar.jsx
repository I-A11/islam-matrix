import { BsCapsule } from "react-icons/bs";
import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      <nav className="w-full bg-cyan-100 sticky top-0 shadow-lg">
        <div className="justify-around items-center hidden md:flex py-6 border-b-1 ">
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
            <Link href="/matrix">
              <BsCapsule fill="red" size={32} className="text-red-700" />
            </Link>
            <Link href="/">
              <BsCapsule fill="blue" size={32} className="text-blue-700" />
            </Link>
          </div>
        </div>
        {/* Mobile navbar */}
        <div className="container md:hidden  max-w-full h-32 grid grid-cols-[3fr,1fr]">
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
            <Link href="/matrix">
              <BsCapsule fill="red" size={32} className="text-red-700" />
            </Link>
            <Link href="/">
              <BsCapsule fill="blue" size={32} className="text-blue-700" />
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
