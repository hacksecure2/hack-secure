// src/components/AuthPortalPage.tsx
"use client";
import React, { useState } from "react";

const ShieldIcon = () => (
  <svg
    className="w-10 h-10 text-blue-400 mb-4"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 20.944L12 22l9-1.056v-9.447z"
    ></path>
  </svg>
);

const EnvelopeIcon = () => (
  <svg
    className="w-5 h-5 text-gray-400"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    ></path>
  </svg>
);

const LockIcon = () => (
  <svg
    className="w-5 h-5 text-gray-400"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
    ></path>
  </svg>
);

const EyeIcon = () => (
  <svg
    className="w-5 h-5 text-gray-400"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
    ></path>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
    ></path>
  </svg>
);

const EyeOffIcon = () => (
  <svg
    className="w-5 h-5 text-gray-400"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a10.025 10.025 0 015.393-5.34M9.543 5.34a10.025 10.025 0 012.457-.34c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-2.073 3.975M15 12a3 3 0 11-6 0 3 3 0 016 0z"
    ></path>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M2 2l20 20"
    ></path>
  </svg>
);

const AuthPortalPage = () => {
  const [activeTab, setActiveTab] = useState("signIn");
  const [showPassword, setShowPassword] = useState(false);

  const TabButton = ({ tabName, children }) => (
    <button
      onClick={() => setActiveTab(tabName)}
      className={`w-1/2 py-3 font-semibold transition-colors duration-300 rounded-t-md ${
        activeTab === tabName
          ? "bg-blue-950/70 text-white"
          : "bg-gray-800/50 text-gray-400 hover:bg-gray-700/50"
      }`}
    >
      {children}
    </button>
  );

  const InputField = ({ label, type, placeholder, icon, children = null }) => (
    <div>
      <label className="block text-sm font-medium text-gray-300 mb-1">
        {label}
      </label>
      <div className="relative">
        <span className="absolute inset-y-0 left-0 flex items-center pl-3">
          {icon}
        </span>
        <input
          type={type}
          placeholder={placeholder}
          className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {children}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen mt-20 flex flex-col items-center justify-center  text-white p-4">
      <div className="text-center mx-auto mb-6">
        <ShieldIcon />
        <h1 className="text-3xl font-bold">Secure Access Portal</h1>
        <p className="text-gray-400 mt-2">
          Enter your credentials to access your security dashboard
        </p>
      </div>

      <div className="w-full max-w-md  border-2 border-blue-700/30 rounded-lg shadow-3xl shadow-blue-500/10">
        <div className="p-8">
          <h2 className="text-2xl font-bold text-center mb-4">Client Portal</h2>

          <div className="flex mb-6 border-b border-gray-700">
            <TabButton tabName="signIn">Sign In</TabButton>
            <TabButton tabName="register">Register</TabButton>
          </div>

          {activeTab === "signIn" ? (
            <form className="space-y-6">
              <InputField
                label="Email Address"
                type="email"
                placeholder="Enter your email"
                icon={<EnvelopeIcon />}
              />
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  Password
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <LockIcon />
                  </span>
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    className="w-full pl-10 pr-10 py-3 bg-gray-800/50 border border-gray-700 rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 flex items-center pr-3"
                  >
                    {showPassword ? <EyeOffIcon /> : <EyeIcon />}
                  </button>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <label className="flex items-center text-sm text-gray-400">
                  <input
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-600 bg-gray-800 text-blue-500 focus:ring-blue-500"
                  />
                  <span className="ml-2">Remember me</span>
                </label>
                <a href="#" className="text-sm text-blue-400 hover:underline">
                  Forgot password?
                </a>
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-blue-500 text-black font-bold rounded-lg hover:bg-blue-400 transition-all duration-300 transform hover:scale-105"
              >
                Access Dashboard
              </button>
            </form>
          ) : (
            <form className="space-y-4">
              <div className="flex gap-4">
                <div className="w-1/2">
                  <InputField
                    label="First Name"
                    type="text"
                    placeholder="John"
                    icon={null}
                  />
                </div>
                <div className="w-1/2">
                  <InputField
                    label="Last Name"
                    type="text"
                    placeholder="Doe"
                    icon={null}
                  />
                </div>
              </div>
              <InputField
                label="Company"
                type="text"
                placeholder="Your Company"
                icon={null}
              />
              <InputField
                label="Email Address"
                type="email"
                placeholder="Enter your email"
                icon={<EnvelopeIcon />}
              />
              <InputField
                label="Password"
                type="password"
                placeholder="Create a strong password"
                icon={<LockIcon />}
              />
              <div className="flex items-start">
                <input
                  id="terms"
                  type="checkbox"
                  className="h-4 w-4 mt-1 rounded border-gray-600 bg-gray-800 text-blue-500 focus:ring-blue-500"
                />
                <label htmlFor="terms" className="ml-2 text-sm text-gray-400">
                  I agree to the{" "}
                  <a href="#" className="text-blue-400 hover:underline">
                    Terms of Service
                  </a>{" "}
                  and{" "}
                  <a href="#" className="text-blue-400 hover:underline">
                    Privacy Policy
                  </a>
                </label>
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-blue-500 text-black font-bold rounded-lg hover:bg-blue-400 transition-all duration-300 transform hover:scale-105"
              >
                Create Security Account
              </button>
            </form>
          )}
        </div>
      </div>

      <div className="mt-6 text-center">
        <p className="flex items-center justify-center text-green-400">
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 20.944L12 22l9-1.056v-9.447z"
            ></path>
          </svg>
          256-bit SSL Encryption
        </p>
        <p className="text-sm text-gray-500 mt-1">
          Your data is protected with enterprise-grade security protocols
        </p>
      </div>
    </div>
  );
};

export default AuthPortalPage;
