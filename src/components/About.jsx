import React from 'react';

const AboutSection = () => {
  const profileData = {
    experience: {
      year: "2023 – Present",
      role: "Freelance Video Editor",
      description: "started in 2023, still going. no plans to stop anytime soon."
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
    /* UPDATED: Reduced section padding from py-24 to py-12 on desktop */
    <section id="about-section" className="relative z-20 bg-black min-h-screen py-12 md:py-16 px-6 md:px-16 font-sans text-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* BACKGROUND WATERMARK & IMAGE HEADING */}
        {/* UPDATED: Reduced margins and padding for tighter desktop layout */}
        <div className="relative mb-8 md:mb-16 flex flex-col items-center justify-center w-full py-4 md:py-6">
          <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[7rem] sm:text-[12rem] md:text-[18rem] font-black text-white/[0.03] uppercase select-none tracking-tighter italic whitespace-nowrap leading-none">
            ISHARU
          </span>
          <div className="relative z-10 text-center w-full px-4">
            <img 
              src="src/assets/images/aboutme1.png" 
              alt="About Me" 
              className="h-28 sm:h-48 md:h-64 lg:h-72 w-auto max-w-full object-contain mx-auto select-none pointer-events-none transform hover:scale-105 transition-transform duration-500" 
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_0.7fr] gap-10 md:gap-20 items-start">
          
          {/* LEFT CONTENT AREA */}
          <div className="space-y-16 md:space-y-24">
            
            {/* HERO TEXT */}
            <div className="max-w-4xl">
              <p className="text-[1.35rem] sm:text-2xl md:text-4xl font-black leading-tight uppercase italic tracking-tighter whitespace-nowrap">
                yo, i'm isharu.{' '}
                <span className="relative inline-block px-4 sm:px-8">
                  <svg 
                    viewBox="0 0 800 240" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[180%] pointer-events-none z-0"
                  >
                    <g filter="url(#pencil-roughness-about)">
                      <path d="M770,120 C770,180 550,220 380,220 C150,220 30,180 40,110 C50,40 300,20 450,30 C650,45 785,80 765,135" stroke="white" strokeWidth="6" strokeLinecap="round" className="pencil-draw-path-1" />
                      <path d="M740,140 C720,185 500,205 350,205 C120,205 50,165 60,105 C70,55 320,45 480,55 C640,65 750,100 730,150" stroke="#dc2626" strokeWidth="3" strokeLinecap="round" className="pencil-draw-path-2 opacity-80" />
                    </g>
                    <defs>
                      <filter id="pencil-roughness-about">
                        <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="5" result="noise" />
                        <feDisplacementMap in="SourceGraphic" in2="noise" scale="5" />
                      </filter>
                    </defs>
                  </svg>
                  <span className="text-red-600 relative z-10 whitespace-nowrap lowercase">i edit videos</span>
                </span>
              </p>
              
              <p className="mt-6 md:mt-10 text-lg md:text-xl text-zinc-400 font-bold leading-relaxed max-w-2xl lowercase">
                i make funny and reaction videos that slap harder than your alarm on a monday, 
                the kind of edits where viewers forget they have a life outside youtube. 
                if your content is boring, that's a you problem — but lucky for you, i fix those :)
              </p>
            </div>

            {/* THE CV GRID */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-12 md:gap-y-16">
              
              <div className="space-y-6">
                <h2 className="text-2xl font-black text-red-600 uppercase italic tracking-tighter">Experience</h2>
                <div className="space-y-1">
                  <p className="font-black text-xl tracking-tighter">2023 – PRESENT</p>
                  <p className="font-black text-md uppercase text-white">Freelance Video Editor</p>
                  <p className="text-zinc-500 font-bold lowercase text-lg leading-snug">
                    {profileData.experience.description}
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <h2 className="text-2xl font-black text-red-600 uppercase italic tracking-tighter">Achievements</h2>
                <div className="space-y-5">
                  {profileData.achievements.map((ach, idx) => (
                    <div key={idx} className="leading-tight">
                      <p className="text-xl font-black uppercase tracking-tighter">{ach.label}</p>
                      {ach.sub && <p className="text-zinc-500 font-bold lowercase italic text-base">{ach.sub}</p>}
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                <h2 className="text-2xl font-black text-red-600 uppercase italic tracking-tighter">Skills</h2>
                <p className="text-white font-bold text-xl leading-relaxed italic lowercase">
                  {profileData.skills}
                </p>
              </div>

              <div className="space-y-6">
                <h2 className="text-2xl font-black text-red-600 uppercase italic tracking-tighter">Languages</h2>
                <div className="space-y-3 font-black uppercase">
                  {profileData.languages.map((lang, idx) => (
                    <p key={idx} className="text-xl tracking-tighter leading-none">
                      {lang.name} <span className="text-zinc-500 font-bold lowercase italic text-lg">— {lang.note}</span>
                    </p>
                  ))}
                </div>
              </div>

              <div className="md:col-span-2 space-y-8">
                <h2 className="text-2xl font-black text-red-600 uppercase italic tracking-tighter">Programs</h2>
                <div className="flex flex-wrap gap-8 items-start">
                  {profileData.programs.map((prog) => (
                    <div key={prog.name} className="flex flex-col items-center gap-4">
                      <div className="w-16 h-16 md:w-20 md:h-20 border-2 border-white flex items-center justify-center font-black text-2xl md:text-3xl bg-black rounded-xl shadow-[4px_4px_0_white]">
                        {prog.name}
                      </div>
                      <div className="flex flex-col gap-1.5">
                        {[...Array(prog.level)].map((_, i) => (
                          <span key={i} className="text-red-600 text-sm">✦</span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT SIDE IMAGE */}
          <div className="hidden lg:flex justify-center lg:justify-end lg:sticky lg:top-32 pointer-events-none">
            <img 
              src="src/assets/images/about.png" 
              alt="Isharu" 
              className="w-full max-w-[480px] h-auto object-cover opacity-90 filter contrast-125" 
            />
          </div>
        </div>
      </div>

      <style>{`
        .pencil-draw-path-1 { stroke-dasharray: 5000; stroke-dashoffset: 5000; animation: draw-pencil 1.5s cubic-bezier(0.45, 0, 0.55, 1) forwards; }
        .pencil-draw-path-2 { stroke-dasharray: 5000; stroke-dashoffset: 5000; animation: draw-pencil 1.7s cubic-bezier(0.45, 0, 0.55, 1) 0.2s forwards; }
        @keyframes draw-pencil { to { stroke-dashoffset: 0; } }
      `}</style>
    </section>
  );
};

export default AboutSection;