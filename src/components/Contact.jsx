function Contact({ go }) {

  const openLink = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div className="p-6 flex flex-col items-center">

      {/* HEADER */}
      <div className="w-full flex items-center gap-4 mb-6 border-b border-gray-700 pb-4">        <button
          onClick={() => go("title")}
          className="border border-gray-600 px-3 py-2 text-[6px] text-gray-500 hover:text-neonCyan hover:border-neonCyan"
        >
          ◀ BACK
        </button>
        <h2 className="text-neonYellow text-sm md:text-sm">
          📡 CONTACT
        </h2>
      </div>

      {/* Contact Cards */}
      <div className="w-full max-w-md flex flex-col gap-4">

        <div
          onClick={() => openLink("mailto:teetoegeonu@gmail.com")}
          className="flex gap-4 border border-gray-700 p-4 cursor-pointer hover:border-neonGreen hover:bg-green-900/10 transition"
        >
          <p>📧</p>
          <div>
            <p className="text-gray-400 text-[7px]">EMAIL</p>
            <p className="text-neonGreen text-[10px] break-all">
              teetoegeonu@gmail.com
            </p>
          </div>
        </div>

        <div
          onClick={() => openLink("tel:+23409079071492")}
          className="flex gap-4 border border-gray-700 p-4 cursor-pointer hover:border-neonGreen hover:bg-green-900/10"
        >
          <p>📞</p>
          <div>
            <p className="text-gray-400 text-[7px]">PHONE</p>
            <p className="text-neonGreen text-[10px]">
              +234 090 7907 1492
            </p>
          </div>
        </div>

        <div
          onClick={() => openLink("https://github.com/tege3000")}
          className="flex gap-4 border border-gray-700 p-4 cursor-pointer hover:border-neonGreen hover:bg-green-900/10"
        >
          <p>💾</p>
          <div>
            <p className="text-gray-400 text-[7px]">GITHUB</p>
            <p className="text-neonGreen text-[10px]">
              github.com/tege3000
            </p>
          </div>
        </div>

        <div
          onClick={() => openLink("https://linkedin.com/in/tito-egeonu")}
          className="flex gap-4 border border-gray-700 p-4 cursor-pointer hover:border-neonGreen hover:bg-green-900/10"
        >
          <p>🔗</p>
          <div>
            <p className="text-gray-400 text-[7px]">LINKEDIN</p>
            <p className="text-neonGreen text-[10px]">
              linkedin.com/in/tito-egeonu
            </p>
          </div> 
        </div>

      </div>
    </div>
  );
}

export default Contact;