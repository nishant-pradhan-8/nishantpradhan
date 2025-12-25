"use client";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { motion } from "framer-motion";

export default function ExperienceMain() {
  return (
    <div className="flex flex-col gap-4">
      <div className="grid grid-cols-[1fr_2fr] items-start  ">
        <div className="">
          <div className="border-r-[5px] h-[3.5rem] border-secondary-orange">
            <h3 className="text-xl">Sandbox Software Pvt Ltd</h3>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="pl-4 ">
            <h2 className="text-2xl">
              Full-Stack Developer @ Sandbox Software Pvt Ltd
            </h2>
            <p className="text-xl">July 2025 - Dec 2025</p>
            <div className="flex flex-col gap-2 mt-4">
              <div className="flex flex-row  gap-2 text-xl">
                <ArrowRightIcon className="text-secondary-orange" />
                <p>
                  Developed and maintained Full-Stack applications using React,
                  Django, and PostgreSQL.
                </p>
              </div>
              <div className="flex flex-row  gap-2 text-xl">
                <ArrowRightIcon className="text-secondary-orange" />
                <p>
                  Containerized applications using Docker for streamlined
                  deployments.
                </p>
              </div>
              <div className="flex flex-row  gap-2 text-xl">
                <ArrowRightIcon className="text-secondary-orange" />
                <p>
                  Implemented monitoring with Prometheus and Grafana to enhance
                  system observability.
                </p>
              </div>
              <div className="flex flex-row  gap-2 text-xl">
                <ArrowRightIcon className="text-secondary-orange" />
                <p>
                  Collaborated with the team to troubleshoot issues and improve
                  application performance.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      <div className="grid grid-cols-[1fr_2fr] items-start  ">
        <div className="">
          <div className="border-r-[5px] h-[3.5rem] border-secondary-orange">
            <h3 className="text-xl">SkyBase Innovations</h3>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="pl-4 ">
            <h2 className="text-2xl">
              Frontend Developer Intern @ Skybase Innovations
            </h2>
            <p className="text-xl">Sept 2024 - Dec 2024</p>
            <div className="flex flex-col gap-2 mt-4">
              <div className="flex flex-row  gap-2 text-xl">
                <ArrowRightIcon className="text-secondary-orange" />
                <p>
                  Developed responsive and interactive web applications using
                  modern frontend technologies, improving overall user
                  engagement and mobile accessibility
                </p>
              </div>
              <div className="flex flex-row  gap-2 text-xl">
                <ArrowRightIcon className="text-secondary-orange" />
                <p>
                  Integrated RESTful APIs to dynamically fetch and render data,
                  enhancing real-time functionality and user experience.
                </p>
              </div>
              <div className="flex flex-row  gap-2 text-xl">
                <ArrowRightIcon className="text-secondary-orange" />
                <p>
                  Refactored inefficient code and resolved critical bugs,
                  resulting in a significant boost in performance and page load
                  speed.
                </p>
              </div>
              <div className="flex flex-row  gap-2 text-xl">
                <ArrowRightIcon className="text-secondary-orange" />
                <p>
                  Collaborated with back-end developers, improving the overall
                  development workflow
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      
    </div>
  );
}
