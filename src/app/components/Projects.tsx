import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      title: 'HealthSense AI',
      description:
        'An efficient chronic disease predictor utilizing machine learning algorithms to predict and analyze health conditions. Features include real-time health monitoring and personalized health recommendations.',
      image: 'https://images.unsplash.com/photo-1753715613831-9e48eac86813?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RpbmclMjBwcm9qZWN0JTIwc2NyZWVufGVufDF8fHx8MTc2NTQ2Mjk5Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['React.js', 'Python', 'CSS', 'MongoDB', 'ML'],
      github: 'https://github.com/charan-km777',
      demo: 'https://example.com',
    },
    {
      title: 'PLACE_arc',
      description:
        'Comprehensive placement drive management system designed to streamline campus recruitment processes. Includes student tracking, company management, and automated notifications using Twilio integration.',
      image: 'https://images.unsplash.com/photo-1764303017761-2f94cb677efe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB0ZWNoJTIwYmFja2dyb3VuZHxlbnwxfHx8fDE3NjU0ODAwNzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['React.js', 'Node.js', 'TypeScript', 'Supabase', 'Twilio'],
      github: 'https://github.com/charan-km777',
      demo: 'https://example.com',
    },
    {
      title: 'PriceWISE',
      description:
        'The smart shopping tracker that helps users monitor product prices across multiple e-commerce platforms. Features web scraping, price alerts, and historical price tracking for informed purchasing decisions.',
      image: 'https://images.unsplash.com/photo-1719400471588-575b23e27bd7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBkZXZlbG9wZXIlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzY1NDUxODY1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['Python', 'HTML', 'Web Scraping', 'MongoDB'],
      github: 'https://github.com/charan-km777',
      demo: 'https://example.com',
    },
    {
      title: 'MathSetu',
      description:
        'Decentralized voting system built on blockchain technology ensuring transparent and secure elections. Features include SHA-256 encryption, OAuth2 authentication, and cross-platform support with Flutter and React Native.',
      image: 'https://images.unsplash.com/photo-1753715613831-9e48eac86813?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RpbmclMjBwcm9qZWN0JTIwc2NyZWVufGVufDF8fHx8MTc2NTQ2Mjk5Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['Blockchain', 'Ethereum', 'PostgreSQL', 'Flutter', 'React Native', 'Node.js'],
      github: 'https://github.com/charan-km777',
      demo: 'https://example.com',
    },
  ];

  return (
    <section id="projects" className="relative py-20 px-6">
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
              Featured Projects
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={inView ? { opacity: 1, scaleX: 1 } : {}}
              transition={{ delay: 0.3 }}
              className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto"
            />
            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.4 }}
              className="mt-4 text-gray-400 max-w-2xl mx-auto"
            >
              Here are some of my recent projects that showcase my skills and expertise
              in building modern web applications.
            </motion.p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="relative group"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition-opacity" />
                <div className="relative bg-[#0a0a0a] border border-cyan-500/30 rounded-2xl overflow-hidden hover:border-cyan-400 transition-all">
                  {/* Project Image */}
                  <div className="relative h-48 overflow-hidden">
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent opacity-60" />
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/90 to-purple-900/90 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-colors"
                      >
                        <Github className="w-6 h-6 text-white" />
                      </a>
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-colors"
                      >
                        <ExternalLink className="w-6 h-6 text-white" />
                      </a>
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="p-6">
                    <h3 className="text-xl mb-3 text-white group-hover:text-cyan-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 mb-4 text-sm">
                      {project.description}
                    </p>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400 text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* View More Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8 }}
            className="mt-12 text-center"
          >
            <a
              href="https://github.com/charan-km777"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] transition-all hover:scale-105"
            >
              <Github className="w-5 h-5" />
              View All Projects on GitHub
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}