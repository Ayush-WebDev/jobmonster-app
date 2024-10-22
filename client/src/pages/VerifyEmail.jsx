import React from "react";
import { useNavigation, Link, useLoaderData, redirect } from "react-router-dom";
import Wrapper from "../assets/Wrappers/Error";
import { useDashboardContext } from "../Context";
import { customFetch } from "../utils/axios";

export const verificationLoader = async ({ request }) => {
  const searchParams = new URL(request.url).searchParams.entries();
  const queryParams = Object.fromEntries([...searchParams]);
  const errors = {
    msg: "Invalid request",
  };
  if (!queryParams.token || !queryParams.email) {
    return errors;
  }
  try {
    const res = await customFetch.post("/auth/verify-email", queryParams);
    return res;
  } catch (error) {
    return redirect("/login");
  }
};

const VerifyEmail = () => {
  const dataVerification = useLoaderData();
  console.log(dataVerification);

  return (
    <>
      <Wrapper>
        {dataVerification && dataVerification?.status === 200 ? (
          <div>
            <h3>{dataVerification.data.msg}. Redirecting shortly</h3>
            <Link to="/dashboard">Go to dashboard</Link>
          </div>
        ) : (
          <>
            <div>
              <h3>We have sent you verification email.</h3>
              <Link to="/">Go to Home</Link>
            </div>
          </>
        )}
      </Wrapper>
    </>
  );
};

export default VerifyEmail;
