import React from "react";
import { useLoaderData } from "react-router-dom";
import SingleJobCard from "./SingleJobCard";
import Wrapper from "../assets/Wrappers/JobsGrid";
const JobsGrid = () => {
  const { jobs } = useLoaderData();

  return (
    <>
      <Wrapper>
        {jobs && jobs.length > 0 ? (
          jobs
            ?.map((job, index) => {
              return <SingleJobCard key={index} job={job} />;
            })
            .reverse()
        ) : (
          <>
            <div>
              <h2 style={{ textWrap: "nowrap" }}>No Jobs are found!</h2>
            </div>
          </>
        )}
      </Wrapper>
    </>
  );
};

export default JobsGrid;
