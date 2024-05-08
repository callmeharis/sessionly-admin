"use client";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { LoginDto } from "@/models/auth/login.dto";
import { SignUpDto } from "@/models/auth/signup.dto";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import BaseButton from "@/components/forms/BaseButton";
import BaseInput from "@/components/forms/BaseInput";
import { AuthApi } from "./api/auth";
import axios from "axios";

const page = () => {
  const router = useRouter();
  const [isAnimated, setIsAnimated] = useState(false);
  const overlayBg = "bg-[#10b981]";

  const [singUp, setSignUp] = useState({
    username: "",
    email: "",
    password: "",
    userType: "",
    phone: ""
  })

  const [login, setLogin] = useState({
    email: "",
    password: ""
  })
  // const signUpForm = useFormik({
  //   initialValues: new SignUpDto(),
  //   validationSchema: SignUpDto.yupSchema(),
  //   onSubmit: async (values) => {
  //     try {
  //       const { ...restValues } = values;
  //       await api.signUp(restValues);
  //       toast.success("User Created");
  //       router.push("/dashboard");
  //     } catch (error) {
  //       console.log("error", error);
  //       toast.error("Something went wrong");
  //     }
  //   },
  // });
  // const api = new AuthApi();
  // const loginForm = useFormik({
  //   initialValues: new LoginDto(),
  //   validationSchema: LoginDto.yupSchema(),
  //   onSubmit: async (values) => {
  //     const { ...restValues } = values;
  //     try {
  //       await api.login(restValues);
  //       toast.success("User Logged in");
  //       const userType = await axios.get(
  //         https://api.dev.sessionly.co/api/v2/get-user-type
  //       );
  //       console.log("we gETTING USERtYPE HERE", userType);
  //       router.push("/dashboard");
  //     } catch (error) {
  //       console.log("error", error);
  //       toast.error("Something went wrong");
  //     }
  //   },
  // });

  // handleChangeSignUp
  const handleChangeSignUp = (e) => {
    const { name, value } = e.target;
    setSignUp((prev) => ({ ...prev, [name]: value }));
  }

  // handleChangeLogin

  const handleChangeLogin = (e) => {
    const { name, value } = e.target;
    setLogin((prev) => ({ ...prev, [name]: value }));
  }

  console.log(login)

  //signUpSubmit

  const signUpSubmit = async(e) => {
    e.preventDefault()
    try {
      const response = await axios.post("https://api.dev.sessionly.co/api/v2/admin/register", singUp)
      console.log(response);
      if(response){
        toast.success("Admin Create Successfully")
        // Resetting signUp state to empty strings
        setSignUp({ 
          username: "",
          email: "",
          password: "",
          phone: ""
        });
        localStorage.setItem("userType", response.data.result.userType)
        localStorage.setItem("adminId", response.data.result._id)
        router.push("/dashboard")
      }
    } catch (error) {
      console.log("Error in signUp", error.message);
    }
   
  }

  // loginSubmit

  const loginSubmit = async(e) => {
    e.preventDefault()
    try {
      const response = await axios.post("https://api.dev.sessionly.co/api/v2/login", login)
      console.log(response);
      if(response){
        localStorage.setItem("adminToken", response.data.token)
        localStorage.setItem("userType", response.data.userType)
        toast.success(`${response.data.userType} Login Successfully`)
        // Resetting login state to empty strings
        setLogin({ 
          email: "",
          password: ""
        });
        router.push("/dashboard")
      }
    } catch (error) {
      console.log("Error in signUp", error.message);
    }
  }

  // useEffect(() => {
  //   console.log("signUpForm.values", signUpForm.values);
  //   console.log("signUpForm.errors", signUpForm.errors);
  // }, [signUpForm.values, signUpForm.errors]);
  // useEffect(() => {
  //   console.log("loginForm.values", loginForm.values);
  //   console.log("loginForm.errors", loginForm.errors);
  // }, [loginForm.values, loginForm.errors]);
  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen bg-gray-200">
      <div className="h-4/5 w-4/5 bg-white relative overflow-hidden rounded-lg">
        <div
          id="signin"
          className={`bg-white absolute top-0 left-0 h-full w-1/2 flex justify-center items-center transition-all duration-700 ease-in-out z-20 ${
            isAnimated ? "translate-x-full opacity-0" : ""
          }`}
        >
          <div className="selection:bg-indigo-500 selection:text-white">
            <div className="flex justify-center items-center">
              <div className="flex-1">
                <div className="mx-auto overflow-hidden">
                  <div>
                    <h1 className="text-4xl font-bold text-[#10b981]">
                      Welcome back!
                    </h1>
                    <form className="mt-12" onSubmit={loginSubmit}>
                     
                      <div className="mt-10 relative">
                        <div className="mt-10 relative">
                          {/* <BaseInput
                            // id="password"
                            name="password"
                            type="password"
                            placeholder="Password"
                            onChange={loginForm.handleChange}
                            label="Password"
                          /> */}
                            <input
                            placeholder="Email"
                            name="email"
                            type="email"
                            value={login.email}
                            onChange={handleChangeLogin}
                          />
                        </div>
                      </div>
                      <div className="mt-10 relative">
                        <div className="mt-10 relative">
                          {/* <BaseInput
                            // id="password"
                            name="password"
                            type="password"
                            placeholder="Password"
                            onChange={loginForm.handleChange}
                            label="Password"
                          /> */}
                         <input
                            placeholder="Password"
                            name="password"
                            type="password"
                            value={login.password}
                            onChange={handleChangeLogin}
                          />
                        </div>
                      </div>
                      <div className="flex justify-center">
                        <BaseButton type="submit" label="Sign in" />
                      </div>
                    </form>
                    <a
                      href="#"
                      className="mt-4 block text-sm text-center font-medium text-indigo-600 hover:underline focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    >
                      Forgot your password?
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          id="signup"
          className={`absolute top-0 left-0 h-full w-1/2 flex justify-center items-center transition-all duration-700 ease-in-out ${
            isAnimated
              ? "translate-x-full opacity-100 z-50 animate-show"
              : "opacity-0 z-10"
          }`}
        >
          <div className="h-full w-full flex justify-center items-center">
            <div className="selection:bg-indigo-500 selection:text-white">
              <div className="flex justify-center items-center">
                <div className="p-8 flex-1">
                  <div className="mx-auto overflow-hidden">
                    <div className="p-8">
                      <h1 className="text-4xl font-bold text-[#10b981]">
                        Create account
                      </h1>

                      <form
                        className="mt-12"
                        onSubmit={signUpSubmit}
                      >
                         <div className="mt-10 relative">
                          {/* <BaseInput
                            // id="name"
                            name="name"
                            type="text"
                            placeholder="Name"
                            onChange={signUpForm.handleChange}
                            label="Name"
                          /> */}
                        <input
                            placeholder="username"
                            name="username"
                            type="text"
                            value={singUp.username}
                            onChange={handleChangeSignUp}
                          />
                        </div>
                        <div className="mt-10 relative">
                          {/* <BaseInput
                            // id="name"
                            name="name"
                            type="text"
                            placeholder="Name"
                            onChange={signUpForm.handleChange}
                            label="Name"
                          /> */}
                        <input
                            placeholder="Email"
                            name="email"
                            type="email"
                            value={singUp.email}
                            onChange={handleChangeSignUp}
                          />
                        </div>
                        <div className="mt-10 relative">
                          {/* <BaseInput
                            // id="email"
                            name="email"
                            type="email"
                            placeholder="Email"
                            onChange={signUpForm.handleChange}
                            label="Email"
                          /> */}
                          <input
                            placeholder="Password"
                            name="password"
                            type="password"
                            value={singUp.password}
                            onChange={handleChangeSignUp}
                          />
                        </div>
                        <div className="mt-10 relative">
                          {/* <BaseInput
                            // id="email"
                            name="email"
                            type="email"
                            placeholder="Email"
                            onChange={signUpForm.handleChange}
                            label="Email"
                          /> */}
                          <input
                            placeholder="phone"
                            name="phone"
                            type="text"
                            value={singUp.phone}
                            onChange={handleChangeSignUp}
                          />
                        </div>
                        <div className="flex justify-center">
                          <BaseButton type="submit" label="Sign up" />
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          id="overlay-container"
          className={`absolute top-0 left-1/2 w-1/2 h-full overflow-hidden transition transition-transform duration-700 ease-in-out z-100 ${
            isAnimated ? "-translate-x-full" : ""
          }`}
        >
          <div
            id="overlay"
            className={`${overlayBg} relative -left-full h-full w-[200%] transform transition transition-transform duration-700 ease-in-out ${
              isAnimated ? "translate-x-1/2" : "translate-x-0"
            }`}
          >
            <div
              id="overlay-left"
              className={`w-1/2 h-full absolute flex justify-center items-center top-0 transform -translate-x-[0%] transition transition-transform duration-700 ease-in-out ${
                isAnimated ? "translate-x-0" : "-translate-x-[20%]"
              }`}
            >
              <div className="p-8 text-center">
                <h1 className="text-2xl font-bold text-white mb-4">
                  Already have an account ?
                </h1>

                <h5 className="text-xl text-white">
                  Sign in with your email & password
                </h5>
                <div className="mt-16">
                  <button
                    className="py-2 px-6 bg-transparent rounded-full text-center text-white text-xl  uppercase ring-2 ring-white active:scale-110 transition-transform ease-in"
                    onClick={(e) => {
                      setIsAnimated(!isAnimated);
                    }}
                  >
                    Sign In
                  </button>
                </div>
              </div>
            </div>
            <div
              id="overlay-right"
              className={`w-1/2 h-full absolute flex justify-center items-center top-0 right-0 transform transition transition-transform duration-700 ease-in-out ${
                isAnimated ? "translate-x-[20%]" : "translate-x-0"
              }`}
            >
              <div className="p-8 text-center">
                <h1 className="text-3xl font-bold text-white mb-4">
                  Don't have an account ?
                </h1>

                <h5 className="text-xl text-white">
                  Start your journey in one click
                </h5>
                <div className="mt-16">
                  <button
                    className="py-2 px-6 bg-transparent rounded-full text-center text-white  uppercase ring-2 ring-white active:scale-110 transition-transform ease-in"
                    onClick={(e) => {
                      setIsAnimated(!isAnimated);
                    }}
                  >
                    Sign Up
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;