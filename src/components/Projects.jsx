
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowUpRight,
  Brain,
  Waves,
  FileText,
  ChevronDown,
  Layers3,
  Target,
  Cpu,
  ExternalLink,
  Sparkles,
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
    objective:
      "Explore how satellite imagery and environmental information can contribute to early flood-risk assessment and risk-aware evacuation planning.",
    highlights: [
      {
        icon: Layers3,
        title: "Satellite imagery",
        detail:
          "Use image-based analysis to understand land-cover patterns relevant to flood-risk assessment.",
      },
      {
        icon: Cpu,
        title: "Machine learning",
        detail:
          "Apply computer vision and deep learning techniques to analyze imagery.",
      },
      {
        icon: Target,
        title: "Risk assessment",
        detail:
          "Combine visual information with environmental factors to support flood-risk estimation.",
      },
    ],
    contribution:
      "The project connects image analysis with environmental risk assessment, extending beyond image classification toward a practical decision-support concept.",
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
    github: "https://github.com/Grandhisrikar2005/AVIARA",
    liveDemo: "https://aviara.streamlit.app/",
    featured: false,
    objective:
      "Investigate how computational audio analysis can help characterize bird vocalizations and provide a foundation for exploring birdsong generation.",
    highlights: [
      {
        icon: Layers3,
        title: "Audio preprocessing",
        detail:
          "Prepare bird recordings and organize audio segments for downstream analysis.",
      },
      {
        icon: Cpu,
        title: "Acoustic learning",
        detail:
          "Explore deep learning approaches for identifying patterns in bird vocalizations.",
      },
      {
        icon: Target,
        title: "Sound generation",
        detail:
          "Investigate approaches for generating bird-inspired audio without relying on traditional LSTM architectures.",
      },
    ],
    contribution:
      "AVIARA brings audio processing, deep learning, and an interactive demonstration together in one bird-focused AI project.",
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
    objective:
      "Make lengthy document content easier to review through a web application focused on producing concise summaries.",
    highlights: [
      {
        icon: Layers3,
        title: "Frontend experience",
        detail:
          "Use React to build an interactive interface for the document summarization workflow.",
      },
      {
        icon: Cpu,
        title: "Application backend",
        detail:
          "Use Node.js as part of a full-stack application architecture.",
      },
      {
        icon: Target,
        title: "Data layer",
        detail:
          "Include MongoDB in the application stack for data-related functionality.",
      },
    ],
    contribution:
      "The project focuses on combining an accessible web interface with an AI-oriented document workflow.",
  },
];

function ProjectCaseStudy({ project }) {
  return (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="overflow-hidden"
    >
      <div className="mt-8 border-t border-white/10 pt-7">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <div className="flex items-center gap-2 text-purple-300">
              <Target className="h-4 w-4" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em]">
                Project Objective
              </span>
            </div>

            <p className="mt-4 text-sm leading-7 text-zinc-400">
              {project.objective}
            </p>

            <div className="mt-7 rounded-2xl border border-white/[0.08] bg-black/30 p-5">
              <div className="flex items-center gap-2 text-zinc-200">
                <Sparkles className="h-4 w-4 text-purple-400" />
                <span className="text-sm font-medium">
                  What makes it interesting
                </span>
              </div>

              <p className="mt-3 text-sm leading-7 text-zinc-500">
                {project.contribution}
              </p>
            </div>
          </div>

          <div>
            <div className="mb-5 flex items-center gap-2 text-purple-300">
              <Layers3 className="h-4 w-4" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em]">
                Technical Breakdown
              </span>
            </div>

            <div className="space-y-3">
              {project.highlights.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: 12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.08, duration: 0.3 }}
                    className="flex gap-4 rounded-2xl border border-white/[0.07] bg-white/[0.02] p-4 transition-colors hover:border-purple-400/20 hover:bg-purple-500/[0.04]"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-purple-400/15 bg-purple-500/[0.08]">
                      <Icon className="h-4 w-4 text-purple-300" />
                    </div>

                    <div>
                      <h4 className="text-sm font-medium text-white">
                        {item.title}
                      </h4>
                      <p className="mt-2 text-sm leading-6 text-zinc-500">
                        {item.detail}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const [expandedProject, setExpandedProject] = useState(null);

  const toggleProject = (number) => {
    setExpandedProject((current) =>
      current === number ? null : number
    );
  };

  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[#050505] px-6 py-28 text-white sm:px-10 lg:px-16"
    >
      {/* Background lighting */}
      <div className="pointer-events-none absolute left-[-15%] top-[15%] h-[500px] w-[500px] rounded-full bg-purple-600/10 blur-[170px]" />
      <div className="pointer-events-none absolute bottom-[10%] right-[-15%] h-[450px] w-[450px] rounded-full bg-blue-600/[0.07] blur-[160px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Section heading */}
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
                A collection of projects combining artificial
                intelligence, deep learning, software engineering,
                and practical problem solving.
              </p>
            </div>

            <div className="flex items-center gap-4 lg:block lg:text-right">
              <p className="text-5xl font-semibold text-white/10">
                03
              </p>
              <p className="text-xs uppercase tracking-[0.25em] text-zinc-600">
                Featured Projects
              </p>
            </div>
          </div>
        </motion.div>

        {/* Project cards */}
        <div className="space-y-6">
          {projects.map((project, index) => {
            const Icon = project.icon;
            const isExpanded = expandedProject === project.number;

            return (
              <motion.article
                key={project.number}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{
                  duration: 0.65,
                  delay: index * 0.08,
                }}
                whileHover={{ y: -4 }}
                className={`group relative overflow-hidden rounded-3xl border p-6 transition-colors duration-300 sm:p-9 ${
                  project.featured
                    ? "border-purple-400/20 bg-gradient-to-br from-purple-500/[0.11] via-white/[0.035] to-blue-500/[0.06] hover:border-purple-400/35"
                    : "border-white/10 bg-white/[0.025] hover:border-purple-400/20"
                }`}
              >
                {/* Card glow */}
                <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-purple-500/[0.07] blur-[90px] transition-colors duration-500 group-hover:bg-purple-500/[0.15]" />

                <div className="relative">
                  {/* Card header */}
                  <div className="mb-8 flex items-start justify-between">
                    <div className="flex flex-wrap items-center gap-3">
                      <div
                        className={`flex h-12 w-12 items-center justify-center rounded-2xl border ${
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

                    <span className="text-4xl font-semibold text-white/[0.07] sm:text-5xl">
                      {project.number}
                    </span>
                  </div>

                  {/* Main content */}
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

                      {/* Technology badges */}
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

                    {/* Links and case-study toggle */}
                    <div className="flex flex-wrap gap-3 lg:max-w-[270px]">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-medium text-zinc-300 transition-all hover:border-purple-400/30 hover:bg-purple-500/10 hover:text-white"
                      >
                        GitHub
                        <ArrowUpRight className="h-4 w-4" />
                      </a>

                      {project.liveDemo && (
                        <a
                          href={project.liveDemo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 rounded-full border border-purple-400/20 bg-purple-500/10 px-4 py-3 text-sm font-medium text-purple-200 transition-all hover:border-purple-400/40 hover:bg-purple-500/20 hover:text-white"
                        >
                          Live Demo
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      )}

                      <button
                        type="button"
                        onClick={() => toggleProject(project.number)}
                        aria-expanded={isExpanded}
                        aria-controls={`project-details-${project.number}`}
                        className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/20 px-4 py-3 text-sm font-medium text-zinc-300 transition-all hover:border-purple-400/30 hover:bg-purple-500/10 hover:text-white"
                      >
                        {isExpanded ? "Show Less" : "Explore Details"}
                        <motion.span
                          animate={{ rotate: isExpanded ? 180 : 0 }}
                          transition={{ duration: 0.25 }}
                        >
                          <ChevronDown className="h-4 w-4" />
                        </motion.span>
                      </button>
                    </div>
                  </div>

                  {/* Expandable case study */}
                  <div id={`project-details-${project.number}`}>
                    <AnimatePresence initial={false}>
                      {isExpanded && (
                        <ProjectCaseStudy project={project} />
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* GitHub call to action */}
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
