
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Mail,
  Copy,
  Check,
  Sparkles,
} from "lucide-react";

const GITHUB_URL = "https://github.com/Grandhisrikar2005";
const LINKEDIN_URL =
  "https://www.linkedin.com/in/grandhi-venkata-sai-srikar";
const EMAIL = "srikargvs2005@gmail.com";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;

    const timeout = setTimeout(() => setCopied(false), 2000);
    return () => clearTimeout(timeout);
  }, [copied]);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
    } catch (error) {
      console.error("Unable to copy email:", error);
      window.location.href = `mailto:${EMAIL}`;
    }
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#050505] px-5 py-24 text-white sm:px-10 sm:py-32 lg:px-16"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-600/[0.09] blur-[160px] sm:h-[650px] sm:w-[650px]" />

      <div className="relative mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65 }}
          className="group relative overflow-hidden rounded-[2rem] border border-white/[0.1] bg-gradient-to-br from-purple-500/[0.09] via-white/[0.025] to-blue-500/[0.06] p-6 text-center sm:p-10 md:p-14 lg:p-16"
        >
          {/* Decorative glow */}
          <div className="pointer-events-none absolute -left-24 -top-24 h-64 w-64 rounded-full bg-purple-500/[0.10] blur-[100px]" />
          <div className="pointer-events-none absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-blue-500/[0.10] blur-[100px]" />

          <div className="relative">
            {/* Section label */}
            <div className="mb-7 flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-purple-500 sm:w-10" />
              <span className="text-xs uppercase tracking-[0.22em] text-purple-400 sm:text-sm sm:tracking-[0.25em]">
                Get in touch
              </span>
              <span className="h-px w-8 bg-purple-500 sm:w-10" />
            </div>

            {/* Heading */}
            <h2 className="mx-auto max-w-4xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Let's build something{" "}
              <span className="bg-gradient-to-r from-purple-400 via-fuchsia-400 to-blue-400 bg-clip-text text-transparent">
                intelligent.
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-zinc-400 sm:mt-6 sm:text-lg sm:leading-8">
              Have an idea, an AI/ML project, or an opportunity to collaborate?
              I'd love to connect, exchange ideas, and build something
              meaningful.
            </p>

            {/* Email actions */}
            <div className="mx-auto mt-8 flex max-w-xl flex-col items-stretch justify-center gap-3 sm:mt-10 sm:flex-row sm:items-center">
              <a
                href={`mailto:${EMAIL}`}
                className="group/email inline-flex min-h-12 items-center justify-center gap-2.5 rounded-full border border-purple-400/30 bg-purple-500/15 px-5 py-3 text-sm font-medium text-purple-200 transition-all duration-300 hover:border-purple-400/50 hover:bg-purple-500/25 sm:px-6"
              >
                <Mail className="h-4 w-4 shrink-0" />
                <span className="break-all">{EMAIL}</span>
                <ArrowUpRight className="h-4 w-4 shrink-0 transition-transform duration-300 group-hover/email:-translate-y-0.5 group-hover/email:translate-x-0.5" />
              </a>

              <button
                type="button"
                onClick={copyEmail}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-5 py-3 text-sm text-zinc-300 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.08] hover:text-white"
                aria-label="Copy email address"
              >
                {copied ? (
                  <>
                    <Check className="h-4 w-4 text-green-400" />
                    Copied!
                  </>
                ) : (
                  <>
                    <Copy className="h-4 w-4" />
                    Copy email
                  </>
                )}
              </button>
            </div>

            {/* Social links */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:mt-10">
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit GitHub profile"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/20 px-5 py-2.5 text-sm text-zinc-400 transition-all duration-300 hover:border-purple-400/30 hover:text-white"
              >
                <span className="text-sm font-bold" aria-hidden="true">
                  GH
                </span>
                GitHub
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>

              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit LinkedIn profile"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/20 px-5 py-2.5 text-sm text-zinc-400 transition-all duration-300 hover:border-blue-400/30 hover:text-white"
              >
                <span className="text-sm font-bold" aria-hidden="true">
                  in
                </span>
                LinkedIn
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </div>

            {/* Footer status */}
            <div className="mt-9 flex flex-wrap items-center justify-center gap-x-2 gap-y-2 text-xs text-zinc-500 sm:mt-10">
              <Sparkles className="h-3.5 w-3.5 text-purple-400" />
              <span>Open to meaningful collaborations</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
