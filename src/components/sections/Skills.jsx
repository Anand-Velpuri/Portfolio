import { motion } from 'framer-motion';
import { SiPytorch, SiFastapi, SiPostgresql, SiSqlalchemy, SiJsonwebtokens, SiHuggingface, SiCplusplus, SiTensorflow, SiMlflow, SiOpenai, SiGit, SiGithub } from 'react-icons/si';
import { FaRobot, FaBrain, FaNetworkWired, FaTools, FaDatabase, FaServer, FaCloud, FaEye, FaChartLine, FaProjectDiagram, FaLink, FaAws } from 'react-icons/fa';
import { BsCpu, BsBoxSeam, BsGear } from 'react-icons/bs';

const DvcIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="24" height="24" style={{ opacity: 1 }} {...props}>
    <path fill="#13adc7" d="M2 20.4V8.452a.27.27 0 0 1 .238-.3a.3.3 0 0 1 .078 0h4.676a6.64 6.64 0 0 1 4.751 1.877a6.03 6.03 0 0 1 .1 8.848l-.1.091a6.7 6.7 0 0 1-4.751 1.879H2.319a.3.3 0 0 1-.237-.076c0-.151-.082-.226-.082-.371m3.009-2.328h1.825a3.56 3.56 0 0 0 2.613-1.052a3.47 3.47 0 0 0 1.026-2.629a3.546 3.546 0 0 0-3.507-3.6H5.012Z"/>
    <path fill="#945dd6" d="M15.627 23.775L9.685 11.607c-.08-.15-.08-.225 0-.3a.42.42 0 0 1 .316-.15h2.534c.159 0 .238.075.318.226l3.167 6.609h.08l3.167-6.609c.08-.151.158-.226.317-.226h2.534a.42.42 0 0 1 .316.15a.22.22 0 0 1 0 .3L16.5 23.775c-.079.15-.158.225-.317.225h-.163c-.237-.075-.393-.15-.393-.225"/>
    <path fill="#f46737" d="M20.376 19.043a6.02 6.02 0 0 1-1.98-4.582a6.02 6.02 0 0 1 1.98-4.582A6.7 6.7 0 0 1 25.207 8A6.74 6.74 0 0 1 29.8 9.654c.158.151.158.3 0 .526l-1.506 1.427a.307.307 0 0 1-.415.056a.3.3 0 0 1-.059-.056a3.85 3.85 0 0 0-2.534-.9a3.63 3.63 0 0 0-2.693 1.126a3.58 3.58 0 0 0-1.027 2.629a3.5 3.5 0 0 0 1.109 2.554a3.46 3.46 0 0 0 2.692 1.052a3.86 3.86 0 0 0 2.535-.9a.31.31 0 0 1 .417-.055a.3.3 0 0 1 .058.055l1.505 1.5a.274.274 0 0 1 .058.4a.3.3 0 0 1-.058.055a6.33 6.33 0 0 1-4.594 1.727a6.52 6.52 0 0 1-4.912-1.807"/>
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
      skills: ["FastAPI", "PostgreSQL", "MySQL", "SQLAlchemy", "JWT / AES", "AWS", "Modal.com", "Docker", "Vercel", "HF Spaces", "Git", "GitHub", "DVC", "DagsHub"]
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
    "PostgreSQL": { url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
    "MySQL": { url: "/icons/mysql.svg" },
    "SQLAlchemy": { icon: SiSqlalchemy, color: "#D71F00" },
    "JWT / AES": { icon: SiJsonwebtokens, color: "#F43F5E" },
    "AWS": { icon: FaAws, color: "#FF9900" },
    "Modal.com": { icon: FaCloud, color: "#FFFFFF" },
    "Docker": { url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" },
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
                          <img src={skillData.url} alt={skill} className={`w-8 h-8 sm:w-10 sm:h-10 transition-transform group-hover/skill:scale-[1.2] object-contain drop-shadow-md ${skillData.imgClass || ""}`} />
                        ) : (
                          skillData.icon && <skillData.icon className="w-8 h-8 sm:w-10 sm:h-10 transition-transform group-hover/skill:scale-110 group-hover:scale-110 drop-shadow-md" style={{ color: skillData.color }} />
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
      
      {/* Abstract Background */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/3 h-2/3 bg-gradient-to-l from-white/[0.02] to-transparent pointer-events-none blur-3xl"></div>
    </section>
  );
}
