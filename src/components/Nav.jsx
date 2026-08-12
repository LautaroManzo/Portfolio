const LINKS = [
  { id: "trayectoria", label: "Trayectoria" },
  { id: "proyectos", label: "Proyectos" },
  { id: "contacto", label: "Contacto" },
];

const Nav = () => (
  // Alto fijo: el hero mide 100vh menos este alto, de modo que cada sección
  // siguiente arranca en un múltiplo exacto de 100vh.
  <nav className="relative w-full h-16 md:h-20">
    <div className="max-w-[1240px] xl:max-w-[1400px] 2xl:max-w-[1560px] mx-auto h-full flex items-center justify-center px-5 md:px-16 xl:px-20">
      <div className="flex gap-5 md:gap-11 font-mono text-[13px] md:text-base tracking-[0.03em] font-medium">
        {LINKS.map((link) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            className="no-underline text-ink-soft transition-colors duration-300 hover:text-accent"
          >
            {link.label}
          </a>
        ))}
      </div>
    </div>
  </nav>
);

export default Nav;
