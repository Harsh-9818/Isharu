import Navbar from './components/Navbar'
import HeroSection from './components/Hero'
import WorkPage from './components/Work'
import AboutSection from './components/About'
import ContactPage from './components/Footer'

function App() {
  // Smooth scroll function to the bottom of the page
  const scrollToContact = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth'
    });
  };

  return (
    <main className="relative bg-black w-full overflow-x-hidden">
      {/* Pass the scroll function to Navbar and Hero */}
      <Navbar onContactClick={scrollToContact} />

      {/* THE CONTENT LAYER */}
      <div className="relative z-20 bg-black w-full shadow-[0_50px_100px_rgba(0,0,0,1)] mb-[100vh]">
        <HeroSection onContactClick={scrollToContact} />
        <WorkPage />
        <AboutSection />
      </div>

      {/* THE REVEAL LAYER */}
      <div className="fixed bottom-0 left-0 w-full h-screen z-10">
        <ContactPage />
      </div>
    </main>
  )
}

export default App