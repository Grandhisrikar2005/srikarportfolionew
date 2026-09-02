import { motion } from "framer-motion";
import {
  Brain,
  Code2,
  Database,
  ArrowUpRight,
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
      "Explored deep learning approaches for bio-acoustic birdsong analysis",
      "Worked with image, audio, and text-based AI applications",
    ],
    icon: Brain,
  },
  {
    year: "2023 — Present",
    role: "Full-Stack Developer",
    organization: "Project Development",
    description:
      "Building responsive full-stack applications using modern JavaScript technologies while integrating AI capabilities into practical web applications.",
    highlights: [
      "Developed MERN-based web applications",
      "Built React interfaces with reusable components",
      "Integrated frontend, backend, databases, and AI functionality",
    ],
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
      "Practiced data structures, algorithms, and problem solving",
    ],
    icon: Database,
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-[#050505] px-6 py-28 text-white sm:px-10 lg:px-16"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute right-[-15%] top-[20%] h-[500px] w-[500px] rounded-full bg-purple-600/[0.08] blur-[170px]" />

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
              Experience
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

              <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-400 sm:text-lg">
                A timeline of my development across artificial intelligence,
                software engineering, and full-stack development.
              </p>
            </div>

            <div className="hidden lg:block">
              <p className="text-right text-xs uppercase tracking-[0.25em] text-zinc-600">
                Building • Learning • Creating
              </p>
            </div>
          </div>
        </motion.div>

        {/* Timeline */}
        <div className="relative">

          {/* Timeline Line */}
          <div className="absolute left-5 top-0 hidden h-full w-px bg-gradient-to-b from-purple-500/50 via-white/10 to-transparent md:block" />

          <div className="space-y-8">
            {experiences.map((experience, index) => {
              const Icon = experience.icon;

              return (
                <motion.article
                  key={experience.role}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.1,
                  }}
                  className="relative md:pl-16"
                >

                  {/* Timeline Dot */}
                  <div className="absolute left-0 top-8 hidden h-10 w-10 items-center justify-center rounded-full border border-purple-400/20 bg-[#050505] md:flex">
                    <div className="h-2 w-2 rounded-full bg-purple-400 shadow-[0_0_15px_rgba(168,85,247,0.8)]" />
                  </div>

                  {/* Card */}
                  <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.025] p-7 transition-all duration-500 hover:-translate-y-1 hover:border-purple-400/20 hover:bg-white/[0.035] sm:p-9">

                    {/* Hover Glow */}
                    <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-purple-500/[0.06] blur-[90px] transition-all duration-500 group-hover:bg-purple-500/[0.12]" />

                    <div className="relative">

                      {/* Top */}
                      <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">

                        <div className="flex items-start gap-4">

                          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-black/30">
                            <Icon className="h-5 w-5 text-purple-400" />
                          </div>

                          <div>
                            <p className="text-xs uppercase tracking-[0.2em] text-purple-400">
                              {experience.year}
                            </p>

                            <h3 className="mt-2 text-xl font-semibold sm:text-2xl">
                              {experience.role}
                            </h3>

                            <p className="mt-1 text-sm text-zinc-500">
                              {experience.organization}
                            </p>
                          </div>

                        </div>

                        <span className="hidden text-4xl font-semibold text-white/[0.05] sm:block">
                          0{index + 1}
                        </span>
                      </div>

                      {/* Description */}
                      <p className="mt-6 max-w-4xl text-sm leading-7 text-zinc-400 sm:text-base">
                        {experience.description}
                      </p>

                      {/* Highlights */}
                      <div className="mt-7 grid gap-3 sm:grid-cols-3">
                        {experience.highlights.map((highlight) => (
                          <div
                            key={highlight}
                            className="rounded-2xl border border-white/5 bg-white/[0.025] p-4"
                          >
                            <div className="mb-3 h-1 w-6 rounded-full bg-purple-500/60" />

                            <p className="text-xs leading-6 text-zinc-400">
                              {highlight}
                            </p>
                          </div>
                        ))}
                      </div>

                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>

        {/* Bottom Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 flex justify-center"
        >
          <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.025] px-5 py-3 text-xs text-zinc-500">
            <span className="h-1.5 w-1.5 rounded-full bg-purple-400" />
            Always learning. Always building.
            <ArrowUpRight className="h-3.5 w-3.5" />
          </div>
        </motion.div>

      </div>
    </section>
  );
}