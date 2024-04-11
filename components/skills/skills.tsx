"use client";

import { Title } from "../title/title";
import { motion } from "framer-motion";

export const Skills = () => {
  const SkillObj: { title: string; skill: number }[] = [
    { title: "Javascript", skill: 90 },
    { title: "Typescript", skill: 80 },
    { title: "React", skill: 85 },
    { title: "Next", skill: 95 },
    { title: "Svelte", skill: 80 },
    { title: "HTML,CSS", skill: 90 },
    { title: "Java", skill: 20 },
    { title: "Node", skill: 60 },
    { title: "SQL", skill: 30 },
  ];

  return (
    <div className="w-full">
      <Title>My Skills</Title>

      {SkillObj.map(({ title, skill }) => (
        <div key={title + skill}>
          <div className="max-w-xl sm:max-w-3xl m-auto">
            <h3 className="text-white font-extralight">{title}</h3>
            <div className="bg-white bg-opacity-90 w-full h-6 shadow-[0_5px_12px_-6px_#fcfcfc] relative rounded mb-4 p-px">
              <motion.div
                className="h-full bg-black -w-full rounded p-px flex items-center"
                initial={{ width: "50px" }}
                whileInView={{ width: `${skill}%` }}
                transition={{ type: "spring", stiffness: 60, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <span className="ml-1 text-sm	">{skill}%</span>
              </motion.div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
