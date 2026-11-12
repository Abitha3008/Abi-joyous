// import React from 'react'

// function Title() {
//   return (
//     <section
//       id="projects"
//       className="relative scroll-mt-24 overflow-hidden bg-[#03040e] px-6 py-24"
//     >
//       <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-blue-700/10 blur-[120px]"></div>
//       <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-purple-700/10 blur-[120px]"></div>



//       {/* Heading */}
//       <div className="mb-12 text-center">

//         <p className="mb-4 text-xs font-bold uppercase tracking-[5px] text-blue-400">
//           THINGS I'VE BUILT
//         </p>

//         <h2 className="text-3xl font-extrabold text-white sm:text-4xl md:text-5xl">
//           Selected{" "}
//           <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
//             Projects
//           </span>
//         </h2>

//         <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-gray-400">
//           A collection of creative projects where ideas turn into meaningful
//           digital experiences.
//         </p>

//       </div>


//       <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">

//         {[
//           {
//             number: "01",
//             category: "NATURE",
//             title: "GreenScape",
//             description:
//               "A gardening website showcasing plants, garden inspiration and helpful tips.",
//             // icon: "❀",

//             gradient: "from-green-800 via-green-600 to-lime-500",
            
//             tech: ["HTML", "CSS", "JavaScript", "Bootstrap"],
//           },
//           {
//             number: "02",
//             category: "E-COMMERCE",
//             title: "Hotel Booking",
//             description:
//               "A modern Room booking website with attractive product cards and easy navigation.",
//             icon: "♡",
//             gradient: "from-purple-800 via-purple-600 to-blue-600",
//             tech: ["React", "CSS", "JavaScript", "Bootstrap"],
//           },
//           {
//             number: "03",
//             category: "Bussiness",
//             title: "PXLZ",
//             description:
//               "A Bussiness Website showcasing creative designs  and projects.",
//             icon: "✧",
//             gradient: "from-blue-800 via-indigo-600 to-cyan-500",
//             tech: ["React", "HTML", "CSS", "Bootstrap"],
//           },
//         ].map((project) => (

//           <div
//             key={project.number}
//             className="group overflow-hidden rounded-2xl border border-purple-500/20 bg-gradient-to-br from-[#100b27] to-[#08091b] shadow-xl transition-all duration-300 hover:-translate-y-2 hover:border-purple-400/50 hover:shadow-purple-500/10"
//           >


//             {/* <a
//   href={project.link}
//   target="_blank"
//   rel="noopener noreferrer"
//   className={`relative flex h-48 items-center justify-center overflow-hidden bg-gradient-to-r ${project.gradient}`}
// >
//       </a> */}

//             <div className="p-6">

//               <p className="mb-2 text-[10px] font-bold uppercase tracking-[3px] text-blue-400">
//                 PROJECT {project.number} · {project.category}
//               </p>

//               <h3 className="mb-2 text-xl font-bold text-white">
//                 {project.title}
//               </h3>

//               <p className="text-xs leading-6 text-gray-400">
//                 {project.description}
//               </p>

//               {/* Technology Tags */}
//               <div className="mt-5 flex flex-wrap gap-2">
//                 {project.tech.map((tech) => (
//                   <span
//                     key={tech}
//                     className="rounded-full border border-purple-500/20 bg-purple-500/10 px-3 py-1 text-[10px] text-purple-300"
//                   >
//                     {tech}
//                   </span>
//                 ))}
//               </div>

//               {/* View Project */}
//               <a href={project.link} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-2 text-xs font-semibold text-gray-400 transition-all duration-300 hover:gap-4 hover:text-purple-400">
//                 View Project <span>↗</span>
//               </a>
//             </div>
//           </div>

//         ))}

//       </div>

//     </section>

//   )
// }

// export default Title



import React from "react";

function Title() {

  const projects = [
    {
      number: "01",
      category: "NATURE",
      title: "GreenScape",
      description:
        "A gardening website showcasing plants, garden inspiration and helpful tips.",
      gradient: "from-green-800 via-green-600 to-lime-500",
      tech: ["HTML5", "CSS3", "JavaScript", "Bootstrap5"],
      link: "https://abitha-green.vercel.app",
    },
    {
      number: "02",
      category: "HOTEL BOOKING",
      title: "Hotel Booking",
      description:
        "A modern room booking website with attractive cards and easy navigation.",
      gradient: "from-purple-800 via-purple-600 to-blue-600",
      tech: ["React Js",  "CSS3","JavaScript ", " React Bootstrap"],
      link: "https://your-hotel-booking.vercel.app",
    },
    {
      number: "03",
      category: "BUSINESS",
      title: "PXLZ",
      description:
        "A business website showcasing creative designs and projects.",
      gradient: "from-blue-800 via-indigo-600 to-cyan-500",
      tech: ["React Js", "HTML5", "CSS3", " React Bootstrap"],
      link: "https://abi-pixel.vercel.app",
    },
  ];

  return (
    <section
      id="projects"
      className="relative scroll-mt-24 overflow-hidden bg-[#03040e] px-6 py-24"
    >

      {/* Background Glow */}
      <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-blue-700/10 blur-[120px]"></div>

      <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-purple-700/10 blur-[120px]"></div>

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mb-12 text-center">

          <p className="mb-4 text-xs font-bold uppercase tracking-[5px] text-blue-400">
            THINGS I'VE BUILT
          </p>

          <h2 className="text-3xl font-extrabold text-white sm:text-4xl md:text-5xl">
            Selected{" "}
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-gray-400">
            A collection of creative projects where ideas turn into meaningful
            digital experiences.
          </p>

        </div>

        {/* PROJECT CARDS */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">

          {projects.map((project) => (

            <a
              key={project.number}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.title} project`}
              className="group block overflow-hidden rounded-2xl border border-purple-500/20 bg-gradient-to-br from-[#100b27] to-[#08091b] shadow-xl transition-all duration-300 hover:-translate-y-2 hover:border-purple-400/50 hover:shadow-purple-500/10"
            >

              

              {/* Project Details */}
              <div className="p-6">

                <p className="mb-2 text-[10px] font-bold uppercase tracking-[3px] text-blue-400">
                  PROJECT {project.number} · {project.category}
                </p>

                <h3 className="mb-2 text-xl font-bold text-white transition group-hover:text-purple-400">
                  {project.title}
                </h3>

                <p className="text-xs leading-6 text-gray-400">
                  {project.description}
                </p>

                {/* Technology Tags */}
                <div className="mt-5 flex flex-wrap gap-2">

                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-purple-500/20 bg-purple-500/10 px-3 py-1 text-[10px] text-purple-300"
                    >
                      {tech}
                    </span>
                  ))}

                </div>

                {/* View Project */}
                <div className="mt-6 inline-flex items-center gap-2 text-xs font-semibold text-gray-400 transition-all duration-300 group-hover:gap-4 group-hover:text-purple-400">

                  View Project

                  <span className="text-base">↗</span>

                </div>

              </div>

            </a>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Title;
