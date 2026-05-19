import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import { useState } from 'react';

export default function Content() {
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <section id="content" className="py-32 px-6 md:px-12 bg-card relative">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        
        <div className="w-full lg:w-1/2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h2 className="text-sm uppercase tracking-[0.2em] text-accent mb-6 font-bold">Knowledge Sharing</h2>
            <h3 className="text-4xl md:text-6xl font-heading font-bold">Technical Education</h3>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground leading-relaxed mb-8"
          >
            <p className="mb-6">
              I believe true mastery comes from explaining complex architectures to others. I occasionally share insights on LLM engineering, inference optimization, and system design.
            </p>
            <p>
              My latest focus has been on <strong>model quantization</strong> and making large-scale AI accessible on consumer hardware without compromising accuracy.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex items-center gap-4 text-sm font-mono"
          >
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full bg-red-500/20 border border-red-500/50 flex items-center justify-center text-red-500 text-xs">YT</div>
            </div>
            <span className="text-muted-foreground">Subscribe to my channel for AI tutorials</span>
          </motion.div>
        </div>

        <div className="w-full lg:w-1/2 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="block aspect-video rounded-2xl bg-black border border-white/10 overflow-hidden relative shadow-2xl"
          >
            {!isPlaying ? (
              <div 
                className="absolute inset-0 cursor-pointer group interactive"
                onClick={() => setIsPlaying(true)}
              >
                {/* Terminal-inspired preview visual */}
                <div className="absolute inset-0 bg-[#0d1117] flex flex-col">
                  <div className="h-8 border-b border-white/10 flex items-center px-4 gap-2 bg-white/5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
                    <span className="ml-2 text-[10px] text-muted-foreground font-mono">llama.cpp - quantization</span>
                  </div>
                  <div className="p-6 font-mono text-xs md:text-sm text-green-400/80 overflow-hidden flex-1 relative">
                    <p className="mb-2 opacity-50"># Converting LLaMA model to GGUF format and applying 4-bit quantization</p>
                    <p className="mb-4 text-white/80">$ python convert.py models/llama-3/ --outfile llama-3-q4.gguf --outtype q4_0</p>
                    <div className="animate-pulse space-y-1 opacity-70">
                      <p>Loading model...</p>
                      <p>Quantizing tensors (4-bit)...</p>
                      <p>Processing layer 0/32 [=======   ]</p>
                    </div>
                    
                    {/* Dark gradient overlay to make play button pop */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
                  </div>
                </div>
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-red-600/90 flex items-center justify-center group-hover:scale-110 group-hover:bg-red-500 transition-all shadow-[0_0_40px_rgba(220,38,38,0.5)]">
                    <Play className="w-8 h-8 text-white ml-1 fill-white" />
                  </div>
                </div>
                
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black to-transparent">
                  <h4 className="text-white font-heading font-bold text-xl group-hover:text-accent transition-colors">
                    Quantization of LLMs using llama.cpp
                  </h4>
                </div>
              </div>
            ) : (
              <iframe 
                width="100%" 
                height="100%" 
                src="https://www.youtube.com/embed/W6SBmCmyrDc?autoplay=1" 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowFullScreen
                className="absolute inset-0"
              ></iframe>
            )}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
