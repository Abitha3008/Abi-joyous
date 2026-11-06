import React from 'react'

function Education() {
  return (
 
<section
  id="education"
  className="relative scroll-mt-24 overflow-hidden bg-[#03040e] px-6 py-24"
>
  
  <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-blue-700/10 blur-[120px]"></div>
  <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-purple-700/10 blur-[120px]"></div>

  <div className="relative z-10 mx-auto max-w-7xl">

    <div className="mb-12 text-center">

      <p className="mb-4 text-xs font-bold uppercase tracking-[5px] text-blue-400">
        MY LEARNING JOURNEY
      </p>

      <h2 className="text-3xl font-extrabold text-white sm:text-4xl md:text-5xl">
        Education &{" "}
        <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
          Growth
        </span>
      </h2>

    </div>

   
    <div className="grid gap-6 md:grid-cols-2">

      
      <div className="group rounded-2xl border border-purple-500/20 bg-gradient-to-br from-[#100b27] to-[#08091b] p-7 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-purple-400/50">

        
        <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-purple-500/15 text-2xl text-purple-300 transition group-hover:bg-purple-500/25">
          🎓
        </div>

        
        <div className="relative border-l border-purple-500/30 pl-5">

          <div className="absolute -left-[6px] top-1 h-3 w-3 rounded-full bg-blue-400 shadow-lg shadow-blue-400/50"></div>

          <h3 className="text-base font-bold text-white">
            Bachelor's Degree
          </h3>

          <p className="mt-2 text-xs text-gray-400">
            [B.E / ECE]
          </p>

          <p className="mt-2 text-xs text-gray-400">
            [Arunachala college of engineering for women] · [2022-2026]
          </p>
           {/* <p className="mt-2 text-xs text-gray-400">
            [Govt.hr.sec school] · [2022]
          </p> */}
        </div>

      </div>


    
      <div className="group rounded-2xl border border-purple-500/20 bg-gradient-to-br from-[#100b27] to-[#08091b] p-7 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-purple-400/50">

        <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-purple-500/15 text-2xl text-purple-300 transition group-hover:bg-purple-500/25">
          💻
        </div>

        
        <div className="relative border-l border-purple-500/30 pl-5">

          <div className="absolute -left-[6px] top-1 h-3 w-3 rounded-full bg-blue-400 shadow-lg shadow-blue-400/50"></div>

          <h3 className="text-base font-bold text-white">
            Web Development
          </h3>

          <p className="mt-2 text-xs text-gray-400">
            Practical projects and technical learning.
          </p>

          <p className="mt-2 text-xs text-gray-400">
            Building skills through hands-on practice.
          </p>
          <p className="mt-2 text-xs text-gray-400">
            Currently doing my course Full Stack Web Development at [JClick Solutions]</p>

        </div>

      </div>

    </div>
  </div>
</section>
  )
}

export default Education;