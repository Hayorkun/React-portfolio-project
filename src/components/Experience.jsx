import { motion } from "framer-motion";

const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const timelineItemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.55,
      delay: i * 0.18,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  }),
};

const dotVariants = {
  hidden: { scale: 0, opacity: 0 },
  visible: (i) => ({
    scale: 1,
    opacity: 1,
    transition: { duration: 0.35, delay: i * 0.18 + 0.1, type: "spring", stiffness: 260, damping: 18 },
  }),
};

const lineVariants = {
  hidden: { scaleY: 0, originY: 0 },
  visible: (i) => ({
    scaleY: 1,
    transition: { duration: 0.45, delay: i * 0.18 + 0.25, ease: "easeInOut" },
  }),
};

const textVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, delay: i * 0.18 + 0.2 },
  }),
};

const experiences = [
  {
    period: "2025 - 2026",
    title: "Frontend Developer",
    subtitle: "Freelance Self-project",
    description:
      "Building responsive web applications and landing pages for clients across fintech and e-commerce. Shipping polished React interfaces from Figma designs.",
    hasLine: true,
  },
  {
    period: "2025 - 2026",
    title: "Junior Frontend Developer",
    subtitle: "Freelance Self-project",
    description:
      "Worked on marketing sites and internal dashboards. Improved page performance by 40% and introduced component-driven architecture with React.",
    hasLine: true,
  },
  {
    period: "2025 - 2026",
    title: "Self-taught & Learning",
    subtitle: "online",
    description:
      "Deep-dived into HTML, CSS, JavaScript, and React. Built personal projects and contributed to open-source to sharpen skills.",
    hasLine: false,
  },
];

const Experience = () => {
  return (
    <div className="w-full px-5 py-10 md:py-15 md:px-10 flex justify-center">

      <div className="my-max-width w-full">
        <motion.p
          className="text-orange-300 font-bold mb-3"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          Experience
        </motion.p>

        <motion.h3
          className="text-2xl font-semibold font-syne"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          transition={{ delay: 0.1 }}
        >
          Work-history
        </motion.h3>

        <div className="mt-5 block">
          {experiences.map((exp, i) => (
            <div key={i} className="flex gap-5">

              <div className="flex flex-col items-center">
                <motion.div
                  custom={i}
                  variants={dotVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-40px" }}
                  className="p-1 h-6 w-6 border border-orange-500 flex items-center justify-center rounded-xl z-10"
                >
                  <span className="h-3 w-3 bg-orange-400 rounded-xl" />
                </motion.div>

                {exp.hasLine && (
                  <motion.div
                    custom={i}
                    variants={lineVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-40px" }}
                    className="w-0 h-48 border-orange-500 border-l"
                    style={{ transformOrigin: "top" }}
                  />
                )}
              </div>

              <motion.div
                custom={i}
                variants={timelineItemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                className="pb-8"
                whileHover={{ x: 4, transition: { duration: 0.2 } }}
              >
                <motion.p
                  custom={i}
                  variants={textVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {exp.period}
                </motion.p>

                <motion.h2
                  custom={i}
                  variants={textVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="font-semibold text-xl mb-2"
                >
                  {exp.title}
                </motion.h2>

                <motion.p
                  custom={i}
                  variants={textVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="text-xs mb-4"
                >
                  {exp.subtitle}
                </motion.p>

                <motion.h5
                  custom={i}
                  variants={textVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {exp.description}
                </motion.h5>
              </motion.div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Experience;
