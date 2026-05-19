import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Database, Server, Shield, Workflow, Activity, Terminal, Cpu, Clock, Network, Lock, Code2, Users } from 'lucide-react';

const Node = ({ icon: Icon, title, desc, delay, active = false, color = "accent" }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.4 }}
    className={`flex flex-col items-center gap-3 p-4 bg-card/80 border ${active ? 'border-accent shadow-[0_0_15px_rgba(59,130,246,0.3)]' : 'border-white/10'} rounded-xl backdrop-blur-md relative z-10 min-w-[140px]`}
  >
    <div className={`p-3 rounded-full ${active ? 'bg-accent/20 text-accent' : 'bg-white/5 text-muted-foreground'}`}>
      <Icon className="w-5 h-5" />
    </div>
    <div className="text-center">
      <div className={`font-heading font-bold text-sm ${active ? 'text-white' : 'text-muted-foreground'}`}>{title}</div>
      <div className="text-[10px] text-muted-foreground/80 mt-1">{desc}</div>
    </div>
  </motion.div>
);

const Connection = ({ direction = "horizontal", delay = 0, reverse = false }) => (
  <div className={`relative flex items-center justify-center ${direction === "horizontal" ? "w-8 h-px" : "h-8 w-px"} bg-white/10`}>
    <motion.div
      initial={direction === "horizontal" ? { x: reverse ? 10 : -10, opacity: 0 } : { y: reverse ? 10 : -10, opacity: 0 }}
      animate={direction === "horizontal" ? { x: reverse ? -10 : 10, opacity: [0, 1, 0] } : { y: reverse ? -10 : 10, opacity: [0, 1, 0] }}
      transition={{ duration: 1.5, repeat: Infinity, delay, ease: "linear" }}
      className={`absolute ${direction === "horizontal" ? "h-[2px] w-4" : "w-[2px] h-4"} bg-accent blur-[1px]`}
    />
  </div>
);

function ForeignGrievanceSystem() {
  return (
    <div className="bg-[#0a0a0a] rounded-2xl border border-white/10 overflow-hidden relative font-mono mt-12 p-8">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-accent/5 via-transparent to-transparent"></div>
      
      <div className="flex items-center gap-4 border-b border-white/5 pb-4 mb-8">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
        </div>
        <div className="text-xs text-muted-foreground">admin@satyasai-ops:~ ssh prod-backend</div>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-0 relative">
        <Node icon={Shield} title="OAuth2 Gateway" desc="JWT Auth & RBAC" delay={0.1} active={true} />
        <Connection direction="horizontal" delay={0.5} />
        
        <div className="flex flex-col items-center gap-4">
          <Node icon={Server} title="FastAPI Core" desc="Pydantic Validated" delay={0.2} active={true} />
          <Connection direction="vertical" delay={0.6} />
          <Node icon={Cpu} title="spaCy NLP" desc="NLP-assisted pipelines" delay={0.3} active={true} />
        </div>

        <Connection direction="horizontal" delay={0.7} />
        
        <div className="flex flex-col gap-4">
          <Node icon={Database} title="MySQL Cluster" desc="Transaction-safe" delay={0.4} active={true} />
          <Node icon={Clock} title="Cron Jobs" desc="Overstay Detection" delay={0.5} active={true} />
        </div>
      </div>

      <div className="mt-12 text-xs text-muted-foreground bg-black/40 p-4 rounded-lg border border-white/5">
        <div className="flex gap-4">
          <span className="text-accent">08:14:02</span>
          <span>[INFO]</span>
          <span>Automated visa overstay check initiated.</span>
        </div>
        <div className="flex gap-4 mt-2">
          <span className="text-accent">08:14:03</span>
          <span className="text-green-400">[SUCCESS]</span>
          <span>Analyzed 42,091 records. 12 flags generated.</span>
        </div>
        <div className="flex gap-4 mt-2 opacity-50">
          <span className="text-accent animate-pulse">_</span>
        </div>
      </div>
    </div>
  );
}

function HMSArchitecture() {
  return (
    <div className="bg-[#0a0a0a] rounded-2xl border border-white/10 overflow-hidden relative font-mono mt-12 p-8">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-indigo-500/5 via-transparent to-transparent"></div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
        <div className="col-span-1 flex flex-col gap-4">
          <div className="text-xs uppercase tracking-wider text-muted-foreground font-bold mb-2">Request State</div>
          <motion.div initial={{ x: -20, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ delay: 0.1 }} className="p-4 bg-white/5 border border-white/10 rounded-lg flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Users className="w-4 h-4 text-accent" />
              <span className="text-sm">Student Access</span>
            </div>
            <Lock className="w-3 h-3 text-green-400" />
          </motion.div>
          <motion.div initial={{ x: -20, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ delay: 0.2 }} className="p-4 bg-white/5 border border-white/10 rounded-lg flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Shield className="w-4 h-4 text-purple-400" />
              <span className="text-sm">Warden Control</span>
            </div>
            <Lock className="w-3 h-3 text-green-400" />
          </motion.div>
        </div>

        <div className="col-span-1 md:col-span-2 flex flex-col gap-4 border-l border-white/10 pl-6">
           <div className="text-xs uppercase tracking-wider text-muted-foreground font-bold mb-2">Financial Engine</div>
           
           <div className="p-5 bg-accent/5 border border-accent/20 rounded-xl relative overflow-hidden">
             <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent/0 via-accent to-accent/0 opacity-50"></div>
             <div className="flex items-start justify-between">
               <div>
                 <div className="flex items-center gap-2 font-bold text-white mb-1">
                   <Activity className="w-4 h-4 text-accent" />
                   Dynamic Pricing Resolution
                 </div>
                 <p className="text-xs text-muted-foreground mt-2">Real-time ledger state calculating room-specific concessions and transparent due logic.</p>
               </div>
               <div className="px-2 py-1 bg-green-500/10 text-green-400 text-[10px] rounded border border-green-500/20 font-bold uppercase tracking-wider">
                 ACID Compliant
               </div>
             </div>
             
             <div className="grid grid-cols-2 gap-2 mt-4 text-[10px]">
               <div className="bg-black/50 p-2 rounded flex items-center justify-between">
                 <span className="text-muted-foreground">Due Calcs</span>
                 <span className="text-white font-bold">O(1) Access</span>
               </div>
               <div className="bg-black/50 p-2 rounded flex items-center justify-between">
                 <span className="text-muted-foreground">Join Complexity</span>
                 <span className="text-white font-bold">Optimized</span>
               </div>
             </div>
           </div>
        </div>
      </div>
    </div>
  );
}

export default function Experience() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  return (
    <section id="experience" ref={containerRef} className="py-32 px-6 md:px-12 bg-background relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6 border border-accent/20"
          >
            <Terminal className="w-4 h-4" />
            <span>Professional Experience</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-heading font-bold mb-6"
          >
            Building <span className="text-accent">Production-Grade</span> Systems.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed"
          >
            Building administrative systems means modeling operational complexity, enforcing security boundaries, and automating workflows where human error becomes expensive.
          </motion.p>
        </div>

        <div className="flex flex-col gap-32">
          {/* Project 1 */}
          <div className="grid grid-cols-1 xl:grid-cols-12 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="xl:col-span-5"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center overflow-hidden p-2">
                  <img src="/icons/shraddha.png" alt="Shraddha Logo" className="w-full h-full object-contain" />
                </div>
                <div>
                  <h3 className="text-2xl font-heading font-bold text-white">Shraddha</h3>
                  <p className="text-accent text-sm font-medium">Backend Developer Intern (Remote)</p>
                </div>
              </div>
              <p className="text-xs text-muted-foreground font-mono mb-6">July 2025 – January 2026</p>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-white font-bold mb-2">Foreign Grievance Handling & Monitoring System</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    A critical administrative infrastructure for the Satya Sai District Police. Built a production-oriented platform for monitoring foreign nationals, grievance handling, and automating administrative workflows.
                  </p>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/5 border border-white/10 p-4 rounded-xl">
                    <Shield className="w-5 h-5 text-accent mb-2" />
                    <div className="text-sm font-bold text-white mb-1">Security & Auth</div>
                    <div className="text-xs text-muted-foreground">JWT, OAuth2, bcrypt hashing, Role-based workflows</div>
                  </div>
                  <div className="bg-white/5 border border-white/10 p-4 rounded-xl">
                    <Activity className="w-5 h-5 text-accent mb-2" />
                    <div className="text-sm font-bold text-white mb-1">Operational Intel</div>
                    <div className="text-xs text-muted-foreground">Automated visa overstay tracking, Cron workflows</div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                  {['FastAPI', 'Python', 'MySQL', 'spaCy', 'Pydantic'].map(tech => (
                    <span key={tech} className="text-[10px] font-mono text-accent bg-accent/10 px-2 py-1 rounded border border-accent/20">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="xl:col-span-7"
            >
              <ForeignGrievanceSystem />
            </motion.div>
          </div>

          {/* Project 2 */}
          <div className="grid grid-cols-1 xl:grid-cols-12 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="xl:col-span-5 xl:order-last"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                  <Database className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-heading font-bold text-white">Hostel Management System</h3>
                  <p className="text-purple-400 text-sm font-medium">Full-Stack Developer / System Architect</p>
                </div>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-white font-bold mb-2">Financial & Operational Automation</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    A financial and operational automation system built to eliminate administrative friction. Solved state consistency and financial integrity problems through secure financial logic and scalable backend architecture.
                  </p>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/5 border border-white/10 p-4 rounded-xl">
                    <Code2 className="w-5 h-5 text-purple-400 mb-2" />
                    <div className="text-sm font-bold text-white mb-1">Backend Arch</div>
                    <div className="text-xs text-muted-foreground">Relational DB modeling, optimized joins, modular APIs</div>
                  </div>
                  <div className="bg-white/5 border border-white/10 p-4 rounded-xl">
                    <Workflow className="w-5 h-5 text-purple-400 mb-2" />
                    <div className="text-sm font-bold text-white mb-1">Financial Ledgers</div>
                    <div className="text-xs text-muted-foreground">Real-time due calcs, concession-aware billing</div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                  {['FastAPI', 'MySQL', 'Pydantic', 'OAuth2', 'Uvicorn'].map(tech => (
                    <span key={tech} className="text-[10px] font-mono text-purple-400 bg-purple-400/10 px-2 py-1 rounded border border-purple-400/20">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="xl:col-span-7"
            >
              <HMSArchitecture />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
