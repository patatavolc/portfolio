import "./App.css";
import Header from "./components/Header/Header.jsx";
import DotGrid from "./components/DotGrid/DotGrid.jsx";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop.jsx";
import TextType from "./components/TextType/TextType.jsx";
import Buttons from "./components/Buttons/Buttons.jsx";

export default function App() {
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
      <section className="relative z-10 flex flex-col justify-center text-white overflow-hidden mt-50">
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
          <Buttons />
        </div>
      </section>

      {/* Botón de volver arriba */}
      <ScrollToTop />
    </div>
  );
}
