import React from 'react'

function About() {
  return (
     
      
<section
  id="about"
  className="relative scroll-mt-24 overflow-hidden bg-[#03040e] px-6 py-24"
>
  {/* Background Glow */}
  <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-blue-700/10 blur-[120px]"></div>
  <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-purple-700/10 blur-[120px]"></div>

  <div className="relative z-10 mx-auto max-w-7xl">

    {/* Heading */}
    <div className="mb-12 text-center">

      <p className="mb-4 text-xs font-bold uppercase tracking-[5px] text-blue-400">
        A LITTLE ABOUT ME
      </p>

      <h2 className="text-3xl font-extrabold text-white sm:text-4xl md:text-5xl">
        More Than Just{" "}
        <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
          Code
        </span>
      </h2>

      <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-gray-400">
        I believe every great website begins with curiosity and becomes
        special through creativity.
      </p>

    </div>

    {/* ABOUT CARDS */}
    <div className="grid gap-6 md:grid-cols-12">

      {/* LEFT CARD - MY STORY */}
      <div className="rounded-3xl border border-purple-500/20 bg-gradient-to-br from-purple-950/40 to-[#09091b] p-7 shadow-xl transition duration-300 hover:border-purple-400/50 md:col-span-7">
{/* 
        <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-purple-500/15 text-2xl text-purple-300">
          🎨
        </div> */}

        <h3 className="mb-4 text-2xl font-bold text-white">
          My Story
        </h3>

        <p className="text-sm leading-7 text-gray-400">
          I'm Abitha, an aspiring web developer who enjoys creating
          user-friendly and visually appealing websites. From exploring
          nature-inspired designs to developing e-commerce interfaces,
          I enjoy learning by building practical projects.
        </p>

        <p className="mt-5 text-sm leading-7 text-gray-400">
          My goal is to keep improving my skills, solve real-world
          problems and create digital experiences that make a difference.
        </p>
        <p className="mt-5 text-sm text-gray-400">
      My goal is to turn creative ideas into meaningful digital experiences.
    </p>
    <a
      href="#projects"
      className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-purple-400 transition-all duration-300 hover:gap-4 hover:text-blue-400"
    >
      Discover Projects ➜  
    </a>
      </div>

      {/* RIGHT CARD */}
      <div className="flex flex-col justify-center gap-7 rounded-3xl border border-purple-500/20 bg-gradient-to-br from-[#100b27] to-[#08091b] p-7 shadow-xl transition duration-300 hover:border-purple-400/50 md:col-span-5">

        {/* FOCUS */}
        <div>
          <p className="mb-2 text-xs text-gray-500">
            My Focus
          </p>

          <h4 className="text-base font-bold text-white">
            Web Development & UI Design
          </h4>
        </div>

        {/* APPROACH */}
        <div>
          <p className="mb-2 text-xs text-gray-500">
            My Approach
          </p>

          <h4 className="text-base font-bold text-white">
            Learn · Create · Improve
          </h4>
        </div>

        {/* INSPIRATION */}
        <div>
          <p className="mb-2 text-xs text-gray-500">
            My Inspiration
          </p>

          <h4 className="text-base font-bold text-white">
            Ideas from everyday life
          </h4>
        </div>
        {/*  */}
         <div>
          <p className="mb-2 text-xs text-gray-500">
           Currently Exploring
          </p>

          <h4 className="text-base font-bold text-white">
            Modern & Resposive Web Design
          </h4>
        </div>
      </div>

    </div>
  </div>
</section>
  )
}

export default About