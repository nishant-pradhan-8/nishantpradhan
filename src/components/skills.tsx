"use client";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

import { motion } from "framer-motion";
export default function Skills() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div
        id="skills"
        className="flex flex-row mt-[150px] items-center gap-4 mb-4"
      >
        <h1 className="font-semibold text-4xl text-gray-200">/ Skills</h1>
        <div className="w-[100px] m h-[0.1rem] bg-gray-500"></div>
      </div>
      <div className="text-2xl flex flex-col gap-[20px]">
        I have worked with various programming languages and frameworks. These
        are some technologies I have been working with lately.
        <div className="flex flex-row gap-4">
          <div>
            <div className="flex flex-row  gap-2 text-xl">
              <ArrowRightIcon className="text-secondary-orange" />
              <p>JavaScript</p>
            </div>
            <div className="flex flex-row  gap-2 text-xl">
              <ArrowRightIcon className="text-secondary-orange" />
              <p>TypeScript</p>
            </div>
            <div className="flex flex-row  gap-2 text-xl">
              <ArrowRightIcon className="text-secondary-orange" />
              <p>Python</p>
            </div>
            <div className="flex flex-row  gap-2 text-xl">
              <ArrowRightIcon className="text-secondary-orange" />
              <p>php</p>
            </div>
          </div>
          <div>
            <div className="flex flex-row  gap-2 text-xl">
              <ArrowRightIcon className="text-secondary-orange" />
              <p>React(Next.js)</p>
            </div>
            
            <div className="flex flex-row  gap-2 text-xl">
              <ArrowRightIcon className="text-secondary-orange" />
              <p>Express</p>
            </div>
            <div className="flex flex-row  gap-2 text-xl">
              <ArrowRightIcon className="text-secondary-orange" />
              <p>Django</p>
            </div>
              <div className="flex flex-row  gap-2 text-xl">
              <ArrowRightIcon className="text-secondary-orange" />
              <p>Laravel</p>
            </div>
            <div className="flex flex-row  gap-2 text-xl">
              <ArrowRightIcon className="text-secondary-orange" />
              <p>Docker</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
