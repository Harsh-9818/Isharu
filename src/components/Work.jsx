import React from 'react';
// Correct way to import assets in a standard React/Vite project
import dropImage from '../assets/images/drop.png';

const projects = [
  {
    author: "Twisted",
    quote: "“I want to get the whole team to edit like this. It’s a perfectly edited video start to finish”",
    videoUrl: "https://www.youtube.com/watch?v=RURpFPGc7Eg&t=1s",
    logo: "/src/assets/images/twisted.jpg",
  },
  {
    author: "BAIFIELD",
    quote: "“Omg just watched the vid ITS SO GOOD your work is honestly insane dude thanks so much, I can't wait to commission you again!”",
    videoUrl: "https://www.youtube.com/watch?v=e-lJUpMeXDw",
    logo: "/src/assets/images/baifield.jpg",
  },
  {
    author: "ErenSirDontCompareIt",
    quote: "“Legit one of the cleanest edits I've ever seen, you got crazy talent man.”",
    videoUrl: "https://www.youtube.com/watch?v=EHfYhgA7I_0",
    logo: "/src/assets/images/channel3.jpg",
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
      className="bg-black min-h-screen py-24 px-6 md:px-20 font-sans overflow-hidden"
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
        <div className="relative mb-32 flex flex-col items-center justify-center text-center">
          {/* Background Text */}
          <span className="absolute top-1/2 -translate-y-1/2 text-[8rem] md:text-[18rem] font-black text-white/[0.03] uppercase select-none tracking-tighter italic whitespace-nowrap">
            ISHARU
          </span>
          
          <div className="relative z-10">
            {/* UPDATED: Increased size, no hover effect, and no red bar */}
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
              {/* Video Container */}
              <div className="w-full lg:w-[60%] aspect-video rounded-[2rem] overflow-hidden bg-zinc-900 border-2 border-white/10 transition-all duration-500 ease-out group-hover:border-red-600/50 group-hover:shadow-[0_0_50px_rgba(220,38,38,0.2)]">
                <iframe
                  className="w-full h-full"
                  src={getEmbedUrl(item.videoUrl)}
                  title="YouTube video player"
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
              </div>

              {/* Text/Testimonial Container */}
              <div className="w-full lg:w-[35%] flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
                <div className="relative">
                   <div className="w-20 h-20 rounded-full border-2 border-red-600 p-1 bg-black transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12 overflow-hidden">
                    <img
                      src={item.logo}
                      alt="client logo"
                      className="w-full h-full rounded-full object-cover grayscale group-hover:grayscale-0 transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-red-600 font-black text-3xl tracking-tighter uppercase italic">
                    {item.author}
                  </h3>
                  <div className="h-1 w-12 bg-white/20 group-hover:w-full transition-all duration-500"></div>
                </div>

                <div className="relative bg-zinc-900/50 border border-white/10 rounded-[2rem] p-8 transition-all duration-300 group-hover:-translate-y-2 group-hover:bg-zinc-900 group-hover:border-red-600/30 shadow-[10px_10px_0_rgba(220,38,38,0.2)]">
                  <p className="text-zinc-300 font-medium text-xl leading-relaxed italic">
                    {item.quote}
                  </p>
                  
                  {/* Red Stars */}
                  <div className="flex gap-1 mt-6 justify-center lg:justify-start">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-6 h-6 transition-all duration-500 group-hover:scale-125 group-hover:rotate-[15deg]"
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