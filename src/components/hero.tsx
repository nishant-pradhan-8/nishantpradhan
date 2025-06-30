"use client";
import { motion } from "framer-motion";

import EmailIcon from "@mui/icons-material/Email";
export default function Hero() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
    >
      <div className="bg-center bg-no-repeat bg-cover mt-[180px]">
        <div className="flex flex-col items-center gap-4 mt-[80px]">
          <h1 className={` text-center text-6xl  `}>
            Hi, <span className={`font-semibold text-[#F8B55F]`}>Nishant</span>{" "}
            here.
          </h1>

          <h2 className="text-2xl text-center text-gray-300">
            I am a{" "}
            <span className="text-secondary-orange">Full Stack developer</span>{" "}
            currently living in Pokhara, Nepal. <br></br> I like to build
            sometimes.<br></br> I&apos;m currently expanding my knowledge and
            would love to connect with individuals in tech industry.
          </h2>

          <div>
            <a
              target="_blank"
              href="mailto:nishant.pradhan0520@gmail.com"
              className="bg-gray-200 transition-transform mt-2 duration-300 ease-in-out hover:scale-110 text-xl flex flex-row items-center gap-2 text-primary-black p-2 px-6 cursor-pointer rounded-xl"
            >
              <EmailIcon />
              Say Hi
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}