import React from 'react';
import isharuLogo from '../assets/images/isharu3.png'; 
import anime4 from '../assets/images/anime4.png'; // ✅ ADDED

const HeroSection = () => {
  const scrollToContact = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };

  return (
    <section 
      id="hero-section" 
      className="relative w-full min-h-screen bg-black flex flex-col items-center justify-center pt-28 lg:pt-0 px-6 md:px-16 overflow-hidden"
    >
      {/* FILM GRAIN OVERLAY */}
      <div className="absolute inset-0 pointer-events-none z-[60] opacity-[0.03] animate-grain bg-[url('https://www.transparenttextures.com/patterns/p6-dark.png')]"></div>

      {/* Background Watermark */}
      {/* <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15rem] md:text-[25rem] font-black text-white/[0.03] uppercase select-none tracking-tighter italic z-0 whitespace-nowrap">
        ISHARU
      </span> */}

      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10">
        
        {/* LEFT CONTENT */}
        <div className="flex flex-col items-start space-y-8 order-1 lg:order-1 pb-12 lg:pb-0">
          <div className="space-y-2 relative w-full">
              
              {/* RENDERING BAR */}
              <div className="flex flex-col items-start gap-2 mb-6">
                <span className="bg-red-600 text-white px-4 py-1 text-xs font-black uppercase tracking-[0.3em] rounded-sm shadow-[4px_4px_0_rgba(255,255,255,0.2)]">
                  Creative Studio
                </span>
                <div className="w-48 h-1 bg-zinc-900 rounded-full overflow-hidden mt-1 border border-zinc-800/50">
                   <div className="h-full bg-red-600 w-1/2 animate-[render_3s_infinite_ease-in-out]"></div>
                </div>
                <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest">Rendering_Shot_04...</span>
              </div>

              {/* IMAGE + PENCIL CIRCLE CONTAINER */}
              <div className="relative inline-block w-full max-w-[500px] lg:max-w-[650px] mt-4">
                
                {/* THE PENCIL CIRCLE - REDUCED SIZE */}
                {/* scale-75 or scale-80 makes the ring smaller relative to the logo */}
                {/* <svg 
                  viewBox="0 0 800 300" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[105%] h-[130%] pointer-events-none z-20 scale-[1.32] rotate-[7deg]"
                >
                  <g filter="url(#pencil-roughness)">
                    <path 
                      d="M750,140 C750,220 550,260 380,260 C150,260 40,210 50,130 C60,50 300,30 450,40 C650,55 760,100 740,160" 
                      stroke="white" 
                      strokeWidth="6" 
                      strokeLinecap="round" 
                      className="pencil-path-1"
                    />
                    <path 
                      d="M720,165 C700,215 500,240 350,240 C120,240 70,190 80,120 C90,60 320,50 480,60 C640,70 730,110 710,175" 
                      stroke="white" 
                      strokeWidth="3" 
                      strokeLinecap="round" 
                      className="pencil-path-2 opacity-80"
                    />
                    <path 
                      d="M710,175 C715,190 730,200 750,205" 
                      stroke="white" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      className="pencil-path-3 opacity-60"
                    />
                  </g>
                  <defs>
                    <filter id="pencil-roughness">
                      <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="5" result="noise" />
                      <feDisplacementMap in="SourceGraphic" in2="noise" scale="4" />
                    </filter>
                  </defs>
                </svg> */}

                {/* THE LOGO IMAGE */}
                <img 
                  src={isharuLogo} 
                  alt="Isharu" 
                  className="w-full h-auto object-contain relative z-10 drop-shadow-[0_5px_15px_rgba(220,38,38,0.2)]"
                />
              </div>
          </div>

          <div className="max-w-md space-y-6">
            {/* <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight uppercase tracking-tight">
              Stand Out In Your Niche.
            </h2> */}
            <p className="text-lg text-zinc-400 font-medium leading-relaxed">
              Stop settling for "average" videos. Explode your growth with high-retention editing that actually works.
            </p>
          </div>

          <button 
            onClick={scrollToContact}
            className="group relative bg-white text-black px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-lg shadow-[8px_8px_0_#dc2626] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all active:scale-95"
          >
            Stand Out In Your Niche.
          </button>
        </div>

        {/* RIGHT CONTENT (Mascot) */}
        <div className="relative flex justify-center items-center order-2 lg:order-2 lg:translate-x-12 mb-16 lg:mb-0">
          <div className="relative z-10 w-full max-w-[320px] md:max-w-[450px] drop-shadow-[20px_20px_0_rgba(220,38,38,0.3)]">
            <img 
              src={anime4}  // ✅ ONLY CHANGE HERE
              alt="Isharu Mascot" 
              className="w-full h-auto object-contain transform -scale-x-100 hover:scale-105 hover:-scale-x-105 transition-transform duration-500"
            />
          </div>
        </div>

      </div>

      <style>{`
        .pencil-path-1 {
          stroke-dasharray: 3000;
          stroke-dashoffset: 3000;
          animation: draw 1.2s cubic-bezier(0.45, 0, 0.55, 1) forwards;
        }
        .pencil-path-2 {
          stroke-dasharray: 3000;
          stroke-dashoffset: 3000;
          animation: draw 1.4s cubic-bezier(0.45, 0, 0.55, 1) 0.1s forwards;
        }
        .pencil-path-3 {
          stroke-dasharray: 100;
          stroke-dashoffset: 100;
          animation: draw 0.5s ease-out 1.3s forwards;
        }

        @keyframes draw {
          to { stroke-dashoffset: 0; }
        }

        @keyframes grain {
          0%, 100% { transform: translate(0, 0) }
          10% { transform: translate(-5%, -10%) }
          30% { transform: translate(3%, -15%) }
          50% { transform: translate(12%, 9%) }
          70% { transform: translate(-3%, 11%) }
          90% { transform: translate(-11%, 1%) }
        }
        .animate-grain { animation: grain 8s steps(10) infinite; }

        @keyframes render {
          0% { transform: translateX(-100%); }
          50% { transform: translateX(0%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;