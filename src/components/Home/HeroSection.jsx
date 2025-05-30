import { motion } from "framer-motion";
import React from "react";
import { FaSearch } from "react-icons/fa";

const HeroSection = () => {
  return (
    <div className="py-12 mt-10 px-4 md:px-20 bg-[url(https://i.ibb.co/YBkx6LB8/bg-hero2.jpg)] bg-cover bg-bottom bg-no-repeat">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
        {/* Left Text Side */}
        <div className="lg:w-1/2 space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Connecting  
              <span className="text-blue-600 bg-blue-100 px-2 rounded">
                Talent
              </span>
              <br />
              with Opportunity
            </h1>
            <p className="text-gray-600">
             Explore jobs that match your passion. Apply in minutes and take the next step in your career with confidence.
            </p>
          </motion.div>
          {/* Search Form */}
          <div className="bg-white shadow-md rounded-xl p-4 flex flex-col md:flex-row items-center gap-4">
  <select
    className="select select-bordered w-full md:w-1/4"
    defaultValue=""
  >
    <option value="" disabled>
      Industry
    </option>
    <option value="IT">IT</option>
    <option value="Design">Design</option>
    <option value="Marketing">Marketing</option>
  </select>

  <select
    className="select select-bordered w-full md:w-1/4"
    defaultValue=""
  >
    <option value="" disabled>
      Location
    </option>
    <option value="Dhaka">Dhaka</option>
    <option value="Kuala Lumpur">Kuala Lumpur</option>
    <option value="Remote">Remote</option>
  </select>

  <input
    type="text"
    placeholder="Your keyword..."
    className="input input-bordered w-full md:w-1/3"
  />

  <button className="btn btn-primary w-full md:w-auto">
    <FaSearch className="mr-2" />
    Search
  </button>
</div>


          {/* Popular Searches */}
          <div className="text-sm text-gray-500">
            <span className="font-semibold text-gray-700">
              Popular Searches:
            </span>{" "}
            <a href="#" className="link link-hover">
              Designer,
            </a>
            <a href="#" className="link link-hover ml-1">
              Web,
            </a>
            <a href="#" className="link link-hover ml-1">
              IOS,
            </a>
            <a href="#" className="link link-hover ml-1">
              Developer,
            </a>
            <a href="#" className="link link-hover ml-1">
              PHP,
            </a>
            <a href="#" className="link link-hover ml-1">
              Senior,
            </a>
            <a href="#" className="link link-hover ml-1">
              Engineer
            </a>
          </div>
        </div>

        {/* Right Image Side */}
        <div className="lg:w-1/2 relative flex justify-center  ">
          <div className="relative w-full max-w-md hidden md:block">
             <motion.img
             animate={{ y: [0, 40, 0] }}
              transition={{
                duration: 7,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
              }}
              src="https://i.ibb.co/L2BhZhx/icon-top-banner.png"
              alt="Meeting"
              className="absolute z-30 bottom-40 right-0 "
            />
            <motion.img
              animate={{ y: [-60, -40, -60] }}
              transition={{
                duration: 7,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
              }}
              src="https://i.ibb.co/prQZgCw7/team-02.jpg"
              alt="Team Celebrating"
              className="rounded-t-4xl rounded-br-4xl border-primary border-l-6 border-b-6 w-86"
            />
            
            <motion.img
              animate={{ x: [-50,-20,-50], y:[50]}}
              transition={{
                duration: 10,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
              }}
              src="https://i.ibb.co/7N68mG74/team-01.jpg"
              alt="Meeting"
              className="rounded-t-4xl w-72 rounded-br-4xl border-primary border-l-6 border-b-6 absolute  -bottom-10 -right-10 "
            />
            <motion.img
              animate={{ y: [-50,-20,-50]}}
              transition={{
                duration: 10,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
              }}
              src="https://i.ibb.co/TDvbyvW3/icon-bottom-banner.png"
              alt="Meeting"
              className="absolute -bottom-20 right-80 "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
