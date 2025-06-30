"use client";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import XIcon from "@mui/icons-material/X";
import MobileMenu from "./menu";

import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <nav className="fixed top-0 left-0 bg-primary-black z-10 py-4 w-full  ">
        <div className="max-w-[1080px] m-auto flex items-center justify-between gap-4 px-4 sm:gap-6 lg:gap-8">
          <div className="flex flex-row items-center gap-2 sm:gap-4 lg:gap-6">
            <h1 className="text-[1.2rem] sm:text-[1.5rem] text-gray-200 font-semibold">
              Nishant Pradhan
            </h1>
            <MobileMenu />
            <ul className="hidden sm:flex text-gray-200 font-semibold items-center gap-3 sm:gap-4 lg:gap-6 text-[1rem] sm:text-[1.2rem] rounded-md">
              <li>
                <a
                  href="#"
                  className=" rounded-md hover:text-[#F8B55F]   transition duration-200"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className=" rounded-md hover:text-[#F8B55F]   transition duration-200"
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#experience"
                  className=" rounded-md hover:text-[#F8B55F]   transition duration-200"
                >
                  Experience
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className=" rounded-md hover:text-[#F8B55F] "
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="blogs"
                  className=" rounded-md hover:text-[#F8B55F]   transition duration-200"
                >
                  Blogs
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-row gap-2 sm:gap-3 lg:gap-4 text-gray-200">
            <a
              target="_blank"
              href="mailto:nishant.pradhan0520@gmail.com"
              className="hover:text-[#F8B55F] transition duration-200"
            >
              <EmailIcon className="text-[1.2rem] sm:text-[1.5rem]" />
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/nishant-pradhan8"
              className="hover:text-[#F8B55F] transition duration-200"
            >
              <LinkedInIcon className="text-[1.2rem] sm:text-[1.5rem]" />
            </a>
            <a
              target="_blank"
              href="https://github.com/nishant-pradhan-8"
              className="hover:text-[#F8B55F] transition duration-200"
            >
              <GitHubIcon className="text-[1.2rem] sm:text-[1.5rem]" />
            </a>

            <a
              target="_blank"
              href="https://x.com/nishantpradhann"
              className="hover:text-[#F8B55F] transition duration-200"
            >
              <XIcon className="text-[1.2rem] sm:text-[1.5rem]" />
            </a>
          </div>
        </div>
      </nav>
    </motion.div>
  );
}
