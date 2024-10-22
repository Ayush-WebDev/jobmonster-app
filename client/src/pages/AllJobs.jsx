import React, { useEffect, useState } from "react";
import Wrapper from "../assets/Wrappers/AddJob";
import FilterJobs from "../components/FilterJobs";
import JobsGrid from "../components/JobsGrid";
import JobRow from "../components/JobRow";
import { BsFillGridFill } from "react-icons/bs";
import { CiGrid2H } from "react-icons/ci";
import { IoGridOutline } from "react-icons/io5";
import PopupWrapper from "../assets/Wrappers/PopupWrapper";
import { MdMenu } from "react-icons/md";
import { customFetch } from "../utils/axios";
import { useLoaderData } from "react-router-dom";
import { useDashboardContext } from "../Context";
import { PaginationContainer, PopupJob } from "../components";

export const allJobsLoader = async ({ request }) => {
  const params = Object.fromEntries([
    ...new URL(request.url).searchParams.entries(),
  ]);
  try {
    const { data } = await customFetch("/jobs", {
      params: { ...params },
    }); /// Axios allows us to pass the query parameters directly
    return {
      jobs: data.jobs,
      count: data.count,
      pages: data.totalPages,
      currentPage: data.currentPage,
      searchValues: { ...params },
    };
  } catch (error) {
    return error;
  }
};

const AllJobs = () => {
  const { jobs, currentPage, pages, count } = useLoaderData();
  const { setJobs, openPopup } = useDashboardContext();
  const [isGrid, setGrid] = useState(true);
  const changeLayout = (val) => {
    setGrid(val);
  };
  useEffect(() => {
    setJobs(jobs);
  }, []);
  return (
    <>
      <div>
        <FilterJobs />
        <div>
          <div className="layout-toggle">
            <h4 className="count">
              Total:{count} {count.length > 1 ? "Job" : "Jobs"}
            </h4>
            <IoGridOutline
              className={`${isGrid ? "icon-toggle active" : "icon-toggle"}`}
              onClick={() => {
                changeLayout(true);
              }}
            />
            <CiGrid2H
              className={`${!isGrid ? "icon-toggle active" : "icon-toggle"}`}
              onClick={() => {
                changeLayout(false);
              }}
            />
          </div>
          <div className="jobs-list">{isGrid ? <JobsGrid /> : <JobRow />}</div>
        </div>
        {openPopup.openModal && <PopupJob />}
        <div>
          {pages > 1 && (
            <PaginationContainer data={{ pages, currentPage, count }} />
          )}
        </div>
      </div>
    </>
  );
};

export default AllJobs;
