import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Sparkles } from "lucide-react";

const GITHUB_URL = "https://github.com/Grandhisrikar2005";

const LINKEDIN_URL =
  "https://www.linkedin.com/in/grandhi-venkata-sai-srikar";

const EMAIL = "srikargvs2005@gmail.com";

export default function Hero() {
  const scrollToProjects = () => {
    const section = document.getElementById("projects");

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const scrollToContact = () => {
    const section = document.getElementById("contact");

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden bg-[#050505] px-6 pt-28 text-white sm:px-10 lg:px-16"
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="pointer-events-none absolute left-[-15%] top-[10%] h-[500px] w-[500px] rounded-full bg-purple-600/10 blur-[150px]" />

      <div className="pointer-events-none absolute bottom-[-15%] right-[-10%] h-[500px] w-[500px] rounded-full bg-blue-600/10 blur-[150px]" />

      {/* =====================================================
          MAIN CONTENT
      ====================================================== */}

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">

        {/* =================================================
            LEFT CONTENT
        ================================================== */}

        <div className="relative z-10">

          {/* Availability */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-7 inline-flex items-center gap-2 rounded-full border border-purple-400/20 bg-purple-500/[0.08] px-4 py-2"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-purple-400 opacity-60" />

              <span className="relative inline-flex h-2 w-2 rounded-full bg-purple-400" />
            </span>

            <span className="text-xs font-medium uppercase tracking-[0.18em] text-purple-300">
              Available for opportunities
            </span>
          </motion.div>

          {/* Role */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-5 flex items-center gap-3 text-sm text-zinc-500"
          >
            <Sparkles className="h-4 w-4 text-purple-400" />

            <span>
              AI / ML Engineer
              <span className="mx-2 text-zinc-700">•</span>
              Full-Stack Developer
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="max-w-4xl text-5xl font-semibold leading-[1.03] tracking-tight sm:text-6xl lg:text-7xl xl:text-[5.25rem]"
          >
            Building{" "}
            <span className="bg-gradient-to-r from-purple-400 via-fuchsia-400 to-blue-400 bg-clip-text text-transparent">
              Intelligent
            </span>{" "}
            Experiences.
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-7 max-w-2xl text-base leading-8 text-zinc-400 sm:text-lg"
          >
            I build AI-powered applications and modern software solutions
            that combine intelligent systems, data, and thoughtful user
            experiences to solve real-world problems.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="mt-9 flex flex-wrap gap-3"
          >
            <button
              onClick={scrollToProjects}
              className="group inline-flex items-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-black transition-all duration-300 hover:bg-zinc-200 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)]"
            >
              Explore My Work

              <ArrowDown className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-1" />
            </button>

            <button
              onClick={scrollToContact}
              className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-6 py-3.5 text-sm font-medium text-zinc-300 transition-all duration-300 hover:border-purple-400/30 hover:bg-purple-500/10 hover:text-white"
            >
              Let&apos;s Connect

              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-8 flex flex-wrap items-center gap-6"
          >
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1 text-sm text-zinc-500 transition-colors hover:text-white"
            >
              GitHub

              <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>

            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1 text-sm text-zinc-500 transition-colors hover:text-white"
            >
              LinkedIn

              <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>

            <a
              href={`mailto:${EMAIL}`}
              className="group inline-flex items-center gap-1 text-sm text-zinc-500 transition-colors hover:text-white"
            >
              Email

              <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </motion.div>

          {/* Small Stats */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="mt-10 flex flex-wrap gap-8 border-t border-white/5 pt-7"
          >
            <div>
              <p className="text-lg font-semibold text-white">
                AI / ML
              </p>

              <p className="mt-1 text-[10px] uppercase tracking-[0.18em] text-zinc-600">
                Primary Focus
              </p>
            </div>

            <div>
              <p className="text-lg font-semibold text-white">
                Full-Stack
              </p>

              <p className="mt-1 text-[10px] uppercase tracking-[0.18em] text-zinc-600">
                Development
              </p>
            </div>

            <div>
              <p className="text-lg font-semibold text-white">
                03
              </p>

              <p className="mt-1 text-[10px] uppercase tracking-[0.18em] text-zinc-600">
                Featured Projects
              </p>
            </div>
          </motion.div>
        </div>

        {/* =================================================
            AI VISUAL
        ================================================== */}

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative mx-auto flex h-[380px] w-full max-w-[500px] items-center justify-center sm:h-[450px] lg:h-[550px]"
        >
          {/* Central Glow */}
          <motion.div
            animate={{
              scale: [1, 1.08, 1],
              opacity: [0.5, 0.75, 0.5],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute h-64 w-64 rounded-full bg-purple-500/10 blur-[100px] sm:h-80 sm:w-80"
          />

          {/* Outer Orbit */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute h-[260px] w-[260px] rounded-full border border-purple-400/20 sm:h-[350px] sm:w-[350px]"
          >
            <motion.div
              animate={{ scale: [1, 1.4, 1] }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -left-1 top-1/2 h-2.5 w-2.5 -translate-y-1/2 rounded-full bg-purple-400 shadow-[0_0_15px_rgba(168,85,247,0.8)]"
            />
          </motion.div>

          {/* Middle Orbit */}
          <motion.div
            animate={{ rotate: -360 }}
            transition={{
              duration: 24,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute h-[200px] w-[200px] rounded-full border border-blue-400/15 sm:h-[270px] sm:w-[270px]"
          >
            <motion.div
              animate={{ scale: [1, 1.35, 1] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -right-1 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-blue-400 shadow-[0_0_12px_rgba(96,165,250,0.7)]"
            />
          </motion.div>

          {/* Inner Orbit */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 14,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute h-[145px] w-[145px] rounded-full border border-fuchsia-400/10 sm:h-[190px] sm:w-[190px]"
          >
            <motion.div
              animate={{ scale: [1, 1.4, 1] }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute left-1/2 -top-1 h-2 w-2 -translate-x-1/2 rounded-full bg-fuchsia-400 shadow-[0_0_12px_rgba(232,121,249,0.7)]"
            />
          </motion.div>

          {/* Core */}
          <motion.div
            animate={{
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative flex h-28 w-28 items-center justify-center rounded-full border border-purple-400/30 bg-gradient-to-br from-purple-500/20 via-black to-blue-500/20 shadow-[0_0_60px_rgba(168,85,247,0.12)] sm:h-36 sm:w-36"
          >
            <div className="absolute inset-3 rounded-full border border-white/5" />

            <div className="flex h-16 w-16 items-center justify-center rounded-full border border-white/10 bg-black/70 shadow-inner sm:h-20 sm:w-20">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-purple-300">
                AI
              </span>
            </div>
          </motion.div>

          {/* Floating Labels */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute right-[5%] top-[18%] hidden rounded-full border border-white/10 bg-black/60 px-3 py-2 text-[10px] uppercase tracking-[0.15em] text-zinc-500 backdrop-blur-md sm:block"
          >
            Intelligence
          </motion.div>

          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{
              duration: 4.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute bottom-[18%] left-[5%] hidden rounded-full border border-white/10 bg-black/60 px-3 py-2 text-[10px] uppercase tracking-[0.15em] text-zinc-500 backdrop-blur-md sm:block"
          >
            Innovation
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Fade */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#050505] to-transparent" />
    </section>
  );
}