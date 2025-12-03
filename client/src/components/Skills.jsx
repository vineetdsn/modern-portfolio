import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { SiReact, SiNextdotjs, SiJavascript, SiHtml5, SiCss3, SiTailwindcss } from "react-icons/si";

const skills = [
  { name: "React", icon: SiReact, color: "#61DAFB", gradient: "from-[#61DAFB]/20 to-[#61DAFB]/5" },
  { name: "Next.js", icon: SiNextdotjs, color: "#000000", gradient: "from-gray-900/20 to-gray-900/5" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E", gradient: "from-[#F7DF1E]/20 to-[#F7DF1E]/5" },
  { name: "HTML", icon: SiHtml5, color: "#E34F26", gradient: "from-[#E34F26]/20 to-[#E34F26]/5" },
  { name: "CSS", icon: SiCss3, color: "#1572B6", gradient: "from-[#1572B6]/20 to-[#1572B6]/5" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4", gradient: "from-[#06B6D4]/20 to-[#06B6D4]/5" },
];
// the skills

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-background to-muted/20" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-heading text-foreground">
            Skills & Technologies
          </h2>
          <h3>Head</h3>
          <div className="w-24 h-1 bg-gradient-to-r from-purple via-blue to-pink mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className={`bg-gradient-to-br ${skill.gradient} backdrop-blur-md p-6 rounded-2xl border border-border/50 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col items-center justify-center gap-4 group`}
              data-testid={`skill-${skill.name.toLowerCase().replace(/\s+/g, '-')}`}
            >
              <div className="relative">
                <div 
                  className="absolute inset-0 blur-xl opacity-50 group-hover:opacity-70 transition-opacity duration-300"
                  style={{ backgroundColor: skill.color }}
                ></div>
                <skill.icon 
                  className="w-12 h-12 relative z-10 transition-transform duration-300 group-hover:rotate-12"
                  style={{ color: skill.color }}
                />
              </div>
              <p className="font-semibold text-foreground text-center">{skill.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
