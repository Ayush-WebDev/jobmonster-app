import React from "react";
import {
  Form,
  Link,
  useNavigation,
  useActionData,
  redirect,
  useNavigate,
} from "react-router-dom";
import { Input, Header } from "../components";
import Wrapper from "../assets/Wrappers/Register";
import MainImg from "../assets/Images/register1.svg";
import { customFetch } from "../utils/axios";
import { toast } from "react-toastify";

//** Login action */
export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  const errors = {
    msg: "Password is short",
  };
  if (data.password.length < 6) {
    return errors;
  }
  try {
    const res = await customFetch.post("/auth/login", data);
    toast.success("Logged in successfully");
    return redirect("/dashboard");
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

const Login = () => {
  const navigation = useNavigation();
  const navigate = useNavigate();
  const errors = useActionData();
  const isSubmitting = navigation.state === "submitting";
  const loginDemoUser = async () => {
    const dataUser = {
      email: "test@test13.com",
      password: "secret123",
    };
    try {
      const { data } = await customFetch.post("/auth/login", dataUser);
      toast.success("Welcome test user");
      return navigate("/dashboard");
    } catch (error) {
      toast.error(error?.response?.data?.msg);
    }
  };
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
              <h1 className="form-title">Welcome back</h1>
              {errors && <p style={{ color: "red" }}>{errors.msg}</p>}
              <div className="form-field-container">
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
                  minlength={8}
                />
              </div>
              <button
                type="submit"
                className="btn submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Please wait" : "Login"}
              </button>
              <Link
                to="/dashboard"
                className="btn outline"
                onClick={loginDemoUser}
              >
                Demo User
              </Link>
              <p>
                Not a member?
                <span>
                  <Link to="/register" className="link">
                    {" "}
                    Register
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

export default Login;
