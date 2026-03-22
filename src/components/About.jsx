import React from 'react';

const AboutSection = () => {
  const profileData = {
    experience: [
      { year: "2024 - Present", role: "Lead Video Editor", client: "High-Tier YouTube Creators" },
      { year: "2023 - 2024", role: "VFX Specialist", client: "Atelier Web Services" },
      { year: "2021 - 2023", role: "Freelance Motion Designer", client: "International Brand Campaigns" },
    ],
    achievements: [
      { year: "2024", title: "100M+ Cumulative Views", description: "Edited viral long-form content for top 1% creators." },
      { year: "2023", title: "Best Visual Storytelling", description: "Awarded for 'Twisted' project edit sequence." },
    ],
    skills: [
      "Advanced Narrative Editing", "Color Grading (LOG/Rec.709)", "Sound Design & Mixing", 
      "2D/3D Motion Graphics", "Visual Effects (VFX)", "High-Retention Hook Design"
    ]
  };

  return (
    <section id="about-section" className="relative z-20 bg-black min-h-screen py-24 px-6 md:px-16 font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="relative mb-24 flex flex-col items-center justify-center w-full overflow-hidden py-10">
          <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[7rem] sm:text-[12rem] md:text-[18rem] font-black text-white/[0.03] uppercase select-none tracking-tighter italic whitespace-nowrap leading-none">
            ISHARU
          </span>
          <div className="relative z-10 text-center">
            <h1 className="text-6xl md:text-9xl font-black uppercase tracking-tighter leading-none text-white italic">
              About <span className="text-red-600">Me.</span>
            </h1>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-16 items-start">
          <div className="space-y-20">
            <div className="max-w-2xl">
              <p className="text-xl md:text-3xl font-bold text-white leading-tight uppercase italic tracking-tight">
                I turn <span className="text-red-600">raw footage</span> into cinematic experiences. 
              </p>
              <p className="mt-6 text-lg text-zinc-400 font-medium leading-relaxed">
                Specializing in high-retention editing and advanced VFX, I help creators and brands dominate the digital landscape.
              </p>
            </div>

            <div>
              <h2 className="text-3xl md:text-5xl font-black uppercase mb-10 italic text-white flex items-center gap-4">
                <span className="w-12 h-1 bg-red-600"></span> Experience
              </h2>
              <div className="space-y-10">
                {profileData.experience.map((exp, i) => (
                  <div key={i} className="group relative pl-8 border-l border-zinc-800 hover:border-red-600 transition-colors">
                    <div className="absolute left-[-5px] top-0 w-2 h-2 rounded-full bg-red-600"></div>
                    <span className="text-xs font-black text-red-600 uppercase tracking-widest">{exp.year}</span>
                    <h3 className="text-xl md:text-2xl font-black text-white uppercase mt-1">{exp.role}</h3>
                    <p className="text-zinc-500 font-medium text-lg uppercase tracking-tight">{exp.client}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="sticky top-24 flex justify-center lg:justify-end">
            <div className="relative group">
              <div className="absolute -top-4 -left-4 w-24 h-24 border-t-4 border-l-4 border-red-600 transition-transform group-hover:-translate-x-1 group-hover:-translate-y-1"></div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-4 border-r-4 border-red-600 transition-transform group-hover:translate-x-1 group-hover:translate-y-1"></div>
              <div className="relative z-10 w-full max-w-[400px] aspect-[4/5] bg-zinc-900 rounded-lg overflow-hidden border-2 border-white/10 shadow-[20px_20px_0_rgba(220,38,38,0.2)]">
                <img src="/src/assets/images/anime2.png" alt="Isharu Portrait" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;