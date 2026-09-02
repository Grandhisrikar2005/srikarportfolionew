import { motion } from "framer-motion";
import {
  Brain,
  Code2,
  Database,
  Rocket,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";

const highlights = [
  {
    icon: Brain,
    title: "AI / ML Engineering",
    description:
      "Building intelligent systems with machine learning, deep learning, computer vision, and AI-driven approaches to solve practical problems.",
  },
  {
    icon: Code2,
    title: "Full-Stack Development",
    description:
      "Developing modern web applications with React, Node.js, Express, MongoDB, and clean, responsive user interfaces.",
  },
  {
    icon: Database,
    title: "Data & Model Development",
    description:
      "Working across data preprocessing, feature preparation, model development, evaluation, and turning raw data into useful intelligence.",
  },
];

const stats = [
  {
    value: "AI / ML",
    label: "Primary Focus",
  },
  {
    value: "MERN",
    label: "Full-Stack",
  },
  {
    value: "2023",
    label: "Development Journey",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-black px-6 py-28 text-white sm:px-10 lg:px-16"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-[-10%] top-[20%] h-[450px] w-[450px] rounded-full bg-purple-600/10 blur-[150px]" />

      <div className="pointer-events-none absolute bottom-[-15%] right-[-10%] h-[400px] w-[400px] rounded-full bg-blue-600/[0.06] blur-[140px]" />

      <div className="mx-auto max-w-7xl">

        {/* =================================================
            HEADER
        ================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16 max-w-3xl"
        >
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-10 bg-purple-500" />

            <span className="text-sm font-medium uppercase tracking-[0.25em] text-purple-400">
              About Me
            </span>
          </div>

          <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            Building with{" "}
            <span className="bg-gradient-to-r from-purple-400 via-fuchsia-400 to-blue-400 bg-clip-text text-transparent">
              purpose.
            </span>
          </h2>

          <p className="mt-6 text-base leading-8 text-zinc-400 sm:text-lg">
            I&apos;m Srikar, an AI / ML Engineer and Full-Stack Developer
            interested in building intelligent applications that connect
            machine learning with real-world software solutions.
          </p>
        </motion.div>

        {/* =================================================
            MAIN CONTENT
        ================================================== */}

        <div className="grid gap-6 lg:grid-cols-[1.05fr_1fr]">

          {/* Main About Card */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-8 sm:p-10"
          >
            {/* Glow */}
            <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-purple-500/[0.07] blur-[90px] transition-all duration-500 group-hover:bg-purple-500/[0.12]" />

            <div className="relative">

              {/* Icon */}
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-purple-400/20 bg-purple-500/10">
                <Sparkles className="h-6 w-6 text-purple-400" />
              </div>

              <h3 className="mt-8 text-2xl font-semibold sm:text-3xl">
                Curious by nature.
                <br />
                <span className="text-zinc-500">
                  Driven to build.
                </span>
              </h3>

              <p className="mt-6 leading-8 text-zinc-400">
                My approach starts with understanding the problem before
                choosing the technology. I enjoy exploring data, experimenting
                with models, building applications, and continuously improving
                the final solution.
              </p>

              <p className="mt-4 leading-8 text-zinc-400">
                My primary interest is artificial intelligence and machine
                learning, particularly applications involving computer vision,
                intelligent automation, and systems that can turn complex data
                into useful decisions.
              </p>

              <p className="mt-4 leading-8 text-zinc-400">
                Alongside AI/ML, I develop full-stack applications so that
                intelligent models can become practical products rather than
                remaining isolated experiments.
              </p>

              {/* Bottom Statement */}
              <div className="mt-8 flex items-center gap-3 border-t border-white/5 pt-7 text-sm text-zinc-300">
                <Rocket className="h-4 w-4 text-purple-400" />

                <span>Always learning. Always building.</span>
              </div>
            </div>
          </motion.div>

          {/* Highlight Cards */}
          <div className="grid gap-4">

            {highlights.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 35 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                  }}
                  whileHover={{ y: -4 }}
                  className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:border-purple-400/30 hover:bg-white/[0.045]"
                >
                  <div className="relative flex items-start gap-5">

                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04]">
                      <Icon className="h-5 w-5 text-purple-400" />
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold">
                        {item.title}
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-zinc-500">
                        {item.description}
                      </p>
                    </div>

                  </div>
                </motion.div>
              );
            })}

          </div>
        </div>

        {/* =================================================
            STATS
        ================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-6 grid grid-cols-1 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] sm:grid-cols-3"
        >
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`p-7 text-center ${
                index !== stats.length - 1
                  ? "border-b border-white/10 sm:border-b-0 sm:border-r"
                  : ""
              }`}
            >
              <div className="text-2xl font-semibold sm:text-3xl">
                {stat.value}
              </div>

              <div className="mt-2 text-xs uppercase tracking-[0.15em] text-zinc-500">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Explore Projects */}
        <div className="mt-8 flex justify-end">
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 text-sm text-zinc-400 transition-colors hover:text-white"
          >
            Explore what I&apos;ve built

            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </div>

      </div>
    </section>
  );
}