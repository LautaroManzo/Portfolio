import { motion } from "framer-motion";

const SectionHeader = ({ kicker, title, align = "center" }) => (
  <motion.div
    className={`relative max-w-[760px] xl:max-w-[900px] ${align === "center" ? "mx-auto text-center" : "text-left"}`}
    initial={{ opacity: 0, y: 14 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.4 }}
    transition={{ duration: 0.55, ease: "easeOut" }}
  >
    <div className="font-mono text-[13px] tracking-[0.24em] font-medium text-accent mb-4">
      {kicker}
    </div>
    <h2 className="font-display text-[30px] md:text-[56px] xl:text-[62px] leading-[1.08] font-semibold text-ink m-0">
      {title}
    </h2>
  </motion.div>
);

export default SectionHeader;
