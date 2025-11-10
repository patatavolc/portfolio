
export default function Header() {
  return(
    <header className="w-full  flex justify-between border-2 border-red-700">
      <div>
        <p className="text-white text-3xl font-bold">Eder Moros</p>
      </div>
      <div>
        <nav className="text-white text-2xl font-bold flex gap-1.5">
          <a>Home</a>
          <a>About</a>
          <a>Portfolio</a>
          <a>Contact</a>
        </nav>
      </div>
    </header>
  )
}