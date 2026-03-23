import React from 'react';
import aboutMeImg from '../assets/images/aboutme2.png';
import aboutImg from '../assets/images/about.png';
import customIcon from '../assets/images/custom-icon.png';

const AboutSection = () => {
  const profileData = {
    experience: {
      year: "2023 – Present",
      role: "Freelance Video Editor",
      description: "Started in 2023, still going. no plans to stop anytime soon."
    },
    achievements: [
      { label: "20M+ Views", sub: "" },
      { label: "Worked with 100+ Clients", sub: "from all over the place" },
      { label: "500+ videos edited", sub: "" }
    ],
    skills: "Funny & Reaction Editing, Long-form & Short-form, Pacing, Sound Design, Motion Graphics, making your content actually watchable",
    languages: [
      { name: "English", note: "fluent, surprisingly" },
      { name: "Hindi", note: "native, unfortunately" }
    ],
    programs: [
      { name: 'Pr', level: 5 },
      { name: 'Ps', level: 4 },
      { name: 'Ae', level: 3 },
      { name: 'Dr', level: 3 },
    ]
  };

  return (
    <section id="about-section" className="relative z-20 bg-black min-h-screen py-12 md:py-16 px-6 md:px-16 font-sans text-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* TOP IMAGE HEADER */}
        <div className="relative mb-8 md:mb-4 flex flex-col items-center justify-center w-full py-4 md:py-6">
          <div className="relative z-10 text-center w-full px-4">
            <img 
              src={aboutMeImg}
              alt="About Me" 
              className="h-40 sm:h-64 md:h-80 lg:h-96 xl:h-[28rem] w-auto max-w-full object-contain mx-auto select-none pointer-events-none transform hover:scale-105 transition-transform duration-500" 
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_0.7fr] gap-10 md:gap-20 items-start">
          
          {/* LEFT CONTENT AREA */}
          <div className="space-y-16 md:space-y-24 order-1">
            
            {/* HERO TEXT */}
            <div className="max-w-4xl">
              <p className="font-texture text-[1.35rem] sm:text-2xl md:text-7xl font-black uppercase whitespace-nowrap">
                yo, i'm isharu{' '}
                <span className="relative inline-block px-4 sm:px-8">
                  {/* MULTI-RING SVG */}
                  <svg 
                    viewBox="0 -8 800 270" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[180%] pointer-events-none z-20 transform rotate-[3deg]"
                  >
                    <g filter="url(#pencil-roughness-about)">
                      {/* Original White Path */}
                      <path d="M770,120 C770,180 550,220 380,220 C150,220 30,180 40,110 C50,40 300,20 450,30 C650,45 785,80 765,135" stroke="white" strokeWidth="6" strokeLinecap="round" className="pencil-draw-path-1" />
                      
                      {/* Original Red Path */}
                      <path d="M740,140 C720,185 500,205 350,205 C120,205 50,165 60,105 C70,55 320,45 480,55 C640,65 750,100 730,150" stroke="#dc2626" strokeWidth="3" strokeLinecap="round" className="pencil-draw-path-2 opacity-80" />
                      
                      {/* NEW: Third Offset Path (White) */}
                      <path d="M750,110 C750,160 530,200 360,200 C130,200 10,160 20,90 C30,20 280,0 430,10 C630,25 765,60 745,115" stroke="white" strokeWidth="2" strokeLinecap="round" className="pencil-draw-path-3 opacity-40" />
                      
                      {/* NEW: Fourth Loose Path (Red) */}
                      <path d="M780,130 C780,190 560,230 390,230 C160,230 40,190 50,120 C60,50 310,30 460,40 C660,55 795,90 775,145" stroke="#dc2626" strokeWidth="2" strokeLinecap="round" className="pencil-draw-path-4 opacity-60" />
                    </g>
                    <defs>
                      <filter id="pencil-roughness-about">
                        <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="5" result="noise" />
                        <feDisplacementMap in="SourceGraphic" in2="noise" scale="5" />
                      </filter>
                    </defs>
                  </svg>
                  <span className="text-red-600 relative z-10 whitespace-nowrap lowercase md:text-6xl sm:text-xl text-[1.1rem]">
                    i edit videos
                  </span>
                </span>
              </p>
              
              <p className="mt-6 md:mt-10 text-lg md:text-xl text-[#D5C3AA] font-bold leading-relaxed max-w-2xl lowercase">
                i make funny and reaction videos that slap harder than your alarm on a monday, 
                the kind of edits where viewers forget they have a life outside youtube. 
                if your content is boring, that's a you problem — but lucky for you, i fix those :)
              </p>
            </div>

            {/* THE CV GRID */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-12 md:gap-y-16">
              <div className="space-y-6">
                <h2 className="font-texture text-4xl font-black text-red-600 uppercase">Experience</h2>
                <div className="space-y-1">
                  <p className="font-black text-xl tracking-tighter text-[#D5C3AA]">2023 – PRESENT</p>
                  <p className="font-black text-md uppercase text-[#D5C3AA]">Freelance Video Editor</p>
                  <p className="text-[#D5C3AA] font-bold text-lg leading-snug">
                    {profileData.experience.description}
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <h2 className="font-texture text-4xl font-black text-red-600 uppercase">Achievements</h2>
                <div className="space-y-5">
                  {profileData.achievements.map((ach, idx) => (
                    <div key={idx} className="leading-tight">
                      <p className="text-xl font-black uppercase tracking-tighter text-[#D5C3AA]">{ach.label}</p>
                      {ach.sub && <p className="text-[#D5C3AA] font-bold lowercase text-base">{ach.sub}</p>}
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                <h2 className="font-texture text-4xl font-black text-red-600 uppercase">Skills</h2>
                <p className="text-[#D5C3AA] font-bold text-xl leading-relaxed">
                  {profileData.skills}
                </p>
              </div>

              <div className="space-y-6">
                <h2 className="font-texture text-4xl font-black text-red-600 uppercase">Languages</h2>
                <div className="space-y-3 font-black uppercase">
                  {profileData.languages.map((lang, idx) => (
                    <p key={idx} className="text-xl tracking-tighter leading-none text-[#D5C3AA]">
                      {lang.name} <span className="text-[#D5C3AA] font-bold lowercase text-lg">— {lang.note}</span>
                    </p>
                  ))}
                </div>
              </div>

              {/* PROGRAMS SECTION */}
              <div className="md:col-span-2 space-y-8">
                <h2 className="font-texture text-4xl font-black text-red-600 uppercase">Programs</h2>
                <div className="flex flex-wrap gap-6 items-start">
                  {profileData.programs.map((prog) => (
                    <div key={prog.name} className="flex flex-col items-center gap-3">
                      <div className="w-14 h-14 md:w-16 md:h-16 border-2 border-white flex items-center justify-center font-black text-xl md:text-2xl bg-black rounded-xl shadow-[3px_3px_0_#ffffff] overflow-hidden">
                        {prog.name === 'Dr' ? (
                          <img src={customIcon} alt="Custom Icon" className="w-full h-full object-cover p-1" />
                        ) : (
                          prog.name
                        )}
                      </div>
                      <div className="flex flex-col items-center gap-1">
                        {[...Array(prog.level)].map((_, i) => (
                          <span key={i} className="text-red-600 text-[10px] md:text-xs">✦</span>
                        ))}
                        {prog.name === 'Pr' && (
                          <span className="text-red-600 text-lg md:text-xl font-bold leading-none -mt-1">∞</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE IMAGE */}
          <div className="flex justify-center lg:justify-end lg:sticky lg:top-32 order-2 lg:order-2 mt-10 lg:mt-0 pointer-events-none">
            <img 
              src={aboutImg} 
              alt="Isharu" 
              className="w-full max-w-[320px] sm:max-w-[400px] md:max-w-[480px] h-auto object-cover opacity-90 filter contrast-125" 
            />
          </div>

        </div>
      </div>

      <style>{`
        .pencil-draw-path-1 { stroke-dasharray: 5000; stroke-dashoffset: 5000; animation: draw-pencil 1.5s cubic-bezier(0.45, 0, 0.55, 1) forwards; }
        .pencil-draw-path-2 { stroke-dasharray: 5000; stroke-dashoffset: 5000; animation: draw-pencil 1.7s cubic-bezier(0.45, 0, 0.55, 1) 0.2s forwards; }
        .pencil-draw-path-3 { stroke-dasharray: 5000; stroke-dashoffset: 5000; animation: draw-pencil 1.3s cubic-bezier(0.45, 0, 0.55, 1) 0.4s forwards; }
        .pencil-draw-path-4 { stroke-dasharray: 5000; stroke-dashoffset: 5000; animation: draw-pencil 1.9s cubic-bezier(0.45, 0, 0.55, 1) 0.1s forwards; }
        @keyframes draw-pencil { to { stroke-dashoffset: 0; } }
      `}</style>
    </section>
  );
};

export default AboutSection;