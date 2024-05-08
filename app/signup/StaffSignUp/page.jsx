"use client"
import BaseButton from "@/components/forms/BaseButton";
import BaseInput from "@/components/forms/BaseInput";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";



const SignupForm = () => {
    const router = useRouter()
    const [isAnimated, setIsAnimated] = useState(false);
    const overlayBg = "bg-[#10b981]";

    const [SignUpData, setSignUpData] = useState({
        username: '',
        email: '',
        phone: '',
        password: ''
    });
    const [loginData, setLoginData] = useState({
        email: '',
        password: ''
    });

    const handleChangeSignUp = (e) => {
        const { name, value } = e.target;
        setSignUpData({
            ...SignUpData,
            [name]: value
        });
        console.log("user typing")
    };

    const handleChangeLogin = (e) => {
        const { name, value } = e.target;
        setLoginData({
            ...loginData,
            [name]: value
        });
        console.log("user typing")
    };

    const handleSubmitLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("https://api.dev.sessionly.co/api/v2/login", loginData);

            console.log(response);
            if (response) {
                localStorage.setItem("userType", response.data.userType)
                router.push("/dashboard");

                toast.success("Staff Login Successfully");
                setSignUpData({
                    email: '',
                    password: ''
                });
            }

        } catch (error) {
            console.error("Error Registering Staff", error.message);
        }
    };

    const handleSubmitSignUp = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("https://api.dev.sessionly.co/api/v2/staff/register", SignUpData);

            console.log(response);
            if (response) {
                localStorage.setItem("userType", response.data.result.userType)
                router.push("/dashboard");
                toast.success("Staff Created Successfully");
                setSignUpData({
                    username: '',
                    email: '',
                    phone: '',
                    password: ''
                });
            }

        } catch (error) {
            console.error("Error Registering Student", error.message);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen w-screen bg-gray-200">
            <div className="h-4/5 w-4/5 bg-white relative overflow-hidden rounded-lg">
                <div
                    id="signin"
                    className={`bg-white absolute top-0 left-0 h-full w-1/2 flex justify-center items-center transition-all duration-700 ease-in-out z-20 ${isAnimated ? "translate-x-full opacity-0" : ""
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
                                        <form className="mt-12" onSubmit={handleSubmitLogin}>
                                            <div className="relative">
                                                <div className="mt-10 relative">
                                                    <BaseInput
                                                        // id="email"
                                                        name="email"
                                                        type="email"
                                                        placeholder="Email"
                                                        onChange={handleChangeLogin}
                                                        value={loginData.email}
                                                        label="Email"
                                                    />
                                                </div>
                                            </div>
                                            <div className="mt-10 relative">
                                                <div className="mt-10 relative">
                                                    <BaseInput
                                                        // id="password"
                                                        name="password"
                                                        type="password"
                                                        placeholder="Password"
                                                        onChange={handleChangeLogin}
                                                        value={loginData.password}
                                                        label="Password"
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
                    className={`absolute top-0 left-0 h-full w-1/2 flex justify-center items-center transition-all duration-700 ease-in-out ${isAnimated
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
                                                Create account As Staff member
                                            </h1>

                                            <form
                                                className="mt-12"
                                                onSubmit={handleSubmitSignUp}
                                            >
                                                <div className="relative">
                                                    <BaseInput
                                                        // id="name"
                                                        name="username"
                                                        type="text"
                                                        placeholder="Name"
                                                        onChange={handleChangeSignUp}
                                                        value={SignUpData.name}
                                                        label="Name"
                                                    />
                                                </div>
                                                <div className="mt-10 relative">
                                                    <BaseInput
                                                        // id="email"
                                                        name="email"
                                                        type="email"
                                                        placeholder="Email"
                                                        onChange={handleChangeSignUp}
                                                        value={SignUpData.email}
                                                        label="Email"
                                                    />
                                                </div>
                                                <div className="mt-10 relative">
                                                    <BaseInput
                                                        // id="email"
                                                        name="phone"
                                                        type="text"
                                                        placeholder="Phone Number"
                                                        onChange={handleChangeSignUp}
                                                        value={SignUpData.phone}
                                                        label="Phone Number"
                                                    />
                                                </div>
                                                <div className="mt-10 relative">
                                                    <BaseInput
                                                        // id="password"
                                                        name="password"
                                                        type="password"
                                                        placeholder="Password"
                                                        onChange={handleChangeSignUp}
                                                        value={SignUpData.password}
                                                        label="Password"
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
                    className={`absolute top-0 left-1/2 w-1/2 h-full overflow-hidden transition transition-transform duration-700 ease-in-out z-100 ${isAnimated ? "-translate-x-full" : ""
                        }`}
                >
                    <div
                        id="overlay"
                        className={`${overlayBg} relative -left-full h-full w-[200%] transform transition transition-transform duration-700 ease-in-out ${isAnimated ? "translate-x-1/2" : "translate-x-0"
                            }`}
                    >
                        <div
                            id="overlay-left"
                            className={`w-1/2 h-full absolute flex justify-center items-center top-0 transform -translate-x-[0%] transition transition-transform duration-700 ease-in-out ${isAnimated ? "translate-x-0" : "-translate-x-[20%]"
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
                            className={`w-1/2 h-full absolute flex justify-center items-center top-0 right-0 transform transition transition-transform duration-700 ease-in-out ${isAnimated ? "translate-x-[20%]" : "translate-x-0"
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

export default SignupForm;
