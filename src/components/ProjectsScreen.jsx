import React from "react";

const ProjectsScreen = ({ go }) => {
  const projects = [
    {
      name: "TITO-EGEONU PORTFOLIO",
      tech: "React · Tailwind",
      desc: "Retro arcade-style portfolio with gamified UI",
      link: "https://github.com/tege3000/tito-egeonu-portfolio",
    },
    {
      name: "Wise Chest",
      tech: "React",
      desc: "Expense Tracker for Africa",
      link: "https://github.com/tege3000/wise-chest",
    },
    {
      name: "Nearest Help",
      tech: "React",
      desc: "Local On-Demand Services Platform where users can find nearby help",
      link: "https://github.com/tege3000/nearest-help",
    },
    {
      name: "Shop IT",
      tech: "Mongo · Express · React · Node",
      desc: "Ecommerce system; API Endpoints to be tested with Postman",
      link: "https://github.com/tege3000/shopit",
    },
    {
      name: "Inventory Management System",
      tech: "Mongo · Express · React · Node",
      desc: "Role-based System with authentication and admin dashboard",
      link: "https://github.com/tege3000/manageit",
    },
  ];

  return (
    <div className="min-h-screen bg-bgDark text-white font-arcade">

      {/* HEADER */}
      <div className="w-full flex items-center gap-4 border-b border-gray-700 p-4">
        <button
          onClick={() => go("title")}
          className="border border-gray-600 px-3 py-2 text-[6px] text-gray-500 hover:text-neonCyan"
        >
          ◀ BACK
        </button>
        <h2 className="text-neonGreen text-sm md:text-sm">
          🗂 PROJECTS
        </h2>
      </div>

      {/* PROJECT LIST */}
      <div className="max-w-4xl mx-auto p-6 space-y-6">

        {projects.map((project, index) => (
          <div
            key={index}
            className="border border-neonGreen p-4 bg-[#12121e] hover:border-neonYellow transition"
          >
            <h3 className="text-neonYellow text-[10px] mb-2">
              {project.name}
            </h3>

            <p className="text-[10px] text-neonCyan mb-2">
              {project.tech}
            </p>

            <p className="text-[7px] text-gray-400 mb-3">
              {project.desc}
            </p>

            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="text-[7px] text-neonGreen hover:underline"
            >
              ▶ VIEW PROJECT
            </a>
          </div>
        ))}

      </div>
    </div>
  );
};

export default ProjectsScreen;