import React from "react";
import { popupLinks } from "../utils/popupMenu";
import { Link, useNavigate } from "react-router-dom";
import Wrapper from "../assets/Wrappers/PopupMenu";
import { useDashboardContext } from "../Context";
const PopupMenu = () => {
  const { setPopupMenu, showPopupMenu, setCurrentLink, logoutUser } =
    useDashboardContext();
  const navigate = useNavigate();
  return (
    <>
      <Wrapper>
        <div className={"popup-menu"}>
          {popupLinks.map((link, index) => {
            const { path, text, icon } = link;
            return (
              <Link
                key={index}
                className="link"
                to={path === "logout" ? null : path}
                onClick={() => {
                  setCurrentLink(path);
                  setPopupMenu(!showPopupMenu);
                  if (path === "logout") {
                    logoutUser();
                    navigate("/");
                  }
                }}
              >
                <div className="icon">{icon}</div>
                {text}
              </Link>
            );
          })}
        </div>
      </Wrapper>
    </>
  );
};

export default PopupMenu;
