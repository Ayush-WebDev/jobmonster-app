import React, { useRef, useState } from "react";
import { FaAlignLeft, FaUser } from "react-icons/fa";
import Wrapper from "../assets/Wrappers/Navbar";
import { useDashboardContext } from "../Context";
import PopupMenu from "./PopupMenu";
import { useLoaderData } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
const Nav = () => {
  const { toggleSidebar, setPopupMenu, showPopupMenu } = useDashboardContext();
  const { user } = useDashboardContext();

  return (
    <>
      <Wrapper>
        <div className="nav-center">
          <button
            type="button"
            className="toggle-btn"
            onClick={() => {
              console.log("clicked");
              toggleSidebar();
            }}
          >
            <FaAlignLeft />
          </button>
          <div>
            <h3>Dashboard</h3>
          </div>
          <div className="nav-buttons">
            <ThemeToggle />
            <div
              className="wrap-popup-menu"
              onMouseEnter={() => {
                setPopupMenu(!showPopupMenu);
              }}
              onMouseLeave={() => {
                setPopupMenu(!showPopupMenu);
              }}
            >
              <button type="button" className="toggle-btn">
                {user?.avatar ? (
                  <img className="img-user" src={user.avatar} />
                ) : (
                  <FaUser />
                )}
                {user && user.name}
              </button>
              {showPopupMenu && <PopupMenu />}
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default Nav;
