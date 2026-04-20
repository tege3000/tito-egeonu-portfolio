function TitleScreen({ go, score = 2450 }) {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white font-arcade relative overflow-hidden">

      {/* ===== SCANLINES ===== */}
      <div className="absolute inset-0 pointer-events-none opacity-10 
        bg-[repeating-linear-gradient(0deg,transparent,transparent_3px,rgba(255,255,255,0.03)_3px,rgba(255,255,255,0.03)_4px)]">
      </div>

      {/* ===== CENTER ===== */}
      <div className="flex flex-col items-center justify-center mt-16 text-center">

        {/* TITLE */}
        <h1 className="text-yellow-300 text-[18px] tracking-[3px] mb-1">
          TITO EGEONU
        </h1>

        <p className="text-cyan-400 text-[9px] tracking-widest">
          FULL STACK DEVELOPER
        </p>

        <p className="text-gray-500 text-[7px] tracking-widest mb-8">
          LAGOS, NIGERIA
        </p>

        {/* ===== PACMAN ROW ===== */}
        <div className="flex items-center gap-2 mb-10">

          <div className="w-2 h-2 bg-yellow-300 rounded-full"></div>

          {[...Array(3)].map((_, i) => (
            <div key={i} className="w-1 h-1 bg-yellow-300 opacity-70 rounded-full"></div>
          ))}

          {/* Pacman */}
          <div className="text-yellow-300 text-sm">◀</div>

          {[...Array(3)].map((_, i) => (
            <div key={i} className="w-1 h-1 bg-yellow-300 opacity-70 rounded-full"></div>
          ))}

          {/* Ghosts */}
          <div className="flex gap-2 ml-3">
            <div className="w-3 h-3 bg-pink-400 rounded-t-full"></div>
            <div className="w-3 h-3 bg-cyan-400 rounded-t-full"></div>
            <div className="w-3 h-3 bg-green-400 rounded-t-full"></div>
          </div>

        </div>

        {/* ===== MENU ===== */}
        <div className="grid grid-cols-2 gap-4 w-[460px]">

          <button
            onClick={() => go("skills")}
            className="border border-indigo-500 bg-[#12121e] py-6 rounded text-[10px] 
              hover:border-yellow-400 hover:text-yellow-300 transition-all duration-150"
          >
            <div className="mb-2 text-sm">⚡</div>
            <div className="text-indigo-500 py-1">SKILLS</div>
          </button>

          <button
            onClick={() => go("experience")}
            className="border border-indigo-500 bg-[#12121e] py-6 rounded text-[10px] 
              hover:border-cyan-400 hover:text-cyan-300 transition-all"
          >
            <div className="mb-2 text-sm">🗺</div>
            <div className="text-indigo-500 py-1">CAREER MAP</div>
          </button>

          <button
            onClick={() => go("education")}
            className="border border-indigo-500 bg-[#12121e] py-6 rounded text-[10px] 
              hover:border-pink-400 hover:text-pink-300 transition-all"
          >
            <div className="mb-2 text-sm">🏛</div>
            <div className="text-indigo-500 py-1">EDUCATION</div>
          </button>

          <button
            onClick={() => go("contact")}
            className="border border-indigo-500 bg-[#12121e] py-6 rounded text-[10px] 
              hover:border-green-400 hover:text-green-300 transition-all"
          >
            <div className="mb-2 text-sm">📡</div>
            <div className="text-indigo-500 py-1">CONTACT</div>
          </button>

          <button
            onClick={() => go("projects")}
            className="col-span-2 border-2 bg-[#12121e] border-neonGreen text-neonGreen text-[10px] p-6 rounded hover:bg-neonGreen/10 transition"
          >
            🗂
            <div className="mt-2 py-1">PROJECTS</div>
          </button>

        </div>

        {/* ===== FOOTER TEXT ===== */}
        <p className="mt-10 text-pink-400 text-[9px] tracking-widest animate-pulse">
          — SELECT STAGE —
        </p>

        {/* ===== BOTTOM GHOSTS ===== */}
        <div className="flex gap-4 mt-4">
          <div className="w-4 h-4 bg-pink-400 rounded-t-full"></div>
          <div className="w-4 h-4 bg-cyan-400 rounded-t-full"></div>
          <div className="w-4 h-4 bg-green-400 rounded-t-full"></div>
          <div className="w-4 h-4 bg-purple-400 rounded-t-full"></div>
        </div>

      </div>
    </div>
  );
}

export default TitleScreen;