{/* SKILLS SECTION */}
import React from 'react'
import { FaCss3Alt } from "react-icons/fa";

function Skills() {
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

      {[
        {
          icon: "🌐",
          title: "HTML5",
          description: "Building structured, accessible web pages.",
        },
        {
          icon: "🎨",
          title: "CSS3",
          description: "Creative layouts, gradients and animations.",
        },
        {
          icon: "📜",
          title: "JavaScript",
          description: "Interactive features and dynamic experiences.",
        },
        {
          icon: "B",
          title: "Bootstrap",
          description: "Responsive, mobile-friendly interfaces.",
        },
        {
          icon: "⚛️",
          title: "React Js",
          description: "Building reusable and interactive UI components.",
        },
        {
          icon: "💨",
          title: "Tailwind CSS",
          description: "Creating modern designs using utility classes.",
        },
        {
          icon: "🎯",
          title: "Material UI",
          description: "Designing beautiful and consistent interfaces.",
        },
        {
          icon: "📱",
          title: "Responsive Design",
          description: "Websites that look great on every device.",
        },
      ].map((skill, index) => (

        <div
          key={index}
          className="group rounded-2xl border border-purple-500/20 bg-gradient-to-br from-[#100b27] to-[#08091b] p-6 shadow-xl transition-all duration-300 hover:-translate-y-2 hover:border-purple-400/50 hover:shadow-purple-500/10"
        >

          {/* Icon */}
          <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-purple-500/15 text-xl font-bold text-purple-300 transition duration-300 group-hover:bg-purple-500 group-hover:text-white">
            {skill.icon}
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
 )
}

export default Skills