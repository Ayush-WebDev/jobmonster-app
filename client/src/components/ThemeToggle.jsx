import React from "react";
import { Wrapper } from "../assets/Wrappers/ThemeToggle";
import { FaMoon } from "react-icons/fa";
import { MdOutlineWbSunny } from "react-icons/md";
import { useDashboardContext } from "../Context";
const ThemeToggle = () => {
  const { isDarkTheme, toggleTheme } = useDashboardContext();
  const handleThemeToggle = () => {
    toggleTheme();
  };
  return (
    <>
      <Wrapper>
        <div className="theme-toggle">
          {isDarkTheme ? (
            <MdOutlineWbSunny className="icon" onClick={handleThemeToggle} />
          ) : (
            <FaMoon className="icon" onClick={handleThemeToggle} />
          )}
        </div>
      </Wrapper>
    </>
  );
};

export default ThemeToggle;
