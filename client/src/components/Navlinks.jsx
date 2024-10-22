import React, { useState } from "react";
import links from "../utils/links";
import { Link, NavLink } from "react-router-dom";
import Wrapper from "../assets/Wrappers/Navlinks";
import { useDashboardContext } from "../Context";
const Navlinks = ({ bigSidebar }) => {
  const { isSidebarOpen, toggleSidebar, setCurrentLink, currentLink, user } =
    useDashboardContext();

  return (
    <>
      <Wrapper>
        {links.map((link, index) => {
          const { text, path, icon } = link;
          if (path === "admin" && user?.roles !== "admin") return;

          return (
            <div key={index}>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "link active" : "link"
                }
                to={path}
                onClick={() => {
                  bigSidebar ? null : toggleSidebar();
                }}
                end
              >
                <span className="icon">{icon}</span>
                <h4>{text}</h4>
              </NavLink>
            </div>
          );
        })}
      </Wrapper>
    </>
  );
};

export default Navlinks;
