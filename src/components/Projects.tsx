import { motion } from 'motion/react';
import { ExternalLink, Github, Laptop, Smartphone } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'E-Commerce Dashboard',
      description: 'A complex admin panel built with React and Tailwind, featuring real-time data visualization and inventory management.',
      tags: ['React', 'Chart.js', 'Tailwind'],
      icon: <Laptop className="w-10 h-10 text-slate-500" />,
    },
    {
      title: 'Modern Travel UI',
      description: 'High-performance landing page for a travel startup focusing on smooth animations and accessibility.',
      tags: ['HTML5', 'GSAP', 'Next.js'],
      icon: <Smartphone className="w-10 h-10 text-slate-500" />,
    },
    {
      title: 'CFO Farms',
      description: 'A small and medium scale farm website showcasing products, services, and responsive farm management features.',
      tags: ['React', 'Tailwind', 'Vercel'],
      icon: <Laptop className="w-10 h-10 text-slate-500" />,
      githubLink: 'https://github.com/orodu/cfo-farms',
      liveLink: 'https://cfo-farms.vercel.app/',
    },
    {
      title: 'Invoice App',
      description: 'A modern invoice application for creating, managing, and exporting bills with a clean responsive interface.',
      tags: ['React', 'Tailwind', 'Vercel'],
      icon: <Smartphone className="w-10 h-10 text-slate-500" />,
      githubLink: 'https://github.com/orodu/invoice-app',
      liveLink: 'https://invoice-app-jade-gamma.vercel.app/',
    }
  ];

  return (
    <section id="projects" className="py-24 bg-slate-900/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16">
          <motion.h3 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-4 text-white"
          >
            Selected Work
          </motion.h3>
          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-400"
          >
            A showcase of recent front-end development projects.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div 
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 hover:border-sky-500/50 transition-all duration-500"
            >
              <div className="h-64 bg-slate-800 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-linear-to-b from-transparent to-slate-900/80 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="transform group-hover:scale-110 transition-transform duration-500">
                  {project.icon}
                </div>
              </div>
              
              <div className="p-8">
                <h4 className="text-xl font-bold mb-3 text-white flex items-center justify-between">
                  {project.title}
                  <div className="flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    {project.githubLink && (
                      <a href={project.githubLink} target="_blank" rel="noreferrer" aria-label={`${project.title} GitHub`}>
                        <Github size={18} className="text-slate-500 hover:text-white cursor-pointer" />
                      </a>
                    )}
                    {project.liveLink && (
                      <a href={project.liveLink} target="_blank" rel="noreferrer" aria-label={`${project.title} Live site`}>
                        <ExternalLink size={18} className="text-slate-500 hover:text-white cursor-pointer" />
                      </a>
                    )}
                  </div>
                </h4>
                <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex gap-4">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[10px] text-sky-400 font-bold font-mono tracking-wider uppercase">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
