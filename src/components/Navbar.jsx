import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";

const navItems = [
  { name: "About", id: "about" },
  { name: "Skills", id: "skills" },
  { name: "Projects", id: "projects" },
  { name: "Experience", id: "experience" },
  { name: "Certifications", id: "certifications" },
  { name: "Contact", id: "contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavigation = (id) => {
    const element = document.getElementById(id);

    if (!element) {
      console.log("Section not found:", id);
      return;
    }

    // Update the URL
    window.history.pushState(null, "", `#${id}`);

    // Force the browser to scroll
    setTimeout(() => {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 50);

    setMenuOpen(false);
  };

  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-4 pt-4 sm:px-6">
      <nav className="mx-auto max-w-7xl rounded-2xl border border-white/10 bg-black/80 px-4 py-3 shadow-2xl backdrop-blur-xl sm:px-5">

        <div className="flex items-center justify-between">

          {/* Logo */}
          <button
            onClick={() => handleNavigation("hero")}
            className="group flex items-center gap-3"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.05] text-sm font-semibold transition-all group-hover:border-purple-400/30 group-hover:bg-purple-500/10">
              GS
            </div>

            <div className="hidden text-left sm:block">
              <p className="text-sm font-medium text-white">
                Srikar
              </p>

              <p className="text-[9px] uppercase tracking-[0.2em] text-zinc-600">
                AI / ML Engineer
              </p>
            </div>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigation(item.id)}
                className="rounded-lg px-3 py-2 text-xs font-medium text-zinc-400 transition-all duration-300 hover:bg-white/[0.05] hover:text-white"
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-2">

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-xs font-medium text-zinc-300 transition-all hover:border-purple-400/30 hover:bg-purple-500/10 hover:text-white sm:inline-flex"
            >
              Resume
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>

            {/* Mobile Menu */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-zinc-300 transition-all hover:border-purple-400/30 hover:text-white lg:hidden"
            >
              {menuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="overflow-hidden lg:hidden"
            >
              <div className="mt-3 border-t border-white/10 pt-3">
                <div className="grid gap-1">

                  {navItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => handleNavigation(item.id)}
                      className="rounded-xl px-4 py-3 text-left text-sm text-zinc-400 transition-all hover:bg-white/[0.05] hover:text-white"
                    >
                      {item.name}
                    </button>
                  ))}

                  <a
                    href="/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 rounded-xl border border-white/10 px-4 py-3 text-left text-sm text-zinc-300 transition-all hover:border-purple-400/30 hover:text-white sm:hidden"
                  >
                    Resume ↗
                  </a>

                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </nav>
    </header>
  );
}