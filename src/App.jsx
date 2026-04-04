import { useEffect, useState } from 'react'
import axios from 'axios'
import Hero from './components/Hero.jsx'
import Projects from './components/Projects.jsx'
import Experience from './components/Experience.jsx'
import Certificates from './components/Certificates.jsx'
import Footer from './components/Footer.jsx'

// 1. Define the Global Themes
const THEMES = {
  default: { primary: '#a2df0c', bg: '#111111', selection: '#a2df0c' },
  orange:  { primary: '#ea580c', bg: '#050505', selection: '#ea580c' },
  blue:    { primary: '#1d4ed8', bg: '#000816', selection: '#1d4ed8' },
  red:     { primary: '#b91c1c', bg: '#0a0000', selection: '#b91c1c' },
  yellow:  { primary: '#eab308', bg: '#070700', selection: '#eab308' },
  cyan:    { primary: '#0891b2', bg: '#001015', selection: '#0891b2' },
  violet:  { primary: '#8b5cf6', bg: '#100015', selection: '#8b5cf6' },
};

function App() {
  const [data, setData] = useState(null);
  
  // 2. Initialize Theme State
  const [currentTheme, setCurrentTheme] = useState('default');

  useEffect(() => {
    axios.get('http://localhost:5000/api/profile')
      .then(response => setData(response.data))
      .catch(error => console.error("Error:", error));
  }, []);

  if (!data) return (
    <div className="bg-[#111111] h-screen w-full flex items-center justify-center text-[#a2df0c] font-mono p-4 text-center">
      <div className="animate-pulse tracking-widest text-sm md:text-base">
        INITIALIZING_SYSTEM...
      </div>
    </div>
  );

  // Helper to get active theme values
  const activeTheme = THEMES[currentTheme];

  return (
    <div 
      className="transition-colors duration-1000 min-h-screen w-full flex flex-col md:p-10"
      style={{ 
        backgroundColor: '#24292e', // Outer border color remains stable
        '--selection-bg': activeTheme.selection // Custom variable for selection
      }}
    >
      {/* Dynamic Style Tag for Global Selection Color */}
      <style>{`
        ::selection {
          background-color: ${activeTheme.selection} !important;
          color: black !important;
        }
      `}</style>
      
      <div 
        className="grow w-full max-w-7xl mx-auto shadow-2xl rounded-none md:rounded-[40px] overflow-hidden border border-white/5 flex flex-col transition-colors duration-1000"
        style={{ backgroundColor: activeTheme.bg }}
      >
        
        {/* 3. Pass activeTheme.primary to components to update their text/accents */}
        <Hero socials={data.socials} primaryColor={activeTheme.primary} />
        
        {/* 4. Pass Theme controls to Projects so the Rubik's Cube can change the whole page */}
        <Projects 
          projects={data.projects} 
          currentTheme={currentTheme} 
          setCurrentTheme={setCurrentTheme} 
          THEMES={THEMES} 
        />
        
       <Experience 
          currentTheme={currentTheme} 
          THEMES={THEMES} 
        />

       <Certificates 
          currentTheme={currentTheme} 
          THEMES={THEMES} 
        />
        
        <Footer
          currentTheme={currentTheme} 
          THEMES={THEMES} 
        />

      </div>
    </div>
  );
}

export default App; 