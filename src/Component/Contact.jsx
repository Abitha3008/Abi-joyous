import React from 'react'

function Contact() {
  return (
    <>
<section
  id="contact"
  className="relative scroll-mt-24 overflow-hidden bg-[#03040e] px-6 py-24"
>
  {/* Background Glow */}
  <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-blue-700/10 blur-[120px]"></div>
  <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-purple-700/10 blur-[120px]"></div>

  <div className="relative z-10 mx-auto max-w-3xl text-center">

    <p className="mb-4 text-xs font-bold uppercase tracking-[5px] text-blue-400">
      LET'S CONNECT
    </p>

    <h2 className="text-3xl font-extrabold text-white sm:text-4xl md:text-5xl">
      Let's Build Something{" "}
      <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
        Amazing
      </span>
    </h2>

    <p className="mt-5 text-sm leading-7 text-gray-400">
      Have a project or an idea? I'd love to hear from you.
      Let's create something amazing together!
    </p>

    {/* Say Hello Button */}
    <a
      href="https://wa.me/6383985967"
      className="mt-8 inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-purple-500/20 transition duration-300 hover:-translate-y-1 hover:shadow-blue-500/30"
    >
      Say Hello
      <span>↗</span>
    </a>

    {/* SOCIAL LINKS */}
    <div className="mt-12 flex flex-wrap justify-center gap-4">

      {/* GitHub */}
      <a
        href="https://github.com/Abi3008"
        target="_blank"
        rel="noreferrer"
        className="group flex items-center gap-2 rounded-full border border-purple-500/20 bg-[#100b27] px-5 py-3 text-sm text-gray-300 transition duration-300 hover:-translate-y-1 hover:border-purple-400 hover:text-white"
      >
        <span className="text-lg">⌘</span>
        GitHub ↗
      </a>

      {/* Email */}
      <a
        href="mailto:abithajeganathan3008@gmail.com"
        className="group flex items-center gap-2 rounded-full border border-purple-500/20 bg-[#100b27] px-5 py-3 text-sm text-gray-300 transition duration-300 hover:-translate-y-1 hover:border-purple-400 hover:text-white"
      >
        <span className="text-lg">✉</span>
        Email ↗
      </a>

      {/* LinkedIn */}
      <a
        href="https://www.linkedin.com/in/Abitha"
        target="_blank"
        rel="noreferrer"
        className="group flex items-center gap-2 rounded-full border border-purple-500/20 bg-[#100b27] px-5 py-3 text-sm text-gray-300 transition duration-300 hover:-translate-y-1 hover:border-purple-400 hover:text-white"
      >
        <span className="text-lg font-bold">in</span>
        LinkedIn ↗
      </a>

    </div>

  </div>
</section>


{/* FOOTER */}
<footer className="border-t border-purple-500/10 bg-[#03040e] px-6 py-8">

  <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 md:flex-row">

    {/* Logo */}
    <a href="#home" className="text-2xl font-extrabold text-white">
      abitha<span className="text-purple-400">.</span>
    </a>

    {/* Copyright */}
    <p className="text-center text-xs text-gray-500">
      © 2026 Abitha. All Rights Reserved.
    </p>

    {/* Back to top */}
    <a
      href="#home"
      className="flex items-center gap-2 text-sm font-semibold text-purple-400 transition hover:text-blue-400"
    >
      Back to Top ↑
    </a>

  </div>

</footer>

</>
  )
}

export default Contact