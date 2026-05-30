"use client";

export default function Stack() {
  const technologies = [
    "Python",
    "JavaScript",
    "Java",
    "TypeScript",
    "React",
    "Next.js",
    "Tailwind CSS",
    "FastAPI",
    "MongoDB",
    "MySQL",
  ];

  return (
    <section
      id="stack"
      className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6"
    >
      <div className="max-w-6xl w-full">
        <p className="text-zinc-500 tracking-[0.3em] mb-4">
          /STACK
        </p>

        <h2 className="text-5xl md:text-7xl font-bold mb-6">
          Neural Technology Network
        </h2>

        <p className="text-zinc-400 max-w-2xl mb-16">
          Technologies connected through projects,
          experiments, and intelligent systems.
        </p>

        <div className="relative flex flex-wrap gap-6 justify-center">
          {technologies.map((tech) => (
            <div
              key={tech}
              className="
                rounded-full
                border
                border-white/10
                bg-white/5
                backdrop-blur-md
                px-6
                py-4
                hover:border-white/30
                hover:scale-110
                transition-all
                duration-300
              "
            >
              {tech}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}