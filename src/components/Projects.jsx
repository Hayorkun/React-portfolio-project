import Oneproject from "./Oneproject";
import { useProject } from "../context/ProjectContext";
import { motion } from "framer-motion";

const Projects = () => {
  const { projects, isLoading } = useProject();

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12 } },
  };

  const item = {
    hidden: { opacity: 0, x: 20 },
    show: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <motion.section
      variants={container}
      initial="hidden"
      animate="show"
      className="px-5 py-10 md:py-15 md:px-10 flex justify-center"
    >
      <div className="my-max-width w-full">
        <motion.div variants={item}>
          <p className="font-body font-semibold text-orange-400">
            Selected Projects
          </p>
          <h1 className="font-brand font-extrabold leading-tight text-4xl mt-3">
            Featured Projects
          </h1>
          <p className="mt-3 text-gray-400/70">A peek at what I've shipped.</p>
        </motion.div>

        <div>
          {isLoading ? (
            <div className="flex justify-center mt-10">
              <div className="w-12 h-12 border-4 border-dashed border-gray-200 border-t-orange-400 rounded-full animate-spin [animation-duration:1.5s]"></div>
            </div>
          ) : (
            <>
              <div className="mt-10 grid md:grid-cols-2 gap-10 items-stretch">
                {projects.map((project, index) => (
                  <motion.div key={index} variants={item}>
                    <Oneproject project={project} />
                  </motion.div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;
