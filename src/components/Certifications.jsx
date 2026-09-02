import { motion } from "framer-motion";
import {
  Award,
  Code2,
  Brain,
  Database,
  ArrowUpRight,
} from "lucide-react";

const certifications = [
  {
    title: "MERN Full Stack Certification Program",
    issuer: "Full-Stack Development",
    description:
      "Certification covering modern full-stack web development using MongoDB, Express.js, React, and Node.js.",
    icon: Code2,
  },
  {
    title: "MATLAB Onramp",
    issuer: "MathWorks",
    description:
      "Completed foundational MATLAB training covering programming concepts, data handling, visualization, and computational workflows.",
    icon: Database,
  },
  {
    title: "Java Programming",
    issuer: "Great Learning",
    description:
      "Certification covering core Java programming concepts, object-oriented programming, and application development fundamentals.",
    icon: Code2,
  },
  {
    title: "Introduction to AI",
    issuer: "Infosys Springboard",
    description:
      "Certification covering fundamental concepts of artificial intelligence, machine learning, and AI applications.",
    icon: Brain,
  },
];

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="relative overflow-hidden bg-[#050505] px-6 py-28 text-white sm:px-10 lg:px-16"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-[-15%] top-[20%] h-[500px] w-[500px] rounded-full bg-purple-600/[0.07] blur-[170px]" />

      <div className="pointer-events-none absolute bottom-[-10%] right-[-10%] h-[400px] w-[400px] rounded-full bg-blue-600/[0.06] blur-[150px]" />

      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-10 bg-purple-500" />

            <span className="text-sm uppercase tracking-[0.25em] text-purple-400">
              Certifications
            </span>
          </div>

          <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            Learning that{" "}
            <span className="bg-gradient-to-r from-purple-400 via-fuchsia-400 to-blue-400 bg-clip-text text-transparent">
              compounds.
            </span>
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-400 sm:text-lg">
            Certifications and learning programs that have strengthened my
            foundation across software development, artificial intelligence,
            and computational technologies.
          </p>
        </motion.div>

        {/* Certification Grid */}
        <div className="grid gap-5 md:grid-cols-2">

          {certifications.map((certification, index) => {
            const Icon = certification.icon;

            return (
              <motion.article
                key={certification.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                whileHover={{ y: -5 }}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.025] p-7 transition-all duration-500 hover:border-purple-400/20 hover:bg-white/[0.035] sm:p-8"
              >
                {/* Glow */}
                <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-purple-500/[0.06] blur-[80px] transition-all duration-500 group-hover:bg-purple-500/[0.12]" />

                <div className="relative">

                  {/* Top */}
                  <div className="flex items-start justify-between gap-5">

                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-black/30">
                      <Icon className="h-5 w-5 text-purple-400" />
                    </div>

                    <span className="text-3xl font-semibold text-white/[0.05]">
                      0{index + 1}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="mt-7">

                    <p className="text-xs uppercase tracking-[0.2em] text-purple-400">
                      {certification.issuer}
                    </p>

                    <h3 className="mt-3 text-xl font-semibold leading-8 sm:text-2xl">
                      {certification.title}
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-zinc-400">
                      {certification.description}
                    </p>

                  </div>

                  {/* Bottom */}
                  <div className="mt-7 flex items-center justify-between border-t border-white/5 pt-5">

                    <div className="flex items-center gap-2 text-xs text-zinc-600">
                      <Award className="h-3.5 w-3.5" />
                      Professional Learning
                    </div>

                    <ArrowUpRight
                      className="h-4 w-4 text-zinc-600 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-purple-400"
                    />

                  </div>

                </div>
              </motion.article>
            );
          })}

        </div>

        {/* Bottom Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-10 rounded-3xl border border-white/10 bg-white/[0.02] p-7 text-center sm:p-9"
        >
          <p className="text-sm leading-7 text-zinc-500 sm:text-base">
            Certifications are milestones — continuous learning is the real
            advantage.
          </p>
        </motion.div>

      </div>
    </section>
  );
}