import "./App.css";
import Header from "./components/Header/Header.jsx";
import DotGrid from "./components/DotGrid/DotGrid.jsx";

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
      <main className="flex flex-col items-center justify-center h-[200vh]">
        <h1 className="text-white text-4xl font-bold">Contenido encima</h1>
      </main>
    </div>
  );
}


