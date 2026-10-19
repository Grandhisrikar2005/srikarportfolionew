
import { ArrowUp, ArrowUpRight, Sparkles } from "lucide-react";

const GITHUB_URL = "https://github.com/Grandhisrikar2005";
const LINKEDIN_URL =
  "https://www.linkedin.com/in/grandhi-venkata-sai-srikar";
const EMAIL = "srikargvs2005@gmail.com";

const navigation = [
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Projects", id: "projects" },
  { label: "Experience", id: "experience" },
  { label: "Certifications", id: "certifications" },
  { label: "Contact", id: "contact" },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <footer className="relative overflow-hidden border-t border-white/[0.08] bg-[#050505] px-5 py-12 text-white sm:px-10 lg:px-16">
      {/* Subtle background glow */}
      <div className="pointer-events-none absolute -bottom-32 left-1/4 h-64 w-64 rounded-full bg-purple-600/[0.06] blur-[100px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Main footer */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr] lg:gap-12">
          {/* Brand */}
          <div>
            <button
              type="button"
              onClick={scrollToTop}
              className="group inline-flex items-center gap-3 text-left"
              aria-label="Return to the top of the portfolio"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-purple-400/20 bg-gradient-to-br from-purple-500/20 to-blue-500/10 text-sm font-semibold text-white transition-colors group-hover:border-purple-400/40">
                GS
              </span>

              <span>
                <span className="block text-sm font-semibold tracking-wide">
                  Srikar
                </span>
                <span className="mt-1 block text-[10px] uppercase tracking-[0.2em] text-purple-400">
                  AI / ML Engineer
                </span>
              </span>
            </button>

            <p className="mt-5 max-w-sm text-sm leading-7 text-zinc-500">
              Building intelligent systems and modern digital experiences
              through AI, machine learning, and software engineering.
            </p>

            <div className="mt-5 flex items-center gap-2 text-xs text-zinc-600">
              <Sparkles className="h-3.5 w-3.5 text-purple-400" />
              <span>Always learning. Always building.</span>
            </div>
          </div>

          {/* Quick navigation */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-300">
              Explore
            </h3>

            <div className="mt-5 grid grid-cols-2 gap-x-5 gap-y-3">
              {navigation.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => scrollToSection(item.id)}
                  className="w-fit text-left text-sm text-zinc-500 transition-colors hover:text-purple-300"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-300">
              Connect
            </h3>

            <p className="mt-5 text-sm leading-6 text-zinc-500">
              Have an idea or an interesting opportunity? Let's connect.
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.025] px-4 py-2.5 text-xs text-zinc-400 transition-colors hover:border-purple-400/30 hover:text-white"
              >
                GitHub
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>

              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.025] px-4 py-2.5 text-xs text-zinc-400 transition-colors hover:border-blue-400/30 hover:text-white"
              >
                LinkedIn
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </div>

            <a
              href={`mailto:${EMAIL}`}
              className="mt-4 inline-block break-all text-sm text-zinc-500 transition-colors hover:text-purple-300"
            >
              {EMAIL}
            </a>
          </div>
        </div>

        {/* Copyright and back-to-top */}
        <div className="mt-12 flex flex-col gap-5 border-t border-white/[0.07] pt-6 sm:mt-14 sm:flex-row sm:items-center sm:justify-between">
          <div className="text-xs leading-6 text-zinc-600">
            <p>
              © {new Date().getFullYear()} Srikar. All rights reserved.
            </p>
            <p className="mt-1">Designed & built with React.</p>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="group inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/[0.025] px-4 py-2.5 text-xs text-zinc-400 transition-all hover:border-purple-400/30 hover:bg-purple-500/10 hover:text-white"
            aria-label="Back to top"
          >
            Back to top
            <ArrowUp className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
