import React from "react";
import { useLoaderData } from "react-router-dom";
import Wrapper from "../assets/Wrappers/JobsRow";
import SingleJobCard from "./SingleJobCard";
const JobRow = () => {
  const { jobs } = useLoaderData();

  return (
    <>
      <Wrapper>
        {jobs && jobs.length > 0 ? (
          jobs?.map((job, index) => {
            return <SingleJobCard key={index} job={job} />;
          })
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

export default JobRow;
