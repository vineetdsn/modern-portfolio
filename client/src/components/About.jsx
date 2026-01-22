import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 bg-background" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-heading text-foreground">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue via-purple to-pink mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue via-purple to-pink rounded-3xl blur-2xl opacity-30"></div>
              <img 
                src="/assets/images/Vineet_professional_developer_portrait_2dfbe94a.png" 
                alt="Vineet - Frontend Developer"
                className="relative rounded-3xl shadow-2xl w-full max-w-md object-cover"
                data-testid="img-profile"
              />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            <p className="text-lg text-foreground leading-relaxed">
              Hey there! I'm Vineet, a passionate frontend developer who turned my love for creating beautiful web experiences into a thriving freelance career. For the past 2+ years, I've been helping businesses and individuals bring their digital visions to life.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              My journey started with curiosity about how websites work, and it quickly evolved into a deep passion for crafting pixel-perfect, user-friendly interfaces. I specialize in React and Next.js, always staying updated with the latest web technologies to deliver modern, performant solutions.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              When I'm not coding, you'll find me exploring new design trends, contributing to open-source projects, or helping fellow developers in the community. I believe in writing clean, maintainable code and creating experiences that users love.
            </p>
            <div className="pt-4">
              <h3 className="text-xl font-semibold mb-4 font-heading text-foreground">Quick Stats</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-blue/20 to-purple/20 backdrop-blur-sm p-4 rounded-2xl border border-blue/30" data-testid="stat-experience">
                  <p className="text-3xl font-bold text-foreground font-heading">2+</p>
                  <p className="text-sm text-muted-foreground">Years Experience</p>
                </div>
                <div className="bg-gradient-to-br from-pink/20 to-orange/20 backdrop-blur-sm p-4 rounded-2xl border border-pink/30" data-testid="stat-projects">
                  <p className="text-3xl font-bold text-foreground font-heading">8+</p>
                  <p className="text-sm text-muted-foreground">Projects Completed</p>
                  <p className="text-sm text-muted-foreground">Projects Completed</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
// herb