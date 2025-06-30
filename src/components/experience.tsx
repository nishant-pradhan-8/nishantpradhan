"use client";
import ExperienceMain from "./experienceMain";
import { motion } from "framer-motion";

export default function Experience() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <div
        id="experience"
        className="flex flex-row mt-[150px] items-center gap-4 mb-4"
      >
        <h1 className="font-semibold text-4xl text-gray-200">/ Experience</h1>
        <div className="w-[100px] h-[0.1rem] bg-gray-500"></div>
      </div>
      <ExperienceMain />
    </motion.div>
  );
}
