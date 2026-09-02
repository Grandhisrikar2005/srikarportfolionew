import { motion } from "framer-motion";
import {
  Brain,
  Code2,
  Globe,
  Database,
  Wrench,
  Layers3,
  Sparkles,
} from "lucide-react";

const skillGroups = [
  {
    icon: Brain,
    title: "AI & Machine Learning",
    description:
      "Core technologies I use to build intelligent and predictive systems.",
    skills: [
      "Machine Learning",
      "Deep Learning",
      "Artificial Intelligence",
      "Computer Vision",
      "Natural Language Processing",
    ],
    featured: true,
  },
  {
    icon: Code2,
    title: "Programming",
    description:
      "Languages and programming foundations used across my projects.",
    skills: [
      "Python",
      "Java",
      "JavaScript",
      "C",
      "SQL",
    ],
    featured: false,
  },
  {
    icon: Globe,
    title: "Full-Stack Development",
    description:
      "Technologies for creating responsive and practical web applications.",
    skills: [
      "React",
      "HTML",
      "CSS",
      "Node.js",
      "Express.js",
      "MERN",
    ],
    featured: false,
  },
  {
    icon: Database,
    title: "Data & Databases",
    description:
      "Working with data preparation, analysis, storage, and retrieval.",
    skills: [
      "MySQL",
      "MongoDB",
      "Data Processing",
      "Data Analysis",
    ],
    featured: false,
  },
  {
    icon: Layers3,
    title: "Development Tools",
    description:
      "Tools I use to develop, manage, test, and maintain projects.",
    skills: [
      "Git",
      "GitHub",
      "VS Code",
      "PyCharm",
      "Cursor",
    ],
    featured: false,
  },
  {
    icon: Wrench,
    title: "Core Computer Science",
    description:
      "Foundational concepts that support reliable software development.",
    skills: [
      "Object-Oriented Programming",
      "Data Structures",
      "Algorithms",
      "REST APIs",
      "Problem Solving",
    ],
    featured: false,
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-[#050505] px-6 py-28 text-white sm:px-10 lg:px-16"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute right-[-10%] top-[10%] h-[500px] w-[500px] rounded-full bg-blue-600/[0.08] blur-[160px]" />

      <div className="pointer-events-none absolute left-[-15%] bottom-[5%] h-[400px] w-[400px] rounded-full bg-purple-600/[0.06] blur-[150px]" />

      <div className="mx-auto max-w-7xl">

        {/* =================================================
            HEADER
        ================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-10 bg-purple-500" />

            <span className="text-sm font-medium uppercase tracking-[0.25em] text-purple-400">
              Skills & Technologies
            </span>
          </div>

          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div>
              <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
                The technology behind my{" "}
                <span className="bg-gradient-to-r from-purple-400 via-fuchsia-400 to-blue-400 bg-clip-text text-transparent">
                  work.
                </span>
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-400 sm:text-lg">
                A combination of artificial intelligence, programming,
                software engineering, data, and web technologies that I use
                to turn ideas into working systems.
              </p>
            </div>

            {/* AI Focus Badge */}
            <div className="hidden items-center gap-3 rounded-full border border-purple-400/15 bg-purple-500/[0.06] px-4 py-2.5 lg:flex">
              <Sparkles className="h-4 w-4 text-purple-400" />

              <span className="text-xs uppercase tracking-[0.18em] text-purple-300">
                AI / ML Focused
              </span>
            </div>
          </div>
        </motion.div>

        {/* =================================================
            SKILL GRID
        ================================================== */}

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">

          {skillGroups.map((group, index) => {
            const Icon = group.icon;

            return (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                }}
                whileHover={{ y: -6 }}
                className={`group relative overflow-hidden rounded-3xl border p-7 transition-all duration-500 ${
                  group.featured
                    ? "border-purple-400/20 bg-gradient-to-br from-purple-500/[0.10] via-white/[0.03] to-blue-500/[0.05] hover:border-purple-400/35"
                    : "border-white/10 bg-white/[0.03] hover:border-white/20 hover:bg-white/[0.04]"
                }`}
              >

                {/* Card Glow */}
                <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-purple-500/[0.06] blur-[80px] transition-all duration-500 group-hover:bg-purple-500/[0.12]" />

                <div className="relative">

                  {/* Top Row */}
                  <div className="flex items-start justify-between">

                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-2xl border ${
                        group.featured
                          ? "border-purple-400/20 bg-purple-500/10"
                          : "border-white/10 bg-white/[0.04]"
                      }`}
                    >
                      <Icon className="h-5 w-5 text-purple-400" />
                    </div>

                    {group.featured && (
                      <span className="rounded-full border border-purple-400/20 bg-purple-500/10 px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.16em] text-purple-300">
                        Primary
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="mt-6 text-xl font-semibold">
                    {group.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-2 min-h-[48px] text-sm leading-6 text-zinc-500">
                    {group.description}
                  </p>

                  {/* Skills */}
                  <div className="mt-6 flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-zinc-300 transition-all duration-300 group-hover:border-white/15 group-hover:bg-white/[0.06]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                </div>
              </motion.div>
            );
          })}

        </div>

        {/* =================================================
            BOTTOM SUMMARY
        ================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-10 grid gap-4 md:grid-cols-3"
        >

          <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-5">
            <p className="text-xs uppercase tracking-[0.18em] text-zinc-600">
              Primary Domain
            </p>

            <p className="mt-2 text-sm font-medium text-zinc-200">
              Artificial Intelligence & Machine Learning
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-5">
            <p className="text-xs uppercase tracking-[0.18em] text-zinc-600">
              Development
            </p>

            <p className="mt-2 text-sm font-medium text-zinc-200">
              Full-Stack Web Applications
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-5">
            <p className="text-xs uppercase tracking-[0.18em] text-zinc-600">
              Engineering Approach
            </p>

            <p className="mt-2 text-sm font-medium text-zinc-200">
              Learn • Build • Evaluate • Improve
            </p>
          </div>

        </motion.div>

      </div>
    </section>
  );
}