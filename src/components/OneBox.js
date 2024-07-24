import React from "react";
import MainLayout from "./MainLayout";

const OneBox = ({ isDarkMode, handleToggleTheme }) => {
  return (
    <MainLayout isDarkMode={isDarkMode} handleToggleTheme={handleToggleTheme} />
  );
};

export default OneBox;
