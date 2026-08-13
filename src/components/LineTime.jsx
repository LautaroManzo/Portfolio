import { useState } from "react";
import { motion } from "framer-motion";
import { FiCalendar } from "react-icons/fi";

import SectionHeader from "./Others/SectionHeader";
import { timelineItems, timelineTabs } from "../data/timeline";

const LineTime = () => {
  const [activeTab, setActiveTab] = useState("job");
  const visible = timelineItems.filter((item) => item.cat === activeTab);

  return (
    <section
      id="trayectoria"
      className="relative flex flex-col justify-center min-h-svh box-border border-t border-divider px-4 py-12 md:px-16 md:py-12 xl:px-20"
    >
      {/* Tinte de sección alterna: va sobre la textura de papel, debajo del
          contenido (que es relative y por eso pinta encima). */}
      <div className="absolute inset-0 bg-tint pointer-events-none" />

      <div className="relative shrink-0 mb-8 md:mb-10">
        <SectionHeader kicker="TRAYECTORIA" title="Formación y experiencia" />
      </div>

      {/* Tabs */}
      <div className="relative shrink-0 max-w-[760px] xl:max-w-[900px] 2xl:max-w-[1000px] mx-auto mb-6 flex justify-center gap-2">
        {timelineTabs.map((tab) => {
          const isActive = activeTab === tab.key;
          return (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              aria-pressed={isActive}
              className={`font-mono text-[15px] tracking-[0.03em] px-6 py-[11px] rounded-full border cursor-pointer transition-colors duration-300 ${
                isActive
                  ? "bg-ink text-paper border-ink"
                  : "bg-transparent text-ink-muted border-[oklch(60%_0.02_60/0.3)] hover:text-accent hover:border-accent/40"
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Card con la línea de tiempo */}
      <div className="relative max-w-[760px] xl:max-w-[900px] 2xl:max-w-[1000px] w-full mx-auto bg-card border border-line rounded-lg px-[22px] py-7 md:px-12 md:py-10 shadow-[0_20px_50px_-28px_oklch(30%_0.03_60/0.4)]">
        {visible.map((item, i) => {
          const isLast = i === visible.length - 1;
          return (
            <motion.div
              key={`${activeTab}-${i}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.06, ease: "easeOut" }}
              className={`relative pl-[28px] ${isLast ? "pb-0" : "pb-[34px]"}`}
            >
              {/* La línea arranca en el centro del punto (y=16), no en el borde
                  superior del ítem: si no, asoman 4px de línea por encima. */}
              {!isLast && (
                <span className="absolute left-0 top-4 bottom-0 w-0.5 bg-line" />
              )}
              <span className="absolute -left-[4px] top-[11px] w-2.5 h-2.5 rounded-full bg-accent" />

              {/* Título y fecha en la misma línea: aprovecha el ancho libre
                  a la derecha del título y de paso ahorra una línea de alto
                  respecto de tenerlos apilados. */}
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 mb-1.5">
                <div className="font-display text-[21px] font-semibold text-ink">
                  {item.title}
                </div>
                <div className="inline-flex items-center gap-1.5 font-mono text-[13px] text-ink-muted whitespace-nowrap shrink-0">
                  <FiCalendar size={13} className="shrink-0" />
                  {item.time}
                </div>
              </div>

              <div className="font-mono text-[13px] text-ink-muted">
                {item.body}
              </div>

              {item.description && (
                // -mb-[5px] compensa el half-leading que deja el leading-1.6
                // debajo de la última línea, para que el hueco hasta el ítem
                // siguiente sea igual al de los ítems sin descripción.
                <p className="text-[15px] md:text-base leading-[1.6] text-ink-soft m-0 mt-3 -mb-[5px]">
                  {item.description}
                </p>
              )}
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default LineTime;
