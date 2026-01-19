import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
export function Hero() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #8338ec 0%, #3a86ff 50%, #ff006e 100%)"
      }}
    >
      <div className="absolute inset-0 bg-black/10"></div>
      
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-72 h-72 bg-yellow rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-orange rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-white rounded-full blur-3xl"></div>
      </div>
      {/* This is hero navigation */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-heading text-white drop-shadow-2xl">
              Hi, I'm <span className="bg-white/20 backdrop-blur-sm px-6 py-2 rounded-3xl border-2 border-white/30">Vineet</span>
            </h1>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl md:text-2xl lg:text-3xl font-medium mb-4 text-white/95 drop-shadow-lg"
          >
            Frontend Developer & Freelancer with 2+ Years of Experience
          </motion.p>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base md:text-lg lg:text-xl mb-12 text-white/90 max-w-2xl mx-auto leading-relaxed drop-shadow"
          >
            I craft modern, responsive, and beautiful web interfaces using React and Next.js.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button 
              size="lg"
              onClick={() => scrollToSection("projects")}
              className="bg-white/20 backdrop-blur-md border-2 border-white/40 text-white hover:bg-white/30 px-8 py-6 text-lg rounded-full shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl min-h-12"
              data-testid="button-view-work"
            >
              View My Work
            </Button>
            <Button 
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("contact")}
              className="bg-white/20 backdrop-blur-md border-2 border-white/40 text-white hover:bg-white/30 px-8 py-6 text-lg rounded-full shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl min-h-12"
              data-testid="button-contact-me"
            >
              Contact Me
            </Button>
          </motion.div>
        </div>
      </div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        onClick={() => scrollToSection("about")}
        data-testid="button-scroll-down"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown className="w-8 h-8 text-white drop-shadow-lg" />
        </motion.div>
      </motion.div>
    </section>
  );
}
