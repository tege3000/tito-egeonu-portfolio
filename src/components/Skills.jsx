import React from "react";

const SkillsScreen = ({ go }) => {
  const skills = {
    hard: [
      "DEBUGGING",
      "TESTING",
      "BASH CLI",
      "TROUBLESHOOTING",
      "CROSS-BROWSER DEV",
    ],
    languages: [
      "HTML",
      "CSS",
      "JAVASCRIPT",
      "REACT JS",
      "SQL",
      "NODE JS",
      "MONGODB",
      "POSTMAN",
      "GIT",
    ],
    tech: ["WEB DEV", "AGILE", "RESPONSIVE DESIGN"],
  };

  return (
    <div className="min-h-screen bg-bgDark text-white font-arcade p-6">

      {/* HEADER */}
      <div className="flex items-center gap-4 mb-6 border-b border-gray-700 pb-4">
        <button
          onClick={() => go("title")}
          className="border border-gray-600 px-3 py-2 text-[6px] text-gray-500 hover:text-neonCyan hover:border-neonCyan"
        >
          ◀ BACK
        </button>
        <h2 className="text-neonYellow text-sm md:text-sm">
          ⚡ SKILL BOARD
        </h2>
      </div>

      {/* PACMAN DECOR */}
      <div className="flex items-center mx-auto w-64 gap-2 mb-6">
        <div className="w-3 h-3 bg-neonYellow rounded-full"></div>
        <div className="w-1 h-1 bg-neonYellow rounded-full"></div>
        <div className="w-1 h-1 bg-neonYellow rounded-full"></div>

        <div className="w-5 h-5 bg-neonYellow rounded-full relative">
          <div className="absolute inset-0 bg-bgDark clip-triangle"></div>
        </div>

        <div className="w-1 h-1 bg-neonYellow rounded-full"></div>
        <div className="w-1 h-1 bg-neonYellow rounded-full"></div>
        <div className="w-3 h-3 bg-neonYellow rounded-full"></div>
      </div>

      {/* SKILLS GRID */}
      <div className="grid md:grid-cols-3 gap-4">

        {/* HARD SKILLS */}
        <div className="border border-neonGreen p-4 bg-[#12121e]">
          <p className="text-neonGreen text-[8px] mb-4">// HARD SKILLS</p>
          <div className="flex flex-wrap gap-2">
            {skills.hard.map((skill, index) => (
              <span
                key={index}
                className="text-[7px] text-neonGreen border border-neonGreen px-2 py-1"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* LANGUAGES */}
        <div className="border border-neonCyan p-4 bg-[#12121e]">
          <p className="text-neonCyan text-[8px] mb-4">// LANGUAGES</p>
          <div className="flex flex-wrap gap-2">
            {skills.languages.map((skill, index) => (
              <span
                key={index}
                className="text-[7px] text-neonCyan border border-neonCyan px-2 py-1"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* TECHNIQUES */}
        <div className="border border-neonPink p-4 bg-[#12121e]">
          <p className="text-neonPink text-[8px] mb-4">// TECHNIQUES</p>
          <div className="flex flex-wrap gap-2">
            {skills.tech.map((skill, index) => (
              <span
                key={index}
                className="text-[7px] text-neonPink border border-neonPink px-2 py-1"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default SkillsScreen;