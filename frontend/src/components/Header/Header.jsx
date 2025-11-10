export default function Header() {
  return (
    <header className="w-full bg-transparent">
      <div className="flex justify-between border border-gray-300 rounded-full bg-black/30 backdrop-blur-md 
        pr-20 pl-20 pt-4 pb-4 mt-10 ml-10 mr-10 text-center">
        <div>
          <p className=" text-3xl font-bold text-transparent bg-clip-text bg-linear-to-r from-[#FAD4D8] to-[#FC440F]">
            Eder Moros
          </p>
        </div>
        <div>
          <nav className="text-white text-2xl font-bold flex gap-2 ">
            <a className="group-hover:text-red-400 hover:text-red-400">Home</a>
            <a className="group-hover:text-red-400 hover:text-red-400">About</a>
            <a className="group-hover:text-red-400 hover:text-red-400">
              Portfolio
            </a>
            <a className="group-hover:text-red-400 hover:text-red-400">
              Contact
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
