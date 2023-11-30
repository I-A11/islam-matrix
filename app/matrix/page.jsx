"use client";

import Link from "next/link";
import Navbar from "../components/common/matrix/Navbar";
import Footer from "../components/common/matrix/Footer";
import MatrixRain from "./MatrixRain";

const Matrix = () => {
  return (
    <div className="">
      <Navbar />
      <MatrixRain />
      <Footer />
    </div>
  );
};
export default Matrix;
