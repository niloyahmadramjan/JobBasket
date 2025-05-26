import Lottie from "lottie-react";
import React, { use } from "react";
import { Link } from "react-router";
import registerAnimation from "../assets/lotties/registration.json"
import { AuthContext } from "../contexts/AuthContext";

const Register = () => {
    const {handeCreateAccount}=use(AuthContext)
    const handleRegister=(e)=>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const pass = form.pass.value;
        handeCreateAccount(email,pass)
        .then(result =>{
            console.log(result)
        })
        .catch(error=>{
            console.log(error)
        })


    }
  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center px-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 w-full max-w-6xl">
        {/* Left Side - Register Form */}
        <div className="bg-base-100 rounded-2xl shadow-xl p-8 w-full">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-6">
            Create Account
          </h2>
          <p className="text-center mb-8 text-gray-500">
            Join us and build your career!
          </p>
          <form onSubmit={handleRegister}>
            <div className="mb-4">
              <label className="label font-semibold">Full Name</label>
              <input
              name="name"
                type="text"
                className="input input-bordered w-full"
                placeholder="Your name"
              />
            </div>
            <div className="mb-4">
              <label className="label font-semibold">Email</label>
              <input
                type="email"
                name="email"
                className="input input-bordered w-full"
                placeholder="Your email"
              />
            </div>
            <div className="mb-4">
              <label className="label font-semibold">Password</label>
              <input
                type="password"
                name='pass'
                className="input input-bordered w-full"
                placeholder="Password"
              />
            </div>
            <button className="btn btn-primary w-full">Register</button>
          </form>
          <p className="text-center text-sm mt-6">
            Already have an account?
            <Link to='/login' className="link link-primary ml-1">Login</Link>
          </p>
        </div>

        {/* Right Side - Lottie or Image */}
        <div className="hidden lg:flex justify-center">
          {/* Replace with Lottie if you want */}
          {/* <Lottie animationData={registerAnimation} loop={true} /> */}
          <Lottie animationData={registerAnimation} loop={true}></Lottie>
        </div>
      </div>
    </div>
  );
};

export default Register;
