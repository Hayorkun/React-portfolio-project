import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

// ── variants ────────────────────────────────────────────────────────────────
const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const columnVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

const socialVariants = {
  hidden: { opacity: 0, scale: 0.7 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.35, delay: 0.4 + i * 0.07, type: "spring", stiffness: 260, damping: 18 },
  }),
};

const linkHover = {
  whileHover: { x: 4, color: "#fb923c", transition: { duration: 0.18 } },
};

const socials = ["GH", "LI", "X", "✉️"];

const pages = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/skills", label: "Skills" },
  { to: "/contact", label: "Contact" },
];

const projects = [
  { to: "/projects", label: "Portfolio" },
  { to: "/projects", label: "Briefly" },
  { to: "/projects", label: "Todo App" },
];

const connects = [
  { href: "https://github.com/Hayorkun", label: "GitHub" },
  { href: "https://www.linkedin.com/in/ayomide-yerokun-1a0394388", label: "LinkedIn" },
  { href: "https://x.com/ayomicode?s=21", label: "X" },
];

// ── component ────────────────────────────────────────────────────────────────
const Footer = () => {
  return (
    <motion.section
      className="px-5 py-10 md:py-15 border-t border-orange-300/50 flex justify-center"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
    >
      <div className="my-max-width px-5 py-5 md:px-10 md:py-10 w-full">
        <motion.div
          className="items-top md:flex justify-around mb-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >

          {/* ── Brand block ── */}
          <motion.div
            custom={0}
            variants={columnVariants}
            className="flex flex-col justify-center md:flex-1"
          >
            <div className="self-center md:block">
              <motion.h2
                className="flex justify-center md:block text-4xl text-orange-400 font-serif font-bold mb-5"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.55, delay: 0.1 }}
                viewport={{ once: true }}
              >
                AyomiCode
              </motion.h2>

              <motion.p
                variants={fadeUp}
                className="text-center text-wrap md:text-start text-base text-gray-400 w-xs md:w-md mb-3"
              >
                Frontend developer crafting fast, beautiful, and accessible web
                experiences with React and modern CSS.
              </motion.p>

              <div className="flex flex-col md:block">
                {/* Availability badge */}
                <motion.div
                  className="flex items-center self-center gap-1 bg-orange-400 border border-orange-600 text-white rounded-xl p-1 text-xs w-fit mb-3"
                  initial={{ opacity: 0, scale: 0.85 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.35, type: "spring", stiffness: 220 }}
                  viewport={{ once: true }}
                >
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400/60 opacity-90"></span>
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400"></span>
                  </span>
                  Available for work
                </motion.div>

                {/* Social icons */}
                <div className="w-48 flex justify-between self-center p-1">
                  {socials.map((s, i) => (
                    <motion.span
                      key={s}
                      custom={i}
                      variants={socialVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.2, rotate: 6, transition: { duration: 0.18 } }}
                      whileTap={{ scale: 0.9 }}
                      className="border border-orange-300/40 rounded-lg p-1 cursor-pointer"
                    >
                      {s}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* ── Nav columns ── */}
          <div className="flex md:flex-row md:justify-around mt-3 md:mt-0">

            {/* PAGES */}
            <motion.div
              custom={1}
              variants={columnVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-col gap-1"
            >
              <h2 className="mb-2 text-orange-300 font-bold">PAGES</h2>
              <div className="flex flex-col self-center md:self-start gap-1">
                {pages.map((p) => (
                  <motion.div key={p.to} {...linkHover}>
                    <NavLink to={p.to}>{p.label}</NavLink>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* PROJECTS */}
            <motion.div
              custom={2}
              variants={columnVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-col gap-1"
            >
              <h2 className="mb-2 text-orange-300 font-bold">PROJECTS</h2>
              <div className="flex flex-col self-center md:self-start gap-1">
                {projects.map((l) => (
                  <motion.div key={l.to} {...linkHover}>
                    <NavLink to={l.to}>{l.label}</NavLink>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* CONNECTS */}
            <motion.div
              custom={3}
              variants={columnVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-col gap-1"
            >
              <h2 className="mb-2 text-orange-300 font-bold">CONNECTS</h2>
              <div className="flex flex-col self-center md:self-start gap-1">
                {connects.map((c) => (
                  <motion.a
                    key={c.label}
                    href={c.href}
                    {...linkHover}
                  >
                    {c.label}
                  </motion.a>
                ))}
              </div>
            </motion.div>

          </div>
        </motion.div>

        {/* ── Bottom bar ── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-xs text-center">
            &copy; 2026 Ayomide Yerokun. All rights reserved
          </p>
          <p className="text-xs text-center mt-1">
            Built with <span className="text-orange-400">REACT</span>~
            <span className="text-orange-400">TAILWIND CSS</span> 🧡
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Footer;