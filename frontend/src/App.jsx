import "./App.css";
import Header from "./components/Header/Header.jsx";
import DotGrid from "./components/DotGrid/DotGrid.jsx";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop.jsx";
import TextType from "./components/TextType/TextType.jsx";
import Button from "./components/Button/Button.jsx";

export default function App() {
  const cv_path =
    "https://drive.google.com/file/d/1JK-HAtxQFx-RWY4-MckOc6Lx2Q1kkUXA/view?usp=sharing";

  return (
    <div className="relative min-h-screen">
      {/* Fondo global */}
      <div className="fixed inset-0 -z-10">
        <DotGrid
          dotSize={10}
          gap={15}
          baseColor="#271e37"
          activeColor="#84dcc6"
          proximity={120}
          shockRadius={250}
          shockStrength={5}
          resistance={750}
          returnDuration={1.5}
        />
      </div>

      {/* Contenido */}
      <Header />
      <section className="relative z-10 flex flex-col justify-center text-white overflow-hidden mt-50 mb-50">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
            <span className="block text-white">Full Stack</span>
            <span className="block bg-linear-to-r from-[#FAD4D8] to-[#FC440F] bg-clip-text text-transparent">
              Developer
            </span>
          </h1>

          <div className="text-lg">
            <TextType
              text={[
                "Tech enthusiast",
                "Web development student",
                "Ready to innovate!",
              ]}
              typingSpeed={75}
              pauseDuration={1500}
              showCursor={true}
              cursorCharacter="|"
            />
          </div>

          <p className="mt-6 text-lg text-gray-400 max-w-l">
            Enhancing digital experiences that are smooth, scalable, and made to
            impress.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Button text="Projects" href="#projects" />
            <Button text="Contact" href="#contact" />
          </div>
        </div>
      </section>

      <section className=" relative z-10 flex flex-col justify-center text-white overflow-hidden mt-85">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className=" text-3xl md:text-5xl font-extrabold leading-tight">
            <span className="block bg-linear-to-r from-[#fad4d8] to-[#fc440f] bg-clip-text text-transparent">
              About Me
            </span>
          </h1>

          <p id="about" className="mt-5 text-lg text-gray-400 max-w-l mb-5">
            Hello, I'm Eder Moros, a passionate about building smart and
            scalable web applications. I'm currently studying a Higher
            Vocational Degree in Web Application Development and teaching myself
            varius technologies. I plan to transition into the AI and data
            science industry around 2027.
          </p>
          <div className="flex justify-center">
            <Button text="Ver CV" href={cv_path} external />
          </div>
        </div>
      </section>
      {/* Botón de volver arriba */}
      <ScrollToTop />
    </div>
  );
}
