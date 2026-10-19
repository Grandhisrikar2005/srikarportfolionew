
import { motion } from "framer-motion";
import {
  Award,
  Code2,
  Brain,
  Database,
  ArrowUpRight,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

const certifications = [
  {
    title: "MERN Full Stack Certification Program",
    issuer: "Full-Stack Development",
    description:
      "Certification covering modern full-stack web development using MongoDB, Express.js, React, and Node.js.",
    skills: ["MongoDB", "Express.js", "React", "Node.js"],
    icon: Code2,
    accent: "from-purple-500/15 to-blue-500/5",
  },
  {
    title: "MATLAB Onramp",
    issuer: "MathWorks",
    description:
      "Completed foundational MATLAB training covering programming concepts, data handling, visualization, and computational workflows.",
    skills: ["MATLAB", "Data Handling", "Visualization"],
    icon: Database,
    accent: "from-blue-500/15 to-cyan-500/5",
  },
  {
    title: "Java Programming",
    issuer: "Great Learning",
    description:
      "Certification covering core Java programming concepts, object-oriented programming, and application development fundamentals.",
    skills: ["Java", "OOP", "Programming"],
    icon: Code2,
    accent: "from-orange-500/10 to-purple-500/5",
  },
  {
    title: "Introduction to AI",
    issuer: "Infosys Springboard",
    description:
      "Certification covering fundamental concepts of artificial intelligence, machine learning, and AI applications.",
    skills: ["Artificial Intelligence", "Machine Learning", "AI Concepts"],
    icon: Brain,
    accent: "from-fuchsia-500/10 to-purple-500/5",
  },
];

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="relative overflow-hidden bg-[#050505] px-5 py-24 text-white sm:px-10 sm:py-28 lg:px-16"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-purple-600/[0.08] blur-[140px]" />
      <div className="pointer-events-none absolute -bottom-40 -right-32 h-96 w-96 rounded-full bg-blue-600/[0.07] blur-[140px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mb-12 sm:mb-16"
        >
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-10 bg-purple-500" />
            <span className="text-xs uppercase tracking-[0.25em] text-purple-400 sm:text-sm">
              Certifications
            </span>
          </div>

          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div>
              <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
                Learning that{" "}
                <span className="bg-gradient-to-r from-purple-400 via-fuchsia-400 to-blue-400 bg-clip-text text-transparent">
                  compounds.
                </span>
              </h2>

              <p className="mt-5 max-w-2xl text-sm leading-7 text-zinc-400 sm:text-lg sm:leading-8">
                Building a stronger technical foundation through structured
                learning in artificial intelligence, software development,
                and computational technologies.
              </p>
            </div>

            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2.5 text-xs text-zinc-400">
              <Sparkles className="h-4 w-4 text-purple-400" />
              Learn · Apply · Build
            </div>
          </div>
        </motion.div>

        {/* Certification cards */}
        <div className="grid gap-5 md:grid-cols-2">
          {certifications.map((certification, index) => {
            const Icon = certification.icon;

            return (
              <motion.article
                key={certification.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group relative h-full overflow-hidden rounded-3xl border border-white/[0.09] bg-white/[0.025] p-5 transition-colors duration-300 hover:border-purple-400/30 sm:p-8"
              >
                {/* Card gradient */}
                <div
                  className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${certification.accent} opacity-50 transition-opacity duration-300 group-hover:opacity-100`}
                />

                <div className="relative flex h-full flex-col">
                  {/* Card header */}
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-purple-400/20 bg-black/30">
                      <Icon className="h-5 w-5 text-purple-400" />
                    </div>

                    <span className="text-3xl font-semibold text-white/[0.07]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Certification details */}
                  <div className="mt-7">
                    <p className="text-xs font-medium uppercase tracking-[0.18em] text-purple-400">
                      {certification.issuer}
                    </p>

                    <h3 className="mt-3 text-xl font-semibold leading-8 tracking-tight sm:text-2xl">
                      {certification.title}
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-zinc-400">
                      {certification.description}
                    </p>
                  </div>

                  {/* Related skills */}
                  <div className="mt-6 flex flex-wrap gap-2">
                    {certification.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-white/[0.08] bg-black/25 px-3 py-1.5 text-xs text-zinc-400 transition-colors group-hover:border-white/[0.12]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Card footer */}
                  <div className="mt-7 flex items-center justify-between border-t border-white/[0.08] pt-5">
                    <div className="flex items-center gap-2 text-xs text-zinc-500">
                      <CheckCircle2 className="h-4 w-4 text-purple-400/80" />
                      Learning milestone
                    </div>

                    <ArrowUpRight className="h-4 w-4 text-zinc-600 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-purple-400" />
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Closing statement */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-8 rounded-3xl border border-white/[0.08] bg-white/[0.02] p-6 text-center sm:mt-10 sm:p-9"
        >
          <div className="flex items-center justify-center gap-3">
            <Award className="h-5 w-5 text-purple-400" />
            <p className="text-sm leading-7 text-zinc-400 sm:text-base">
              Certifications are milestones. Applying what you learn is what
              moves you forward.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
