import React from "react";
import teamwork from "../assets/lotties/teamwork.json";
import Lottie from "lottie-react";
import CountUp from "react-countup";

const FindOneRight = () => {
  return (
    <section className="w-full px-6 py-10 bg-gradient-to-r from-[#eef2f7] to-[#dde6f0]">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-8">
        {/* Left - Image */}
        <div className="relative w-full max-w-xl">
          <div className="rounded-3xl shadow-lg">
            <Lottie animationData={teamwork} loop={true} autoplay={true} />
          </div>
        </div>

        {/* Right - Text */}
        <div className="w-full lg:max-w-xl text-center lg:text-left">
          <p className="text-gray-500 font-medium mb-1">Millions Of Jobs.</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#1f2937] leading-tight mb-4">
            Find The One That’s <span className="text-[#6366f1]"> Right </span>{" "}
            For You
          </h1>
          <p className="text-gray-600 mb-6">
            Search all the open positions on the web. Get your own personalized
            salary estimate. Read reviews on over 600,000 companies worldwide.
            The right job is out there.
          </p>

          <div className="flex justify-center lg:justify-start gap-4">
            <button className="bg-[#6366f1] hover:bg-[#4f46e5] btn text-white">
              Search Jobs
            </button>
            <button className="text-[#6366f1] font-medium hover:underline">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        <div>
          <h2 className="text-3xl font-bold text-[#6366f1]">
            <CountUp start={0} end={25} enableScrollSpy scrollSpyDelay={100}>
              {({ countUpRef }) => <span ref={countUpRef} />}
            </CountUp>
            K+
          </h2>
          <p className="font-semibold">Completed Cases</p>
          <p className="text-xs text-gray-500">
            We always provide people a complete solution upon focused of any
            business
          </p>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-[#6366f1]">
            <CountUp start={0} end={22} enableScrollSpy scrollSpyDelay={100}>
              {({ countUpRef }) => <span ref={countUpRef} />}
            </CountUp>
            +
          </h2>
          <p className="font-semibold">Our Office</p>
          <p className="text-xs text-gray-500">
            We always provide people a complete solution upon focused of any
            business
          </p>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-[#6366f1]">
            <CountUp start={0} end={84} enableScrollSpy scrollSpyDelay={100}>
              {({ countUpRef }) => <span ref={countUpRef} />}
            </CountUp>
            +
          </h2>
          <p className="font-semibold">Skilled People</p>
          <p className="text-xs text-gray-500">
            We always provide people a complete solution upon focused of any
            business
          </p>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-[#6366f1]">
            <CountUp start={0} end={38} enableScrollSpy scrollSpyDelay={100}>
              {({ countUpRef }) => <span ref={countUpRef} />}
            </CountUp>
            +
          </h2>
          <p className="font-semibold">Happy Clients</p>
          <p className="text-xs text-gray-500">
            We always provide people a complete solution upon focused of any
            business
          </p>
        </div>
      </div>
    </section>
  );
};

export default FindOneRight;
