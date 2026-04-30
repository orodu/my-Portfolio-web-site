import { motion } from 'motion/react';

export default function About() {
  const stats = [
    { label: 'Years Experience', value: '3+' },
    { label: 'Projects Completed', value: '20+' },
  ];

  return (
    <section id="about" className="py-24 bg-slate-900/30">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative group"
        >
          <div className="absolute -inset-1 bg-linear-to-r from-sky-500 to-indigo-500 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
          <div className="relative bg-slate-900 p-2 rounded-2xl border border-slate-800">
            <div className="w-full aspect-square bg-slate-800 rounded-xl overflow-hidden flex items-center justify-center">
              <img 
                src="https://res.cloudinary.com/dhd0kxufl/image/upload/v1772301874/profile_emfwpc.png" 
                alt="Oroduen Fortune Chichi" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 hover:scale-105"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-3xl font-bold mb-6 text-white tracking-tight">About Me</h3>
          <p className="text-slate-400 mb-6 leading-relaxed">
            Hello! I'm Oroduen Fortune Chichi, a passionate Front-End Developer based in Nigeria. Over the past 3 years, I've dedicated myself to bridging the gap between design and functionality. 
          </p>
          <p className="text-slate-400 mb-8 leading-relaxed">
            I specialize in building scalable applications with React and ensuring every pixel is perfectly placed using modern CSS architectures. My goal is to create digital experiences that are not just beautiful, but also performant and user-centric.
          </p>
          
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat) => (
              <div key={stat.label} className="p-6 bg-slate-900/50 rounded-xl border border-slate-800 backdrop-blur-sm">
                <span className="text-sky-400 block font-bold text-3xl mb-1">{stat.value}</span>
                <span className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">{stat.label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
