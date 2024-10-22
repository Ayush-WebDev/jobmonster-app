import React from "react";
import { Form, Link, useLoaderData, useSubmit } from "react-router-dom";
import Input from "./Input";
import SelectField from "./SelectField";
import Wrapper from "../assets/Wrappers/FiltersWrapper";

const FilterJobs = () => {
  const arrOptions = ["all", "pending", "rejected", "interview"];
  const arrOptionsType = ["all", "full-time", "part-time", "internship"];
  const arrOptionsSort = ["a-z", "z-a", "newest", "oldest"];
  const { searchValues } = useLoaderData();
  const submit = useSubmit();
  const debounce = (onChange) => {
    let timeout;
    return (event) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        const form = event.target.form;
        onChange(form);
      }, 2000);
    };
  };
  //Basic debounce delay function
  // const debounce = () => {
  //   let timeout;
  //   return () => {
  //     clearTimeout(timeout);
  //     timeout = setTimeout(() => {
  //       console.log("ran func");
  //     }, 2000);
  //   };
  // };

  return (
    <>
      <Wrapper>
        <Form className="form-filter">
          <Input
            label={"Search"}
            name="search"
            type={"search"}
            defaultVal={searchValues?.search}
            placeholder={"Search"}
            // onChange={(event) => {
            //   submit(event.currentTarget.form);
            // }}
            onChange={debounce((form) => {
              submit(form);
            })}
          />
          <SelectField
            label={"Job Status"}
            name="jobStatus"
            arrOptions={arrOptions}
            defaultVal={searchValues?.jobStatus || "all"}
            onChange={(event) => {
              submit(event.currentTarget.form);
            }}
          />
          <SelectField
            label={"Job Type"}
            name="jobType"
            arrOptions={arrOptionsType}
            defaultVal={searchValues?.jobType || "all"}
            onChange={(event) => {
              submit(event.currentTarget.form);
            }}
          />
          <SelectField
            label={"Sort"}
            name="sort"
            arrOptions={arrOptionsSort}
            defaultVal={searchValues?.sort || "newest"}
            onChange={(event) => {
              submit(event.currentTarget.form);
            }}
          />
          <Link
            style={{ textAlign: "center" }}
            to="/dashboard/all-jobs"
            className="btn submit"
          >
            Reset filters
          </Link>
        </Form>
      </Wrapper>
    </>
  );
};

export default FilterJobs;
