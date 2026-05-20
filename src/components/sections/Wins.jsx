import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

function SynapStoreMedia() {
  const [view, setView] = useState('demo'); // 'demo' | 'moments'
  const [photoIndex, setPhotoIndex] = useState(0);
  
  const videoUrl = "https://res.cloudinary.com/ddrj7yzyl/video/upload/f_auto:video/SynapStore_-_Intelligent_Pharmacy_Management_System_-_3_January_2026_reqawv?_s=vp";
  const photos = [
    "/synapstore-win-1.jpg",
    "/synapstore-win-2.jpg"
  ];
  
  useEffect(() => {
    let timer;
    if (view === 'moments') {
      timer = setInterval(() => {
        setPhotoIndex((prev) => (prev + 1) % photos.length);
      }, 4000); // 4 seconds per slide
    }
    return () => clearInterval(timer);
  }, [view, photos.length]);

  return (
    <div className="absolute inset-0 w-full h-full bg-[#0a0a0a]">
      {view === 'demo' ? (
        <motion.div
          key="demo"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute inset-0 w-full h-full"
        >
          <video 
            src={videoUrl} 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="w-full h-full object-cover" 
          />
        </motion.div>
      ) : (
        photos.map((src, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: i === photoIndex ? 1 : 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 w-full h-full"
          >
            <img 
              src={src} 
              alt="SynapStore Hackathon Team" 
              className="w-full h-full object-cover" 
            />
          </motion.div>
        ))
      )}

      {/* Toggle Button */}
      <button 
        onClick={(e) => {
          e.preventDefault();
          setView(view === 'demo' ? 'moments' : 'demo');
        }}
        className="absolute bottom-6 right-6 z-20 px-4 py-2 bg-black/60 backdrop-blur-md border border-white/20 rounded-full text-white text-xs font-bold uppercase tracking-wider flex items-center gap-2 hover:bg-black/90 hover:scale-105 transition-all cursor-pointer pointer-events-auto"
      >
        {view === 'demo' ? (
          <>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            View Moments
          </>
        ) : (
          <>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Watch Demo
          </>
        )}
      </button>
    </div>
  );
}

function SaberMedia() {
  const [view, setView] = useState('demo'); // 'demo' | 'moments'
  const [photoIndex, setPhotoIndex] = useState(0);
  
  const photos = [
    "/saber-win-1.jpg",
    "/saber-win-2.jpg",
    "/saber-win-3.jpg"
  ];
  
  useEffect(() => {
    let timer;
    if (view === 'moments') {
      timer = setInterval(() => {
        setPhotoIndex((prev) => (prev + 1) % photos.length);
      }, 4000);
    }
    return () => clearInterval(timer);
  }, [view, photos.length]);

  return (
    <div className="absolute inset-0 w-full h-full bg-[#0a0a0a]">
      {view === 'demo' ? (
        <motion.div
          key="demo"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute inset-0 w-full h-full"
        >
          <iframe 
            src="https://www.youtube.com/embed/YieZywufIf0?autoplay=1&mute=1&loop=1&playlist=YieZywufIf0"
            title="SABER Demo"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full border-none"
          ></iframe>
        </motion.div>
      ) : (
        photos.map((src, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: i === photoIndex ? 1 : 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 w-full h-full"
          >
            <img 
              src={src} 
              alt="SABER Hackathon Team" 
              className="w-full h-full object-cover" 
            />
          </motion.div>
        ))
      )}

      {/* Toggle Button */}
      <button 
        onClick={(e) => {
          e.preventDefault();
          setView(view === 'demo' ? 'moments' : 'demo');
        }}
        className="absolute bottom-6 right-6 z-20 px-4 py-2 bg-black/60 backdrop-blur-md border border-white/20 rounded-full text-white text-xs font-bold uppercase tracking-wider flex items-center gap-2 hover:bg-black/90 hover:scale-105 transition-all cursor-pointer pointer-events-auto"
      >
        {view === 'demo' ? (
          <>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            View Moments
          </>
        ) : (
          <>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Watch Demo
          </>
        )}
      </button>
    </div>
  );
}

export default function Wins() {
  const containerRef = useRef(null);
  
  return (
    <section id="wins" ref={containerRef} className="py-32 px-6 md:px-12 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <h2 className="text-sm uppercase tracking-[0.2em] text-[#FF3366] mb-6 font-bold">Execution & Impact</h2>
          <h3 className="text-4xl md:text-6xl font-heading font-bold text-white">Wins & Recognition</h3>
        </motion.div>

        <div className="flex flex-col gap-32">
          
          {/* Hackathon Win 1: SynapStore */}
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="w-full lg:w-1/2 relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="aspect-[4/3] rounded-2xl bg-[#0a0a0a] border border-white/10 overflow-hidden relative group"
              >
                <div className="absolute inset-0 w-full h-full opacity-80 group-hover:opacity-100 transition-opacity duration-500">
                  <SynapStoreMedia />
                </div>
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none"></div>
                <div className="absolute bottom-6 left-6 flex gap-2">
                  <span className="px-3 py-1 rounded bg-[#FF3366]/20 text-[#FF3366] text-xs font-bold uppercase tracking-wider">Winner</span>
                  <span className="px-3 py-1 rounded bg-white/10 text-white text-xs font-medium">MedTech Hackathon</span>
                </div>
              </motion.div>
            </div>

            <div className="w-full lg:w-1/2 flex flex-col gap-6">
              <div className="flex flex-wrap items-center gap-4">
                <h4 className="text-3xl md:text-5xl font-heading font-bold text-white">SynapStore</h4>
                <a 
                  href="https://synapstore.me" 
                  target="_blank" 
                  rel="noreferrer"
                  className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 text-white text-xs font-medium transition-colors interactive flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                  synapstore.me
                </a>
              </div>
              <p className="text-xl text-muted-foreground font-medium border-l-2 border-white/20 pl-4 py-1">
                A real-world AI-powered operational system for healthcare and pharmacy infrastructure.
              </p>
              
              <div className="mt-4 space-y-4 text-muted-foreground">
                <p>
                  Built under team <strong className="text-white">Stark Protocol S4</strong> at MLRIT. I designed and implemented the <strong className="text-white">LangGraph-based AI operational assistant</strong>—a true operational copilot system, not just a chatbot.
                </p>
                <p>
                  It features Agentic RAG, long-term conversational memory, explainable forecasting, and contextual role-based behaviors for store owners, suppliers, and admins.
                </p>
              </div>

              <div className="mt-6 flex flex-col gap-3 p-5 rounded-xl bg-white/5 border border-white/10 text-sm">
                <div className="flex justify-between items-center text-white/50 mb-2 uppercase tracking-wider text-xs font-bold">
                  <span>Collaborative Engineering</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <span className="text-white font-medium block">SreeCharan Desu</span>
                    <span className="text-muted-foreground text-xs">Backend, DevOps, CI/CD</span>
                  </div>
                  <div>
                    <span className="text-white font-medium block">Seetharam Damarla</span>
                    <span className="text-muted-foreground text-xs">WAF, Field Encryption</span>
                  </div>
                  <div className="md:col-span-2">
                    <span className="text-white font-medium block">Alahari Bhanu Prakash</span>
                    <span className="text-muted-foreground text-xs">UX, Animations, Domain Sponsorship</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Hackathon Win 2: SABER */}
          <div className="flex flex-col lg:flex-row-reverse gap-16 items-center">
            <div className="w-full lg:w-1/2 relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="aspect-[4/3] rounded-2xl bg-[#0a0a0a] border border-white/10 overflow-hidden relative group"
              >
                <div className="absolute inset-0 w-full h-full opacity-80 group-hover:opacity-100 transition-opacity duration-500">
                  <SaberMedia />
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none"></div>

                <div className="absolute bottom-6 left-6 flex gap-2 z-10 pointer-events-none">
                  <span className="px-3 py-1 rounded bg-[#FFD21E]/20 text-[#FFD21E] text-xs font-bold uppercase tracking-wider">Top 3 Finalist</span>
                </div>
              </motion.div>
            </div>

            <div className="w-full lg:w-1/2 flex flex-col gap-6">
              <div className="flex items-center gap-3">
                <h4 className="text-3xl md:text-5xl font-heading font-bold text-white">SABER</h4>
              </div>
              <p className="text-xl text-muted-foreground font-medium border-l-2 border-white/20 pl-4 py-1">
                Tinder for jobs — without the bias.
              </p>
              
              <div className="mt-4 space-y-4 text-muted-foreground">
                <p>
                  Built in <strong className="text-white">24 hours</strong> at VR Siddhartha College Hackathon, securing 3rd prize out of 300+ participating teams.
                </p>
                <p>
                  SABER is a privacy-first, intent-based job matching platform where recruiters and candidates connect only after mutual interest. It challenges resume bias and superficial hiring through blind evaluation and skill-aligned matching systems.
                </p>
                <p className="text-white/70 italic text-sm mt-4">
                  "A reimagining of hiring systems shipped under extreme time constraints."
                </p>
              </div>

              <div className="mt-6 flex gap-2 flex-wrap">
                <span className="px-3 py-1 bg-white/5 rounded border border-white/10 text-xs text-white/80">Rapid Prototyping</span>
                <span className="px-3 py-1 bg-white/5 rounded border border-white/10 text-xs text-white/80">Product Thinking</span>
                <span className="px-3 py-1 bg-white/5 rounded border border-white/10 text-xs text-white/80">Privacy-First Architecture</span>
              </div>
            </div>
          </div>

          {/* Global Competitions Header */}
          <div className="mt-20 mb-12">
            <h3 className="text-3xl md:text-5xl font-heading font-bold text-white">Global Competitions</h3>
          </div>

          {/* Competition: Kaggle Sheep Classification */}
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="w-full lg:w-1/2 relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="rounded-2xl bg-white/5 border border-white/10 overflow-hidden relative group flex items-center justify-center p-2"
              >
                 <img src="/kaggle-sheep-cert.png" alt="Kaggle Sheep Classification Certificate" className="w-full h-auto rounded-xl object-contain" />
                 <div className="absolute bottom-6 right-6 flex gap-2 z-10">
                   <span className="px-3 py-1 rounded bg-black/80 backdrop-blur-md border border-white/20 shadow-xl text-[#20BEFF] text-xs font-bold uppercase tracking-wider">Top 1.3%</span>
                 </div>
              </motion.div>
            </div>

            <div className="w-full lg:w-1/2 flex flex-col gap-6">
              <div className="flex items-center gap-3">
                <h4 className="text-3xl md:text-5xl font-heading font-bold text-white">Sheep Classification</h4>
              </div>
              <p className="text-xl text-muted-foreground font-medium border-l-2 border-white/20 pl-4 py-1">
                Kaggle Global Leaderboard — Dal Data Challenge
              </p>
              
              <div className="mt-4 space-y-4 text-muted-foreground">
                <p>
                  Secured <strong className="text-white">9th place</strong> globally out of <strong className="text-white">674 entries</strong> (Top 1.3%), competing against researchers, engineers, and ML practitioners.
                </p>
                <p>
                  The dataset was extremely limited and full of low-quality images. Despite this, I achieved a <strong className="text-white">97.2% Macro F1-Score</strong> by utilizing fine-tuned <strong className="text-accent">ConvNeXt-Large</strong>, heavy data augmentation, and robust postprocessing.
                </p>
              </div>

              <div className="mt-6 flex gap-2 flex-wrap">
                <span className="px-3 py-1 bg-white/5 rounded border border-white/10 text-xs text-white/80">TensorFlow</span>
                <span className="px-3 py-1 bg-white/5 rounded border border-white/10 text-xs text-white/80">ConvNeXt</span>
                <span className="px-3 py-1 bg-white/5 rounded border border-white/10 text-xs text-white/80">Computer Vision</span>
                <span className="px-3 py-1 bg-white/5 rounded border border-white/10 text-xs text-white/80">Data Augmentation</span>
              </div>
            </div>
          </div>

          {/* Certifications Header */}
          <div className="mt-20 mb-12">
            <h3 className="text-3xl md:text-5xl font-heading font-bold text-white">Certifications</h3>
          </div>

          {/* Certification: CS50P Harvard */}
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="w-full lg:w-1/2 relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="rounded-2xl bg-white/5 border border-white/10 overflow-hidden relative group flex items-center justify-center p-2"
              >
                 <img src="/cs50-cert.png" alt="CS50P Harvard Certificate" className="w-full h-auto rounded-xl object-contain" />
                 <div className="absolute bottom-6 right-6 flex gap-2 z-10">
                   <span className="px-3 py-1 rounded bg-black/80 backdrop-blur-md border border-white/20 shadow-xl text-accent text-xs font-bold uppercase tracking-wider">Harvard Univ.</span>
                 </div>
              </motion.div>
            </div>

            <div className="w-full lg:w-1/2 flex flex-col gap-6">
              <div className="flex items-center gap-3">
                <h4 className="text-3xl md:text-5xl font-heading font-bold text-white">CS50P</h4>
              </div>
              <p className="text-xl text-muted-foreground font-medium border-l-2 border-white/20 pl-4 py-1">
                CS50's Introduction to Programming with Python
              </p>
              
              <div className="mt-4 space-y-4 text-muted-foreground">
                <p>
                  Completed rigorous coursework focused on Python programming, encompassing nine problem sets and one final project under <strong className="text-white">David J. Malan</strong>.
                </p>
                <p>
                  This course solidified my foundational understanding of Python scripting, libraries, testing, and object-oriented programming.
                </p>
              </div>

              <div className="mt-6 flex gap-2 flex-wrap">
                <span className="px-3 py-1 bg-white/5 rounded border border-white/10 text-xs text-white/80">Python</span>
                <span className="px-3 py-1 bg-white/5 rounded border border-white/10 text-xs text-white/80">OOP</span>
                <span className="px-3 py-1 bg-white/5 rounded border border-white/10 text-xs text-white/80">Algorithms</span>
              </div>
            </div>
          </div>

          {/* Certification: UC3M Java */}
          <div className="flex flex-col lg:flex-row-reverse gap-16 items-center">
            <div className="w-full lg:w-1/2 relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="rounded-2xl bg-white/5 border border-white/10 overflow-hidden relative group flex items-center justify-center p-2"
              >
                 <img src="/java-cert.png" alt="UC3M Java Certificate" className="w-full h-auto rounded-xl object-contain" />
                 <div className="absolute bottom-6 right-6 flex gap-2 z-10">
                   <span className="px-3 py-1 rounded bg-black/80 backdrop-blur-md border border-white/20 shadow-xl text-[#60A5FA] text-xs font-bold uppercase tracking-wider">UC3M</span>
                 </div>
              </motion.div>
            </div>

            <div className="w-full lg:w-1/2 flex flex-col gap-6">
              <div className="flex items-center gap-3">
                <h4 className="text-3xl md:text-5xl font-heading font-bold text-white">Java Programming</h4>
              </div>
              <p className="text-xl text-muted-foreground font-medium border-l-2 border-white/20 pl-4 py-1">
                Universidad Carlos III de Madrid (edX)
              </p>
              
              <div className="mt-4 space-y-4 text-muted-foreground">
                <p>
                  Successfully completed <strong className="text-white">IT.1.1x: Introduction to Java Programming</strong>, learning the core fundamentals of object-oriented programming in Java.
                </p>
                <p>
                  The course covered essential syntax, data structures, control flow, and the principles required to build scalable enterprise-grade applications.
                </p>
              </div>

              <div className="mt-6 flex gap-2 flex-wrap">
                <span className="px-3 py-1 bg-white/5 rounded border border-white/10 text-xs text-white/80">Java</span>
                <span className="px-3 py-1 bg-white/5 rounded border border-white/10 text-xs text-white/80">Object-Oriented Design</span>
                <span className="px-3 py-1 bg-white/5 rounded border border-white/10 text-xs text-white/80">Software Engineering</span>
              </div>
            </div>
          </div>

          {/* Certification: NPTEL Deep Learning */}
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="w-full lg:w-1/2 relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="rounded-2xl bg-white/5 border border-white/10 overflow-hidden relative group flex items-center justify-center p-2"
              >
                 <img src="/nptel-dl-cert.png" alt="NPTEL Deep Learning Certificate" className="w-full h-auto rounded-xl object-contain" />
                 <div className="absolute bottom-6 right-6 flex gap-2 z-10">
                   <span className="px-3 py-1 rounded bg-black/80 backdrop-blur-md border border-white/20 shadow-xl text-[#EF4444] text-xs font-bold uppercase tracking-wider">IISc Bangalore</span>
                 </div>
              </motion.div>
            </div>

            <div className="w-full lg:w-1/2 flex flex-col gap-6">
              <div className="flex items-center gap-3">
                <h4 className="text-3xl md:text-5xl font-heading font-bold text-white">Deep Learning</h4>
              </div>
              <p className="text-xl text-muted-foreground font-medium border-l-2 border-white/20 pl-4 py-1">
                Foundations of Deep Learning: Concepts and Applications (NPTEL)
              </p>
              
              <div className="mt-4 space-y-4 text-muted-foreground">
                <p>
                  Completed a comprehensive 12-week program by <strong className="text-white">IISc Bangalore</strong>, securing an <strong className="text-accent">Elite</strong> certification.
                </p>
                <p>
                  Mastered advanced AI concepts including CNN architectures (ResNet, YOLO), Sequence Models (LSTMs, Transformers), Explainable AI (Grad-CAM, SHAP), and Generative Models (Diffusion, LLMs, Autoencoders).
                </p>
              </div>

              <div className="mt-6 flex gap-2 flex-wrap">
                <span className="px-3 py-1 bg-white/5 rounded border border-white/10 text-xs text-white/80">Deep Learning</span>
                <span className="px-3 py-1 bg-white/5 rounded border border-white/10 text-xs text-white/80">Transformers & LLMs</span>
                <span className="px-3 py-1 bg-white/5 rounded border border-white/10 text-xs text-white/80">Computer Vision</span>
                <span className="px-3 py-1 bg-white/5 rounded border border-white/10 text-xs text-white/80">XAI</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
