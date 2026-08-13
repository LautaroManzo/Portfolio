import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

const EMAIL = "lau_manzo12@hotmail.com";

// iconSize va por ícono y no es un valor único: cada set dibuja en un viewBox
// distinto y llena una fracción distinta de él, así que un mismo `size` da
// tintas de tamaños diferentes en pantalla. Estos valores igualan la tinta
// en ~18px (FaLinkedin llena el 87,5% de su caja; FaGithub, el 94,5%).
const LINKS = [
  {
    icon: FaGithub,
    iconSize: 19,
    label: "GitHub",
    handle: "github.com/LautaroManzo",
    href: "https://github.com/LautaroManzo",
  },
  {
    icon: FaLinkedin,
    iconSize: 21,
    label: "LinkedIn",
    handle: "in/lautaro-manzo",
    href: "https://www.linkedin.com/in/lautaro-manzo-57713a236/",
  },
];

const Contact = () => {
  return (
    <section
      id="contacto"
      // Más aire en mobile (py-14, gap-12 y márgenes internos más generosos)
      // que en desktop — se sentía apretado con los mismos números ajustados
      // de la columna angosta de escritorio.
      className="relative flex flex-col justify-center min-h-svh box-border border-t border-divider px-4 py-14 md:px-16 md:py-14 xl:px-20"
    >
      {/* Tinte de sección alterna: va sobre la textura de papel, debajo del
          contenido (que es relative y por eso pinta encima). */}
      <div className="absolute inset-0 bg-tint pointer-events-none" />

      {/* Sin overflow-y-auto: la cinta decorativa sobresale del borde y un
          contenedor con scroll la recortaría. */}
      {/* Columnas auto + justify-center: se achican al ancho de su contenido y
          quedan juntas en el medio, en vez de estirarse hacia los bordes. */}
      <div className="relative w-full mx-auto min-h-0 grid grid-cols-1 md:grid-cols-[auto_auto] gap-12 md:gap-14 xl:gap-16 items-center justify-center">

        <motion.div
          className="text-center md:text-left"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          <div className="font-mono text-[13px] tracking-[0.24em] font-medium text-accent mb-5 md:mb-4">
            CONTACTO
          </div>
          <h2 className="font-display text-[30px] md:text-[56px] xl:text-[62px] leading-[1.08] font-semibold text-ink m-0 mb-7 md:mb-6">
            Dónde encontrarme
          </h2>
          <p className="text-[15px] md:text-[19px] leading-[1.75] md:leading-[1.65] text-ink-soft max-w-[480px] xl:max-w-[540px] mx-auto md:mx-0 mb-11 md:mb-10">
            Si querés consultarme algo o simplemente escribirme
          </p>
          <a
            href={`mailto:${EMAIL}`}
            className="inline-flex items-center gap-3 bg-ink text-paper px-8 py-4 md:px-[38px] md:py-5 rounded-[4px] text-base md:text-[19px] font-semibold no-underline break-all transition-colors duration-300 hover:bg-ink-2"
          >
            {/* 22, no 20: FiMail solo llena el 83% de su viewBox de ancho. */}
            <FiMail size={22} className="shrink-0" />
            {EMAIL}
          </a>
        </motion.div>

        {/* Nota con cinta */}
        <motion.div
          className="relative md:rotate-2"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55, delay: 0.1, ease: "easeOut" }}
        >
          <div className="absolute -top-4 right-5 w-[90px] h-[30px] rotate-3 bg-tape shadow-[0_2px_4px_oklch(30%_0.03_60/0.15)] z-[2]" />
          <div className="bg-card-warm border border-line rounded-[4px] px-9 py-10 md:px-[46px] md:py-[42px] shadow-[0_24px_50px_-24px_oklch(30%_0.03_60/0.4)]">
            <div className="font-mono text-xs tracking-[0.06em] text-ink-muted mb-7 pb-5 md:mb-6 md:pb-[18px] border-b border-dashed border-line-strong">
              TAMBIÉN ESTOY EN
            </div>
            <div className="flex flex-col gap-7 md:gap-6">
              {LINKS.map(({ icon: Icon, iconSize, label, handle, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 no-underline p-2 -m-2 rounded-md transition-colors duration-200 hover:bg-chip"
                >
                  <Icon
                    size={iconSize}
                    className="shrink-0 text-ink-2 transition-colors duration-200 group-hover:text-accent"
                  />
                  <div>
                    <div className="text-[15px] font-semibold text-ink">{label}</div>
                    <div className="font-mono text-[12.5px] text-ink-muted">
                      {handle}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
