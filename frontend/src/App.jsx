import "./App.css";
import DotGrid from "./components/DotGrid/DotGrid.jsx";

function App() {
  return (
    <div style={{ width: "100%", height: "600px", position: "relative", margin: 0, padding: 0, marginBlock:0}}>
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
  );
}

export default App;
