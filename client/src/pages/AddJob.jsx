import React from "react";
import { Input, SelectField } from "../components";
import { Form, redirect, useNavigation } from "react-router-dom";
import Wrapper from "../assets/Wrappers/AddJob";
import { customFetch } from "../utils/axios";
import { toast } from "react-toastify";

export const addjobAction = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  console.log(data);
  try {
    const res = await customFetch.post("/jobs", data);
    toast.success("Job added successfully");
    return redirect("/dashboard/all-jobs");
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

const AddJob = () => {
  const arrOptions = ["select one", "pending", "rejected", "interview"];
  const arrOptionsType = ["select one", "full-time", "part-time", "internship"];
  const navigate = useNavigation();
  const isSubmitting = navigate.state === "submitting";
  return (
    <>
      <Wrapper>
        <Form className="form-add-job" method="post">
          <Input
            name="title"
            type={"text"}
            required={true}
            label={"Job title"}
            placeholder={"Enter job title"}
          />
          <Input
            name="company"
            type={"text"}
            required={true}
            label={"Company"}
            placeholder={"Enter company"}
          />
          <Input
            name="jobLocation"
            type={"text"}
            required={true}
            label={"Job Location"}
            placeholder={"Enter job location"}
          />
          <SelectField
            name="jobStatus"
            arrOptions={arrOptions}
            required={true}
            label={"Job Status"}
          />
          <SelectField
            name="jobType"
            arrOptions={arrOptionsType}
            required={true}
            label={"Job Type"}
          />
          <button type="submit" disabled={isSubmitting} className="btn submit">
            {isSubmitting ? "Please wait" : "Add job"}
          </button>
        </Form>
      </Wrapper>
    </>
  );
};

export default AddJob;
