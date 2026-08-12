import Nav from "./components/Nav";
import Principal from "./components/Principal";
import LineTime from "./components/LineTime";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

import BackToTop from "./components/Others/BackToTop";

import "./index.css";

function App() {
  return (
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
  );
}

export default App;
