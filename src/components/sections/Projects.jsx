import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ExternalLink, Database, FlaskConical } from 'lucide-react';
import { GithubIcon } from '../ui/Icons';

const projects = [
  {
    title: "Network Security",
    description: "A production-grade ML system that detects phishing websites by extracting 30 security features from URLs and classifying them using ensemble models. Implements a complete MLOps lifecycle — from data ingestion and experiment tracking to containerized deployment on AWS with CI/CD automation. Features a 4-stage ML pipeline with Kolmogorov-Smirnov drift detection, GridSearchCV model selection across 5 classifiers, and a FastAPI app with real-time URL scanning.",
    highlights: ["30-Feature URL Extraction", "End-to-End MLOps Pipeline", "AWS CI/CD Deployment"],
    tech: ["Scikit-Learn", "FastAPI", "MLflow", "Docker", "AWS"],
    github: "https://github.com/Anand-Velpuri/NetworkSecurity",
    demo: "https://netsec.anandvelpuri.me",
    mlflowLink: "https://dagshub.com/anandvelpuri/NetworkSecurity.mlflow/",
    image: "/netsec-preview.png"
  },
  {
    title: "Price Is Right",
    description: "An autonomous agentic AI system built entirely from scratch (zero frameworks) that scans for underpriced products, estimates true market value using a multi-model ensemble, and pushes real-time notifications. The core is a fine-tuned Llama 3.2-3B deployed on Modal.com, achieving ~$40 mean prediction error (outperforming GPT-5.1 and Claude 4.5). The entire pipeline is orchestrated by a custom 120B planning agent via Baseten and backed by a Hybrid RAG system via ChromaDB.",
    highlights: ["Llama 3.2-3B Fine-Tuning", "Hybrid RAG (ChromaDB)", "Custom Zero-Framework Agents"],
    tech: ["Llama 3.2-3B", "Modal", "Baseten", "ChromaDB", "Hybrid RAG"],
    github: "https://huggingface.co/spaces/AnandVelpuri/Price-Is-Right/tree/main",
    demo: "https://huggingface.co/spaces/AnandVelpuri/Price-Is-Right",
    video: "https://res.cloudinary.com/dzunpdnje/video/upload/v1779270379/ScreenFlow_xf1zjb.mp4"
  },
  {
    title: "Deep Research",
    description: "An autonomous research agent built using the OpenAI Agents SDK. It combines AI reasoning with real-world web data by integrating Google Custom Search and Selenium to scrape accurate, up-to-date information on any topic, compiles actionable insights, and automatically emails the results for a truly hands-free experience.",
    highlights: ["OpenAI Agents SDK", "Selenium Web Scraping", "Automated Email Delivery"],
    tech: ["Python", "OpenAI Agents SDK", "Selenium", "Google Custom Search"],
    github: "https://huggingface.co/spaces/AnandVelpuri/Deep_Research/tree/main",
    demo: "https://huggingface.co/spaces/AnandVelpuri/Deep_Research",
    iframe: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7379889507443195905?compact=1"
  },
  {
    title: "Food Not Food Text Classifier",
    description: "A fine-tuned DistilBERT NLP model deployed via Hugging Face Spaces to accurately classify text descriptions as either 'food' or 'not food'. Built with an interactive Gradio interface for real-time text evaluation and trained on a custom curated dataset.",
    highlights: ["DistilBERT Fine-Tuning", "Hugging Face Spaces", "Custom Dataset"],
    tech: ["DistilBERT", "Gradio", "Hugging Face", "Python"],
    modelLink: "https://huggingface.co/AnandVelpuri/food_not_food_text_classifier-distilbert-base-uncased",
    datasetLink: "https://huggingface.co/datasets/AnandVelpuri/items_raw_full",
    iframe: "https://anandvelpuri-food-not-food-text-classifier-demo.hf.space"
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
          <div className="absolute inset-0 bg-gradient-to-tr from-card to-transparent z-10 mix-blend-multiply opacity-50 pointer-events-none"></div>
          
          {project.video ? (
            <video 
              src={project.video} 
              autoPlay 
              loop 
              muted 
              playsInline 
              className="absolute inset-0 w-full h-full object-cover"
            />
          ) : project.image ? (
            <img 
              src={project.image} 
              alt={`${project.title} Preview`}
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
            />
          ) : project.iframe ? (
            <div className="absolute inset-0 w-full h-full bg-white flex items-center justify-center">
              <iframe 
                src={project.iframe}
                frameBorder="0"
                allowFullScreen=""
                title={`${project.title} Embedded Post`}
                className="w-full h-full border-none"
              ></iframe>
            </div>
          ) : (
            <div className="absolute inset-0 flex items-center justify-center text-white/5 font-heading text-6xl font-bold uppercase tracking-tighter mix-blend-overlay">
              {project.title.split(' ')[0]}
            </div>
          )}
          
          <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none"></div>
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
            {project.github && (
              <a href={project.github} target="_blank" rel="noreferrer" className="p-3 bg-white/5 hover:bg-white/10 rounded-full transition-colors interactive flex items-center justify-center w-11 h-11" title="GitHub / Source">
                <GithubIcon className="w-5 h-5" />
              </a>
            )}
            {project.mlflowLink && (
              <a href={project.mlflowLink} target="_blank" rel="noreferrer" className="p-3 bg-white/5 hover:bg-white/10 rounded-full transition-colors interactive flex items-center justify-center w-11 h-11" title="MLflow Experiments">
                <FlaskConical className="w-5 h-5" />
              </a>
            )}
            {project.modelLink && (
              <a href={project.modelLink} target="_blank" rel="noreferrer" className="p-3 bg-white/5 hover:bg-white/10 rounded-full transition-colors interactive text-lg leading-none flex items-center justify-center w-11 h-11" title="Hugging Face Model">
                🤗
              </a>
            )}
            {project.datasetLink && (
              <a href={project.datasetLink} target="_blank" rel="noreferrer" className="p-3 bg-white/5 hover:bg-white/10 rounded-full transition-colors interactive flex items-center justify-center w-11 h-11" title="Dataset">
                <Database className="w-5 h-5" />
              </a>
            )}
            {project.demo && (
              <a href={project.demo} target="_blank" rel="noreferrer" className="p-3 bg-white/5 hover:bg-white/10 rounded-full transition-colors interactive flex items-center justify-center w-11 h-11" title="Live Demo">
                <ExternalLink className="w-5 h-5" />
              </a>
            )}
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
