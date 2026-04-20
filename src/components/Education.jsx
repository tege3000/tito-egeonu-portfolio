function Education({ go }) {
  return (
    <div className="p-6">

      {/* HEADER */}
      <div className="flex items-center gap-4 mb-6 border-b border-gray-700 pb-4">
        <button
          onClick={() => go("title")}
          className="border border-gray-600 px-3 py-2 text-[6px] text-gray-500 hover:text-neonCyan hover:border-neonCyan"
        >
          ◀ BACK
        </button>
        <h2 className="text-neonYellow text-sm md:text-sm">
          🏛 EDUCATION
        </h2>
      </div>

      {/* Degree Card */}
      <div className="border border-neonPink p-6 text-center mb-6">

        <div className="text-2xl mb-3">🏫</div>

        <h3 className="text-neonPink text-[10px] mb-2">
          BSC · COMPUTER SCIENCE
        </h3>

        <p className="text-neonYellow text-[10px] mb-1">
          BABCOCK UNIVERSITY
        </p>

        <p className="text-gray-500 text-[7px]">
          OGUN, NIGERIA · 2017 – 2020
        </p>

      </div>

      {/* Certificates */}
      <p className="text-neonYellow text-[10px] mb-4">
        // CERTIFICATES UNLOCKED
      </p>

      <div className="grid md:grid-cols-2 gap-4">

        <div className="border border-neonCyan p-4 text-center">
          <div className="text-xl mb-2">🏆</div>
          <p className="text-neonCyan text-[7px]">INTRO TO SQL</p>
          <p className="text-gray-400 text-[7px]">DATACAMP</p>
          <p className="text-neonGreen text-[7px]">APR 2025</p>
        </div>

        <div className="border border-neonCyan p-4 text-center">
          <div className="text-xl mb-2">🏆</div>
          <p className="text-neonCyan text-[7px]">INTERMEDIATE SQL</p>
          <p className="text-gray-400 text-[7px]">DATACAMP</p>
          <p className="text-neonGreen text-[7px]">APR 2025</p>
        </div>

      </div>
    </div>
  );
}

export default Education;