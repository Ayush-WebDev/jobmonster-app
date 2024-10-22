import React from "react";
import { Outlet, useNavigation } from "react-router-dom";
import { Loader } from "../components";
const HomeLayout = () => {
  const navigate = useNavigation();
  const isLoading = navigate.state === "loading";
  console.log(isLoading);

  return (
    <>
      <div>{isLoading ? <Loader /> : <Outlet />}</div>
    </>
  );
};

export default HomeLayout;
