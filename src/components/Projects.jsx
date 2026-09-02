import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Brain,
  Waves,
  FileText,
} from "lucide-react";

const projects = [
  {
    number: "01",
    title: "AI-Based Early Flood Risk Prediction",
    category: "AI / MACHINE LEARNING",
    description:
      "An intelligent flood-risk prediction system designed to analyze visual and environmental information, estimate potential flood risk, and support safer evacuation planning through early risk assessment.",
    tech: [
      "Python",
      "Deep Learning",
      "Computer Vision",
      "Machine Learning",
      "AI",
    ],
    icon: Waves,
    github: "https://github.com/Grandhisrikar2005",
    featured: true,
  },
  {
    number: "02",
    title: "AI Bio-Acoustic Birdsong Translator & Synthesizer",
    category: "DEEP LEARNING / AUDIO AI",
    description:
      "An experimental deep learning system for analyzing bird vocalizations, discovering acoustic patterns, and exploring intelligent birdsong generation without relying on traditional LSTM architectures.",
    tech: [
      "Python",
      "Deep Learning",
      "Audio Processing",
      "Spectrograms",
      "AI",
    ],
    icon: Brain,
    github: "https://github.com/Grandhisrikar2005",
    featured: false,
  },
  {
    number: "03",
    title: "AI Document Summarizer",
    category: "FULL-STACK / AI",
    description:
      "A full-stack document summarization application that transforms lengthy documents into concise, readable summaries through an interactive web interface.",
    tech: [
      "MERN",
      "React",
      "Node.js",
      "MongoDB",
      "AI",
    ],
    icon: FileText,
    github:
      "https://github.com/Grandhisrikar2005/Srikar-DocumentSummarizer",
    featured: false,
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[#050505] px-6 py-28 text-white sm:px-10 lg:px-16"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute left-[-15%] top-[15%] h-[500px] w-[500px] rounded-full bg-purple-600/10 blur-[170px]" />

      <div className="pointer-events-none absolute bottom-[10%] right-[-15%] h-[450px] w-[450px] rounded-full bg-blue-600/[0.07] blur-[160px]" />

      <div className="mx-auto max-w-7xl">

        {/* Section Header */}
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
              Selected Work
            </span>
          </div>

          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div>
              <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
                Things I&apos;ve{" "}
                <span className="bg-gradient-to-r from-purple-400 via-fuchsia-400 to-blue-400 bg-clip-text text-transparent">
                  built.
                </span>
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-400 sm:text-lg">
                A collection of projects where I combine artificial
                intelligence, deep learning, software engineering, and
                problem solving to build practical solutions.
              </p>
            </div>

            <div className="hidden text-right lg:block">
              <p className="text-5xl font-semibold text-white/10">
                03
              </p>

              <p className="text-xs uppercase tracking-[0.25em] text-zinc-600">
                Featured Projects
              </p>
            </div>
          </div>
        </motion.div>

        {/* Projects */}
        <div className="space-y-6">
          {projects.map((project, index) => {
            const Icon = project.icon;

            return (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.1,
                }}
                whileHover={{ y: -6 }}
                className={`group relative overflow-hidden rounded-3xl border p-7 transition-all duration-500 sm:p-9 ${
                  project.featured
                    ? "border-purple-400/20 bg-gradient-to-br from-purple-500/[0.11] via-white/[0.035] to-blue-500/[0.06] hover:border-purple-400/30"
                    : "border-white/10 bg-white/[0.025] hover:border-white/20"
                }`}
              >
                {/* Hover glow */}
                <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-purple-500/[0.08] blur-[90px] transition-all duration-500 group-hover:bg-purple-500/[0.15]" />

                <div className="relative">

                  {/* Top Row */}
                  <div className="mb-8 flex items-start justify-between">
                    <div className="flex items-center gap-4">

                      <div
                        className={`flex h-12 w-12 items-center justify-center rounded-2xl border transition-all duration-300 ${
                          project.featured
                            ? "border-purple-400/20 bg-purple-500/10"
                            : "border-white/10 bg-black/30"
                        }`}
                      >
                        <Icon className="h-5 w-5 text-purple-400" />
                      </div>

                      {project.featured && (
                        <span className="rounded-full border border-purple-400/20 bg-purple-500/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-purple-300">
                          Featured Project
                        </span>
                      )}
                    </div>

                    <span className="text-4xl font-semibold text-white/[0.06] sm:text-5xl">
                      {project.number}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">

                    <div>
                      <p className="text-xs uppercase tracking-[0.22em] text-zinc-500">
                        {project.category}
                      </p>

                      <h3 className="mt-3 max-w-4xl text-2xl font-semibold tracking-tight sm:text-3xl lg:text-4xl">
                        {project.title}
                      </h3>

                      <p className="mt-5 max-w-4xl text-sm leading-7 text-zinc-400 sm:text-base">
                        {project.description}
                      </p>

                      {/* Tech Stack */}
                      <div className="mt-7 flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-zinc-300 transition-colors group-hover:border-white/15"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* View Project */}
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex w-fit items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-5 py-3 text-sm font-medium text-zinc-300 transition-all duration-300 hover:border-purple-400/30 hover:bg-purple-500/10 hover:text-white"
                    >
                      View Project

                      <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>

                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 flex justify-center"
        >
          <a
            href="https://github.com/Grandhisrikar2005"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-6 py-3 text-sm font-medium text-zinc-300 transition-all duration-300 hover:border-purple-400/30 hover:bg-purple-500/10 hover:text-white"
          >
            Explore more on GitHub

            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </motion.div>

      </div>
    </section>
  );
}