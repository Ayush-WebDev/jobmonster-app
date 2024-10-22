import React, { useEffect } from "react";
import {
  Outlet,
  redirect,
  useLoaderData,
  useNavigation,
} from "react-router-dom";
import Wrapper from "../assets/Wrappers/DashboardLayout";
import { Nav, Sidebar, SidebarSmall, Loader } from "../components";
import { customFetch } from "../utils/axios";
import { useDashboardContext } from "../Context";

export const loaderUser = async () => {
  try {
    const { data } = await customFetch("/auth/profile");
    return data;
  } catch (error) {
    return redirect("/");
  }
};

const DashboardLayout = () => {
  const { setUser } = useDashboardContext();
  const navigation = useNavigation();
  const isPageLoading = navigation.state === "loading";
  const { user } = useLoaderData();
  useEffect(() => {
    setUser(user);
  }, [user]);
  return (
    <>
      {isPageLoading ? (
        <Loader />
      ) : (
        <>
          <Wrapper>
            <Sidebar />
            <SidebarSmall />
            <div className="dash-nav-wrapper">
              <Nav />
              <div className="main-content-wrapper">
                <Outlet context={{ user }} />
              </div>
              {/* We can pass any data in the outlet that will be accessible on all the pages */}
            </div>
          </Wrapper>
        </>
      )}
    </>
  );
};

export default DashboardLayout;
