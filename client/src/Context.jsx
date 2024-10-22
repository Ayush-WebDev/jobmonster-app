import React, { useContext, useEffect, useState } from "react";
import { customFetch } from "./utils/axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const checkDarkTheme = () => {
    const isDarkTheme = localStorage.getItem("dark-theme") === "true";
    document.body.classList.toggle("dark-theme", isDarkTheme);
    return isDarkTheme;
  };

  const [user, setUser] = useState("");
  const [jobs, setJobs] = useState([]);
  const [openPopup, setPopup] = useState({
    openModal: false,
    id: "",
  });
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isDarkTheme, setTheme] = useState(checkDarkTheme());
  const [currentLink, setCurrentLink] = useState(".");
  const [showPopupMenu, setPopupMenu] = useState(false);

  const logoutUser = async () => {
    try {
      await customFetch.get("/auth/logout");
      toast.success("Logged out successfully");
      setUser("");
    } catch (error) {
      console.log(error);
    }
  };

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const toggleTheme = () => {
    const themeVal = !isDarkTheme;
    localStorage.setItem("dark-theme", themeVal);
    document.body.classList.toggle("dark-theme", themeVal);
    setTheme(themeVal);
  };

  return (
    <AppContext.Provider
      value={{
        isSidebarOpen,
        isDarkTheme,
        toggleSidebar,
        toggleTheme,
        logoutUser,
        currentLink,
        setCurrentLink,
        showPopupMenu,
        setPopupMenu,
        user,
        setUser,
        jobs,
        setJobs,
        openPopup,
        setPopup,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useDashboardContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useDashboardContext };
