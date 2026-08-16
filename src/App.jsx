import { MotionConfig } from "framer-motion";

import Nav from "./components/Nav";
import Principal from "./components/Principal";
import LineTime from "./components/LineTime";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

import BackToTop from "./components/Others/BackToTop";

import "./index.css";

function App() {
  return (
    // reducedMotion="user": si el visitante tiene activado "reducir movimiento"
    // en su SO, Framer Motion desactiva las animaciones de transform (los
    // fade+translate de whileInView/animate en cada sección) y deja solo el
    // fade de opacidad, sin necesidad de repetir el chequeo en cada componente.
    <MotionConfig reducedMotion="user">
      <div className="relative min-h-screen bg-paper">
        {/* Una sola capa de textura para toda la página: por sección, el grano
            se superponía en cada junta y la grilla de puntos reiniciaba su fase. */}
        <div className="paper-grain" />
        <div className="paper-dots" />

        <Nav />

        <main>
          <Principal />
          <LineTime />
          <Projects />
          <Contact />
        </main>

        <BackToTop />
      </div>
    </MotionConfig>
  );
}

export default App;
