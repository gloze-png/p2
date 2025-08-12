import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaAndroid,
  FaWordpress,
  FaSearch,
  FaJava,
  FaPhp,
  FaDatabase
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
  SiLaravel,
  SiMysql,
  SiSqlite,
  SiPostgresql
} from "react-icons/si";

const techs = [
  { name: "React", icon: <FaReact className="text-blue-400" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
  { name: "Android", icon: <FaAndroid className="text-green-400" /> },
  { name: "Java", icon: <FaJava className="text-orange-500" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" /> },
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-400" /> },
  { name: "PHP", icon: <FaPhp className="text-indigo-400" /> },
  { name: "Laravel", icon: <SiLaravel className="text-red-500" /> },
  { name: "MySQL", icon: <SiMysql className="text-blue-500" /> },
  { name: "SQLite", icon: <SiSqlite className="text-gray-300" /> },
  { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-300" /> },
  { name: "WordPress", icon: <FaWordpress className="text-blue-600" /> },
  { name: "SEO", icon: <FaSearch className="text-green-300" /> }
];

const TechStack = () => {
  return (
    <section className="bg-black py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto text-center">
        {/* Section Title */}
        <h2 className="text-4xl font-bold mb-12 text-white">
        Tech Stack
        </h2>

        {/* Tech Cards */}
        <div className="grid gap-6 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {techs.map((tech, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-zinc-900 p-6 rounded-xl shadow hover:shadow-lg hover:ring-1 hover:ring-blue-400 transition duration-300"
            >
              <div className="text-5xl mb-3">{tech.icon}</div>
              <p className="text-sm font-medium text-gray-300">{tech.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
