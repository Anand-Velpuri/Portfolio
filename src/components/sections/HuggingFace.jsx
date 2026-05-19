import { motion } from 'framer-motion';

export default function HuggingFace() {
  const hfItems = [
    {
      type: "Model",
      title: "Price Predictor (LLaMA 3.2 3B)",
      description: "Fine-tuned with QLoRA & 4-bit quantization for highly optimized e-commerce predictions.",
      stats: "GGUF • Safetensors"
    },
    {
      type: "Space",
      title: "Zenith Agentic Hub",
      description: "Live deployment of the LangGraph multi-agent architecture with long-term memory.",
      stats: "Docker • Gradio / FastAPI"
    },
    {
      type: "Dataset",
      title: "Custom RLHF / Fine-tuning Data",
      description: "Curated dataset pipeline specifically built to align Zenith's conversational agents.",
      stats: "Parquet • 10k+ rows"
    }
  ];

  return (
    <section id="huggingface" className="py-32 px-6 md:px-12 relative overflow-hidden bg-background">
      {/* Background visual to give it a "lab / research" feel */}
      <div className="absolute top-0 right-0 w-full h-full opacity-30 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] border-[1px] border-white/5 rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40vw] h-[40vw] border-[1px] border-white/5 rounded-full border-dashed animate-[spin_60s_linear_infinite]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm uppercase tracking-[0.2em] text-[#FFD21E] mb-6 font-bold flex items-center gap-3">
              <span className="w-6 h-6 rounded-md bg-white flex items-center justify-center p-1">
                {/* Hugging Face Emoji/Logo placeholder */}
                🤗
              </span>
              Hugging Face Hub
            </h2>
            <h3 className="text-4xl md:text-6xl font-heading font-bold max-w-2xl">
              Open Source Models & Deployments
            </h3>
          </motion.div>
          
          <motion.a 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            href="https://huggingface.co/AnandVelpuri"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-[#FFD21E]/50 transition-colors text-sm font-medium interactive"
          >
            Visit Profile
          </motion.a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {hfItems.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="p-8 rounded-2xl bg-gradient-to-b from-white/5 to-transparent border border-white/10 hover:border-[#FFD21E]/30 transition-colors group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-[#FFD21E]/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative z-10">
                <span className="text-xs font-mono px-3 py-1 bg-white/10 rounded-full text-muted-foreground mb-6 inline-block">
                  {item.type}
                </span>
                <h4 className="text-xl font-heading font-semibold text-white mb-4 group-hover:text-[#FFD21E] transition-colors">
                  {item.title}
                </h4>
                <p className="text-muted-foreground text-sm leading-relaxed mb-8 h-20">
                  {item.description}
                </p>
                <div className="flex items-center justify-between text-xs font-mono text-muted-foreground/80 border-t border-white/10 pt-4">
                  <span>{item.stats}</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
