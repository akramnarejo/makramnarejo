"use client";
import React from "react";
import { skills, projects } from "../lib/constants";
import Card from "../lib/components/card";
import { motion } from "framer-motion";

const Page = () => {
  // dummy commit
  return (
    <div className="mt-4">
      <h2 className="[font-size:_clamp(2rem,3vw,6rem)] font-bold dark:text-white">
        Work
      </h2>
      <p className="text-gray-600 font-light dark:text-gray-300 [font-size:_clamp(1.2rem,1.5vw,2rem)]">
        For the past 5 years developing mobile responsive and scalable web apps, providing seamless user experience using modern technologies. So far, I have worked with the following skills and learning more.
      </p>
      {/* skills */}
      <ul className="flex gap-4 flex-wrap mt-8">
        {skills.map((item, ind) => {
          return (
            <motion.li
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 2, type: "sping", ease: "easeOut" }}
              viewport={{once: true}}
              key={ind}
              className={`font-light md:text-xl dark:bg-black border dark:border-[#444] border-[#999] dark:hover:border-blue-200 dark:hover:text-blue-200 hover:border-blue-400 hover:text-blue-600 p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:skew-y-3 ease-in-out duration-500 hover:scale-110`}
            >
              {item}
            </motion.li>
          );
        })}
      </ul>

      {/* Projects */}
      <h2 className="mt-16 mb-2 text-4xl font-semibold">Projects</h2>
      <div className="max-w-full grid gap-8 md:grid-cols-2 mt-16 mb-4">
        {projects.map((item, i) => (
          <Card data={item} key={i} />
        ))}
      </div>
    </div>
  );
};

export default Page;
