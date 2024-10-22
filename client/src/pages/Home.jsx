import React from "react";
import Wrapper from "../assets/Wrappers/Home";
import { Header } from "../components";
import MainImg from "../assets/Images/main.svg";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <>
      <Wrapper>
        <div>
          <nav>
            <Header />
          </nav>
          <div className="container page">
            <div className="info">
              <h1>
                Job <span>Tracking</span>App
              </h1>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut
                neque aspernatur nostrum porro inventore eveniet placeat
                expedita aperiam similique, facere sit libero aliquam labore!
                Quisquam, ipsam totam! In, veniam dolore.
              </p>
              <Link to="/register" className="btn register-link">
                Register
              </Link>
              <Link to="/login" className="btn login-link">
                Login / Demo User
              </Link>
            </div>
            <div>
              <img src={MainImg} alt="job-hunt" className="img main-img" />
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default Home;
