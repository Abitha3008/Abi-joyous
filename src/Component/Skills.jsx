
import React from "react";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaBootstrap,
  FaReact,
  FaMobileAlt,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiMui,
} from "react-icons/si";

function Skills() {

  // Skills Details
  const skills = [
    {
      icon: <FaHtml5 />,
      title: "HTML5",
      description: "Building structured, accessible web pages.",
      color: "text-[#E34F26]",
    },
    {
      icon: <FaCss3Alt />,
      title: "CSS3",
      description: "Creative layouts, gradients and animations.",
      color: "text-[#1572B6]",
    },
    {
      icon: <FaJs />,
      title: "JavaScript",
      description: "Interactive features and dynamic experiences.",
      color: "text-[#F7DF1E]",
    },
    {
      icon: <FaBootstrap />,
      title: "Bootstrap",
      description: "Responsive, mobile-friendly interfaces.",
      color: "text-[#7952B3]",
    },
    {
      icon: <FaReact />,
      title: "React Js",
      description: "Building reusable and interactive UI components.",
      color: "text-[#61DAFB]",
    },
    {
      icon: <SiTailwindcss />,
      title: "Tailwind CSS",
      description: "Creating modern designs using utility classes.",
      color: "text-[#06B6D4]",
    },
    {
      icon: <SiMui />,
      title: "Material UI",
      description: "Designing beautiful and consistent interfaces.",
      color: "text-[#007FFF]",
    },
    {
      icon: <FaMobileAlt />,
      title: "Responsive Design",
      description: "Websites that look great on every device.",
      color: "text-[#A78BFA]",
    },
  ];

  return (

    <section
      id="skills"
      className="relative scroll-mt-24 overflow-hidden bg-[#03040e] px-6 py-24"
    >

      {/* Background Glow */}
      <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-blue-700/10 blur-[120px]"></div>

      <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-purple-700/10 blur-[120px]"></div>

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mb-12 text-center">

          <p className="mb-4 text-xs font-bold uppercase tracking-[5px] text-blue-400">
            WHAT I WORK WITH
          </p>

          <h2 className="text-3xl font-extrabold text-white sm:text-4xl md:text-5xl">
            My Creative{" "}
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Toolkit
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-gray-400">
            The tools and technologies I use to bring web ideas to life.
          </p>

        </div>

        {/* SKILLS CARDS */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">

          {skills.map((skill, index) => (

            <div
              key={index}
              className="group rounded-2xl border border-purple-500/20 bg-gradient-to-br from-[#100b27] to-[#08091b] p-6 shadow-xl transition-all duration-300 hover:-translate-y-2 hover:border-purple-400/50 hover:shadow-purple-500/10"
            >

              {/* Icon */}
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-purple-500/15 transition duration-300 group-hover:bg-purple-500">

                <span
                  className={`text-3xl ${skill.color} transition duration-300 group-hover:text-white`}
                >
                  {skill.icon}
                </span>

              </div>

              {/* Title */}
              <h3 className="mb-2 text-lg font-bold text-white">
                {skill.title}
              </h3>

              {/* Description */}
              <p className="text-xs leading-6 text-gray-400">
                {skill.description}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>

  );
}

export default Skills;
