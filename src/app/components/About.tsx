import { motion } from 'motion/react';
import { Code2, GraduationCap, Award, BookOpen, Camera, Instagram, Music, Globe } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

export function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stats = [
    { icon: Code2, label: 'Projects Completed', value: '4+' },
    { icon: GraduationCap, label: 'CGPA', value: '8.34' },
    { icon: Award, label: 'Certifications', value: '3' },
    { icon: BookOpen, label: 'Year of Study', value: 'Final' },
  ];

  return (
    <section id="about" className="relative py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {/* Section Title */}
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-5xl mb-4 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent inline-block"
            >
              About Me
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={inView ? { opacity: 1, scaleX: 1 } : {}}
              transition={{ delay: 0.3 }}
              className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto"
            />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4 }}
            >
              <h3 className="text-3xl mb-6 text-white">
                Budding developer passionate about building innovative solutions
              </h3>
              <p className="text-gray-400 mb-4">
                I'm currently pursuing my final year in Computer Science Engineering at 
                S J C Institute of Technology, Chickballapur, Karnataka, maintaining a CGPA of 8.34. 
                As a budding developer, I'm enthusiastic about exploring emerging technologies and 
                building projects that solve real-world problems.
              </p>
              <p className="text-gray-400 mb-4">
                My expertise spans across web development, blockchain technology, and AI integration. 
                I've worked with modern frameworks like React.js, Node.js, and have hands-on 
                experience with cloud platforms including AWS and Azure. I'm passionate about 
                creating efficient, scalable solutions and continuously learning new technologies.
              </p>
              <p className="text-gray-400">
                I've completed certifications in Networking Essentials, Getting Started with AWS, 
                and Microsoft Azure. Currently seeking internship opportunities to apply my skills 
                and contribute to innovative projects while gaining industry experience.
              </p>
            </motion.div>

            {/* Stats Grid */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="grid grid-cols-2 gap-6"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="relative group"
                >
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl blur opacity-30 group-hover:opacity-60 transition-opacity" />
                  <div className="relative bg-[#0a0a0a] border border-cyan-500/30 rounded-xl p-6 hover:border-cyan-400 transition-all">
                    <stat.icon className="w-10 h-10 text-cyan-400 mb-4" />
                    <div className="text-3xl mb-2 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                      {stat.value}
                    </div>
                    <div className="text-gray-400 text-sm">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Hobbies & Interests */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.55 }}
            className="mt-16"
          >
            <h3 className="text-2xl mb-8 text-center text-white">Hobbies & Interests</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Photography */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6 }}
                className="relative group"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-500 to-purple-500 rounded-2xl blur opacity-20 group-hover:opacity-50 transition-opacity" />
                <div className="relative bg-[#0a0a0a] border border-pink-500/30 rounded-2xl p-6 hover:border-pink-400 transition-all text-center">
                  <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-br from-pink-500/20 to-purple-500/20 border border-pink-500/30 flex items-center justify-center group-hover:shadow-[0_0_20px_rgba(236,72,153,0.4)] transition-all">
                    <Camera className="w-7 h-7 text-pink-400" />
                  </div>
                  <h4 className="text-white font-semibold mb-2">Photography</h4>
                  <p className="text-gray-400 text-sm mb-4">Capturing moments through the lens — portrait, nature & street photography.</p>
                  <div className="flex flex-col gap-2">
                    <a
                      href="https://vsco.co/charanghost7/gallery"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-pink-500/10 to-purple-500/10 border border-pink-500/30 rounded-lg text-pink-300 text-xs hover:border-pink-400 hover:bg-pink-500/20 transition-all"
                    >
                      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 4.5a7.5 7.5 0 1 1 0 15 7.5 7.5 0 0 1 0-15zm0 2.5a5 5 0 1 0 0 10A5 5 0 0 0 12 7zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6z"/>
                      </svg>
                      VSCO Gallery
                    </a>
                    <a
                      href="https://instagram.com/_charan_k_m_"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-500/10 to-pink-500/10 border border-pink-500/30 rounded-lg text-pink-300 text-xs hover:border-pink-400 hover:bg-pink-500/20 transition-all"
                    >
                      <Instagram className="w-3.5 h-3.5" />
                      @_charan_k_m_
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* Coding */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.65 }}
                className="relative group"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl blur opacity-20 group-hover:opacity-50 transition-opacity" />
                <div className="relative bg-[#0a0a0a] border border-cyan-500/30 rounded-2xl p-6 hover:border-cyan-400 transition-all text-center">
                  <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 flex items-center justify-center group-hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all">
                    <Code2 className="w-7 h-7 text-cyan-400" />
                  </div>
                  <h4 className="text-white font-semibold mb-2">Open Source & Hacking</h4>
                  <p className="text-gray-400 text-sm">Building side projects, exploring new frameworks, and contributing to open source.</p>
                </div>
              </motion.div>

              {/* Music */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.7 }}
                className="relative group"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-2xl blur opacity-20 group-hover:opacity-50 transition-opacity" />
                <div className="relative bg-[#0a0a0a] border border-purple-500/30 rounded-2xl p-6 hover:border-purple-400 transition-all text-center">
                  <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-br from-purple-500/20 to-indigo-500/20 border border-purple-500/30 flex items-center justify-center group-hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] transition-all">
                    <Music className="w-7 h-7 text-purple-400" />
                  </div>
                  <h4 className="text-white font-semibold mb-2">Music</h4>
                  <p className="text-gray-400 text-sm">Listening to a wide range of genres — from lo-fi beats while coding to Carnatic classics.</p>
                </div>
              </motion.div>

              {/* Exploring */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.75 }}
                className="relative group"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl blur opacity-20 group-hover:opacity-50 transition-opacity" />
                <div className="relative bg-[#0a0a0a] border border-emerald-500/30 rounded-2xl p-6 hover:border-emerald-400 transition-all text-center">
                  <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-br from-emerald-500/20 to-teal-500/20 border border-emerald-500/30 flex items-center justify-center group-hover:shadow-[0_0_20px_rgba(16,185,129,0.4)] transition-all">
                    <Globe className="w-7 h-7 text-emerald-400" />
                  </div>
                  <h4 className="text-white font-semibold mb-2">Exploring & Travel</h4>
                  <p className="text-gray-400 text-sm">Discovering new places across Karnataka and beyond — always with a camera in hand.</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6 }}
            className="mt-20"
          >
            <h3 className="text-3xl mb-12 text-center text-white">My Journey</h3>
            <div className="space-y-8">
              {[
                {
                  year: '2023 - Present',
                  title: 'Computer Science Engineering Student',
                  company: 'S J C Institute of Technology, Chickballapur',
                  description: 'Currently pursuing B.E. in Computer Science Engineering with 8.34 CGPA. Building projects and learning cutting-edge technologies.',
                },
                {
                  year: '2024',
                  title: 'Certifications',
                  company: 'AWS, Microsoft Azure, Cisco',
                  description: 'Completed certifications in Networking Essentials, Getting Started with AWS, and Microsoft Azure to strengthen cloud computing knowledge.',
                },
                {
                  year: '2023 - 2024',
                  title: 'Project Development',
                  company: 'Academic & Personal Projects',
                  description: 'Developed multiple projects including HealthSense AI, PLACE_arc, PriceWISE, and MathSetu using various tech stacks and frameworks.',
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  className="relative pl-8 border-l-2 border-cyan-500/30 hover:border-cyan-400 transition-colors"
                >
                  <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.8)]" />
                  <div className="text-cyan-400 mb-2">{item.year}</div>
                  <h4 className="text-xl mb-1 text-white">{item.title}</h4>
                  <div className="text-purple-400 mb-2">{item.company}</div>
                  <p className="text-gray-400">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}