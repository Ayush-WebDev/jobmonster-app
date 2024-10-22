import { FaCog, FaHome, FaPlusCircle, FaSignOutAlt } from "react-icons/fa";
import { IoBarChartSharp } from "react-icons/io5";
import { MdQueryStats } from "react-icons/md";

export const popupLinks = [
  {
    path: ".",
    text: "Add Job",
    icon: <FaPlusCircle />,
  },
  {
    path: "stats",
    text: "Stats",
    icon: <MdQueryStats />,
  },
  {
    path: "profile",
    text: "Profile",
    icon: <FaCog />,
  },
  {
    path: "logout",
    text: "Logout",
    icon: <FaSignOutAlt />,
  },
];
