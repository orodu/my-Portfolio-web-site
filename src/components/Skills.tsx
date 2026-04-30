import { motion } from 'motion/react';
import { Layout, Palette, Code, Terminal, Github, Smartphone, Cpu, Zap } from 'lucide-react';

export default function Skills() {
  const mainSkills = [
    { name: 'HTML5', icon: <Layout className="text-orange-500" /> },
    { name: 'CSS3', icon: <Palette className="text-blue-500" /> },
    { name: 'JavaScript', icon: <Code className="text-yellow-400" /> },
    { name: 'React', icon: <Smartphone className="text-sky-400" /> },
  ];

  const badges = [
    'Tailwind CSS', 'Sass', 'Git/GitHub', 'Responsive Design', 
    'Redux Toolkit', 'Web Performance', 'TypeScript', 'Motion', 'Vite'
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="skills" className="py-24">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h3 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-16 text-white"
        >
          Technical Stack
        </motion.h3>
        
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {mainSkills.map((skill) => (
            <motion.div 
              key={skill.name}
              variants={item}
              className="p-8 bg-slate-900 border border-slate-800 rounded-2xl hover:border-sky-500 transition-all duration-300 group hover:-translate-y-1 shadow-xs hover:shadow-sky-500/10"
            >
              <div className="mb-4 flex justify-center transform group-hover:scale-110 transition-transform">
                {skill.icon}
              </div>
              <h4 className="font-semibold text-slate-100">{skill.name}</h4>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 flex flex-wrap justify-center gap-3"
        >
          {badges.map((badge) => (
            <span 
              key={badge} 
              className="px-4 py-2 bg-sky-500/10 border border-sky-500/20 rounded-full text-xs text-sky-300 font-medium hover:bg-sky-500/20 transition-colors"
            >
              {badge}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
