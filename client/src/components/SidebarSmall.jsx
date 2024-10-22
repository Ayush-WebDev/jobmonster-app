import React from "react";
import Header from "./Header";
import Navlinks from "./Navlinks";
import { FaTimes } from "react-icons/fa";
import Wrapper from "../assets/Wrappers/smallSidebar";
import { useDashboardContext } from "../Context";
const SmallSidebar = () => {
  const { toggleSidebar, isSidebarOpen } = useDashboardContext();
  return (
    <>
      <Wrapper>
        <div
          className={isSidebarOpen ? "small-sidebar" : "close-sidebar-small"}
        >
          <div className="inner-wrapper">
            <div className="close-btn">
              <FaTimes
                className="close-icon"
                onClick={() => {
                  toggleSidebar();
                }}
              />
            </div>
            <div className="logo-wrapper">
              <Header />
            </div>
            <div className="nav-links">
              <Navlinks />
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default SmallSidebar;
