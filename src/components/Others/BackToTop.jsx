import { FiArrowUp } from "react-icons/fi";
import { useScrollY } from "../../hooks/useScrollY";

const BackToTop = () => {
  const scrollY = useScrollY();
  if (scrollY <= 700) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Volver arriba"
      className="fixed right-4 bottom-4 md:right-8 md:bottom-8 z-50 w-10 h-10 md:w-[50px] md:h-[50px] rounded-full border border-line-strong bg-ink text-paper flex items-center justify-center cursor-pointer shadow-[0_12px_28px_-14px_oklch(30%_0.03_60/0.5)] transition-colors duration-300 hover:bg-ink-2"
    >
      <FiArrowUp size={16} className="md:hidden" />
      <FiArrowUp size={20} className="hidden md:block" />
    </button>
  );
};

export default BackToTop;
