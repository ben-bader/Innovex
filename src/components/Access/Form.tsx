"use client";

import Input from "@/src/UI/Input";
import SecondaryButton from "@/src/UI/SecondaryButton";
import React, { useState } from "react";
import {
  RiGithubLine,
  RiFacebookLine,
  RiGoogleFill,
  RiKickLine,
} from "react-icons/ri";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Logo from "@/src/UI/Logo";

const Form = () => {
  const [toggle, setToggle] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [signupMessage, setSignupMessage] = useState("");
  const [loginMessage, setLoginMessage] = useState("");
  // tsjil
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  //for login
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //route lkolchi
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);

    if (form.password !== confirmPassword) {
      setSignupMessage("Passwords do not match");
      setLoading(false);
      return;
    }
    if (form.password.length < 6) {
      setSignupMessage("Password must be longer than 6 caracters.");
      setLoading(false);
      return;
    }

    const res = await fetch("/api/auth/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = await res.json();
    if (res.ok) {
      // auto login b3d signup
      const signInRes = await signIn("credentials", {
        email: form.email,
        password: form.password,
        redirect: false,
      }); 

      if (!signInRes?.error){ router.push("/main/events");}
      else {
        setSignupMessage("Signup succeeded but auto-login failed.");
      }
    } else {
      setSignupMessage(data.error || "Signup failed");
    }

    setLoading(false);
  }
  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });
    if (res?.error) setLoginMessage("Invalid credentials");
    if (res?.ok) router.push("/main/events");
    setLoading(false);
  }

  return (
    <>
      <div className="h-screen flex items-center px-20 max-sm:px-5">
        <div className="absolute top-[0%] left-[0%] bg-gradient-to-tr from-fuchsia-600 to-blue-600 blur-[90px] rounded-full w-[30rem] max-sm:w-[20rem] h-[20rem] -z-10" />
        <div className="absolute bottom-0 right-24 bg-gradient-to-l from-teal-600 to-blue-600 blur-[90px] rounded-full w-[20rem] h-[20rem] max-sm:h-[10rem] -z-10" />
        <div className="flex flex-1  justify-center items-center border border-white/20 backdrop-blur-3xl  rounded-3xl relative md:px-8 md:py-12 px-2 py-10 w-full">
          <div className="flex w-full gap-16 ">
            <div
              id="login"
              className={`flex flex-col  justify-center items-center w-full gap-5 ${
                isVisible ? "flex" : "hidden"
              }`}
            >

              <h1 className="text-4xl font-bold">Log In</h1>
              <div className="flex justify-center gap-4">
              {/*   <RiGithubLine
                onClick={() => {signIn("github", { callbackUrl: "/main/events" })}}
                  size={40}
                  className="rounded-md p-2 bg-black cursor-pointer"
                />
                <RiGoogleFill
                onClick={() => {signIn("google", { callbackUrl: "/main/events" })}}
                  size={40}
                  className="rounded-md bg-black  p-2 text-gray-300 cursor-pointer"
                />
                 */}
              </div>

              <form
                onSubmit={handleLogin}
                className="flex flex-col gap-3 w-full justify-center items-center px-5"
              >
              
                <label htmlFor="" className="w-full">
                  Email
                <Input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setEmail(e.target.value)
                  }
                /></label>
                <label htmlFor="" className="w-full">
                  Password
                <Input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setPassword(e.target.value)
                  }
                /></label>
                {loginMessage && (
                  <p className="text-red-500 w-full text-left -mb-4">
                    *{loginMessage}
                  </p>
                )}

                <SecondaryButton text={loading ? "Loging..." : "Log in"} />
              </form>
              <p className="block md:hidden font-poppins">
                Don&apos;t have an acount{" "}
                <a
                  className="underline text-blue-500 cursor-pointer sm:hidden"
                  onClick={() => setIsVisible(!isVisible)}
                >
                  Sign Up
                </a>
              </p>
            </div>

            <div
              id="signup"
              className={`lg:flex flex-col justify-center items-center w-full gap-5 ${
                isVisible ? "hidden" : "flex"
              }`}
            >
              <h1 className="text-4xl font-bold">Sign Up</h1>

              <div className="flex justify-center gap-4">
               {/*    <RiGithubLine
                  onClick={() => {signIn("github", { callbackUrl: "/main/events" })}}
                    size={40}
                    className="border rounded-md border-white/50 text-gray-300 p-2 cursor-pointer"
                  />

                  <RiGoogleFill
                  onClick={() => {signIn("google", { callbackUrl: "/main/events" })}}
                    size={40}
                    className="border rounded-md border-white/50 text-gray-300 p-2 cursor-pointer"
                  />
                */} 
              </div>

              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-3 w-full justify-center items-center px-5"
              >
                <label htmlFor="" className="w-full">
                  Name
                <Input
                  type="text"
                  placeholder="Username"
                  value={form.name}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setForm({ ...form, name: e.target.value })
                  }
                /></label>
                <label htmlFor="" className="w-full">
                  Email
                <Input
                  type="email"
                  placeholder="example@email.com"
                  value={form.email}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setForm({ ...form, email: e.target.value })
                  }
                /></label>
                <label htmlFor="" className="w-full">
                  Password
                <Input
                  type="password"
                  placeholder="Password"
                  value={form.password}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setForm({ ...form, password: e.target.value })
                  }
                /></label>
                <label htmlFor="" className="w-full">
                  Confirm Password
                <Input
                  type="password"
                  placeholder="Confirm Password"
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setConfirmPassword(e.target.value)
                  }
                /></label>
                {signupMessage &&
                  [...new Set(signupMessage)].map((msg, index) => (
                    <p
                      key={index}
                      className="text-red-500 w-full text-left -mb-4"
                    >
                      *{msg}
                    </p>
                  ))}

                <SecondaryButton
                  text={loading ? "Creating account..." : "Create account"}
                  className="rounded-full"
                />
              </form>
              <p className="block md:hidden font-poppins">
                Already have an acount{" "}
                <a
                  className="underline text-blue-500 cursor-pointer sm:hidden"
                  onClick={() => setIsVisible(!isVisible)}
                >
                  Log In
                </a>
              </p>
            </div>
          </div>
          <div
            className="gap-4 flex-col lg:flex hidden items-center justify-center text-center text-white bg-gradient-to-tr from-purple-900 to-blue-900 px-3 py-36 z-50 absolute w-[50%] top-0  right-0 h-full duration-1000"
            style={{
              transform: toggle ? "translateX(-100%)" : "",
              borderRadius: toggle
                ? "1.5rem  200px 150px 1.5rem"
                : "  200px  1.5rem 1.5rem 150px",
            }}
          >
            <div>
              <Image src="/Images/logo.png" alt="logo" width={50} height={50} className=""/>
            </div>
            <h1 className="text-4xl font-boldonse text-gray-200 gap-4 font-semibold tracking-[1px]">
              {toggle ? "Hello Friend" : "Welcome Back"}
            </h1>
            <p className="font-poppins opacity-80">
              {toggle
                ? "Register Now And have The most Unique and Futuristic Experience In the web"
                : "Log In And Continue you're journy to the Most Epic adventure in the Web"}
            </p>
            <span className="-my-3">Or</span>
            <p className="font-poppins opacity-80">
              {toggle
                ? "If you already have an account"
                : "If you don't have an account"}
            </p>
            <button
              onClick={() => setToggle(!toggle)}
              className="px-8 py-2 text-lg rounded-full border text-gray-100 hover:text-white border-white/30 cursor-pointer bg-blue-500 active:scale-95 transition-all"
            >
              {toggle ? "Log In" : "Sign Up"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;
