import "./App.css";
import DotGrid from "./components/DotGrid/DotGrid.jsx";
import Header from "./components/Header/Header.jsx";
function App() {
  return (
    <div className="relative w-full h-screen">
    <div className="relative z-10">
    <Header />
    </div>
      <div className="absolute inset-0 -z-10">
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

      <div className="relative z-10 flex flex-col items-center justify-center h-full">
        <h1 className="text-white text-4xl font-bold">Contenido encima</h1>
      </div>
    </div>
  );
}

export default App;
