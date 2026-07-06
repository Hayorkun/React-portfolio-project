
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const TECH = ["JavaScript","React","Node.js","TypeScript","Tailwind CSS","Git","Figma","Next.js"];
const STATS = [["3+","Projects"],["1+","Years exp."],["1+","Clients"]];

const Hero = () => {
  return (
    <motion.section
      className=" px-5 py-24 md:py-36 md:px-10 flex justify-center flex-col text-center"
      variants={container}
      initial="hidden"
      animate="show"
    >
      <motion.div variants={item} className="flex items-center self-center gap-1 bg-orange-400 border border-orange-600 text-white rounded-full px-3 py-1 text-sm w-fit mb-3">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400/60" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400" />
        </span>
        Available for work
      </motion.div>

      <motion.h1 variants={item} className="text-4xl md:text-5xl max-w-3xl self-center font-brand leading-tight font-extrabold mb-3">
        Hi, I'm <span className="text-orange-400">Ayomide</span>
        {" "}Frontend Developer
      </motion.h1>

      <motion.p variants={item} className="text-sm md:text-base font-body leading-relaxed text-center mb-5">
        I build beautiful, fast, and accessible web experiences using React, modern CSS, and clean code.
      </motion.p>

      <motion.div variants={item} className="flex items-center justify-center gap-5">
        <NavLink to="/projects" className="border border-orange-400/50 px-4 py-2 rounded-full text-sm hover:bg-orange-400/70 transition">
          View my work
        </NavLink>
        <NavLink to="/resume.pdf" className="border border-orange-400/50 px-4 py-2 rounded-full text-sm hover:bg-orange-400/70 transition">
          Download CV
        </NavLink>
      </motion.div>

      <motion.div variants={item} className="mt-3 font-semibold w-fit flex gap-3 items-center self-center">
        {STATS.map(([n, l]) => (
          <div key={l}>
            <h2 className="text-2xl md:text-4xl text-orange-400 font-extrabold font-brand leading-tight">{n}</h2>
            <p className="text-sm font-body leading-relaxed">{l}</p>
          </div>
        ))}
      </motion.div>

      <motion.div variants={item} className="flex flex-wrap gap-2 mt-4 justify-center">
        {TECH.map(t => (
          <span key={t} className="px-3 py-1 rounded-lg border border-orange-400/50 text-gray-100/50 text-sm">
            <h3>{t}</h3>
          </span>
        ))}
      </motion.div>

    </motion.section>
  );
};

export default Hero;