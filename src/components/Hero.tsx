import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-6">
      <div className="max-w-4xl text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-sky-400 font-semibold mb-4 tracking-widest uppercase text-xs md:text-sm"
        >
          Front-End Engineer
        </motion.h2>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl md:text-7xl font-bold mb-6 tracking-tight text-white"
        >
          Hi, I'm <span className="gradient-text">Oroduen Fortune Chichi</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-slate-400 text-base md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          With 3 years of experience, I craft high-performance, accessible, and visually stunning web interfaces using modern technologies.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a 
            href="#projects" 
            className="group px-8 py-4 bg-sky-500 text-white font-semibold rounded-lg hover:bg-sky-400 transition-all flex items-center justify-center shadow-[0_0_20px_-5px_rgba(56,189,248,0.4)]"
          >
            View My Work 
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a 
            href="#contact" 
            className="px-8 py-4 border border-slate-800 text-slate-100 font-semibold rounded-lg hover:bg-slate-900 transition-all"
          >
            Get In Touch
          </a>
        </motion.div>
      </div>
    </section>
  );
}
