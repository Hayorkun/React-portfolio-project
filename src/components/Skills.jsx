import React, { useEffect, useState } from "react";
import { AtomIcon, Wrench, Palette, Sparkle } from "lucide-react";
import { motion } from "framer-motion";

const Skills = () => {
  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12 } },
  };

  const item = {
    hidden: { opacity: 0, x: 20 },
    show: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const SkillsGroup = [
    {
      icon: [<AtomIcon className="bg-orange-400 p-1 rounded-md" />],
      title: ["Frontend"],
      bars: [
        { name: "React / Next.js", pct: 70 },
        { name: "TypeScript", pct: 50 },
        { name: "Tailwind CSS", pct: 68 },
        { name: "CSS / Animations", pct: 85 },
      ],
    },

    {
      icon: [<Wrench className="bg-orange-400 p-1 rounded-md" />],
      title: ["Backend & Tools"],
      bars: [
        { name: "Node.js/Express", pct: 70 },
        { name: "Git/GitHub", pct: 89 },
        { name: "Rest API", pct: 50 },
        { name: "SuperBase/Firebase", pct: 65 },
      ],
    },

    {
      icon: [<Palette className="bg-orange-400 p-1 rounded-md" />],
      title: ["Design"],
      bars: [
        { name: "Figma", pct: 83 },
        { name: "UI/UX Principles", pct: 65 },
        { name: "Responsive Design", pct: 90 },
        { name: "Accessibility (ally)", pct: 71 },
      ],
    },
  ];

  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setAnimate(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <motion.section
      className="px-5 py-10 md:py-15 md:px-10 flex justify-center"
      variants={container}
      initial="hidden"
      animate="show"
    >
      <div className="my-max-width w-full">
        <motion.div variants={item} className="mt-7">
          <p className="mb-3 text-orange-400 font-brand font-semibold leading-relaxed">
            WHAT I KNOW
          </p>
          <h1 className="text-6xl font-brand font-extrabold leading-tight mt-3">
            Skills
          </h1>
          <p className="mt-3 text-gray-400/70">
            Tools and technologies i work with daily.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-10 grid gap-6"
        >
          {SkillsGroup.map((skill, index) => (
            <motion.div
              key={index}
              variants={item}
              className="bg-white/5 border border-white/10 rounded-2xl p-6"
            >
              <div className="flex items-center gap-3 mb-6">
                {skill.icon}
                <h2 className="text-2xl font-semibold">{skill.title}</h2>
              </div>
              <div className="space-y-5">
                {skill.bars.map((bar, i) => (
                  <div key={i}>
                    <div className="flex justify-between mb-2">
                      <span>{bar.name}</span>
                      <span>{bar.pct}%</span>
                    </div>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full rounded-full bg-linear-to-r from-orange-300 to-orange-600"
                        initial={{ width: "0%" }}
                        whileInView={{ width: `${bar.pct}%` }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 1,
                          ease: "easeOut",
                          delay: i * 0.1,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
        <motion.div variants={item} className="py-7 mt-10">
          <h3 className="text-orange-400 text-lg">Soft Skills</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 items-center gap-2 py-3">
            <span className="flex gap-1 items-center justify-center border border-orange-300/20 py-2 rounded-xl">
              <Sparkle className="size-4 stroke-3 fill-white" /> Problem Solving
            </span>
            <span className="flex gap-1 items-center justify-center border border-orange-300/20 py-2 rounded-xl">
              <Sparkle className="size-4 stroke-3 fill-white" />
              Attention to details
            </span>
            <span className="flex gap-1 items-center justify-center border border-orange-300/20 py-2 rounded-xl">
              <Sparkle className="size-4 stroke-3 fill-white" /> Fast learner
            </span>
            <span className="flex gap-1 items-center justify-center border border-orange-300/20 py-2 rounded-xl">
              <Sparkle className="size-4 stroke-3 fill-white" /> Collaboration
            </span>
            <span className="flex gap-1 items-center justify-center border border-orange-300/20 py-2 rounded-xl">
              <Sparkle className="size-4 stroke-3 fill-white" /> Communication
            </span>
            <span className="flex gap-1 items-center justify-center border border-orange-300/20 py-2 rounded-xl">
              <Sparkle className="size-4 stroke-3 fill-white" /> Time management
            </span>
            <span className="flex gap-1 items-center justify-center border border-orange-300/20 py-2 rounded-xl">
              <Sparkle className="size-4 stroke-3 fill-white" /> Code review
            </span>
            <span className="flex gap-1 items-center justify-center border border-orange-300/20 py-2 rounded-xl">
              <Sparkle className="size-4 stroke-3 fill-white" /> Self-motivated
            </span>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Skills;
