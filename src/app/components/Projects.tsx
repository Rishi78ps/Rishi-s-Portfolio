import { useState } from "react";
import { ExternalLink, Github, Smartphone, Globe, Box, Cpu, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export function Projects() {
  const projects = [
    {
      title: "Pixel Fix",
      description: "A full-stack image processing web application designed to help users seamlessly edit, process, and enhance images directly in the browser.",
      type: "Web App",
      icon: Globe,
      image: "/pixelfix.jpg",
      tags: ["React", "Node.js", "JavaScript"],
      github: "https://github.com/Rishi78ps/Pixel-Fix",
      demo: "https://pixel-fix.onrender.com",
      accent: "from-blue-600/20 to-cyan-600/20",
    },
    {
      title: "Volunteering Platform",
      description: "An enterprise-level platform built during my internship to manage volunteering missions, featuring role-based dashboards, and timesheets.",
      type: "Full-Stack Enterprise",
      icon: Box,
      image: "/tatvasoft.jpg",
      tags: ["Angular", ".NET Core", "C#", "PostgreSQL"],
      github: "https://github.com/Rishi78ps/Tatva-soft-Internship",
      demo: null,
      accent: "from-purple-600/20 to-pink-600/20",
    },
    {
      title: "Interior Design Using AR",
      description: "An Augmented Reality Android application that allows users to visualize and accurately place 3D furniture models into their real-world environment.",
      type: "Mobile AR App",
      icon: Smartphone,
      image: "/ar-app.jpg",
      tags: ["Java", "Android SDK", "ARCore", "Sceneform"],
      github: "https://github.com/Rishi78ps/Interior-Design-Using-AR",
      demo: null,
      accent: "from-emerald-600/20 to-teal-600/20",
    },
    {
      title: "Vision For You",
      description: "An assistive technology system combining microcontrollers and Generative AI to capture environmental images and provide descriptive audio feedback.",
      type: "Hardware & AI",
      icon: Cpu,
      image: "/vision.jpg",
      tags: ["Python", "Arduino", "Generative AI", "Gradio"],
      github: "https://github.com/Rishi78ps/Vision_For_You",
      demo: null,
      accent: "from-orange-600/20 to-red-600/20",
    }
  ];

  const [page, setPage] = useState(0);
  const [direction, setDirection] = useState(0);

  // Safely wrap the index so it loops back to 0 after the last project
  const wrapIndex = (pageIndex: number, max: number) => {
    return ((pageIndex % max) + max) % max;
  };

  const projectIndex = wrapIndex(page, projects.length);
  const activeProject = projects[projectIndex];

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setPage(page + newDirection);
  };

  // The animation settings for sliding pages left and right
  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.95
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.95
    })
  };

  return (
    <section id="projects" className="py-32 bg-zinc-950 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-900/10 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-zinc-100 tracking-tight mb-4">
              Selected <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Works</span>
            </h2>
            <p className="text-zinc-400 max-w-xl">
              Flipping through a showcase of my expertise across web development, mobile AR, enterprise systems, and AI hardware.
            </p>
          </div>
          
          {/* Top Pagination Info */}
          <div className="text-zinc-500 font-mono text-sm uppercase tracking-widest font-semibold flex items-center gap-2 bg-zinc-900/50 px-4 py-2 rounded-full border border-zinc-800">
            Page <span className="text-zinc-200 text-lg">{projectIndex + 1}</span> of {projects.length}
          </div>
        </motion.div>
        
        {/* SLIDER CONTAINER WITH ANIMATED BORDER */}
        <motion.div 
          animate={{
            borderColor: ["#3b82f6", "#8b5cf6", "#ec4899", "#8b5cf6", "#3b82f6"],
            boxShadow: [
              "0 0 15px rgba(59, 130, 246, 0.15)",
              "0 0 15px rgba(139, 92, 246, 0.15)",
              "0 0 15px rgba(236, 72, 153, 0.15)",
              "0 0 15px rgba(139, 92, 246, 0.15)",
              "0 0 15px rgba(59, 130, 246, 0.15)",
            ]
          }}
          transition={{ 
            duration: 4, // 4 seconds total = 1 second per color phase
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="relative w-full overflow-hidden rounded-[2rem] bg-zinc-900/40 border-[2px] backdrop-blur-md min-h-[500px]"
        >
          
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={page}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ x: { type: "spring", stiffness: 300, damping: 30 }, opacity: { duration: 0.2 } }}
              className="w-full flex flex-col lg:flex-row h-full"
            >
              
              {/* LEFT SIDE: Image Showcase */}
              <div className="relative w-full lg:w-1/2 min-h-[300px] lg:min-h-[500px] p-8 flex items-center justify-center bg-zinc-950/80 border-b lg:border-b-0 lg:border-r border-zinc-800/50">
                {/* Subtle gradient behind image */}
                <div className={`absolute inset-0 opacity-30 bg-gradient-to-br ${activeProject.accent} blur-2xl`} />
                
                {/* Floating Type Badge */}
                <div className="absolute top-6 left-6 z-20 px-4 py-2 bg-zinc-900/90 backdrop-blur-md rounded-full border border-zinc-700/50 flex items-center gap-2 shadow-lg">
                  <activeProject.icon className="w-4 h-4 text-zinc-300" />
                  <span className="text-[11px] font-mono text-zinc-300 uppercase tracking-widest font-bold">{activeProject.type}</span>
                </div>

                <img 
                  src={activeProject.image} 
                  alt={activeProject.title} 
                  className="relative z-10 w-full h-full object-contain max-h-[400px] drop-shadow-2xl"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop";
                  }}
                />
              </div>
              
              {/* RIGHT SIDE: Content & Details */}
              <div className="w-full lg:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                <h3 className="text-3xl md:text-4xl font-bold text-zinc-100 mb-6 tracking-tight">
                  {activeProject.title}
                </h3>
                
                <p className="text-zinc-400 text-base md:text-lg leading-relaxed mb-8 font-light flex-grow">
                  {activeProject.description}
                </p>
                
                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-2 mb-10">
                  {activeProject.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-4 py-1.5 bg-zinc-950/80 text-zinc-300 rounded-lg text-xs font-semibold tracking-wide border border-zinc-800 transition-colors shadow-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Bottom Controls Area */}
                <div className="flex flex-wrap items-center justify-between gap-6 pt-6 border-t border-zinc-800/50 mt-auto">
                  
                  {/* Links */}
                  <div className="flex gap-3">
                    {activeProject.github && (
                      <a 
                        href={activeProject.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-5 py-2.5 bg-zinc-950 rounded-xl text-zinc-300 hover:text-white hover:bg-zinc-800 transition-all border border-zinc-800 hover:border-zinc-600 shadow-lg font-medium text-sm group"
                      >
                        <Github className="w-4 h-4 group-hover:scale-110 transition-transform" /> Code
                      </a>
                    )}
                    {activeProject.demo && (
                      <a 
                        href={activeProject.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-5 py-2.5 bg-white text-black rounded-xl hover:bg-zinc-200 transition-all border border-white shadow-[0_0_15px_rgba(255,255,255,0.2)] hover:shadow-[0_0_20px_rgba(255,255,255,0.4)] font-bold text-sm group"
                      >
                        <ExternalLink className="w-4 h-4 group-hover:scale-110 transition-transform" /> Live Demo
                      </a>
                    )}
                  </div>

                  {/* Navigation Arrows */}
                  <div className="flex items-center gap-2">
                    <button 
                      onClick={() => paginate(-1)}
                      className="p-3 bg-zinc-950 border border-zinc-800 rounded-full hover:bg-zinc-800 hover:border-zinc-600 hover:text-white text-zinc-400 transition-all active:scale-95 shadow-lg"
                      aria-label="Previous Project"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    
                    <button 
                      onClick={() => paginate(1)}
                      className="p-3 bg-zinc-950 border border-zinc-800 rounded-full hover:bg-zinc-800 hover:border-zinc-600 hover:text-white text-zinc-400 transition-all active:scale-95 shadow-lg"
                      aria-label="Next Project"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>

                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}