import React from "react";
import { Input, SelectField } from "../components";
import { Form, redirect, useLoaderData, useNavigation } from "react-router-dom";
import Wrapper from "../assets/Wrappers/AddJob";
import { customFetch } from "../utils/axios";
import { toast } from "react-toastify";

///**Loader */

export const loaderEditJob = async ({ request, params }) => {
  const { id } = params;
  if (!id) {
    return redirect("/dashboard/all-jobs");
  }
  try {
    const { data } = await customFetch(`/jobs/${id}`);
    return { job: data.job };
  } catch (error) {
    console.log(error);
    return redirect("/dashboard/all-jobs");
  }
};

///**Action */
export const editJobAction = async ({ request, params }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    const res = await customFetch.patch(`/jobs/${params.id}`, data);
    toast.success("Job updated successfully");
    return redirect("/dashboard/all-jobs");
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

const EditJob = () => {
  const arrOptions = ["select one", "pending", "rejected", "interview"];
  const arrOptionsType = ["select one", "full-time", "part-time", "internship"];
  const navigate = useNavigation();
  const isSubmitting = navigate.state === "submitting";
  const { job } = useLoaderData();
  const { title, jobLocation, jobStatus, company, jobType } = job[0];

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
            defaultVal={title}
          />
          <Input
            name="company"
            type={"text"}
            required={true}
            label={"Company"}
            placeholder={"Enter company"}
            defaultVal={company}
          />
          <Input
            name="jobLocation"
            type={"text"}
            required={true}
            label={"Job Location"}
            placeholder={"Enter job location"}
            defaultVal={jobLocation}
          />
          <SelectField
            name="jobStatus"
            arrOptions={arrOptions}
            required={true}
            label={"Job Status"}
            defaultVal={jobStatus}
          />
          <SelectField
            name="jobType"
            arrOptions={arrOptionsType}
            required={true}
            label={"Job Type"}
            defaultVal={jobType}
          />
          <button type="submit" disabled={isSubmitting} className="btn submit">
            {isSubmitting ? "Please wait" : "Update job"}
          </button>
        </Form>
      </Wrapper>
    </>
  );
};

export default EditJob;
