import React from "react";
import { Link, useNavigate } from "react-router-dom";
import BaseInput from "../components/common/BaseInput";
import BaseAuthButton from "../components/common/BaseAuthButton";
import GoogleButton from "../components/common/GoogleButton";
import Logo from "../components/common/Logo";

function SignUpUser() {

  const navigate = useNavigate();


  const handleSubmit = (e) => {
    e.preventDefault();

    navigate('/signin/patients');
  };

  return (
    <div className="w-full min-h-screen bg-white-primary py-16">
      <div className="mx-auto max-w-xl mb-5">
        <div className="w-full flex justify-center mb-10">
          <Link to="/" className="">
            <Logo />
          </Link>
        </div>
        <h1 className="text-center text-blue-primary font-bold text-3xl">
          Sign Up
        </h1>
        <p className="text-center text-blue-primary text-lg">
          Create a new account
        </p>
      </div>
      <div className="max-w-xl w-full mx-auto">
        <div className="bg-white px-6 py-12 shadow sm:rounded-3xl sm:px-12">
          <form onSubmit={handleSubmit} action="#" method="POST" className="space-y-6">
            <BaseInput name="fullname" label="Your fullname" type="text" />
            <BaseInput name="email" label="Email address" type="email" />
            <BaseInput name="phone" label="Phone number" type="text" />
            <BaseInput name="password" label="Password" type="password" />

            <div>
              <BaseAuthButton title="Sign up" />
            </div>
          </form>

          <div>
            <div className="relative mt-6">
              <div
                aria-hidden="true"
                className="absolute inset-0 flex items-center"
              >
                <div className="w-full border-t border-gray-200" />
              </div>
              <div className="relative flex justify-center text-sm font-medium leading-6">
                <span className="bg-white px-6 text-gray-900">
                  Or continue with
                </span>
              </div>
            </div>

            <div className="mt-6">
              <GoogleButton />
            </div>
          </div>
        </div>
      </div>
      <div>
        <p className="mt-10 text-center text-sm text-gray-500">
          Already a member?{" "}
          <Link
            to="/signin"
            className="font-semibold leading-6 text-blue-primary hover:text-purple-primary"
          >
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}

export default SignUpUser;
