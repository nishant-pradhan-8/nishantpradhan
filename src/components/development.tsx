"use client";
import Link from "next/link";
import Image from "next/image";
import GitHubIcon from "@mui/icons-material/GitHub";
import OpenInBrowserIcon from "@mui/icons-material/OpenInBrowser";
import { developmentProjects } from "@/app/projects/data/db";
import { motion } from "framer-motion";

export default function Development() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <div>
        <h2 className="text-3xl mt-8 mb-4 max-[1263px]:text-center">
          Development Projects
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 max-[1263px]:justify-center">
        {developmentProjects.map((project) => (
          <div
            key={project.id}
            className="border-[2px] border-gray-500 w-full p-4 rounded-2xl flex  flex-col gap-4 transition-transform duration-300 ease-in-out hover:scale-102"
          >
            <div className="flex flex-row items-center gap-4 justify-between">
              <div className="flex flex-row items-center gap-2">
                <div className="bg-white w-12 h-12 flex flex-row items-center justify-center rounded-xl">
                  <Image
                    src={project.logo}
                    alt="email"
                    width={40}
                    height={40}
                  />
                </div>

                <h3 className="text-xl font-semibold ">
                  {project.projectName}
                </h3>
              </div>

              <div className="flex flex-row gap-2 items-center">
                <a href={project.projectGithub}>
                  <GitHubIcon />
                </a>
                {project.projectUrl && (
                  <a href={project.projectUrl || "#"}>
                    <OpenInBrowserIcon className="!w-8 !h-8" />
                  </a>
                )}
              </div>
            </div>

            {<p className="text-[1.1rem]">{project.projectDescription}</p>}
            <div className="flex flex-row flex-wrap gap-2">
              {project.techUsed.map((tech, i) => (
                <div
                  key={i}
                  className="bg-white text-black px-2 text-[1rem] rounded-2xl flex items-center justify-center gap-2"
                >
                  <div className="w-[8px] h-[8px] bg-black rounded-full"></div>
                  {tech}
                </div>
              ))}
            </div>
            <div className="flex flex-row items-center gap-2">
              {
                <Link
                  href={
                    project.projectUrl
                      ? `/projects/${project.id}`
                      : project.projectGithub
                  }
                  className="bg-white  hover:bg-secondary-orange text-black py-2 flex items-center justify-center w-full rounded-4xl"
                >
                  View Project
                </Link>
              }
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}