function ScoreBar({ score }) {
  return (
      <div className="flex justify-between items-center px-6 py-2 border-b border-yellow-400 text-[10px]">
        <div className="text-yellow-400">
          1UP <span className="text-yellow-300">{String(score).padStart(5, "0")}</span>
        </div>

        <div className="text-cyan-400 tracking-widest">
          TITO EGEONU
        </div>

        <div className="text-pink-400 flex gap-1 text-[10px]">
          ♥ ♥ ♥
        </div>
      </div>
  );
}

export default ScoreBar;