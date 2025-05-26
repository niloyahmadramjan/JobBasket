import React, { useRef } from "react";
import { motion } from "framer-motion";
import hiring from "../assets/lotties/hiring.json";
import Lottie from "lottie-react";

export default function JobCategorySection() {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -255, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 255, behavior: "smooth" });
  };

  const jobsCategory = [
    { title: "Marketing & Sale", jobs: 1526, icon: "📢" },
    { title: "Customer Help", jobs: 185, icon: "🎧" },
    { title: "Finance", jobs: 168, icon: "🏛️" },
    { title: "Software", jobs: 1856, icon: "💡" },
    { title: "Human Resource", jobs: 165, icon: "👔" },
    { title: "Customer Help", jobs: 185, icon: "🎧" },
    { title: "Finance", jobs: 168, icon: "🏛️" },
    { title: "Software", jobs: 1856, icon: "💡" },
    { title: "Human Resource", jobs: 165, icon: "👔" },
  ];

  return (
    <section className="px-4 py-10 bg-white text-gray-800">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">
          Browse by category
        </h2>
        <p className="text-gray-500">
          Find the job that’s perfect for you. about 800+ new jobs everyday
        </p>
      </div>
      
       <div className="relative w-full my-10">
      {/* Buttons */}
      <div className="flex justify-between items-center mb-4">
        <button
          onClick={scrollLeft}
          className="bg-gray-200 cursor-pointer hover:bg-gray-300 text-xl px-3 mr-2 py-2 rounded-full shadow"
        >
          ←
        </button>
        {/* slider  */}


<div
        ref={scrollRef}
        className="overflow-x-auto flex custom-scroll-hide gap-4 px-2 "
      >
        {jobsCategory.map((item, idx) => (
          <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
            key={idx}
            className="min-w-[240px] max-w-[240px] flex items-center p-5 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition duration-300"
          >
            <div className="text-4xl mr-4 w-12 flex-shrink-0">{item.icon}</div>
            <div className="flex flex-col">
              <h3 className="text-base md:text-lg font-semibold text-gray-800">
                {item.title}
              </h3>
              <p className="text-sm text-gray-500 whitespace-nowrap">
                {item.jobs} Jobs Available
              </p>
            </div>
          </motion.div>
        ))}
      </div>


        <button
          onClick={scrollRight}
          className="bg-gray-200 cursor-pointer hover:bg-gray-300 text-xl px-3 ml-2 py-2 rounded-full shadow"
        >
          →
        </button>
      </div>

      
    </div>

      <div className="flex flex-col md:flex-row justify-between items-center bg-blue-50 p-6 rounded-lg shadow-md">
        <div className="flex items-center gap-4">
          <div className="bg-white rounded-full p-3">
            <Lottie
              className="w-16 h-16"
              animationData={hiring}
              loop={true}
            ></Lottie>
          </div>
          <div>
            <h3 className="font-bold text-sm text-blue-600 uppercase">
              We are
            </h3>
            <h2 className="text-2xl font-bold">HIRING</h2>
            <p className="text-gray-600 mt-1">
              Let’s{" "}
              <span className="text-blue-600 font-semibold">Work Together</span>{" "}
              &{" "}
              <span className="text-blue-600 font-semibold">
                Explore Opportunities
              </span>
            </p>
          </div>
        </div>

        <button className="btn btn-primary mt-4 md:mt-0">Apply now</button>
      </div>
    </section>
  );
}
