import { ArrowUp, ArrowUpRight } from "lucide-react";

const GITHUB_URL = "https://github.com/Grandhisrikar2005";
const LINKEDIN_URL =
  "https://www.linkedin.com/in/grandhi-venkata-sai-srikar";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#050505] px-6 py-10 text-white sm:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">

        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-sm font-semibold">
                GS
              </div>

              <div>
                <p className="text-sm font-medium text-white">
                  Srikar
                </p>

                <p className="text-[9px] uppercase tracking-[0.2em] text-zinc-600">
                  AI / ML Engineer
                </p>
              </div>
            </div>

            <p className="mt-4 max-w-sm text-xs leading-6 text-zinc-600">
              Building intelligent systems and modern digital experiences
              through AI, machine learning, and software engineering.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap items-center gap-3">

            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.025] px-4 py-2.5 text-xs text-zinc-500 transition-all duration-300 hover:border-white/20 hover:text-white"
            >
              GitHub
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>

            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.025] px-4 py-2.5 text-xs text-zinc-500 transition-all duration-300 hover:border-white/20 hover:text-white"
            >
              LinkedIn
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>

            <button
              onClick={scrollToTop}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.025] text-zinc-500 transition-all duration-300 hover:border-purple-400/30 hover:bg-purple-500/10 hover:text-white"
              aria-label="Back to top"
            >
              <ArrowUp className="h-4 w-4" />
            </button>

          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 flex flex-col gap-3 border-t border-white/5 pt-6 text-[11px] text-zinc-700 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Srikar. All rights reserved.
          </p>

          <p>
            Designed & built with React
          </p>
        </div>

      </div>
    </footer>
  );
}