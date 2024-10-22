import React from "react";
import { Input, ProfileImage, SelectField } from "../components";
import { Form, useNavigation, useOutletContext } from "react-router-dom";
import Wrapper from "../assets/Wrappers/AddJob";
import { useDashboardContext } from "../Context";
import { toast } from "react-toastify";
import { customFetch } from "../utils/axios";

export const actionProfile = async ({ request }) => {
  const formData = await request.formData();
  const file = formData.get("avatar");
  if (file && file.size > 500000) {
    toast.error("File size is about 5Mb");
    return null;
  }
  try {
    const res = await customFetch.patch("/auth/update-user", formData);
    toast.success("Profile updated successfully!");
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    console.log(error);
  }

  return null;
};

const Profile = () => {
  const navigate = useNavigation();
  const { user } = useOutletContext();
  const isSubmitting = navigate.state === "submitting";
  return (
    /// application/x-www-form-urlencoded is for text data and multipart data is for files

    <>
      <Wrapper>
        <Form
          className="form-add-job"
          method="post"
          encType="multipart/form-data"
        >
          <ProfileImage accept={"image/*"} />
          <Input
            name="firstName"
            type={"text"}
            required={true}
            defaultVal={user?.name.split(" ")[0]}
            label={"First name"}
            placeholder={"Enter First name"}
          />
          <Input
            name="lastName"
            type={"text"}
            required={true}
            defaultVal={user?.name.split(" ")[1]}
            label={"Last name"}
            placeholder={"Enter Last name"}
          />
          <Input
            name="email"
            type={"email"}
            required={true}
            defaultVal={user?.email}
            label={"Email"}
            placeholder={"Enter email"}
          />
          <Input
            name="location"
            type={"text"}
            required={true}
            defaultVal={user?.location}
            label={"Job Location"}
            placeholder={"Enter job location"}
          />
          <button type="submit" disabled={isSubmitting} className="btn submit">
            {isSubmitting ? "Please wait" : "Save changes"}
          </button>
        </Form>
      </Wrapper>
    </>
  );
};

export default Profile;
