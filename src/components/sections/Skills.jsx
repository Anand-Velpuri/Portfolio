import { motion } from 'framer-motion';
import { SiPytorch, SiFastapi, SiPostgresql, SiSqlalchemy, SiJsonwebtokens, SiHuggingface, SiCplusplus, SiTensorflow, SiMlflow, SiOpenai } from 'react-icons/si';
import { FaRobot, FaBrain, FaNetworkWired, FaTools, FaDatabase, FaServer, FaCloud, FaEye, FaChartLine, FaProjectDiagram, FaLink } from 'react-icons/fa';
import { BsCpu, BsBoxSeam, BsGear } from 'react-icons/bs';

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
      skills: ["FastAPI", "PostgreSQL", "MySQL", "SQLAlchemy", "JWT / AES", "Modal.com", "Docker", "Vercel", "HF Spaces"]
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
    "Modal.com": { icon: FaCloud, color: "#FFFFFF" },
    "Docker": { url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" },
    "Vercel": { url: "/icons/vercel.svg" },
    "HF Spaces": { url: "/icons/huggingface.svg" },
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
                          <img src={skillData.url} alt={skill} className="w-8 h-8 sm:w-10 sm:h-10 transition-transform group-hover/skill:scale-110 group-hover:scale-110 object-contain drop-shadow-md" />
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
