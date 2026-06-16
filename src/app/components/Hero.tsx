import { motion } from 'motion/react';
import { Github, Linkedin, Mail, ChevronDown, Instagram } from 'lucide-react';
import { useState, useEffect } from 'react';
import profileImage from '../../../IMG_1507.JPG';

const ROLES = ['CS Student', 'Web Developer', 'AI Enthusiast', 'Photographer', 'Backend Dev'];

export function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const current = ROLES[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;
    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 45);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIndex((i) => (i + 1) % ROLES.length);
    }
    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIndex]);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-[#0a0a0a] to-cyan-900/20" />
      
      {/* Cursor Effect */}
      <motion.div
        className="absolute w-96 h-96 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none"
        animate={{
          x: mousePosition.x - 192,
          y: mousePosition.y - 192,
        }}
        transition={{ type: 'spring', stiffness: 50, damping: 20 }}
      />

      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.05)_1px,transparent_1px)] bg-[size:50px_50px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block mb-4 px-4 py-2 border border-cyan-500/30 rounded-full text-cyan-400"
            >
              Welcome to my portfolio
            </motion.div>

            <h1 className="mb-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-gray-300 mb-2"
              >
                Hi, I'm
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-5xl md:text-7xl bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4"
              >
                Charan K M
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-2xl md:text-3xl text-gray-400 flex items-center gap-1"
              >
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent min-w-[2ch]">{displayed}</span>
                <span className="w-0.5 h-7 bg-cyan-400 animate-pulse inline-block rounded" />
              </motion.div>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-gray-400 mb-8 text-lg max-w-xl"
            >
              Final year Computer Science Engineering student at S J C Institute of Technology, 
              passionate about building innovative solutions and exploring new technologies.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap gap-4 mb-8"
            >
              <button
                onClick={scrollToContact}
                className="group relative px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(6,182,212,0.5)]"
              >
                <span className="relative z-10">Get In Touch</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>

              <a
                href="https://github.com/charan-km777"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 border border-cyan-500/50 rounded-lg hover:bg-cyan-500/10 transition-all hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(6,182,212,0.3)]"
              >
                View Projects
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex gap-4"
            >
              <a
                href="https://github.com/charan-km777"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 border border-cyan-500/30 rounded-lg hover:bg-cyan-500/10 hover:border-cyan-400 transition-all hover:scale-110"
              >
                <Github className="w-5 h-5 text-cyan-400" />
              </a>
              <a
                href="https://linkedin.com/in/charan-km-840186293"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 border border-cyan-500/30 rounded-lg hover:bg-cyan-500/10 hover:border-cyan-400 transition-all hover:scale-110"
              >
                <Linkedin className="w-5 h-5 text-cyan-400" />
              </a>
              <a
                href="mailto:charanghost7@gmail.com"
                className="p-3 border border-cyan-500/30 rounded-lg hover:bg-cyan-500/10 hover:border-cyan-400 transition-all hover:scale-110"
              >
                <Mail className="w-5 h-5 text-cyan-400" />
              </a>
              <a
                href="https://instagram.com/_charan_k_m_"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 border border-cyan-500/30 rounded-lg hover:bg-pink-500/10 hover:border-pink-400 transition-all hover:scale-110"
              >
                <Instagram className="w-5 h-5 text-pink-400" />
              </a>
              <a
                href="https://vsco.co/charanghost7/gallery"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 border border-cyan-500/30 rounded-lg hover:bg-cyan-500/10 hover:border-cyan-400 transition-all hover:scale-110"
                title="VSCO"
              >
                <svg className="w-5 h-5 text-cyan-400" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 4.5a7.5 7.5 0 1 1 0 15 7.5 7.5 0 0 1 0-15zm0 2.5a5 5 0 1 0 0 10A5 5 0 0 0 12 7zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6z"/>
                </svg>
              </a>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative group">
              {/* Neon Border Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity animate-pulse" />

              <div className="relative rounded-2xl overflow-hidden border border-cyan-500/30">
                <img
                  src={profileImage}
                  alt="Charan K M"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
              </div>

              {/* Floating CGPA badge */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
                className="absolute -top-4 -right-4 bg-[#0a0a0a] border border-cyan-500/50 rounded-xl px-4 py-2 shadow-[0_0_20px_rgba(6,182,212,0.3)]"
              >
                <div className="text-xs text-gray-400">CGPA</div>
                <div className="text-lg font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">8.34</div>
              </motion.div>

              {/* Floating available badge */}
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ repeat: Infinity, duration: 3.5, ease: 'easeInOut', delay: 0.5 }}
                className="absolute -bottom-4 -left-4 bg-[#0a0a0a] border border-emerald-500/50 rounded-xl px-4 py-2 shadow-[0_0_20px_rgba(16,185,129,0.3)] flex items-center gap-2"
              >
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <div className="text-xs text-emerald-400 font-medium">Open to Internships</div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <ChevronDown className="w-8 h-8 text-cyan-400" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}