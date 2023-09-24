import Image from "next/image";
import RedPill from "../assets/red-pill.png";
import BluePill from "../assets/blue-pill.png";

const Navbar = () => {
  return (
    <div>
      <nav className="w-full bg-cyan-100 sticky top-0 shadow-lg">
        <div className="justify-around items-center hidden md:flex py-6 border-b-1">
          <div className="">Islam Aboamh</div>
          <div className="rotate-90 w-20 border-b-2 border-gray-800"></div>
          <div className="flex justify-around space-x-10 ">
            <div>Home</div>
            <div>About</div>
          </div>
          <div className="rotate-90 w-20 border-b-2 border-gray-800 translate-x-5"></div>
          <div className="flex mr-6">
            <Image src={RedPill} width={32} alt="Red pill" />
            <Image src={BluePill} width={32} alt="Blue pill" />
          </div>
        </div>
        {/* Mobile navbar */}
        <div className="container md:hidden  max-w-full h-32 grid grid-cols-[3fr,1fr]">
          <div className="item-1">Islam Aboamh</div>
          <div className="horizontal border-t-2 border-gray-800"></div>
          <div className="item-2">
            <div>Home</div>
            <div>About</div>
          </div>
          <div className="rotate-90 -translate-x-16 -translate-y-[3.6rem] w-32 border-b-2 border-gray-800"></div>
          <div className="item-3 ml-6 -space-x-4 md:space-x-0">
            <Image className="w-12" src={RedPill} alt="Red pill" />
            <Image className="w-12" src={BluePill} alt="Blue pill" />
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
