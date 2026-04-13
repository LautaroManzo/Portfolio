const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="w-full border-t border-white/8 mt-8">
      <div className="px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-2">
        <p className="text-sm text-muted/70 font-mono">
          © {currentYear} <span className="text-primary">Lautaro Manzo</span>
        </p>
        <p className="text-sm text-muted/50">
          lau_manzo12@hotmail.com
        </p>
      </div>
    </footer>
  );
};

export default Footer;
