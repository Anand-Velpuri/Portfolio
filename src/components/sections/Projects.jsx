import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { GithubIcon } from '../ui/Icons';

const projects = [
  {
    title: "Price Predictor",
    description: "Fine-tuned LLaMA 3.2 3B model optimized for Amazon product price prediction, demonstrating low-level optimization and efficient AI engineering.",
    highlights: ["QLoRA fine-tuning", "4-bit quantization", "Inference optimization"],
    tech: ["LLaMA 3.2 3B", "QLoRA", "PEFT", "Transformers", "HF"],
    github: "#",
    demo: "#"
  },
  {
    title: "Deep Research",
    description: "Advanced AI experimentation and research-oriented project involving modern LLM workflows, cutting-edge retrieval, and intelligent systems.",
    highlights: ["Research focus", "Experimental LLM workflows", "Advanced Retrieval"],
    tech: ["Python", "Transformers", "Agentic AI"],
    github: "https://huggingface.co/spaces/AnandVelpuri/Deep_Research/tree/main",
    demo: "https://huggingface.co/spaces/AnandVelpuri/Deep_Research"
  }
];

function ProjectCard({ project, index }) {
  const cardRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <motion.div 
      ref={cardRef}
      style={{ opacity }}
      className="group relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-center py-20 border-b border-white/5 last:border-0"
    >
      <div className={`lg:col-span-7 relative z-10 ${index % 2 !== 0 ? 'lg:order-last' : ''}`}>
        <motion.div style={{ y }} className="relative aspect-video rounded-2xl overflow-hidden bg-white/5 border border-white/10 group-hover:border-accent/30 transition-colors duration-500">
          <div className="absolute inset-0 bg-gradient-to-tr from-card to-transparent z-10 mix-blend-multiply opacity-50"></div>
          {/* Abstract Placeholder for Project Image */}
          <div className="absolute inset-0 flex items-center justify-center text-white/5 font-heading text-6xl font-bold uppercase tracking-tighter mix-blend-overlay">
            {project.title.split(' ')[0]}
          </div>
          
          <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </motion.div>
      </div>

      <div className={`lg:col-span-5 relative z-20 ${index % 2 !== 0 ? 'lg:text-right' : ''}`}>
        <div className={`flex flex-col gap-6 ${index % 2 !== 0 ? 'items-end' : 'items-start'}`}>
          <div className="inline-flex gap-2">
            {project.tech.map((t, i) => (
              <span key={i} className="text-xs font-mono text-accent bg-accent/10 px-2 py-1 rounded">
                {t}
              </span>
            ))}
          </div>
          
          <h3 className="text-3xl md:text-4xl font-heading font-bold group-hover:text-accent transition-colors duration-300">
            {project.title}
          </h3>
          
          <div className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-2xl relative">
            <p className="text-muted-foreground leading-relaxed">
              {project.description}
            </p>
          </div>

          <ul className={`flex flex-col gap-2 ${index % 2 !== 0 ? 'items-end text-right' : 'items-start'} text-sm text-muted-foreground/80`}>
            {project.highlights.map((highlight, i) => (
              <li key={i} className="flex items-center gap-2">
                <span className={`w-1.5 h-1.5 rounded-full bg-accent/50 ${index % 2 !== 0 ? 'order-last' : ''}`}></span>
                {highlight}
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4 mt-4">
            <a href={project.github} className="p-3 bg-white/5 hover:bg-white/10 rounded-full transition-colors interactive">
              <GithubIcon className="w-5 h-5" />
            </a>
            <a href={project.demo} className="p-3 bg-white/5 hover:bg-white/10 rounded-full transition-colors interactive">
              <ExternalLink className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-32 px-6 md:px-12 bg-card relative">
      <div className="max-w-7xl mx-auto">
        <div className="mb-24">
          <h2 className="text-sm uppercase tracking-[0.2em] text-accent mb-6 font-bold">Selected Work</h2>
          <h3 className="text-4xl md:text-6xl font-heading font-bold">Featured Projects</h3>
        </div>

        <div className="flex flex-col">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
