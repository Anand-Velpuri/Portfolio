import { motion } from 'framer-motion';
import { SiPytorch, SiFastapi, SiPostgresql, SiSqlalchemy, SiJsonwebtokens, SiHuggingface, SiCplusplus, SiTensorflow, SiMlflow, SiOpenai, SiGit, SiGithub } from 'react-icons/si';
import { FaRobot, FaBrain, FaNetworkWired, FaTools, FaDatabase, FaServer, FaCloud, FaEye, FaChartLine, FaProjectDiagram, FaLink, FaAws } from 'react-icons/fa';
import { BsCpu, BsBoxSeam, BsGear } from 'react-icons/bs';

const AirflowIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" {...props}>
    <path fill="#017cee" d="m2.544 127 60.81-62.332a1.124 1.124 0 0 0 .135-1.437c-3.698-5.162-10.521-6.058-13.05-9.527-7.49-10.275-9.39-16.092-12.61-15.73a1 1 0 0 0-.585.308L15.278 60.8C2.64 73.744.824 102.275.496 126.167a1.19 1.19 0 0 0 2.048.833"/>
    <path fill="#00ad46" d="M126.99 125.46 64.658 64.647a1.124 1.124 0 0 0-1.439-.136c-5.162 3.7-6.058 10.521-9.527 13.05-10.275 7.49-16.092 9.391-15.73 12.61a1 1 0 0 0 .308.583l22.518 21.966c12.944 12.638 41.475 14.454 65.367 14.782a1.19 1.19 0 0 0 .835-2.041z"/>
    <path fill="#04d659" d="M60.792 112.72c-7.076-6.903-10.355-20.559 3.206-48.719-22.046 9.853-29.771 22.803-25.972 26.511z"/>
    <path fill="#00c7d4" d="M125.45 1.011 64.643 63.343a1.12 1.12 0 0 0-.136 1.437c3.7 5.163 10.52 6.058 13.05 9.527 7.49 10.275 9.393 16.092 12.61 15.73a.98.98 0 0 0 .585-.308l21.966-22.518c12.638-12.944 14.454-41.475 14.782-65.367a1.193 1.193 0 0 0-2.05-.832z"/>
    <path fill="#11e1ee" d="M112.73 67.211c-6.903 7.076-20.559 10.355-48.721-3.206 9.853 22.046 22.803 29.771 26.511 25.972z"/>
    <path fill="#e43921" d="m1.002 2.55 62.332 60.807a1.124 1.124 0 0 0 1.436.135c5.163-3.7 6.058-10.52 9.527-13.05 10.275-7.49 16.092-9.39 15.731-12.61a1 1 0 0 0-.308-.584L67.202 15.282C54.258 2.644 25.727.828 1.835.5a1.19 1.19 0 0 0-.833 2.05"/>
    <path fill="#ff7557" d="M67.212 15.284c7.076 6.904 10.355 20.559-3.206 48.721C86.052 54.153 93.777 41.2 89.978 37.494z"/>
    <path fill="#0cb6ff" d="M15.279 60.8C22.183 53.724 35.838 50.445 64 64.006 54.148 41.96 41.197 34.235 37.489 38.034z"/>
    <circle cx="64.009" cy="63.995" r="2.718" fill="#4a4848"/>
  </svg>
);

const DvcIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="24" height="24" style={{ opacity: 1 }} {...props}>
    <path fill="#13adc7" d="M2 20.4V8.452a.27.27 0 0 1 .238-.3a.3.3 0 0 1 .078 0h4.676a6.64 6.64 0 0 1 4.751 1.877a6.03 6.03 0 0 1 .1 8.848l-.1.091a6.7 6.7 0 0 1-4.751 1.879H2.319a.3.3 0 0 1-.237-.076c0-.151-.082-.226-.082-.371m3.009-2.328h1.825a3.56 3.56 0 0 0 2.613-1.052a3.47 3.47 0 0 0 1.026-2.629a3.546 3.546 0 0 0-3.507-3.6H5.012Z"/>
    <path fill="#945dd6" d="M15.627 23.775L9.685 11.607c-.08-.15-.08-.225 0-.3a.42.42 0 0 1 .316-.15h2.534c.159 0 .238.075.318.226l3.167 6.609h.08l3.167-6.609c.08-.151.158-.226.317-.226h2.534a.42.42 0 0 1 .316.15a.22.22 0 0 1 0 .3L16.5 23.775c-.079.15-.158.225-.317.225h-.163c-.237-.075-.393-.15-.393-.225"/>
    <path fill="#f46737" d="M20.376 19.043a6.02 6.02 0 0 1-1.98-4.582a6.02 6.02 0 0 1 1.98-4.582A6.7 6.7 0 0 1 25.207 8A6.74 6.74 0 0 1 29.8 9.654c.158.151.158.3 0 .526l-1.506 1.427a.307.307 0 0 1-.415.056a.3.3 0 0 1-.059-.056a3.85 3.85 0 0 0-2.534-.9a3.63 3.63 0 0 0-2.693 1.126a3.58 3.58 0 0 0-1.027 2.629a3.5 3.5 0 0 0 1.109 2.554a3.46 3.46 0 0 0 2.692 1.052a3.86 3.86 0 0 0 2.535-.9a.31.31 0 0 1 .417-.055a.3.3 0 0 1 .058.055l1.505 1.5a.274.274 0 0 1 .058.4a.3.3 0 0 1-.058.055a6.33 6.33 0 0 1-4.594 1.727a6.52 6.52 0 0 1-4.912-1.807"/>
  </svg>
);

const FlaskIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" {...props}>
    <path fill="currentColor" d="M44.44 100.63c-4.23-3.33-8.74-6.52-11.83-11.01-6.49-7.92-11.49-17.1-14.9-26.74-2.07-6.27-2.77-12.99-5.44-19.02-2.78-4.38.48-9.16 5.27-10.55 2.13-.41 5.89-2.43 1.36-.98-4.06 2.98-4.45-2.71-.29-3.07 2.84-.38 3.89-2.7 2.92-4.8-3.05-1.99 7.4-4.18 2.14-7.15-5.48-5.91 7.66-7.05 4.42-.33-.77 5.16 9.18-.95 6.87 5.01 2.35 2.86 8.8.65 8.63 4.67 3.42.24 4.6 3.11 7.8 3.33 3.33 1.5 9.36 2.69 10.49 6.44-3.3 2.61-10.95-5.4-11.31 1.84 1 10.69.74 21.7 4.65 31.88 1.85 6.16 6.33 11.01 10.38 15.81 3.88 4.7 9.12 8.01 14.48 10.8 4.69 2.21 9.75 3.68 14.87 4.6 2.07-1.59 5.74-7.48 8.97-5 .16 2.8-6.42 5.84-.31 5.54 3.59-1.08 6.08 2.77 9.04-.71 2.72 3.23 11.32-2.06 9.38 4.53-2.62 1.69-6.44.67-9.07 3-4.33-2.16-7.77 1.93-12.56 1.42-5.32.95-10.73 1.34-16.13 1.34-8.85-.7-17.89-.99-26.3-4.07-4.74-1.38-9.37-4.08-13.53-6.78z"/>
  </svg>
);

export default function Skills() {
  const skillCategories = [
    {
      title: "LLM Engineering",
      skills: ["OpenAI", "Anthropic", "Gemini", "QLoRA", "LoRA", "PEFT", "Quantization", "llama.cpp", "GGUF Pipelines", "Transformers", "HF Hub"]
    },
    {
      title: "Agentic AI",
      skills: ["LangGraph", "LangChain", "CrewAI", "Multi-Agent Systems", "Agentic RAG", "Tool-Calling", "Long-Term Memory"]
    },
    {
      title: "Backend & Infra",
      skills: ["FastAPI", "Flask", "PostgreSQL", "MongoDB", "MySQL", "SQLAlchemy", "JWT / AES", "AWS", "Modal.com", "Docker", "Vercel", "HF Spaces", "Git", "GitHub", "DVC", "DagsHub", "Apache Airflow"]
    },
    {
      title: "AI Systems",
      skills: ["RAG Pipelines", "Vector DBs", "Chroma", "LLM Inference Opt", "PyTorch", "TensorFlow", "MLflow", "scikit-learn", "Forecasting", "Computer Vision"]
    }
  ];

  const skillIcons = {
    "OpenAI": { icon: SiOpenai, color: "#ffffff" },
    "Anthropic": { url: "/icons/anthropic.svg" },
    "Gemini": { url: "/icons/gemini.svg" },
    "QLoRA": { icon: BsCpu, color: "#F472B6" },
    "LoRA": { icon: BsCpu, color: "#F472B6" },
    "PEFT": { icon: FaProjectDiagram, color: "#FBBF24" },
    "Quantization": { icon: BsBoxSeam, color: "#60A5FA" },
    "llama.cpp": { url: "/icons/llama.svg" },
    "GGUF Pipelines": { icon: FaNetworkWired, color: "#818CF8" },
    "Transformers": { url: "/icons/huggingface.svg" },
    "HF Hub": { url: "/icons/huggingface.svg" },
    "LangGraph": { url: "/icons/langgraph.svg" },
    "LangChain": { url: "/icons/langchain.svg" },
    "CrewAI": { url: "/icons/crewai.svg" },
    "Multi-Agent Systems": { icon: FaRobot, color: "#A78BFA" },
    "Agentic RAG": { icon: FaBrain, color: "#38BDF8" },
    "Tool-Calling": { icon: FaTools, color: "#F87171" },
    "Long-Term Memory": { icon: FaDatabase, color: "#C084FC" },
    "FastAPI": { url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg" },
    "Flask": { icon: FlaskIcon, color: "#ffffff" },
    "PostgreSQL": { url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
    "MongoDB": { url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" },
    "MySQL": { url: "/icons/mysql.svg" },
    "SQLAlchemy": { icon: SiSqlalchemy, color: "#D71F00" },
    "JWT / AES": { icon: SiJsonwebtokens, color: "#F43F5E" },
    "AWS": { icon: FaAws, color: "#FF9900" },
    "Modal.com": { icon: FaCloud, color: "#FFFFFF" },
    "Docker": { url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" },
    "Apache Airflow": { icon: AirflowIcon, iconClass: "group-hover/skill:animate-[spin_2s_linear_infinite]" },
    "Vercel": { url: "/icons/vercel.svg" },
    "HF Spaces": { url: "/icons/huggingface.svg" },
    "Git": { icon: SiGit, color: "#F1502F" },
    "GitHub": { icon: SiGithub, color: "#FFFFFF" },
    "DVC": { icon: DvcIcon },
    "DagsHub": { url: "/icons/dagshub.png", imgClass: "scale-[1.7]" },
    "RAG Pipelines": { icon: FaProjectDiagram, color: "#FCD34D" },
    "Vector DBs": { icon: FaDatabase, color: "#6EE7B7" },
    "Chroma": { url: "/icons/chroma.svg" },
    "LLM Inference Opt": { icon: BsGear, color: "#FB923C" },
    "PyTorch": { url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original.svg" },
    "TensorFlow": { url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg" },
    "MLflow": { url: "https://cdn.simpleicons.org/mlflow" },
    "scikit-learn": { url: "/icons/scikit-learn.svg" },
    "Forecasting": { icon: FaChartLine, color: "#2DD4BF" },
    "Computer Vision": { icon: FaEye, color: "#8B5CF6" }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section id="skills" className="py-32 px-6 md:px-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-sm uppercase tracking-[0.2em] text-accent mb-6 font-bold">Technical Arsenal</h2>
          <h3 className="text-4xl md:text-6xl font-heading font-bold">Skills & Technologies</h3>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12"
        >
          {skillCategories.map((category, idx) => (
            <motion.div 
              key={idx}
              variants={itemVariants}
              className="group"
            >
              <h4 className="text-xl font-heading font-semibold text-white mb-6 flex items-center gap-4">
                <span className="w-8 h-px bg-white/20 group-hover:bg-accent group-hover:w-16 transition-all duration-300"></span>
                {category.title}
              </h4>
              <div className="flex flex-wrap gap-4 pl-12">
                {category.skills.map((skill, i) => {
                  const skillData = skillIcons[skill] || { icon: BsBoxSeam, color: "#ffffff" };
                  return (
                    <div key={i} className="flex flex-col items-center gap-3 w-16 sm:w-20 group">
                      <div 
                        className="group/skill relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 transition-all duration-300 cursor-default interactive"
                      >
                        {skillData.url ? (
                          <img src={skillData.url} alt={skill} className={`w-8 h-8 sm:w-10 sm:h-10 transition-transform group-hover/skill:scale-[1.2] object-contain ${skillData.imgClass || ""}`} />
                        ) : (
                          skillData.icon && <skillData.icon className={`w-8 h-8 sm:w-10 sm:h-10 transition-transform group-hover/skill:scale-110 ${skillData.iconClass || ""}`} style={{ color: skillData.color }} />
                        )}
                      </div>
                      {/* Label */}
                      <span className="text-[9px] sm:text-[10px] text-muted-foreground font-mono text-center leading-tight group-hover:text-white transition-colors duration-300">
                        {skill}
                      </span>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
