
import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Brain,
  Code2,
  Globe,
  Database,
  Wrench,
  Layers3,
  Sparkles,
  Search,
  X,
  ArrowUpRight,
  Terminal,
} from "lucide-react";

const skillGroups = [
  {
    icon: Brain,
    title: "AI & Machine Learning",
    description:
      "Technologies and concepts behind intelligent and predictive systems.",
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
      "Programming languages and foundations used across projects.",
    skills: ["Python", "Java", "JavaScript", "C", "SQL"],
  },
  {
    icon: Globe,
    title: "Full-Stack Development",
    description:
      "Technologies for building interactive and responsive web applications.",
    skills: ["React", "HTML", "CSS", "Node.js", "Express.js", "MERN"],
  },
  {
    icon: Database,
    title: "Data & Databases",
    description:
      "Data preparation, analysis, storage, and retrieval technologies.",
    skills: ["MySQL", "MongoDB", "Data Processing", "Data Analysis"],
  },
  {
    icon: Layers3,
    title: "Development Tools",
    description:
      "Tools for developing, managing, and maintaining software projects.",
    skills: ["Git", "GitHub", "VS Code", "PyCharm", "Cursor"],
  },
  {
    icon: Wrench,
    title: "Core Computer Science",
    description:
      "Foundational concepts for structured and reliable software development.",
    skills: [
      "Object-Oriented Programming",
      "Data Structures",
      "Algorithms",
      "REST APIs",
      "Problem Solving",
    ],
  },
];

const filters = [
  "All",
  "AI & ML",
  "Programming",
  "Web Development",
  "Data",
  "Tools",
  "Computer Science",
];

const filterMap = {
  "AI & ML": ["AI & Machine Learning"],
  Programming: ["Programming"],
  "Web Development": ["Full-Stack Development"],
  Data: ["Data & Databases"],
  Tools: ["Development Tools"],
  "Computer Science": ["Core Computer Science"],
};

export default function Skills() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const visibleGroups = useMemo(() => {
    const query = searchTerm.trim().toLowerCase();

    return skillGroups
      .map((group) => ({
        ...group,
        skills: group.skills.filter((skill) =>
          skill.toLowerCase().includes(query)
        ),
      }))
      .filter((group) => {
        const matchesFilter =
          activeFilter === "All" ||
          filterMap[activeFilter]?.includes(group.title);

        const matchesSearch =
          !query ||
          group.title.toLowerCase().includes(query) ||
          group.description.toLowerCase().includes(query) ||
          group.skills.length > 0;

        return matchesFilter && matchesSearch;
      });
  }, [activeFilter, searchTerm]);

  const totalSkills = skillGroups.reduce(
    (total, group) => total + group.skills.length,
    0
  );

  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-[#050505] px-6 py-28 text-white sm:px-10 lg:px-16"
    >
      {/* Ambient lighting */}
      <div className="pointer-events-none absolute right-[-10%] top-[10%] h-[500px] w-[500px] rounded-full bg-blue-600/[0.08] blur-[160px]" />
      <div className="pointer-events-none absolute bottom-[5%] left-[-15%] h-[400px] w-[400px] rounded-full bg-purple-600/[0.07] blur-[150px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="mb-12"
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
                Explore the technologies, programming foundations,
                and engineering concepts I work with to build
                intelligent applications and practical software.
              </p>
            </div>

            <div className="flex w-fit items-center gap-3 rounded-2xl border border-purple-400/15 bg-purple-500/[0.06] px-4 py-3">
              <Sparkles className="h-5 w-5 text-purple-400" />
              <div>
                <p className="text-sm font-semibold text-white">
                  AI / ML Focused
                </p>
                <p className="mt-1 text-xs text-zinc-500">
                  Learning through building
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Summary strip */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8 grid grid-cols-2 gap-3 sm:grid-cols-3"
        >
          {[
            {
              icon: Brain,
              value: "AI / ML",
              label: "Primary focus",
            },
            {
              icon: Terminal,
              value: "6",
              label: "Skill categories",
            },
            {
              icon: Code2,
              value: String(totalSkills).padStart(2, "0"),
              label: "Listed skills",
            },
          ].map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.label}
                className="rounded-2xl border border-white/[0.08] bg-white/[0.025] p-4 sm:p-5"
              >
                <Icon className="h-4 w-4 text-purple-400" />
                <p className="mt-3 text-xl font-semibold text-white sm:text-2xl">
                  {item.value}
                </p>
                <p className="mt-1 text-xs text-zinc-500">
                  {item.label}
                </p>
              </div>
            );
          })}
        </motion.div>

        {/* Search */}
        <div className="mb-5">
          <label
            htmlFor="skill-search"
            className="mb-2 block text-xs font-medium uppercase tracking-[0.16em] text-zinc-500"
          >
            Find a technology
          </label>

          <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-4 transition-colors focus-within:border-purple-400/40">
            <Search className="h-4 w-4 shrink-0 text-zinc-500" />

            <input
              id="skill-search"
              type="search"
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              placeholder="Search Python, React, Machine Learning..."
              className="w-full bg-transparent py-4 text-sm text-white outline-none placeholder:text-zinc-600"
            />

            {searchTerm && (
              <button
                type="button"
                onClick={() => setSearchTerm("")}
                aria-label="Clear search"
                className="rounded-lg p-1 text-zinc-500 transition-colors hover:text-white"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>
        </div>

        {/* Category filters */}
        <div className="mb-8 flex gap-2 overflow-x-auto pb-2">
          {filters.map((filter) => {
            const selected = activeFilter === filter;

            return (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                aria-pressed={selected}
                className={`shrink-0 rounded-full border px-4 py-2.5 text-xs font-medium transition-all duration-300 ${
                  selected
                    ? "border-purple-400/40 bg-purple-500/15 text-purple-200 shadow-[0_0_20px_rgba(139,92,246,0.08)]"
                    : "border-white/10 bg-white/[0.025] text-zinc-400 hover:border-white/20 hover:text-white"
                }`}
              >
                {filter}
              </button>
            );
          })}
        </div>

        {/* Interactive skill cards */}
        <motion.div
          layout
          className="grid gap-5 md:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {visibleGroups.map((group, index) => {
              const Icon = group.icon;

              return (
                <motion.article
                  layout
                  key={group.title}
                  initial={{ opacity: 0, y: 20, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.98 }}
                  transition={{
                    duration: 0.3,
                    delay: index * 0.04,
                  }}
                  whileHover={{ y: -5 }}
                  className={`group relative overflow-hidden rounded-3xl border p-6 transition-colors duration-300 sm:p-7 ${
                    group.featured
                      ? "border-purple-400/20 bg-gradient-to-br from-purple-500/[0.10] via-white/[0.03] to-blue-500/[0.05] hover:border-purple-400/35"
                      : "border-white/10 bg-white/[0.025] hover:border-white/20 hover:bg-white/[0.04]"
                  }`}
                >
                  <div className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-purple-500/[0.07] blur-[70px] transition-colors duration-500 group-hover:bg-purple-500/[0.14]" />

                  <div className="relative">
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

                    <h3 className="mt-6 text-xl font-semibold text-white">
                      {group.title}
                    </h3>

                    <p className="mt-2 min-h-[48px] text-sm leading-6 text-zinc-500">
                      {group.description}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {group.skills.map((skill) => (
                        <motion.span
                          layout
                          key={skill}
                          className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-zinc-300 transition-all duration-300 hover:border-purple-400/30 hover:bg-purple-500/[0.08] hover:text-purple-100"
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>

                    <div className="mt-6 flex items-center justify-between border-t border-white/[0.07] pt-4">
                      <span className="text-[10px] uppercase tracking-[0.16em] text-zinc-600">
                        Technologies
                      </span>

                      <span className="text-xs text-zinc-400">
                        {group.skills.length} listed
                      </span>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Empty search state */}
        {visibleGroups.length === 0 && (
          <div className="rounded-3xl border border-white/10 bg-white/[0.025] px-6 py-14 text-center">
            <Search className="mx-auto h-8 w-8 text-zinc-600" />

            <h3 className="mt-4 text-lg font-semibold text-white">
              No matching skills found
            </h3>

            <p className="mt-2 text-sm text-zinc-500">
              Try a different keyword or select another category.
            </p>

            <button
              type="button"
              onClick={() => {
                setSearchTerm("");
                setActiveFilter("All");
              }}
              className="mt-5 inline-flex items-center gap-2 text-sm text-purple-300 transition-colors hover:text-purple-200"
            >
              Reset filters
              <ArrowUpRight className="h-4 w-4" />
            </button>
          </div>
        )}

        {/* Bottom summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-10 grid gap-4 md:grid-cols-3"
        >
          {[
            {
              label: "Primary Domain",
              value: "Artificial Intelligence & Machine Learning",
            },
            {
              label: "Development",
              value: "Full-Stack Web Applications",
            },
            {
              label: "Engineering Approach",
              value: "Learn · Build · Evaluate · Improve",
            },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-white/10 bg-white/[0.025] p-5"
            >
              <p className="text-xs uppercase tracking-[0.18em] text-zinc-600">
                {item.label}
              </p>

              <p className="mt-2 text-sm font-medium leading-6 text-zinc-200">
                {item.value}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
