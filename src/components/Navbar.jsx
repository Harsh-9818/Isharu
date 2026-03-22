import React from 'react';

const Navbar = () => {
  const navLinks = [
    { name: 'Home', targetId: 'hero-section' },
    { name: 'Work', targetId: 'work-section' },
    { name: 'About', targetId: 'about-section' },
    { name: 'Contact', targetId: 'contact-section' },
  ];

  const handleScroll = (e, id) => {
    e.preventDefault();

    if (id === 'contact-section') {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
      return;
    }

    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        if (id === 'hero-section') {
          window.scrollTo({ top: 0, behavior: 'smooth' });
          return;
        }

        const offset = 80;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = element.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
      }
    }, 10);
  };

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full flex justify-center px-4">
      <ul className="font-texture flex items-center gap-2 md:gap-4">
        {navLinks.map((link) => (
          <li key={link.name}>
            <button
              onClick={(e) => handleScroll(e, link.targetId)}
              className="
                /* Typography - INCREASED FONT SIZES ONLY */
                text-gray-600 transition-all text-md md:text-lg font-black uppercase tracking-widest 
                
                /* Layout & Shape */
                px-4 py-2 rounded-xl border border-transparent 
                
                /* Hover States */
                hover:text-white hover:bg-red-600 hover:border-black 
                
                /* Interaction */
                active:scale-90 cursor-pointer outline-none whitespace-nowrap
              "
            >
              {link.name}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;