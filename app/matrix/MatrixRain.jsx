// import Canvas from './Canvas'
import React, { useRef, useEffect } from "react";
import RainStream from "./RainStream";

const MatrixRains = (props) => {
  return (
    <div className="bg-black h-96">
      <div className="">
        <RainStream />
      </div>
    </div>
  );
};

export default MatrixRains;
