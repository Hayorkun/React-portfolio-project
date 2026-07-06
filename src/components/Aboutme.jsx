import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";


const pageVariants = {
  hidden: { x: "-100%", opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { type: "tween", duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.3 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const cardVariants = {
  hidden: { opacity: 0, x: 40, scale: 0.97 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.45 },
  },
};

const rowVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, delay: 0.55 + i * 0.08 },
  }),
};

const buttonVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, delay: 0.75 + i * 0.1 },
  }),
};

const AboutMe = () => {
  const infoRows = [
    { label: "Location", value: "Oyo, Nigeria", className: "" },
    { label: "Experience", value: "1+ years", className: "" },
    { label: "Availability", value: "Open to work", className: "text-green-500" },
    { label: "Focus", value: "React, Next.js, UI", className: "" },
    { label: "Language", value: "English", className: "" },
  ];

  return (
    <motion.section
      className="px-5 py-10 md:py-15 md:px-10 md:flex-col"
      variants={pageVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="md:items-center justify-center py-5 md:flex md:gap-6">
        <div className="my-max-width w-full md:flex justify-between gap-5">

          <motion.div
            className="w-full md:w-[62.5%] flex flex-col gap-2"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h3
              variants={fadeUp}
              className="text-orange-400 font-brand font-semibold leading-relaxed"
            >
              WHO I AM
            </motion.h3>

            <motion.h2
              variants={fadeUp}
              className="text-4xl font-brand font-extrabold mt-3 leading-tight"
            >
              Building things for the web
            </motion.h2>

            <motion.p variants={fadeUp} className="mt-3 font-body leading-relaxed">
              A frontend developer who loves turning ideas into polished,
              interactive experiences.
            </motion.p>

            <motion.p variants={fadeUp} className="my-4 font-body leading-relaxed">
              I'm <span className="font-bold text-white">Ayomide Yerokun</span>,
              a frontend developer with 1+ year of experience building
              responsive, accessible, and high-performance web applications. I
              specialise in the React ecosystem and have a deep appreciation for
              great design. I believe the best interfaces are invisible — they
              just work. I care about every detail, from loading states and
              keyboard navigation to the exact easing curve on a hover
              transition. When I'm not writing code, I'm exploring new design
              trends, contributing to open-source projects, or sketching UI
              concepts in Figma.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="flex justify-center md:justify-start gap-4 mt-3"
            >
              {[
                {
                  to: "/projects",
                  label: (
                    <>
                      See my projects <i className="fa-solid fa-right-long"></i>
                    </>
                  ),
                  className:
                    "px-6 py-3 rounded-md mt-5 text-xs bg-orange-400 border-none items-center hover:bg-white hover:text-black hover:-translate-y-0.5 transform-gpu transition",
                },
                {
                  to: "/contact",
                  label: "Get in touch",
                  className:
                    "border px-6 py-3 rounded-md mt-5 text-xs border-white-100 hover:border-orange-500 hover:text-orange-500 hover:-translate-y-0.5 transform-gpu transition",
                },
              ].map((btn, i) => (
                <motion.div
                  key={btn.to}
                  custom={i}
                  variants={buttonVariants}
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <NavLink to={btn.to} className={btn.className}>
                    {btn.label}
                  </NavLink>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            className="mt-10 md:w-[37.5%] w-full border border-orange-300/30 bg-orange-300/10 px-8 py-4 flex flex-col justify-center rounded-xl"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            whileHover={{
              boxShadow: "0 0 32px 0 rgba(251,146,60,0.15)",
              borderColor: "rgba(251,146,60,0.45)",
              transition: { duration: 0.3 },
            }}
          >
            <div className="w-full">
              {infoRows.map((row, i) => (
                <motion.div
                  key={row.label}
                  custom={i}
                  variants={rowVariants}
                  initial="hidden"
                  animate="visible"
                  className={`w-full flex justify-between py-1 mb-5 ${
                    i < infoRows.length - 1
                      ? "border-b border-orange-400/50 pb-1"
                      : ""
                  }`}
                >
                  <p className="text-xs">{row.label}</p>
                  <h4 className={row.className}>{row.value}</h4>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </motion.section>
  );
};

export default AboutMe;