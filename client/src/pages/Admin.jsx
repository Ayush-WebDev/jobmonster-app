import React from "react";
import { customFetch } from "../utils/axios";
import { redirect, useLoaderData } from "react-router-dom";
import { StatItem } from "../components";
import { FaBriefcase, FaUsers } from "react-icons/fa";
import Wrapper from "../assets/Wrappers/LayoutWrapper";

export const loaderAdmin = async ({ request }) => {
  try {
    const { data } = await customFetch("/auth/getstats");
    console.log(data);

    if (data.user.roles !== "admin") {
      return redirect("/dashboard/all-jobs");
    }
    return { jobs: data.jobs, users: data.users };
  } catch (error) {
    return redirect("/dashboard/all-jobs");
  }
};

const Admin = () => {
  const { jobs, users } = useLoaderData();
  return (
    <>
      <Wrapper>
        <StatItem
          color={"#f59e0b"}
          title={"Users"}
          value={users}
          bcg={"#f59e0b"}
          icon={<FaUsers />}
        />
        <StatItem
          color={"#f20060"}
          title={"Jobs"}
          value={jobs}
          bcg={"#f20060"}
          icon={<FaBriefcase />}
        />
      </Wrapper>
    </>
  );
};

export default Admin;
