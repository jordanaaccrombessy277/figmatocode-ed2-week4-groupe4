import React from "react";
import { Link, useNavigate } from "react-router-dom";
import BaseInput from "../components/common/BaseInput";
import BaseAuthButton from "../components/common/BaseAuthButton";
import GoogleButton from "../components/common/GoogleButton";
import Logo from "../components/common/Logo";

function SignInUser() {

  const navigate = useNavigate();


  const handleSubmit = (e) => {
    e.preventDefault();

    navigate('/dashboard/user');
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
          Sign In
        </h1>
        <p className="text-center text-blue-primary text-lg">
          Create a new session
        </p>
      </div>
      <div className="max-w-xl w-full mx-auto">
        <div className="bg-white px-6 py-12 shadow sm:rounded-3xl sm:px-12">
          <form onSubmit={handleSubmit} action="#" method="POST" className="space-y-6">
            <BaseInput name="email" label="Email address" type="email" />
            <BaseInput name="password" label="Password" type="password" />

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-3 block text-sm leading-6 text-gray-900"
                >
                  Remember me
                </label>
              </div>

              <div className="text-sm leading-6">
                <Link
                  to="#"
                  className="font-semibold text-blue-primary hover:text-purple-primary"
                >
                  Forgot password?
                </Link>
              </div>
            </div>

            <div>
              <BaseAuthButton title="Sign in" />
            </div>
          </form>

          <div>
            <div className="relative mt-10">
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
          Not a member?{" "}
          <Link
            to="/signup"
            className="font-semibold leading-6 text-blue-primary hover:text-purple-primary"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}

export default SignInUser;
