import Principal from "./components/Principal";
import LineTime from "./components/LineTime";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

import ParticlesBackground from "./components/Others/ParticlesBackground";

import "./index.css";

function App() {
  return (

    <div className="relative min-h-screen overflow-hidden">

      <ParticlesBackground />

      <div className="relative z-10">
        <Principal />
        <LineTime />
        <Projects />
        <Footer />
      </div>

    </div>

  );
}

export default App;