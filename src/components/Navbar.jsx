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

    // INTERCEPT CONTACT: Scroll to absolute bottom for the reveal effect
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
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-fit px-4">
      <div className="flex items-center bg-black/90 backdrop-blur-md px-6 md:px-10 py-3 rounded-full border border-white shadow-2xl">
        <ul className="flex items-center gap-6 md:gap-10">
          {navLinks.map((link) => (
            <li key={link.name}>
              <button
                onClick={(e) => handleScroll(e, link.targetId)}
                className="text-gray-400 hover:text-white transition-all text-[10px] md:text-sm font-black uppercase tracking-widest active:scale-90 cursor-pointer outline-none whitespace-nowrap"
              >
                {link.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;