import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function About() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section id="about" ref={containerRef} className="py-32 px-6 md:px-12 bg-card relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 items-center">
        
        <div className="w-full md:w-1/2">
          <motion.div style={{ y, opacity }} className="relative">
            <h2 className="text-sm uppercase tracking-[0.2em] text-accent mb-6 font-bold">About Me</h2>
            <div className="text-3xl md:text-5xl font-heading font-medium leading-tight space-y-6">
              <p>
                Driven by an obsession with <span className="text-white font-bold">operational AI</span> and systems engineering.
              </p>
              <p className="text-muted-foreground">
                I’m interested in building intelligent systems that solve operational problems at scale.
              </p>
              <p className="text-muted-foreground text-xl leading-relaxed mt-8">
                I combine AI, backend systems, security, and UX into deployable platforms. My focus is on product-oriented AI systems, rapid prototyping, and infrastructure thinking to ship real products under extreme time constraints.
              </p>
              <p className="text-muted-foreground text-xl leading-relaxed mt-4">
                I fine-tune both <span className="text-white font-medium">Frontier models</span> (OpenAI, Anthropic, Gemini) and <span className="text-white font-medium">open-source models</span> to adapt them for complex, domain-specific tasks.
              </p>
            </div>
            
            <div className="mt-12 flex items-center gap-8">
              <div>
                <p className="text-4xl font-heading font-bold text-white mb-2">3rd</p>
                <p className="text-sm text-muted-foreground uppercase tracking-wider">Year B.Tech</p>
              </div>
              <div className="w-px h-16 bg-white/10"></div>
              <div>
                <p className="text-4xl font-heading font-bold text-white mb-2">10+</p>
                <p className="text-sm text-muted-foreground uppercase tracking-wider">Projects</p>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="w-full md:w-1/2 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="aspect-[4/5] rounded-2xl bg-white/5 border border-white/10 overflow-hidden relative"
          >
            {/* Abstract visual placeholder since we don't have a photo yet */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-purple-500/20 opacity-50 mix-blend-overlay"></div>
            
            {/* Code snippet overlay effect */}
            <div 
              className="absolute inset-0 p-5 md:p-8 font-mono text-[10px] sm:text-xs md:text-sm opacity-90"
              style={{
                maskImage: 'linear-gradient(to bottom, black 55%, transparent 85%)',
                WebkitMaskImage: 'linear-gradient(to bottom, black 55%, transparent 85%)'
              }}
            >
              <pre className="text-gray-300 leading-relaxed overflow-hidden">
                <code>
                  <span className="text-[#FF7B72]">import</span> langgraph <span className="text-[#FF7B72]">as</span> lg<br/>
                  <span className="text-[#FF7B72]">from</span> peft <span className="text-[#FF7B72]">import</span> LoraConfig, get_peft_model<br/>
                  <span className="text-[#FF7B72]">from</span> huggingface_hub <span className="text-[#FF7B72]">import</span> HfApi<br/>
                  <br/>
                  <span className="text-[#FF7B72]">class</span> <span className="text-[#D2A8FF]">AppliedAIEngineer</span>:<br/>
                  {"    "}<span className="text-[#FF7B72]">def</span> <span className="text-[#D2A8FF]">__init__</span>(<span className="text-[#79C0FF]">self</span>):<br/>
                  {"        "}<span className="text-[#79C0FF]">self</span>.focus = <span className="text-[#A5D6FF]">"Agentic Systems & LLM Engineering"</span><br/>
                  {"        "}<span className="text-[#79C0FF]">self</span>.expertise = [<br/>
                  {"            "}<span className="text-[#A5D6FF]">"Model Fine-tuning"</span>,<br/>
                  {"            "}<span className="text-[#A5D6FF]">"RAG"</span>,<br/>
                  {"            "}<span className="text-[#A5D6FF]">"Quantization"</span><br/>
                  {"        "}]<br/>
                  <br/>
                  {"    "}<span className="text-[#FF7B72]">def</span> <span className="text-[#D2A8FF]">build_system</span>(<span className="text-[#79C0FF]">self</span>, workflow):<br/>
                  {"        "}model = <span className="text-[#79C0FF]">self</span>.quantize_and_load(<span className="text-[#A5D6FF]">"llama-3"</span>)<br/>
                  {"        "}agent = lg.Graph()<br/>
                  {"        "}agent.add_node(<span className="text-[#A5D6FF]">"tool_call"</span>, <span className="text-[#79C0FF]">self</span>.tools)<br/>
                  {"        "}<span className="text-[#FF7B72]">return</span> <span className="text-[#79C0FF]">self</span>.deploy_to_production(agent)<br/>
                  <br/>
                  {"    "}<span className="text-[#D2A8FF]">@property</span><br/>
                  {"    "}<span className="text-[#FF7B72]">def</span> <span className="text-[#D2A8FF]">status</span>(<span className="text-[#79C0FF]">self</span>):<br/>
                  {"        "}<span className="text-[#FF7B72]">return</span> <span className="text-[#A5D6FF]">"Shipping Production AI"</span>
                </code>
              </pre>
            </div>
            
            <div className="absolute bottom-6 left-6 right-6 p-6 rounded-xl bg-black/40 backdrop-blur-md border border-white/10">
              <p className="text-sm font-medium text-white">RGUKT Ongole</p>
              <p className="text-xs text-muted-foreground mt-1">B.Tech in Computer Science</p>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
