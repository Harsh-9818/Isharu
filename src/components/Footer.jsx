import React from 'react';

const ContactPage = () => {
  const navLinks = [
    { name: "Yt Jobs", href: "https://ytjobs.co/talent/profile/352187?r=312" },
    { name: "Instagram", href: "https://www.instagram.com/isharuuuuu" },
    { name: "X", href: "https://x.com/Isharuu" },
    { name: "Email", href: "mailto:isharuuuu@gmail.com" },
  ];

  const emailHref = "mailto:isharuuuu@gmail.com";

  return (
    <section 
      id="contact-section" 
      className="relative w-full h-full bg-black text-white font-sans flex flex-col justify-between p-8 md:p-16 overflow-hidden"
    >
      {/* Background Watermark - CENTERED X-AXIS ONLY */}
      <div className="absolute bottom-[-5%] left-1/2 -translate-x-1/2 pointer-events-none select-none z-0 opacity-[0.02] whitespace-nowrap">
        <h3 className="text-[10rem] md:text-[20rem] font-black uppercase italic tracking-tighter">
          ISHARU
        </h3>
      </div>

      <nav className="relative z-20 flex justify-end gap-6 md:gap-10 mt-20 md:mt-0">
        {navLinks.map((link) => (
          <a 
            key={link.name} 
            href={link.href} 
            className="text-[10px] md:text-xs font-bold tracking-widest text-white/60 hover:text-red-600 transition-colors duration-300 uppercase"
          >
            {link.name}
          </a>
        ))}
      </nav>

      <div className="relative z-10 flex flex-col items-start w-full max-w-6xl py-10 md:py-0">
        <h2 
          className="text-2xl md:text-4xl lg:text-[2.8rem] font-medium leading-[1.3] tracking-tight"
          style={{
            background: 'linear-gradient(to right, #ffffff 40%, #27272a 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Curious about what we can create together? <br />
          Let’s bring something extraordinary to life!
        </h2>

        <div className="mt-10 flex flex-col md:flex-row items-start md:items-center gap-8">
          <a 
            href={emailHref}
            className="bg-white text-black px-8 py-3 rounded-sm font-bold text-[10px] uppercase tracking-widest hover:bg-red-600 hover:text-white transition-all duration-300 inline-block text-center"
          >
            Get in Touch
          </a>
          
          <div className="flex items-center gap-3">
            <div className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-90"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-600"></span>
            </div>
            <span className="text-[9px] font-bold text-zinc-600 tracking-[0.2em] uppercase">Available For Work</span>
          </div>
        </div>
      </div>

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 items-end pt-10 border-t border-white/5">
        <div className="flex flex-col gap-1">
          <p className="text-[9px] font-bold tracking-widest text-zinc-600 uppercase">Direct</p>
          <p className="text-xs font-bold">isharuuuu@gmail.com</p>
        </div>
        <div className="flex flex-col md:items-center gap-1">
          <p className="text-[9px] text-zinc-600 uppercase tracking-widest">Designed & Developed</p>
          <p className="text-[10px] font-black uppercase tracking-[0.1em] text-white">Isharu</p>
        </div>
        <div className="flex flex-col md:items-end gap-1">
          <p className="text-[9px] text-zinc-600 uppercase tracking-[0.2em]">Isharu © 2026</p>
          <p className="text-[10px] font-bold uppercase tracking-tighter">All rights reserved</p>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;