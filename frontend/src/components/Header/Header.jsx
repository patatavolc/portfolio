import { useState } from "react";

export default function Header() {
  const [activeLink, setActiveLink] = useState("home");

  return (
    <header className="w-full bg-transparent">
      <div className="flex justify-between border border-gray-300 bg-black/30 backdrop-blur-md px-4 md:px-20 py-3 md:py-4 mx-4 my-6 md:m-10 text-center rounded-lg md:rounded-full">
        <div>
          <a
            href="#home"
            onClick={() => setActiveLink("home")}
            className="cursor-pointer"
          >
            <p className="text-xl md:text-3xl font-bold text-transparent bg-clip-text bg-linear-to-r from-[#FAD4D8] to-[#FC440F]">
              Eder Moros
            </p>
          </a>
        </div>
        <div>
          <nav className="text-white text-lg md:text-2xl font-bold flex gap-2 md:gap-3 flex-wrap items-center">
            <a
              className="group px-1 py-2 text-xs md:text-sm font-medium"
              href="#home"
              onClick={() => setActiveLink("home")}
            >
              <span
                className={`relative inline-block transition-colors duration-300 font-semibold ${
                  activeLink === "home"
                    ? "text-transparent bg-clip-text bg-linear-to-r from-[#FAD4D8] to-[#FC440F]"
                    : "text-white"
                }`}
              >
                Home
                <span
                  className="absolute left-0 top-full translate-y-1 w-full h-0.5 bg-linear-to-r from-[#fad4d8] to-[#fc440f] transform origin-left transition-transform duration-300 scale-x-0 group-hover:scale-x-100"
                  aria-hidden="true"
                ></span>
              </span>
            </a>

            <a
              className="group px-1 py-2 text-xs md:text-sm font-medium"
              href="#about"
              onClick={() => setActiveLink("about")}
            >
              <span
                className={`relative inline-block transition-colors duration-300 font-semibold ${
                  activeLink === "about"
                    ? "text-transparent bg-clip-text bg-linear-to-r from-[#FAD4D8] to-[#FC440F]"
                    : "text-white"
                }`}
              >
                About
                <span
                  className="absolute left-0 top-full translate-y-1 w-full h-0.5 bg-linear-to-r from-[#fad4d8] to-[#fc440f] transform origin-left transition-transform duration-300 scale-x-0 group-hover:scale-x-100"
                  aria-hidden="true"
                ></span>
              </span>
            </a>

            <a
              className="group px-1 py-2 text-xs md:text-sm font-medium"
              href="#portfolio"
              onClick={() => setActiveLink("portfolio")}
            >
              <span
                className={`relative inline-block transition-colors duration-300 font-semibold ${
                  activeLink === "portfolio"
                    ? "text-transparent bg-clip-text bg-linear-to-r from-[#FAD4D8] to-[#FC440F]"
                    : "text-white"
                }`}
              >
                Portfolio
                <span
                  className="absolute left-0 top-full translate-y-1 w-full h-0.5 bg-linear-to-r from-[#fad4d8] to-[#fc440f] transform origin-left transition-transform duration-300 scale-x-0 group-hover:scale-x-100"
                  aria-hidden="true"
                ></span>
              </span>
            </a>

            <a
              className="group px-1 py-2 text-xs md:text-sm font-medium"
              href="#contact"
              onClick={() => setActiveLink("contact")}
            >
              <span
                className={`relative inline-block transition-colors duration-300 font-semibold ${
                  activeLink === "contact"
                    ? "text-transparent bg-clip-text bg-linear-to-r from-[#FAD4D8] to-[#FC440F]"
                    : "text-white"
                }`}
              >
                Contact
                <span
                  className="absolute left-0 top-full translate-y-1 w-full h-0.5 bg-linear-to-r from-[#fad4d8] to-[#fc440f] transform origin-left transition-transform duration-300 scale-x-0 group-hover:scale-x-100"
                  aria-hidden="true"
                ></span>
              </span>
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
