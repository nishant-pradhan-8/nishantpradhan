"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { designProjects } from "@/app/projects/data/db";
export default function Design() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <h2 className="text-3xl mt-8 mb-4 max-[1263px]:text-center">
        Design Projects
      </h2>{" "}
      <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 gap-3 max-[1263px]:justify-center">
        {designProjects.map((project) => (
          <div
            key={project.id}
            className="border-[2px] border-gray-500  transition-transform duration-300 ease-in-out hover:scale-102 max-[648px]:w-full  rounded-2xl flex  flex-col "
          >
            <Image
              className="rounded-2xl"
              src={project.placeholder}
              alt="email"
              width={800}
              height={800}
            />
            <div className="m-4 flex  flex-col gap-2">
              <h3 className="text-xl font-semibold">{project.projectName}</h3>
              <p className="text-[1.1rem]">{project.projectDescription}</p>
              <div className="flex flex-row flex-wrap gap-2">
                <div className="bg-white text-black px-2  rounded-2xl flex items-center text-[1rem] justify-center gap-2">
                  <div className="w-[8px] h-[8px] bg-black rounded-full"></div>
                  Figma
                </div>
                <div className="bg-white text-black px-2 rounded-2xl flex items-center text-[1rem] justify-center gap-2">
                  <div className="w-[8px] h-[8px] bg-black rounded-full"></div>
                  Webflow
                </div>
              </div>

              <div className="flex  flex-row items-center gap-2">
                <a
                  target="_blank"
                  href={project.dribbleUrl}
                  className="bg-white flex flex-row  hover:bg-secondary-orange items-center gap-2 text-black p-2 px-4 cursor-pointer rounded-4xl   mt-2"
                >
                  See Full Design
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
