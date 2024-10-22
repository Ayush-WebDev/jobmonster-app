import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Wrapper from "../assets/Wrappers/Sidebar";
import Navlinks from "./Navlinks";
import { useDashboardContext } from "../Context";
const Sidebar = () => {
  const { isSidebarOpen } = useDashboardContext();
  return (
    <>
      <Wrapper>
        <div
          className={
            !isSidebarOpen
              ? "sidebar-container show-sidebar"
              : "sidebar-container hide-sidebar"
          }
        >
          <div className="logo-wrapper">
            <Header />
          </div>
          <div>
            <Navlinks bigSidebar />
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default Sidebar;
