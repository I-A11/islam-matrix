"use client";

import React, { useContext, useState } from "react";

const ColorContext = React.createContext();
export const ColorProvider = ({ children }) => {
  const [color, setColor] = useState(false);

  const changeColor = () => {
    setColor(!color);
  };

  return (
    <ColorContext.Provider value={{ color, changeColor }}>
      {children}
    </ColorContext.Provider>
  );
};

export const useColorContext = () => {
  return useContext(ColorContext);
};
