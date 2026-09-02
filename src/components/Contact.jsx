import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Mail,
  Copy,
  Check,
} from "lucide-react";

const GITHUB_URL = "https://github.com/Grandhisrikar2005";
const LINKEDIN_URL =
  "https://www.linkedin.com/in/grandhi-venkata-sai-srikar";

const EMAIL = "srikargvs2005@gmail.com";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (error) {
      console.error("Unable to copy email:", error);
    }
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#050505] px-6 py-32 text-white sm:px-10 lg:px-16"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-600/[0.08] blur-[180px]" />

      <div className="mx-auto max-w-5xl">

        {/* Main Contact Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-purple-500/[0.09] via-white/[0.025] to-blue-500/[0.06] p-8 text-center sm:p-12 lg:p-16"
        >
          {/* Decorative elements */}
          <div className="pointer-events-none absolute -left-24 -top-24 h-64 w-64 rounded-full bg-purple-500/[0.10] blur-[100px]" />

          <div className="pointer-events-none absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-blue-500/[0.08] blur-[100px]" />

          <div className="relative">

            {/* Label */}
            <div className="mb-7 flex items-center justify-center gap-3">
              <span className="h-px w-10 bg-purple-500" />

              <span className="text-sm uppercase tracking-[0.25em] text-purple-400">
                Get In Touch
              </span>

              <span className="h-px w-10 bg-purple-500" />
            </div>

            {/* Heading */}
            <h2 className="mx-auto max-w-4xl text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
              Let&apos;s build something{" "}
              <span className="bg-gradient-to-r from-purple-400 via-fuchsia-400 to-blue-400 bg-clip-text text-transparent">
                intelligent.
              </span>
            </h2>

            {/* Description */}
            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-zinc-400 sm:text-lg">
              Whether it&apos;s an AI/ML project, a full-stack application,
              or an interesting idea worth exploring, I&apos;d love to
              connect and build something meaningful.
            </p>

            {/* Email */}
            <div className="mx-auto mt-10 flex max-w-xl flex-col items-center justify-center gap-3 sm:flex-row">

              {/* Email Button */}
              <a
                href={`mailto:${EMAIL}`}
                className="group inline-flex w-full items-center justify-center gap-3 rounded-full border border-purple-400/20 bg-purple-500/10 px-6 py-3.5 text-sm font-medium text-purple-200 transition-all duration-300 hover:border-purple-400/40 hover:bg-purple-500/20 sm:w-auto"
              >
                <Mail className="h-4 w-4" />

                {EMAIL}

                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>

              {/* Copy Email */}
              <button
                onClick={copyEmail}
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-5 py-3.5 text-sm text-zinc-300 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.07] hover:text-white sm:w-auto"
              >
                {copied ? (
                  <>
                    <Check className="h-4 w-4 text-green-400" />
                    Copied
                  </>
                ) : (
                  <>
                    <Copy className="h-4 w-4" />
                    Copy Email
                  </>
                )}
              </button>
            </div>

            {/* Social Links */}
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">

              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/20 px-5 py-2.5 text-sm text-zinc-400 transition-all duration-300 hover:border-white/20 hover:text-white"
              >
                GitHub
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>

              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/20 px-5 py-2.5 text-sm text-zinc-400 transition-all duration-300 hover:border-white/20 hover:text-white"
              >
                LinkedIn
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>

            </div>

            {/* Availability */}
            <div className="mt-10 flex items-center justify-center gap-2 text-xs text-zinc-600">
              <span className="h-1.5 w-1.5 rounded-full bg-green-400 shadow-[0_0_10px_rgba(74,222,128,0.7)]" />
              Open to opportunities and interesting projects
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}