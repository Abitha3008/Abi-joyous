import React, { useState, useEffect } from "react";

function App() {

  // Changing profession
  // const [roleIndex, setRoleIndex] = useState(0);

  // const roles = [
  //   "Web Designer",
  //   "Frontend Developer",
  //   "Tech Enthusiast"
  // ];

  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     setRoleIndex((previousIndex) => {
  //       return (previousIndex + 1) % roles.length;
  //     });
  //   }, 2000);

  //   return () => clearInterval(timer);
  // }, []);

 
return (
  <div className="min-h-screen bg-[#03040e] text-white">

    
    <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#03040e]/85 backdrop-blur-xl">

      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        <a href="#home" className="text-2xl font-extrabold tracking-tight">
          abitha<span className="text-purple-400">.</span>
        </a>

        <div className="hidden items-center gap-8 text-sm text-gray-300 md:flex">
          <a href="#home" className="transition hover:text-purple-400">Home</a>
          <a href="#about" className="transition hover:text-purple-400">About</a>
          <a href="#skills" className="transition hover:text-purple-400">Skills</a>
          <a href="#projects" className="transition hover:text-purple-400">Projects</a>
          <a href="#education" className="transition hover:text-purple-400">Education</a>
        </div>

        <a
          href="#contact"
          className="rounded-full bg-gradient-to-r from-violet-600 via-purple-500 to-sky-500 px-7 py-3 font-semibold text-white shadow-lg shadow-purple-500/30 transition duration-300 hover:-translate-y-1 hover:shadow-sky-500/40"
        >
          Contact Me ↗
        </a>

      </div>
    </nav>


   
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-6 pb-12 pt-28"
    >

      
      <div className="pointer-events-none absolute -right-20 top-20 h-96 w-96 rounded-full bg-blue-700/10 blur-[120px]"></div>

      <div className="pointer-events-none absolute bottom-0 left-0 h-80 w-80 rounded-full bg-purple-700/10 blur-[120px]"></div>


      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 md:grid-cols-2">

       
        <div className="relative z-10">

          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-purple-400/20 bg-purple-500/10 px-4 py-2 text-xs text-purple-200">
            ✨ Welcome to my creative space
          </div>


          <h1 className="text-5xl font-extrabold leading-tight tracking-tight sm:text-6xl lg:text-7xl">

            Hello, I'm

            <br />

            <span className="bg-gradient-to-r from-violet-400 via-pink-300 to-sky-400 bg-clip-text text-transparent">
              Abitha.
            </span>

          </h1>


         
          <h2
           
            className="mt-5 text-xl font-semibold text-gray-200 sm:text-2xl"
          >  A Web Developer
            {/* {roleIndex === 0 ? "A " : ""}
            {roles[roleIndex]} */}
          </h2>


          <p className="mt-4 max-w-lg text-sm leading-7 text-gray-400">
            I love transforming ideas into beautiful digital experiences.
            I build responsive websites that combine clean design, smooth
            interactions and meaningful user experiences.
          </p>


          
          <div className="mt-8 flex flex-wrap gap-4">

            <a
              href="#projects"
              className="rounded-full bg-gradient-to-r from-purple-600 to-blue-500 px-7 py-3.5 text-sm font-semibold shadow-lg shadow-purple-500/30 transition hover:-translate-y-1 hover:shadow-purple-500/50"
            >
              Explore My Work ↗
            </a>

            <a
              href="#contact"
              className="rounded-full border border-white/20 px-7 py-3.5 text-sm font-semibold transition hover:border-purple-400 hover:bg-purple-500/10"
            >
              Let's Talk ☏
            </a>

          </div>


          
          <div className="mt-10 flex gap-6 text-sm text-gray-400">

            <a href="#contact" className="transition hover:text-purple-400">
              GitHub ↗
            </a>

            <a href="#contact" className="transition hover:text-purple-400">
              LinkedIn ↗
            </a>

            <a href="#contact" className="transition hover:text-purple-400">
              Email ↗
            </a>

          </div>

        </div>


        
        <div className="relative flex h-[400px] items-center justify-center md:h-[550px]">

          <div className="absolute h-72 w-72 rounded-full bg-purple-600/20 blur-[100px]"></div>


         
          <div
            className="absolute h-72 w-72 animate-spin rounded-full border border-dashed border-purple-400/40 sm:h-80 sm:w-80"
            style={{ animationDuration: "20s" }}
          ></div>


       
          <div className="relative h-80 w-80 rounded-full bg-gradient-to-r from-violet-500 via-purple-400 to-sky-400 p-1 shadow-[0_0_40px_rgba(139,92,246,0.4)] transition duration-500 hover:scale-105 sm:h-72 sm:w-72">

            <div className="h-full w-full overflow-hidden rounded-full border-4 border-[#03040e]">

              <img
                src="/anime.png"
                alt="Abitha Anime Avatar"
                className="h-full w-full rounded-full object-cover object-center"
              />

            </div>

          </div>


         
          <div className="absolute right-2 top-28 animate-bounce rounded-xl border border-purple-400/40 bg-[#11152b] px-3 py-2 shadow-lg shadow-purple-500/20 sm:right-3">

            <p className="text-xs font-semibold text-white">
              Hello Code! 👋
            </p>

            <p className="text-center text-sm font-bold text-purple-400">
              {"</>"}
            </p>

          </div>


          {/* Animated Star 1 */}
          <div className="absolute left-10 top-24 animate-pulse text-3xl text-purple-400">
            ✦
          </div>


          {/* Animated Star 2 */}
          <div className="absolute bottom-20 left-12 animate-bounce text-2xl text-blue-400">
            ✧
          </div>


          {/* Animated Star 3 */}
          <div className="absolute bottom-24 right-10 animate-pulse text-3xl text-pink-400">
            ☆
          </div>


          {/* Animated Star 4 */}
          <div
            className="absolute right-20 top-5 animate-spin text-xl text-blue-400"
            style={{ animationDuration: "8s" }}
          >
            ✧
          </div>


          {/* Floating Heart */}
          <div className="absolute bottom-10 right-16 animate-bounce text-xl text-pink-400">
            ♡
          </div>


          {/* React Icon */}
          {/* <div className="absolute bottom-14 left-5 flex h-12 w-12 items-center justify-center rounded-full border border-blue-400/40 bg-[#11152b] text-2xl shadow-lg">
             ✧
          </div> */}

        </div>

      </div>

    </section>

  </div>
);
}


// import { useState } from 'react'

// function App() {
 

//   return (
//     <div className="min-h-screen bg-[#03040e] text-white">

//       {/* NAVBAR */}
//       <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#03040e]/85 backdrop-blur-xl">
//         <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

//           <a href="#home" className="text-2xl font-extrabold tracking-tight">
//             abitha<span className="text-purple-400">.</span>
//           </a>

//           <div className="hidden items-center gap-8 text-sm text-gray-300 md:flex">
//             <a href="#home" className="transition hover:text-purple-400">Home</a>
//             <a href="#about" className="transition hover:text-purple-400">About</a>
//             <a href="#skills" className="transition hover:text-purple-400">Skills</a>
//             <a href="#projects" className="transition hover:text-purple-400">Projects</a>
//             <a href="#education" className="transition hover:text-purple-400">Education</a>
//           </div>

//           <a
//             href="#contact"
//             // className="rounded-full bg-gradient-to-r from-purple-600 to-blue-500 px-6 py-3 text-sm font-semibold shadow-lg shadow-purple-500/20 transition hover:scale-105"
//           className="rounded-full bg-gradient-to-r from-violet-600 via-purple-500 to-sky-500 px-7 py-3 text-white font-semibold shadow-lg shadow-purple-500/30 transition duration-300 hover:-translate-y-1 hover:shadow-sky-500/40"
//           >
//             Contact Me ↗
//           </a>

//         </div>
//       </nav>

//       {/* HOME / HERO */}
//       <section
//         id="home"
//         className="relative flex min-h-screen items-center overflow-hidden px-6 pt-24"
//       >

//         {/* Background glow */}
//         <div className="pointer-events-none absolute -right-20 top-20 h-96 w-96 rounded-full bg-blue-700/10 blur-[120px]"></div>
//         <div className="pointer-events-none absolute bottom-0 left-0 h-80 w-80 rounded-full bg-purple-700/10 blur-[120px]"></div>

//         <div className="mx-auto grid w-full max-w-7xl items-center gap-12 md:grid-cols-2">

//           {/* LEFT CONTENT */}
//           <div className="relative z-10">

//             <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-purple-400/20 bg-purple-500/10 px-4 py-2 text-xs text-purple-200">
//               ✨ Welcome to my creative space
//             </div>

//             <h1 className="text-5xl font-extrabold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
//               Hello, I'm
//               <br />
//               <span
//               //  className="bg-gradient-to-r from-purple-400 via-pink-300 to-blue-400 bg-clip-text text-transparent">
//                className="bg-gradient-to-r from-violet-400 via-pink-300 to-sky-400 bg-clip-text text-transparent">
//   Abitha.
// </span>
              
//             </h1>

//             <h2 className="mt-5 text-xl font-semibold text-gray-200">
//               A Web Designer
//             </h2>

//             <p className="mt-4 max-w-lg text-sm leading-7 text-gray-400">
//               I love transforming ideas into beautiful digital experiences.
//               I build responsive websites that combine clean design, smooth
//               interactions and meaningful user experiences.
//             </p>

//             <div className="mt-8 flex flex-wrap gap-4">

//               <a
//                 href="#projects"
//                 className="rounded-full bg-gradient-to-r from-purple-600 to-blue-500 px-7 py-3.5 text-sm font-semibold shadow-lg shadow-purple-500/30 transition hover:-translate-y-1 hover:shadow-purple-500/50"
//               >
//                 Explore My Work ↗
//               </a>

//               <a
//                 href="#contact"
//                 className="rounded-full border border-white/20 px-7 py-3.5 text-sm font-semibold transition hover:border-purple-400 hover:bg-purple-500/10"
//               >
//                 Let's Talk ☏
//               </a>

//             </div>

//             <div className="mt-10 flex gap-6 text-sm text-gray-400">
//               <a href="#contact" className="transition hover:text-purple-400">
//                 GitHub ↗
//               </a>
//               <a href="#contact" className="transition hover:text-purple-400">
//                 LinkedIn ↗
//               </a>
//               <a href="#contact" className="transition hover:text-purple-400">
//                 Email ↗
//               </a>
//             </div>

//           </div>

//           {/* RIGHT ANIMATED ORB */}
//           <div className="relative flex h-[400px] items-center justify-center md:h-[550px]">

//             <div className="orb-ring ring-one"></div>
//             <div className="orb-ring ring-two"></div>
//             <div className="orb-ring ring-three"></div>

//             <div className="orb-main flex items-center justify-center rounded-full">
//               <span className="text-6xl font-extrabold text-white">A.</span>
//             </div>

//             {/* Floating icons */}
//             <div className="floating-icon left-4 top-1/2">
//               ✿
//             </div>

//             <div className="floating-icon right-5 top-1/4">
//               &lt;/&gt;
//             </div>

//             <div className="floating-icon bottom-1/4 right-0">
//               ⚡
//             </div>

//           </div>

//         </div>
//       </section>

     


 export default App;