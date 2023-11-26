import Link from "next/link";
import { BsGithub, BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="bg-cyan-500">
      <div className="border-2 border-gray-500 w-full mx-auto"></div>

      <div className="section mx-auto p-12">
        <h1 className="text-center font-bold">Get In Touch</h1>
        <p className="text-center my-4 text-gray-800">
          If you have any opportunities, questions or if you just want to say
          hi, please feel free to contact me.
        </p>
        <div className="flex justify-center">
          <Link
            target="_blank"
            href="https://www.linkedin.com/in/islam-aboamh/"
          >
            <BsLinkedin size={40} fill="#861e1e" className="mr-4" />
          </Link>
          <Link target="_blank" href="https://github.com/I-A11">
            <BsGithub size={40} fill="#861e1e" className="" />
          </Link>
        </div>
        <Link href="mailto:d.islam1983@gmail.com">
          <button className="bg-yellow-800 text-white flex items-center justify-center self-center mx-auto my-4 p-3 border-none rounded-lg cursor-pointer">
            Send email
          </button>
        </Link>
      </div>
    </div>
  );
};
export default Footer;
