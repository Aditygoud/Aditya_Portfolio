import { useState, useEffect } from 'react';
import { User, ChevronRight, Sparkles } from 'lucide-react';

const Hero = ({ socials, primaryColor }) => {
  const titles = [
    "FULL-STACK DEV.",
    "AI ENGINEER.",
    "YOUTUBER."
  ];

  const skills = [
    "Python", "Machine Learning", "Data Science", "Computer Vision", 
    "React.js", "Node.js", "MongoDB", "Express.js","Html/CSS", "Tailwind CSS",
    "FastAPI", "TensorFlow", "OpenCV", "YOLOv8","javaScript", 
  ];

  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight, 
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); 
      setTimeout(() => {
        setIndex((prevIndex) => (prevIndex + 1) % titles.length);
        setFade(true); 
      }, 500); 
    }, 3000); 
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="relative px-6 md:px-12 lg:px-20 py-20 md:py-40 flex flex-col md:flex-row items-center justify-between gap-16 overflow-hidden">
      
      {/* Dynamic Background Glow */}
      <div 
        className="absolute top-0 left-0 w-72 h-72 rounded-full blur-[120px] -z-10 transition-colors duration-1000"
        style={{ backgroundColor: `${primaryColor}0D` }}
      ></div>

      {/* LEFT CONTENT */}
      <div className="order-2 md:order-1 text-center md:text-left flex-1 z-10">
        
        <div 
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] mb-8 shadow-xl transition-colors duration-500"
          style={{ color: primaryColor }}
        >
          <span className="relative flex h-2 w-2">
            <span 
              className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
              style={{ backgroundColor: primaryColor }}
            ></span>
            <span 
              className="relative inline-flex rounded-full h-2 w-2"
              style={{ backgroundColor: primaryColor }}
            ></span>
          </span>
          Available for Hire
        </div>
        
        <h1 className="text-white text-2xl md:text-4xl font-black mb-8 tracking-tighter leading-[0.9] uppercase">
          Hi, I am <br /> 
          <span 
            className={`transition-all duration-700 ease-in-out inline-block ${fade ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ color: primaryColor }}
          >
            {titles[index]}
          </span>
        </h1>
        
        <p className="text-slate-400 text-lg md:text-xl max-w-lg mb-12 leading-relaxed font-medium">
          An <span className="text-white">AI & Data Science enthusiast</span> architecting 
          scalable <span className="text-white">full-stack solutions</span>. 
          From deploying <span style={{ color: primaryColor }}>Computer Vision</span> automation
          to building real-time <span className="text-white">MERN applications</span>, 
          I bridge the gap between raw data and intelligent software. 
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-5">
          <button 
            onClick={scrollToContent}
            className="group w-full sm:w-auto text-black px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-xs transition-all flex items-center justify-center gap-3"
            style={{ 
              backgroundColor: primaryColor,
              boxShadow: `0 20px 40px -15px ${primaryColor}4D`
            }}
          >
            Show Profile 
            <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
          
          <button className="w-full sm:w-auto border border-white/10 text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-white/5 hover:border-white/20 transition-all">
            Know More
          </button>
        </div>

        {/* Skills Bar */}
        <div className="mt-16 pt-8 border-t border-white/5">
          <p className="text-slate-500 text-[10px] uppercase tracking-[0.3em] mb-6 font-bold">
            Core Expertise
          </p>
          
          <div className="flex flex-wrap gap-3 justify-center md:justify-start">
            {skills.map((skill) => (
              <span 
                key={skill} 
                className="group cursor-pointer px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-white text-[10px] font-black uppercase tracking-widest transition-all duration-300 active:scale-95 hover:text-black"
                style={{ 
                  '--hover-bg': primaryColor,
                  '--hover-shadow': `${primaryColor}4D`
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = primaryColor;
                  e.target.style.borderColor = primaryColor;
                  e.target.style.boxShadow = `0 0 20px ${primaryColor}4D`;
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = 'transparent';
                  e.target.style.borderColor = 'rgba(255,255,255,0.1)';
                  e.target.style.boxShadow = 'none';
                }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Quick Stats Bar */}
        <div className="flex justify-center md:justify-start gap-12 mt-12 opacity-80">
          <div className="text-center md:text-left">
            <p className="font-black text-2xl transition-colors duration-500" style={{ color: primaryColor }}>8.1</p>
            <p className="text-slate-500 text-[10px] uppercase tracking-widest">CGPA</p> 
          </div>
          <div className="text-center md:text-left">
            <p className="font-black text-2xl transition-colors duration-500" style={{ color: primaryColor }}>5+</p>
            <p className="text-slate-500 text-[10px] uppercase tracking-widest">Certificates</p>
          </div>
        </div>
      </div>

    
      {/* RIGHT CONTENT (Profile & Name) */}
      <div className="order-1 md:order-2 flex flex-col items-center gap-8 z-10">
        <div className="relative group">
          {/* Animated glow effect behind the image */}
          <div 
            className="absolute -inset-4 rounded-full blur-[30px] opacity-20 group-hover:opacity-40 transition duration-1000"
            style={{ backgroundColor: primaryColor }}
          ></div>
          
          {/* Profile Image Container */}
          <div 
            className="relative w-56 h-56 sm:w-72 sm:h-72 md:w-96 md:h-96 bg-[#151515] rounded-full border-2 flex items-center justify-center shadow-2xl overflow-hidden transition-colors duration-500"
            style={{ borderColor: `${primaryColor}4D` }}
          >
            <img 
              src="/Aditya_Portfolio/Aditya.png" 
              alt="Aditya Goud"
              className="w-full h-full object-cover object-top scale-110 transition-transform duration-500 group-hover:scale-105"
            />
            
            <div className="absolute bottom-0 w-full h-1/4 bg-linear-to-t from-[#111] via-[#111]/40 to-transparent z-10"></div>
          </div>

          {/* Floating animated icon */}
          <div className="absolute -top-4 -right-4 p-4 bg-[#1a1a1a] border border-white/10 rounded-2xl shadow-2xl animate-bounce">
            <Sparkles style={{ color: primaryColor }} size={24} />
          </div>
        </div>

        <div className="text-center">
          <h3 className="text-3xl md:text-4xl font-black tracking-tighter text-white uppercase italic">
            Aditya <span style={{ color: primaryColor }}>Goud</span> 
          </h3>
          <p className="text-[10px] tracking-[0.4em] text-slate-500 font-bold uppercase mt-2">
            AI Engineer • Full-Stack Developer 
          </p>
        </div>
      </div>
      
    </header>
  );
};

export default Hero;