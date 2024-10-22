import React from "react";
import { Form, Link, redirect, useNavigation } from "react-router-dom";
import { Input, Header } from "../components";
import Wrapper from "../assets/Wrappers/Register";
import MainImg from "../assets/Images/register2.svg";
import { toast } from "react-toastify";
import { customFetch } from "../utils/axios";

export const registerAction = async ({ request }) => {
  const formData = await request.formData();
  const reqdata = Object.fromEntries(formData);
  try {
    const response = await customFetch.post("/auth/register", reqdata);
    toast.success("Registration successful");
    return redirect("/verify-email");
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

const Register = () => {
  const navigate = useNavigation();
  const isSubmitting = navigate.state === "submitting";
  return (
    <>
      <Wrapper>
        <div className="container">
          <div className="col col-left">
            <Link to="/" className="logo-wrapper">
              <Header />
            </Link>
            <img src={MainImg} alt="" />
          </div>
          <div className="col col-right">
            <Form method="post" className="form">
              <h1 className="form-title">Register</h1>
              <div className="form-field-container row-grid">
                <Input
                  type={"text"}
                  label={"First name"}
                  placeholder={"First name"}
                  required={true}
                  name={"firstName"}
                />
                <Input
                  type={"text"}
                  label={"Last name"}
                  placeholder={"Last name"}
                  required={true}
                  name={"lastName"}
                />
              </div>
              <div className="form-field-container">
                <Input
                  label={"Job Location"}
                  type={"text"}
                  placeholder={"Enter job location"}
                  required={true}
                  name={"location"}
                />
                <Input
                  label={"Email"}
                  type={"email"}
                  placeholder={"Enter your email"}
                  required={true}
                  name={"email"}
                />
              </div>
              <div className="form-field-container">
                <Input
                  label={"Password"}
                  type={"password"}
                  placeholder={"Password"}
                  required={true}
                  name={"password"}
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn submit"
              >
                {isSubmitting ? "Please wait" : "Register"}
              </button>
              <p>
                Already a member?
                <span>
                  <Link to="/login" className="link">
                    {" "}
                    Login
                  </Link>
                </span>
              </p>
            </Form>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default Register;
