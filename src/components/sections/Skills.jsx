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



const KubernetesIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#1182f6" {...props}>
    <path d="m10.013 13.738-2.254.387a4.47 4.47 0 0 0 1.753 2.231l.865-2.095a.27.27 0 0 0 .022-.228c-.022-.18-.204-.295-.386-.295m.865-2.914c.205 0 .387-.159.387-.364l.114-2.277-.456.091a4.5 4.5 0 0 0-2.118 1.162l1.89 1.343c.069.022.115.045.183.045m-1.002 1.48a.366.366 0 0 0-.045-.524l-1.685-1.503a4.8 4.8 0 0 0-.661 2.778l2.209-.637c.091-.023.137-.046.182-.114m1.457.797.616.296.614-.296.16-.661-.433-.546h-.683l-.433.546zm1.344-2.436c.114.159.341.182.5.091l1.867-1.32a4.3 4.3 0 0 0-2.573-1.23l.137 2.3a.22.22 0 0 0 .069.159"/>
    <path d="m21.944 14.103-1.73-7.446c-.113-.364-.387-.66-.729-.842L12.541 2.49c-.182-.091-.387-.114-.569-.114s-.387 0-.569.045L4.457 5.769a1.22 1.22 0 0 0-.683.842l-1.708 7.492c-.068.387.023.774.25 1.093l4.805 5.943c.273.273.66.456 1.047.479h7.651c.41.045.797-.137 1.048-.479l4.805-5.943c.227-.319.318-.706.272-1.093m-2.845.501c-.046 0-.068 0-.114-.023-.022-.023-.022-.023-.045-.023-.046 0-.068-.022-.092-.022-.091-.023-.159-.068-.25-.114a.3.3 0 0 1-.137-.045h-.022a4 4 0 0 0-.729-.205h-.022a.26.26 0 0 0-.182.068s0 .023-.023.023l-.183-.024a5.63 5.63 0 0 1-2.46 3.097l.068.182s-.022 0-.022.022a.26.26 0 0 0-.022.228c.091.228.205.455.364.66v.045a.4.4 0 0 1 .091.114.8.8 0 0 1 .159.228c.023.022.046.045.046.068 0 0 .022 0 .022.022a.6.6 0 0 1 .023.342.38.38 0 0 1-.205.25c-.068.022-.114.045-.183.045a.51.51 0 0 1-.433-.273c-.022 0-.022-.022-.022-.022-.022-.023-.022-.045-.046-.068-.045-.068-.068-.159-.091-.25l-.046-.137v-.022a4 4 0 0 0-.296-.706.35.35 0 0 0-.182-.137c0-.023 0-.023-.023-.023l-.091-.159c-.228.068-.479.159-.729.205-.41.114-.82.159-1.229.159a5.4 5.4 0 0 1-1.981-.364l-.091.182c0 .023 0 .023-.023.023a.35.35 0 0 0-.182.137c-.114.228-.228.455-.296.706l-.045.137c-.023.091-.068.159-.091.25-.022.023-.045.045-.045.068-.023 0-.023.022-.023.022a.51.51 0 0 1-.433.273.4.4 0 0 1-.159-.045.47.47 0 0 1-.182-.615c.023 0 .023-.023.023-.023.022-.023.022-.045.045-.068.068-.091.114-.182.159-.228s.068-.068.091-.114v-.023a3.7 3.7 0 0 0 .364-.66.27.27 0 0 0-.023-.228s-.022 0-.022-.022l.114-.16a3.6 3.6 0 0 1-.615-.41 5.5 5.5 0 0 1-1.867-2.664l-.205.022s0-.022-.023-.022a.26.26 0 0 0-.182-.068h-.022a4 4 0 0 0-.751.205h-.024c-.045 0-.091.023-.137.046-.068.022-.159.068-.25.091-.022 0-.091-.022-.091 0 0 .023 0 .023-.023.023-.045.023-.068.023-.114.023a.424.424 0 0 1-.456-.319.445.445 0 0 1 .364-.524c.023-.023.023-.023.046-.023.045 0 .068-.022.091-.022.091 0 .182-.023.273-.023.045-.022.091-.022.137-.022a4 4 0 0 0 .774-.137c.068-.046.137-.091.16-.16 0 0 .022 0 .022-.022l.182-.046c-.205-1.298.091-2.618.797-3.734.022-.045.045-.068.068-.114l-.131-.132-.004.019v-.023l.004.004c.01-.065-.031-.145-.072-.186-.182-.182-.41-.319-.638-.455l-.136-.069a3 3 0 0 1-.251-.136c-.022 0-.068-.045-.068-.045s0-.023-.022-.023a.49.49 0 0 1-.092-.639c.068-.114.182-.159.319-.159a.54.54 0 0 1 .319.114l.023.023c.022.022.045.022.068.045.068.069.114.137.182.205.023.022.068.045.091.091.159.182.364.364.569.524.045.022.091.045.137.045.045 0 .068-.023.091-.023h.023l.137.091a5.43 5.43 0 0 1 2.801-1.594c.273-.046.523-.091.774-.114l.023-.182v-.045c.068-.045.091-.114.114-.182 0-.273 0-.524-.045-.774v-.023c0-.045 0-.091-.023-.137a1.1 1.1 0 0 1-.045-.273v-.113c0-.114.045-.228.137-.319.114-.114.25-.182.387-.159a.45.45 0 0 1 .387.478v.137c-.023.091-.023.182-.045.273 0 .045-.023.091-.023.136v.023c-.048.273-.048.524-.048.774.023.068.045.136.114.182v-.023l.023.182a5.84 5.84 0 0 1 2.96 1.184c.183.182.387.364.569.546l.183-.114h.022c.022.023.068.023.091.023.046 0 .091-.023.137-.045.205-.137.41-.319.569-.501.022-.023.068-.046.091-.091.046-.068.114-.137.183-.205.022 0 .045-.022.068-.045l.022-.023a.55.55 0 0 1 .318-.114c.114 0 .251.068.319.16.159.205.113.478-.091.637 0 .023.022.023 0 .046-.023.022-.046.022-.068.045-.092.045-.16.091-.251.137l-.137.068a4 4 0 0 0-.638.455c-.045.046-.068.137-.068.205v.023l-.136.137c.364.569.638 1.207.797 1.867.137.66.182 1.343.091 2.003l.182.046a.28.28 0 0 0 .16.159c.25.068.523.114.773.137h.023a.3.3 0 0 0 .137.022c.091 0 .182 0 .272.023.046 0 .092 0 .092.023 0 .022.022.022.045.022a.54.54 0 0 1 .41.479.49.49 0 0 1-.453.32"/>
    <path d="M12.085 14.718a.35.35 0 0 0-.455.091l-1.116 2.027c.456.136.957.228 1.435.228.341 0 .66-.045.979-.114.159-.045.296-.068.433-.091l-1.093-1.981c-.069-.069-.115-.115-.183-.16m3.644-4.441-1.708 1.548a.36.36 0 0 0-.091.16c-.046.205.068.41.273.455l2.163.615a4.4 4.4 0 0 0-.092-1.435 4.6 4.6 0 0 0-.545-1.343m-2.073 3.484a.37.37 0 0 0-.205.433l.889 2.141a4.4 4.4 0 0 0 1.366-1.366c.182-.25.318-.547.433-.865l-2.277-.387a.6.6 0 0 0-.206.044"/>
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
      skills: ["FastAPI", "Flask", "PostgreSQL", "MongoDB", "MySQL", "SQLAlchemy", "JWT / AES", "AWS", "Modal.com", "Docker", "Kubernetes", "Vercel", "HF Spaces", "Git", "GitHub", "DVC", "DagsHub", "Apache Airflow", "Jenkins"]
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
    "Kubernetes": { icon: KubernetesIcon },
    "Apache Airflow": { icon: AirflowIcon, iconClass: "group-hover/skill:animate-[spin_2s_linear_infinite]" },
    "Jenkins": { url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jenkins/jenkins-original.svg" },
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
