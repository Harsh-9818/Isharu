import React from 'react';
import dropImage from '../assets/images/drop2.png';

// Import all logos properly
import twistedLogo from '../assets/images/twisted.jpg';
import baifieldLogo from '../assets/images/baifield.jpg';
import channel3Logo from '../assets/images/channel3.jpg';

const projects = [
  {
    author: "Twisted",
    quote: "“I want to get the whole team to edit like this. It’s a perfectly edited video start to finish”",
    videoUrl: "https://www.youtube.com/watch?v=RURpFPGc7Eg&t=1s",
    logo: twistedLogo,
  },
  {
    author: "BAIFIELD",
    quote: "“Omg just watched the vid ITS SO GOOD your work is honestly insane dude thanks so much, I can't wait to commission you again!”",
    videoUrl: "https://www.youtube.com/watch?v=e-lJUpMeXDw",
    logo: baifieldLogo,
  },
  {
    author: "ErenSirDontCompareIt",
    quote: "“Legit one of the cleanest edits I've ever seen, you got crazy talent man.”",
    videoUrl: "https://www.youtube.com/watch?v=EHfYhgA7I_0",
    logo: channel3Logo,
  },
];

const WorkPage = () => {
  const getEmbedUrl = (url) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    const videoId = match && match[2].length === 11 ? match[2] : null;
    return `https://www.youtube.com/embed/${videoId}?modestbranding=1&rel=0`;
  };

  return (
    <section
      id="work-section"
      className="bg-black min-h-screen py-8 px-6 md:px-20 font-sans overflow-hidden"
    >
      <svg width="0" height="0" className="absolute">
        <defs>
          <filter id="pencil-texture">
            <feTurbulence type="fractalNoise" baseFrequency="0.05" numOctaves="3" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="3" />
          </filter>
        </defs>
      </svg>

      <div className="max-w-7xl mx-auto">
        <div className="relative mb-32 mt-32 flex flex-col items-center justify-center text-center">
          <div className="relative z-10">
            <img 
              src={dropImage} 
              alt="The Drops" 
              className="h-32 md:h-64 w-auto object-contain mx-auto"
            />
          </div>
        </div>

        <div className="space-y-40">
          {projects.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } items-center justify-between gap-16 group`}
            >
              
              {/* VIDEO CONTAINER WITH AMBIENT RED SHADOW ONLY */}
              <div className="w-full lg:w-[60%] relative">
                
                {/* 1. LARGE BACKGROUND SOFT GLOW */}
                <div className="absolute -inset-10 bg-red-600/15 blur-[100px] rounded-full opacity-0 group-hover:opacity-100 transition-all duration-1000 ease-in-out pointer-events-none"></div>
                
                {/* 2. TIGHTER INTENSE GLOW (Shadow Replacement) */}
                <div className="absolute -inset-4 bg-red-500/25 blur-[30px] rounded-[3rem] opacity-0 group-hover:opacity-100 transition-all duration-700 ease-out pointer-events-none"></div>

                {/* THE ACTUAL VIDEO BOX (Border remains subtle white/10) */}
                <div className="relative z-10 aspect-video rounded-[1.5rem] md:rounded-[2rem] overflow-hidden bg-zinc-900 border-2 border-white/10 transition-all duration-500 ease-out group-hover:scale-[1.01]">
                  <iframe
                    className="w-full h-full"
                    src={getEmbedUrl(item.videoUrl)}
                    title="YouTube video player"
                    frameBorder="0"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>

              {/* TEXT/TESTIMONIAL CONTAINER */}
              <div className="w-full lg:w-[35%] flex flex-col items-center text-center space-y-6">
                
                <div className="relative">
                   <div className="w-24 h-24 rounded-full border-2 border-red-600 p-1 bg-black transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12 overflow-hidden shadow-lg">
                    <img
                      src={item.logo}
                      alt="client logo"
                      className="w-full h-full rounded-full object-cover grayscale-0 md:grayscale group-hover:grayscale-0 transition-all duration-500"
                    />
                  </div>
                </div>

                <div className="space-y-2 flex flex-col items-center w-full">
                  <h3 className="font-texture text-red-600 font-black text-5xl uppercase tracking-wider">
                    {item.author}
                  </h3>
                  <div className="h-1 w-12 bg-red-600/40 group-hover:w-32 transition-all duration-500"></div>
                </div>

                <div className="relative transition-all duration-300 group-hover:-translate-y-2">
                  <p className="text-zinc-300 font-medium text-xl md:text-2xl leading-relaxed italic max-w-sm">
                    {item.quote}
                  </p>
                  
                  <div className="flex gap-1 mt-6 justify-center">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-6 h-6 transition-all duration-500 group-hover:scale-150 group-hover:rotate-[15deg]"
                        style={{
                          fill: "#dc2626", 
                          filter: "url(#pencil-texture)",
                          transitionDelay: `${i * 100}ms`,
                        }}
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkPage;