
import { useState } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  Sparkles,
  BrainCircuit,
  Code2,
  Activity,
  MousePointer2,
} from "lucide-react";

const GITHUB_URL = "https://github.com/Grandhisrikar2005";
const LINKEDIN_URL =
  "https://www.linkedin.com/in/grandhi-venkata-sai-srikar";
const EMAIL = "srikargvs2005@gmail.com";

const particles = [
  { x: "12%", y: "20%", delay: 0, size: 3 },
  { x: "82%", y: "14%", delay: 1.2, size: 2 },
  { x: "76%", y: "76%", delay: 0.6, size: 4 },
  { x: "18%", y: "82%", delay: 1.8, size: 2 },
  { x: "91%", y: "43%", delay: 0.9, size: 3 },
  { x: "8%", y: "49%", delay: 1.5, size: 2 },
  { x: "48%", y: "8%", delay: 0.3, size: 3 },
  { x: "56%", y: "91%", delay: 2.1, size: 2 },
  { x: "95%", y: "87%", delay: 1.1, size: 3 },
  { x: "30%", y: "30%", delay: 2.4, size: 2 },
  { x: "68%", y: "25%", delay: 0.4, size: 2 },
  { x: "38%", y: "72%", delay: 1.7, size: 3 },
];

const orbitLabels = [
  {
    icon: BrainCircuit,
    label: "Artificial Intelligence",
    className: "right-0 top-[16%]",
    color: "text-purple-300",
  },
  {
    icon: Code2,
    label: "Full-Stack Development",
    className: "bottom-[20%] left-0",
    color: "text-blue-300",
  },
  {
    icon: Activity,
    label: "Deep Learning",
    className: "right-[2%] bottom-[12%]",
    color: "text-fuchsia-300",
  },
];

export default function Hero() {
  const [isInteracting, setIsInteracting] = useState(false);

  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);

  const smoothX = useSpring(pointerX, {
    stiffness: 100,
    damping: 20,
    mass: 0.6,
  });

  const smoothY = useSpring(pointerY, {
    stiffness: 100,
    damping: 20,
    mass: 0.6,
  });

  const rotateY = useTransform(smoothX, [-1, 1], [-10, 10]);
  const rotateX = useTransform(smoothY, [-1, 1], [8, -8]);

  const handlePointerMove = (event) => {
    const bounds = event.currentTarget.getBoundingClientRect();

    const x = (event.clientX - bounds.left) / bounds.width;
    const y = (event.clientY - bounds.top) / bounds.height;

    pointerX.set((x - 0.5) * 2);
    pointerY.set((y - 0.5) * 2);
    setIsInteracting(true);
  };

  const handlePointerLeave = () => {
    pointerX.set(0);
    pointerY.set(0);
    setIsInteracting(false);
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);

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
      className="relative flex min-h-screen items-center overflow-hidden bg-[#050505] px-6 pb-16 pt-28 text-white sm:px-10 lg:px-16"
    >
      {/* Background grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
          backgroundSize: "55px 55px",
          maskImage:
            "linear-gradient(to bottom, black, transparent 90%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, black, transparent 90%)",
        }}
      />

      {/* Atmospheric lighting */}
      <div className="pointer-events-none absolute -left-40 top-[5%] h-[400px] w-[400px] rounded-full bg-purple-600/15 blur-[150px] sm:h-[550px] sm:w-[550px]" />

      <div className="pointer-events-none absolute -right-40 bottom-[-5%] h-[400px] w-[400px] rounded-full bg-blue-600/10 blur-[150px] sm:h-[550px] sm:w-[550px]" />

      <div className="pointer-events-none absolute left-[45%] top-[35%] h-40 w-40 rounded-full bg-fuchsia-500/[0.06] blur-[100px]" />

      {/* Floating particles */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {particles.map((particle, index) => (
          <motion.span
            key={index}
            className="absolute rounded-full bg-purple-300/70"
            style={{
              left: particle.x,
              top: particle.y,
              width: particle.size,
              height: particle.size,
            }}
            animate={{
              y: [0, -18, 0],
              opacity: [0.15, 0.8, 0.15],
              scale: [1, 1.4, 1],
            }}
            transition={{
              duration: 3 + (index % 4),
              delay: particle.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Main hero content */}
      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
        {/* Left side */}
        <div className="relative z-10">
          {/* Availability badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-7 inline-flex items-center gap-3 rounded-full border border-purple-400/20 bg-purple-500/[0.08] px-4 py-2.5 backdrop-blur-xl"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-purple-400 opacity-60" />
              <span className="relative h-2 w-2 rounded-full bg-purple-400" />
            </span>

            <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-purple-200 sm:text-xs">
              AI · Innovation · Engineering
            </span>
          </motion.div>

          {/* Professional role */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-5 flex items-center gap-3 text-sm text-zinc-400"
          >
            <Sparkles className="h-4 w-4 text-purple-400" />
            <span>
              AI / ML Engineer
              <span className="mx-2 text-zinc-700">•</span>
              Full-Stack Developer
            </span>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.15 }}
            className="max-w-4xl text-5xl font-semibold leading-[1.04] tracking-[-0.045em] sm:text-6xl lg:text-7xl xl:text-[5.4rem]"
          >
            Building
            <br />
            <span className="relative inline-block">
              <span className="absolute -inset-x-2 inset-y-2 -z-10 bg-purple-500/10 blur-2xl" />
              <span className="bg-gradient-to-r from-purple-300 via-fuchsia-300 to-blue-300 bg-clip-text text-transparent">
                Intelligent
              </span>
            </span>
            <br />
            Experiences.
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-7 max-w-xl text-base leading-8 text-zinc-400 sm:text-lg"
          >
            I build AI-powered applications and modern software
            solutions that combine intelligent systems, data, and
            thoughtful user experiences to solve real-world problems.
          </motion.p>

          {/* Action buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="mt-9 flex flex-wrap gap-3"
          >
            <button
              onClick={() => scrollToSection("projects")}
              className="group inline-flex items-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-zinc-200 hover:shadow-[0_0_35px_rgba(168,85,247,0.2)]"
            >
              Explore My Work
              <ArrowDown className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-1" />
            </button>

            <button
              onClick={() => scrollToSection("contact")}
              className="group inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-6 py-3.5 text-sm font-medium text-zinc-300 backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:border-purple-400/40 hover:bg-purple-500/10 hover:text-white"
            >
              Let&apos;s Connect
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </button>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-8 flex flex-wrap items-center gap-6"
          >
            {[
              { label: "GitHub", href: GITHUB_URL },
              { label: "LinkedIn", href: LINKEDIN_URL },
              { label: "Email", href: `mailto:${EMAIL}` },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.label === "Email" ? undefined : "_blank"}
                rel={
                  item.label === "Email"
                    ? undefined
                    : "noopener noreferrer"
                }
                className="group inline-flex items-center gap-1.5 text-sm text-zinc-500 transition-colors hover:text-white"
              >
                {item.label}
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            ))}
          </motion.div>

          {/* Focus cards */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="mt-10 flex flex-wrap gap-x-8 gap-y-5 border-t border-white/[0.08] pt-7"
          >
            <div>
              <p className="text-lg font-semibold text-white">AI / ML</p>
              <p className="mt-1 text-[10px] uppercase tracking-[0.18em] text-zinc-500">
                Primary Focus
              </p>
            </div>

            <div>
              <p className="text-lg font-semibold text-white">
                Full-Stack
              </p>
              <p className="mt-1 text-[10px] uppercase tracking-[0.18em] text-zinc-500">
                Development
              </p>
            </div>

            <div>
              <p className="text-lg font-semibold text-white">03</p>
              <p className="mt-1 text-[10px] uppercase tracking-[0.18em] text-zinc-500">
                Featured Projects
              </p>
            </div>
          </motion.div>
        </div>

        {/* Right side: interactive AI visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.88 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.15 }}
          className="relative mx-auto flex h-[360px] w-full max-w-[500px] items-center justify-center sm:h-[460px] lg:h-[550px]"
          style={{ perspective: 1000 }}
          onPointerMove={handlePointerMove}
          onPointerLeave={handlePointerLeave}
          onPointerCancel={handlePointerLeave}
        >
          {/* Ambient glow */}
          <motion.div
            animate={{
              scale: isInteracting ? 1.2 : [1, 1.08, 1],
              opacity: isInteracting ? 0.85 : [0.35, 0.65, 0.35],
            }}
            transition={{
              duration: 4,
              repeat: isInteracting ? 0 : Infinity,
              ease: "easeInOut",
            }}
            className="absolute h-64 w-64 rounded-full bg-purple-500/20 blur-[90px] sm:h-80 sm:w-80"
          />

          {/* Tilt-responsive orbital assembly */}
          <motion.div
            className="relative flex h-full w-full items-center justify-center"
            style={{
              rotateX,
              rotateY,
              transformStyle: "preserve-3d",
            }}
          >
            {/* Outer orbit */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 24,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute h-[245px] w-[245px] rounded-full border border-purple-400/25 sm:h-[350px] sm:w-[350px]"
            >
              <span className="absolute -left-1 top-1/2 h-2.5 w-2.5 -translate-y-1/2 rounded-full bg-purple-300 shadow-[0_0_18px_rgba(168,85,247,0.9)]" />
              <span className="absolute right-[16%] top-[9%] h-1.5 w-1.5 rounded-full bg-fuchsia-300 shadow-[0_0_12px_rgba(232,121,249,0.8)]" />
            </motion.div>

            {/* Middle orbit */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute h-[195px] w-[195px] rounded-full border border-blue-400/20 sm:h-[275px] sm:w-[275px]"
            >
              <span className="absolute -right-1 top-1/2 h-2.5 w-2.5 -translate-y-1/2 rounded-full bg-blue-300 shadow-[0_0_18px_rgba(96,165,250,0.9)]" />
            </motion.div>

            {/* Inner orbit */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 16,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute h-[140px] w-[140px] rounded-full border border-fuchsia-400/20 sm:h-[195px] sm:w-[195px]"
            >
              <span className="absolute left-1/2 -top-1 h-2 w-2 -translate-x-1/2 rounded-full bg-fuchsia-300 shadow-[0_0_14px_rgba(232,121,249,0.9)]" />
            </motion.div>

            {/* Geometric core */}
            <motion.div
              animate={{
                scale: [1, 1.045, 1],
              }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative flex h-32 w-32 items-center justify-center rounded-[2rem] border border-purple-300/30 bg-gradient-to-br from-purple-400/20 via-[#09090d] to-blue-400/20 shadow-[0_0_70px_rgba(139,92,246,0.18)] backdrop-blur-2xl sm:h-40 sm:w-40"
              style={{ transform: "translateZ(45px)" }}
            >
              <div className="absolute inset-2 rounded-[1.5rem] border border-white/[0.07]" />

              <div className="relative flex h-20 w-20 items-center justify-center rounded-full border border-white/10 bg-black/60 shadow-[inset_0_0_30px_rgba(139,92,246,0.12)] sm:h-24 sm:w-24">
                <motion.div
                  animate={{
                    rotate: [0, 90, 180, 270, 360],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute inset-2 rounded-full border border-dashed border-purple-300/25"
                />

                <BrainCircuit className="h-9 w-9 text-purple-300 sm:h-11 sm:w-11" />
              </div>

              <span className="absolute -bottom-3 rounded-full border border-purple-300/20 bg-[#0a0810] px-3 py-1 text-[9px] font-medium uppercase tracking-[0.22em] text-purple-200">
                Intelligence
              </span>
            </motion.div>

            {/* Floating capability labels */}
            {orbitLabels.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.label}
                  animate={{ y: [0, index % 2 === 0 ? -8 : 8, 0] }}
                  transition={{
                    duration: 4 + index * 0.6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className={`absolute ${item.className} hidden items-center gap-2 rounded-full border border-white/10 bg-[#08080d]/80 px-3 py-2 text-[9px] uppercase tracking-[0.1em] text-zinc-400 shadow-xl backdrop-blur-xl sm:inline-flex sm:text-[10px]`}
                  style={{
                    transform: `translateZ(${20 + index * 10}px)`,
                  }}
                >
                  <Icon className={`h-3.5 w-3.5 ${item.color}`} />
                  {item.label}
                </motion.div>
              );
            })}
          </motion.div>

          {/* Interaction hint */}
          <motion.div
            animate={{ opacity: isInteracting ? 0 : 0.65 }}
            transition={{ duration: 0.25 }}
            className="pointer-events-none absolute bottom-1 flex items-center gap-2 text-[9px] uppercase tracking-[0.2em] text-zinc-500 sm:bottom-2"
          >
            <MousePointer2 className="h-3.5 w-3.5" />
            Move your cursor to interact
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#050505] to-transparent" />
    </section>
  );
}
