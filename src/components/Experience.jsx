import { useState } from "react";

const ExperienceCard = ({ go }) => {
  const [activeTab, setActiveTab] = useState("full");

  const fullTime = [
    {
      role: "IT SUPPORT & FILLING OFFICER",
      company: "DLA PIPER AFRICA · OLAJIDE OYEWOLE LLP",
      date: "📍 LAGOS, NIGERIA | APR 2024 – PRESENT",
      bullets: [
        "Resolved IT issues with strong troubleshooting skills, minimising downtime",
        "Maintained accuracy in updating, archiving & retrieving digital records",
        "Ensured secure, well-organised digital file systems for team collaboration",
      ],
    },
    {
      role: "IT SUPPORT OFFICER",
      company: "HD NETWORKS",
      date: "📍 LAGOS, NIGERIA | NOV 2022 – JUN 2023",
      bullets: [
        "Responded to customer inquiries via Skype and email professionally",
        "Troubleshot technical issues & maintained ticket records",
      ],
    },
    {
      role: "PRODUCT MANAGER",
      company: "BLACKCOPPER",
      date: "📍 LAGOS, NIGERIA | MAY 2022 – JUL 2022",
      bullets: [
        "Conducted user research & generated user stories",
        "Managed product roadmap with incremental improvements",
        "Created & tracked performance metrics across multiple products",
      ],
    },
    {
      role: "SOFTWARE DEVELOPER",
      company: "SRMS",
      date: "📍 LAGOS, NIGERIA | APR 2021 – MAY 2022",
      bullets: [
        "Developed features using JavaScript, HTML5, CSS3 & CodeIgniter",
        "Refactored code to maintain standards & reduce errors",
        "Stack: HTML · CSS · JS · Bootstrap · PHP · CodeIgniter",
      ],
    },
  ];

  const internships = [
    {
      role: "SOFTWARE ENGINEER INTERN",
      company: "INDEX EXCHANGE INC",
      date: "📍 TORONTO, CANADA | JAN 2016 – APR 2016",
      bullets: [
        "Built a BigData app showcasing HeaderTag statistics",
        "Created a RESTful API; worked with Apache Cassandra & Storm",
        "Full stack: Node JS, Angular JS",
      ],
    },
    {
      role: "SOFTWARE DEVELOPER INTERN",
      company: "TARGET DIRECTORIES CORP",
      date: "📍 TORONTO, CANADA | MAY 2015 – AUG 2015",
      bullets: [
        "Led development of a support & learning portal",
        "Built RESTful API for frequent data exchange",
        "Optimised frontend UX & backend infrastructure",
      ],
    },
    {
      role: "SENIOR APPLICATIONS DEVELOPER",
      company: "THESTEELEGROUP",
      date: "📍 CAMBRIDGE, CANADA | SEP 2014 – DEC 2014",
      bullets: [
        "Full stack development of e-learning & media portal",
        "MVC architecture using PHP Slim Framework",
        "Backend services for tracking & reporting",
      ],
    },
    {
      role: "FRONT END WEB DEVELOPER",
      company: "FORA INC",
      date: "📍 KITCHENER, CANADA | JAN 2014 – APR 2014",
      bullets: [
        "Profiled, tested, debugged & fixed reported issues",
        "Developed a custom toolbar promoting engagement",
      ],
    },
  ];

  const data = activeTab === "full" ? fullTime : internships;

  return (
    <div className="min-h-screen bg-bgDark text-white font-arcade">

      {/* HEADER SECTION */}
      <div className="w-full flex items-center gap-4 border-b border-gray-700 p-4">
        <button
          onClick={() => go("title")}
          className="border border-gray-600 px-3 py-2 text-[6px] text-gray-500 hover:text-neonCyan hover:border-neonCyan transition-all"
        >
          ◀ BACK
        </button>
        <h2 className="text-neonYellow text-sm md:text-sm">
          👾 EXPERIENCE LOG
        </h2>
      </div>

      {/* TABS (Aligned with the cards below) */}
      <div className="w-full px-4 md:px-6 mt-4 flex gap-4">
        <button
          onClick={() => setActiveTab("full")}
          className={`px-4 py-2 text-xs border transition-all ${
            activeTab === "full"
              ? "border-neonYellow text-neonYellow shadow-[0_0_8px_#f8ff00]"
              : "border-gray-600 text-[6px] text-gray-400 hover:text-neonYellow"
          }`}
        >
          FULL-TIME
        </button>

        <button
          onClick={() => setActiveTab("intern")}
          className={`px-4 py-2 text-xs border transition-all ${
            activeTab === "intern"
              ? "border-neonCyan text-neonCyan shadow-[0_0_8px_#31fff3]"
              : "border-gray-600 text-[6px] text-gray-400 hover:text-neonCyan"
          }`}
        >
          INTERNSHIPS
        </button>
      </div>

      {/* EXPERIENCE LISTING AREA - Stretching to edges */}
      <div className="w-full p-4 md:p-6 space-y-4">
        {data.map((job, index) => (
          <div
            key={index}
            /* Use flex and justify-between to push icons to the far right */
            className="w-full flex justify-between items-start border-l-4 border-neonYellow bg-[#12121e]/40 p-6 shadow-inner"
          >
            {/* LEFT SIDE: Content */}
            <div className="flex-1">
              <h3 className="text-[10px] text-neonYellow uppercase tracking-tight font-bold">
                {job.role}
              </h3>
              
              <p className="text-[10px] text-neonCyan mt-1 font-semibold">
                {job.company}
              </p>
              
              <p className="text-[7px] text-gray-500 mt-1 mb-4 uppercase">
                {job.date}
              </p>

              <ul className="text-[7px] text-gray-200 space-y-1">
                {job.bullets.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-green-400 mr-2 mt-[2px] text-[7px]">▶</span>
                    <span className="max-w-4xl">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default ExperienceCard;