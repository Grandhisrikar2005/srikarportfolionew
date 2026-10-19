
import { motion } from "framer-motion";
import {
  Brain,
  Code2,
  Database,
  ArrowUpRight,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

const experiences = [
  {
    year: "2023 — Present",
    role: "AI / ML Developer",
    organization: "Academic & Personal Projects",
    description:
      "Developing AI and machine learning solutions across computer vision, deep learning, natural language processing, and intelligent prediction systems.",
    highlights: [
      "Built an AI-based early flood risk prediction system",
      "Explored deep learning for bio-acoustic birdsong analysis",
      "Worked with image, audio, and text-based AI applications",
    ],
    technologies: ["Python", "Deep Learning", "Computer Vision"],
    icon: Brain,
  },
  {
    year: "2023 — Present",
    role: "Full-Stack Developer",
    organization: "Project Development",
    description:
      "Building responsive web applications with modern JavaScript technologies and connecting user interfaces to backend services and databases.",
    highlights: [
      "Developed full-stack web applications",
      "Built React interfaces with reusable components",
      "Integrated frontends, APIs, databases, and AI functionality",
    ],
    technologies: ["React", "Node.js", "MongoDB"],
    icon: Code2,
  },
  {
    year: "2023 — Present",
    role: "Software & Data Development",
    organization: "Academic Development",
    description:
      "Strengthening software engineering fundamentals through Java, Python, SQL, databases, algorithms, and structured application development.",
    highlights: [
      "Applied object-oriented programming principles",
      "Worked with MySQL and MongoDB",
      "Practiced data structures and algorithmic problem solving",
    ],
    technologies: ["Java", "Python", "SQL"],
    icon: Database,
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-[#050505] px-5 py-24 text-white sm:px-10 sm:py-28 lg:px-16"
    >
      {/* Background effects */}
      <div className="pointer-events-none absolute -left-40 top-1/4 h-96 w-96 rounded-full bg-purple-600/[0.08] blur-[140px]" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-blue-600/[0.06] blur-[140px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-10 bg-purple-500" />
            <span className="text-xs uppercase tracking-[0.25em] text-purple-400 sm:text-sm">
              Experience & Development
            </span>
          </div>

          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div>
              <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
                My{" "}
                <span className="bg-gradient-to-r from-purple-400 via-fuchsia-400 to-blue-400 bg-clip-text text-transparent">
                  journey.
                </span>
              </h2>

              <p className="mt-5 max-w-2xl text-sm leading-7 text-zinc-400 sm:text-lg sm:leading-8">
                From AI experiments to full-stack applications, each project
                helps me develop practical engineering skills and build
                solutions to real-world problems.
              </p>
            </div>

            <div className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2.5 text-xs text-zinc-400 lg:inline-flex">
              <Sparkles className="h-4 w-4 text-purple-400" />
              Learning through building
            </div>
          </div>
        </motion.div>

        {/* Experience timeline */}
        <div className="relative">
          <div className="absolute bottom-8 left-5 top-8 hidden w-px bg-gradient-to-b from-purple-500/70 via-white/15 to-transparent md:block" />

          <div className="space-y-6 sm:space-y-8">
            {experiences.map((experience, index) => {
              const Icon = experience.icon;

              return (
                <motion.article
                  key={experience.role}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.55, delay: index * 0.12 }}
                  className="relative md:pl-16"
                >
                  {/* Timeline marker */}
                  <div className="absolute left-0 top-8 z-10 hidden h-10 w-10 items-center justify-center rounded-full border border-purple-400/30 bg-[#09090b] md:flex">
                    <span className="h-2.5 w-2.5 rounded-full bg-purple-400 shadow-[0_0_14px_rgba(168,85,247,0.8)]" />
                  </div>

                  {/* Experience card */}
                  <div className="group relative overflow-hidden rounded-3xl border border-white/[0.09] bg-gradient-to-br from-white/[0.045] to-white/[0.015] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-purple-400/30 sm:p-8 lg:p-9">
                    <div className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full bg-purple-500/[0.06] blur-[90px] transition-colors duration-500 group-hover:bg-purple-500/[0.12]" />

                    <div className="relative">
                      <div className="flex items-start gap-4">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-purple-400/20 bg-purple-500/[0.08]">
                          <Icon className="h-5 w-5 text-purple-400" />
                        </div>

                        <div className="min-w-0 flex-1">
                          <p className="text-xs font-medium uppercase tracking-[0.16em] text-purple-400">
                            {experience.year}
                          </p>

                          <h3 className="mt-2 text-xl font-semibold tracking-tight sm:text-2xl">
                            {experience.role}
                          </h3>

                          <p className="mt-1 text-sm text-zinc-500">
                            {experience.organization}
                          </p>
                        </div>

                        <span className="hidden text-4xl font-semibold text-white/[0.06] sm:block">
                          0{index + 1}
                        </span>
                      </div>

                      <p className="mt-6 max-w-4xl text-sm leading-7 text-zinc-400 sm:text-base sm:leading-8">
                        {experience.description}
                      </p>

                      {/* Highlights */}
                      <div className="mt-7 space-y-3">
                        {experience.highlights.map((highlight) => (
                          <div key={highlight} className="flex items-start gap-3">
                            <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-purple-400/80" />
                            <p className="text-sm leading-6 text-zinc-300">
                              {highlight}
                            </p>
                          </div>
                        ))}
                      </div>

                      {/* Technology tags */}
                      <div className="mt-7 flex flex-wrap gap-2 border-t border-white/[0.07] pt-5">
                        {experience.technologies.map((technology) => (
                          <span
                            key={technology}
                            className="rounded-full border border-white/[0.08] bg-black/30 px-3 py-1.5 text-xs text-zinc-400 transition-colors hover:border-purple-400/30 hover:text-purple-300"
                          >
                            {technology}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>

        {/* Closing note */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-10 flex justify-center"
        >
          <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.025] px-5 py-3 text-xs text-zinc-500">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-purple-400" />
            Always learning. Always building.
            <ArrowUpRight className="h-3.5 w-3.5" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
