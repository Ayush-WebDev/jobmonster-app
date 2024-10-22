import React from "react";
import { useRouteError, Link } from "react-router-dom";
import NotFound from "../assets/Images/not-found-main.svg";
import ErrorImg from "../assets/Images/error-svg.svg";
import Wrapper from "../assets/Wrappers/Error";
const Error = () => {
  const error = useRouteError();
  if (error.status === 404) {
    return (
      <>
        <Wrapper>
          <div>
            <h3>Oops Not Found!</h3>
            <img src={NotFound} alt="not found" />
            <Link to="/dashboard">Go back to Dashboard</Link>
          </div>
        </Wrapper>
      </>
    );
  }
  return (
    <>
      <Wrapper>
        <div>
          <h3>Something went wrong. Try again later</h3>
          <img src={ErrorImg} alt="not found" />
          <Link to="/">Go to Home</Link>
        </div>
      </Wrapper>
    </>
  );
};

export default Error;
