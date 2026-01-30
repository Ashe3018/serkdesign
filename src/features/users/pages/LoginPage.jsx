import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Alerts from "../components/Alerts";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [alertOpen, setAlertOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [severity, setSeverity] = useState("");
  const naviget = useNavigate();

  const handleSubmit = async (e) => {
    try {
      const res = await axios.post("https://www.ayu.server.ayubceramic.com/login", { email, password });
      if (res.data?.login) {
        localStorage.setItem("data",res.data.token)
       return naviget("/manage-products");
      }
      setMessage("Invalid Password or Email!!!");
      setSeverity("error");
      setAlertOpen(true);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full bg-white shadow-lg rounded-2xl p-8">
       
        <Alerts 
          open={alertOpen}
          handleClose={() => setAlertOpen(false)}
          message={message}
          severity={severity}
        />
        <div className="flex flex-col items-center mb-6">
          <img
            src="/images/p1.jpg" // replace with your logo
            alt="Logo"
            className="h-16 mb-2"
          />
          <h2 className="text-2xl font-semibold text-gray-700">
            Welcome Back 👋
          </h2>
        </div>

        {/* Form */}
        <div className="space-y-5">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-600 mb-1"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
              required
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-600 mb-1"
            >
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none pr-10"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-2.5 text-gray-500 hover:text-gray-700"
              >
                {showPassword ? "🙈" : "👁️"}
              </button>
            </div>
          </div>
          <button
            onClick={handleSubmit}
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-all duration-200"
          >
            Login
          </button>
        </div>

        {/* Divider */}
        {/* <div className="flex items-center my-6">
          <div className="flex-grow h-px bg-gray-300"></div>
          <span className="px-3 text-gray-400 text-sm">OR</span>
          <div className="flex-grow h-px bg-gray-300"></div>
        </div>

       
        <div className="flex flex-col space-y-3">
          <button className="w-full border border-gray-300 py-2 rounded-lg hover:bg-gray-100 flex items-center justify-center gap-2">
            <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="w-5 h-5" />
            Continue with Google
          </button>
          <button className="w-full border border-gray-300 py-2 rounded-lg hover:bg-gray-100 flex items-center justify-center gap-2">
            <img src="https://www.svgrepo.com/show/349375/facebook.svg" alt="Facebook" className="w-5 h-5" />
            Continue with Facebook
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default LoginPage;
