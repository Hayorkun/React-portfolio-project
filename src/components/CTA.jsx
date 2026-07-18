import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.13, delayChildren: 0.2 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const buttonVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, delay: i * 0.1, type: "spring", stiffness: 220, damping: 18 },
  }),
};

const CTA = () => {
  return (
    <div className="h-full px-5 py-10 md:py-15 flex justify-center">
      <div className="my-max-width w-full ">
        <motion.div
          className="w-full rounded-tl-4xl rounded-br-3xl bg-orange-400 p-10 flex flex-col items-center overflow-hidden relative"
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <motion.div
            className="absolute inset-0 bg-linear-to-br from-orange-300/30 via-transparent to-orange-600/20 pointer-events-none"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            viewport={{ once: true }}
          />

          <motion.div
            className="flex flex-col items-center relative z-10"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <motion.h2
              variants={fadeUp}
              className="px-2 w-xs md:w-md font-brand leading-tight mb-3 font-extrabold text-4xl text-center"
            >
              Let's build something great together
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="px-3 w-xs md:w-md text-center font-body leading-relaxed"
            >
              Have a project in mind or a role to fill? I'm open to freelance
              work and full-time opportunities.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-3 flex flex-col md:flex-row gap-3"
            >
              {[
                {
                  to: "/contact",
                  label: "Start a project",
                  className:
                    "px-4 py-2 rounded-lg bg-white text-black text-sm text-center hover:bg-orange-600/60 hover:text-white transition",
                },
                {
                  to: "/projects",
                  label: "View projects",
                  className:
                    "border px-4 py-2 text-sm text-center rounded-lg hover:text-white hover:bg-black hover:border-black transition",
                },
              ].map((btn, i) => (
                <motion.div
                className="mb-2"
                  key={btn.to}
                  custom={i}
                  variants={buttonVariants}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.96 }}
                >
                  <NavLink  to={btn.to} className={btn.className}>
                    {btn.label}
                  </NavLink>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default CTA;