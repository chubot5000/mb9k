import { useState, useEffect } from 'react'

function App() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-[#C8E619] p-5 md:p-7">
      {/* Card Container */}
      <div className="rounded-3xl overflow-hidden relative">
        
        {/* Dark Green Hero Section */}
        <div className="bg-[#0D1F0D] relative min-h-[80vh] flex flex-col">
          
          {/* Navigation */}
          <nav className={`flex items-center justify-between px-6 md:px-10 py-5 sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'nav-glass' : ''}`}>
            {/* Left - Logo */}
            <div className="animate-nav-1 flex items-center gap-3">
              <img src="/mascot.png" alt="MB9K Mascot" className="w-10 h-10 rounded-full object-cover" />
              <div className="leading-tight">
                <div className="text-white font-bold text-sm tracking-widest uppercase">Megabrand</div>
                <div className="text-white font-bold text-sm tracking-widest uppercase relative">
                  9000
                  <svg className="absolute -bottom-1 left-0 w-full" height="6" viewBox="0 0 40 6" fill="none">
                    <path d="M0 3 Q5 0 10 3 Q15 6 20 3 Q25 0 30 3 Q35 6 40 3" stroke="#F5C518" strokeWidth="2" fill="none"/>
                  </svg>
                </div>
              </div>
            </div>

            {/* Center */}
            <div className="animate-nav-2 hidden md:block">
              <span className="font-elegant text-white text-lg italic">Design Studio</span>
            </div>

            {/* Right - CTA */}
            <div className="animate-nav-3">
              <button className="btn-hover bg-[#F5C518] text-[#0D1F0D] font-semibold px-6 py-2.5 rounded-full border border-[#0D1F0D]/20 text-sm">
                Try for Free
              </button>
            </div>
          </nav>

          {/* Hero Content */}
          <div className="flex-1 flex items-center justify-center relative px-6 pb-20">
            {/* 3D Logo */}
            <img 
              src="/logo3d.png" 
              alt="Megabrand 9000 3D Logo" 
              className="animate-logo w-[60vw] max-w-[900px] relative z-10"
            />
          </div>

          {/* Mascot - overlapping boundary */}
          <div className="absolute right-6 md:right-16 bottom-0 translate-y-[30%] z-30">
            <img 
              src="/mascot.png" 
              alt="MB9K Mascot" 
              className="animate-mascot animate-float h-[300px] md:h-[380px] w-auto drop-shadow-2xl"
            />
          </div>
        </div>

        {/* White Bottom Bar */}
        <div className="bg-white relative z-20 px-6 md:px-10 py-10 md:py-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="animate-bottom">
            <h2 className="text-[#0D1F0D] text-2xl md:text-4xl font-bold leading-tight">
              Automate the boring. Elevate the weird.
            </h2>
            <p className="text-[#0D1F0D]/70 text-lg md:text-xl mt-2 font-elegant italic">
              Let's freaking go, my dude.
            </p>
          </div>
          <div className="animate-bottom shrink-0">
            <button className="btn-hover bg-[#F5C518] text-[#0D1F0D] font-bold px-8 py-3.5 rounded-full border border-[#0D1F0D]/20 text-lg whitespace-nowrap">
              Let's Go <em className="font-elegant">Mega Mode</em>
            </button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default App
