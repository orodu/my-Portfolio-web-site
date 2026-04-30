import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, Github, Linkedin, Twitter, Mail } from 'lucide-react';

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccess(true);
      setFormState({ name: '', email: '', message: '' });
      setTimeout(() => setShowSuccess(false), 5000);
    }, 1500);
  };

  const socialLinks = [
    { icon: <Github />, href: '#' },
    { icon: <Linkedin />, href: '#' },
    { icon: <Twitter />, href: '#' },
    { icon: <Mail />, href: 'mailto:chichioroduen@gmail.com' },
  ];

  return (
    <section id="contact" className="py-24">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.h3 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-4 text-white"
        >
          Let's Work Together
        </motion.h3>
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-slate-400 mb-16 max-w-2xl mx-auto"
        >
          I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-slate-900 border border-slate-800 p-8 md:p-12 rounded-3xl text-left shadow-xl"
        >
          <form onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2 px-1">Name</label>
                <input 
                  type="text" 
                  required
                  value={formState.name}
                  onChange={e => setFormState({...formState, name: e.target.value})}
                  placeholder="Your Name" 
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-sky-500 transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2 px-1">Email</label>
                <input 
                  type="email" 
                  required
                  value={formState.email}
                  onChange={e => setFormState({...formState, email: e.target.value})}
                  placeholder="email@example.com" 
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-sky-500 transition-colors"
                />
              </div>
            </div>
            <div className="mb-8">
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2 px-1">Message</label>
              <textarea 
                rows={5} 
                required
                value={formState.message}
                onChange={e => setFormState({...formState, message: e.target.value})}
                placeholder="Your Message..." 
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-sky-500 transition-colors resize-none"
              ></textarea>
            </div>
            <button 
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-sky-500 text-white font-bold py-4 rounded-xl hover:bg-sky-400 transition-all transform active:scale-[0.98] flex items-center justify-center gap-2 shadow-lg shadow-sky-500/20 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Sending...' : (
                <>
                  Send Message
                  <Send size={18} />
                </>
              )}
            </button>
            <AnimatePresence>
              {showSuccess && (
                <motion.div 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mt-6 text-center text-emerald-400 font-medium text-sm flex items-center justify-center gap-2"
                >
                  <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>
                  Message sent successfully! I'll be in touch soon.
                </motion.div>
              )}
            </AnimatePresence>
          </form>
        </motion.div>

        <div className="mt-16 flex justify-center space-x-10">
          {socialLinks.map((link, i) => (
            <motion.a 
              key={i}
              href={link.href} 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + (i * 0.1) }}
              className="text-slate-500 hover:text-white transition-colors"
            >
              {link.icon}
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
