import React from 'react';
import isharuLogo from '../assets/images/isharu4.png'; 
import anime5 from '../assets/images/anime5.png'; 
import paperTear from '../assets/images/paper-tear3.png'; 

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
      className="relative w-full min-h-screen bg-black flex flex-col items-center justify-center pt-28 lg:pt-0 px-6 md:px-16 overflow-x-clip"
    >
      {/* FILM GRAIN OVERLAY */}
      <div className="absolute inset-0 pointer-events-none z-[60] opacity-[0.03] animate-grain bg-[url('https://www.transparenttextures.com/patterns/p6-dark.png')]"></div>

      <div className="max-w-[1800px] w-full grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-4 items-center z-10">
        
        {/* LEFT CONTENT */}
        <div className="flex flex-col items-start space-y-4 order-1 lg:order-1 pb-12 lg:pb-0 z-20">
          <div className="relative w-full">
              <div className="relative flex flex-col w-full max-w-[500px] lg:max-w-[600px]">
                <img 
                  src={isharuLogo} 
                  alt="Isharu" 
                  className="w-full h-auto object-contain relative z-10 drop-shadow-[0_5px_15px_rgba(220,38,38,0.2)]"
                />

                <div className="flex flex-col items-end gap-2 mt-4 w-full pr-2">
                  <div className="w-48 h-1 bg-zinc-900 rounded-full overflow-hidden border border-zinc-800/50">
                     <div className="h-full bg-red-600 w-1/2 animate-[render_3s_infinite_ease-in-out]"></div>
                  </div>
                  <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest">
                    Rendering_Shot_04...
                  </span>
                </div>
              </div>
          </div>

          <div className="max-w-md">
            <p className="font-texture text-3xl pl-8 text-zinc-400 font-medium leading-relaxed">
              The name behind the numbers
            </p>
          </div>

          {/* BRIGHTER RED BUTTON FOR LARGE SCREENS */}
          <button 
            onClick={scrollToContact}
            className="group relative mt-16 px-6 md:px-10 py-4 rounded-xl font-medium uppercase tracking-[0.2em] text-[0.75rem] sm:text-base md:text-xl whitespace-nowrap transition-all duration-300 active:scale-95 
            /* Mobile State: Solid Box */
            bg-red-800 text-black border-none
            /* Desktop State: Bright Red Text, No Box, Glow effect */
            lg:bg-transparent lg:text-red-500 lg:border-none
            /* Hover State */
            hover:bg-red-800 hover:text-white"
            style={{
              textShadow: '0 0 15px rgba(239, 68, 68, 0.4)'
            }}
          >
            Stand Out In Your Niche
          </button>
        </div>

        {/* RIGHT CONTENT (Mascot) */}
        <div className="relative flex justify-center items-center order-2 lg:order-2 lg:translate-x-32 mb-16 lg:mb-0">
          <div className="relative z-10 w-full max-w-[550px] md:max-w-[800px] lg:max-w-[1000px] animate-glow-only">
            <img 
              src={anime5} 
              alt="Isharu Mascot" 
              className="w-full h-auto object-contain transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>
      </div>

      {/* PAPER TEAR TRANSITION */}
      <div className="absolute bottom-0 left-0 w-full z-[100] translate-y-1/2 pointer-events-none">
        <img 
          src={paperTear} 
          alt="Transition" 
          className="w-full h-auto object-cover min-h-[50px]" 
        />
      </div>

      <style>{`
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

        @keyframes glow-only {
          0%, 100% { 
            filter: drop-shadow(0 0 30px rgba(220, 38, 38, 0.4));
          }
          50% { 
            filter: drop-shadow(0 0 80px rgba(220, 38, 38, 0.95));
          }
        }
        .animate-glow-only { 
          animation: glow-only 4s ease-in-out infinite; 
        }
      `}</style>
    </section>
  );
};

export default HeroSection;