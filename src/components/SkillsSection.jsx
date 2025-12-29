import React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import {
  SiReact,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiGit,
  SiGithub,
  SiCplusplus,
  SiNodedotjs,
  SiFirebase,
  SiMysql,
} from "react-icons/si";
import { DiJavascript } from "react-icons/di";

const skills = [
  { icon: <SiHtml5 className="text-orange-500" />, name: "HTML5" },
  { icon: <SiCss3 className="text-blue-500" />, name: "CSS3" },

  {
    icon: (
      <div className="bg-[#f7df1e] p-2 rounded">
        <DiJavascript className="text-black" />
      </div>
    ),
    name: "JavaScript",
  },

  { icon: <SiReact className="text-cyan-400" />, name: "React" },
  { icon: <SiTailwindcss className="text-sky-400" />, name: "Tailwind CSS" },
  { icon: <SiGit className="text-red-500" />, name: "Git" },
  { icon: <SiGithub className="text-gray-800 dark:text-white" />, name: "GitHub" },
  { icon: <SiCplusplus className="text-blue-600" />, name: "C++" },

  // ✅ NEW (FIXED)
  { icon: <SiNodedotjs className="text-green-500" />, name: "Node.js" },
  { icon: <SiMysql className="text-blue-400" />, name: "SQL" },

  {
    icon: (
      <div className="bg-yellow-400 text-black px-3 py-2 rounded font-bold text-xl">
        BI
      </div>
    ),
    name: "Power BI",
  },

  { icon: <SiFirebase className="text-orange-400" />, name: "Firebase" },
];

function SkillsSection() {
  return (
    <section id="skills" className="py-16 relative z-10">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          My <span className="text-primary"> Skills</span>
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-10">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className={cn(
                "flex flex-col items-center space-y-3 p-8 rounded-xl transition duration-300",
                "bg-white dark:bg-[#0f172a] shadow-md",
                "hover:scale-105 hover:shadow-[0_4px_15px_rgba(139,92,246,0.25),0_4px_20px_rgba(59,130,246,0.2)]"
              )}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="text-6xl">{skill.icon}</div>
              <p className="text-gray-900 dark:text-white text-base font-medium hover:text-purple-400">
                {skill.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export { SkillsSection };
