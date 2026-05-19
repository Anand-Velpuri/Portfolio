import { Mail, Download } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../ui/Icons';
import MagneticButton from '../ui/MagneticButton';
import AnimatedText from '../ui/AnimatedText';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="relative py-24 px-6 md:px-12 border-t border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
        <div className="max-w-2xl">
          <AnimatedText
            text="Let's build something extraordinary together."
            className="text-4xl md:text-6xl font-heading font-bold mb-8"
          />
          <p className="text-muted-foreground text-lg mb-8 max-w-md">
            I'm currently open for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
          <MagneticButton
            as="a"
            href="mailto:velpurianand8005@gmail.com"
            className="px-8 py-4 bg-accent text-white hover:bg-accent/90 text-lg group"
          >
            <Mail className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
            Say Hello
          </MagneticButton>
        </div>

        <div className="flex flex-col gap-6 w-full md:w-auto">
          <div className="flex items-center gap-4 border-b border-white/10 pb-6">
            <a href="https://github.com/Anand-Velpuri" target="_blank" rel="noreferrer" className="p-3 bg-white/5 rounded-full hover:bg-white/10 transition-colors">
              <GithubIcon className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/in/anand-velpuri" target="_blank" rel="noreferrer" className="p-3 bg-white/5 rounded-full hover:bg-white/10 transition-colors">
              <LinkedinIcon className="w-5 h-5" />
            </a>
            <a href="https://www.kaggle.com/anandvelpuri" target="_blank" rel="noreferrer" className="p-3 bg-white/5 rounded-full hover:bg-white/10 transition-colors text-sm font-bold flex items-center justify-center">
              K
            </a>
            <a href="#" className="p-3 bg-white/5 rounded-full hover:bg-white/10 transition-colors ml-auto md:ml-0 flex items-center gap-2 text-sm font-medium">
              <Download className="w-4 h-4" />
              Resume
            </a>
          </div>
          
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-sm text-muted-foreground">
            <p>&copy; {currentYear} Anand Velpuri. All rights reserved.</p>
            <p className="flex items-center gap-1">
              Crafted with <span className="text-accent">♥</span> by an elite frontend developer.
            </p>
          </div>
        </div>
      </div>
      
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[120px] pointer-events-none -z-10"></div>
    </footer>
  );
}
