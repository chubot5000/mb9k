import { useState, useEffect } from 'react'

function App() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    // Trigger animations after mount
    requestAnimationFrame(() => setLoaded(true))
  }, [])

  return (
    <div className="min-h-screen bg-[#C8E619] p-4 md:p-6">
      {/* Card Container - relative for mascot overlap */}
      <div className="relative">
        
        {/* Dark Green Hero Section */}
        <div className="bg-[#0D1F0D] rounded-t-[24px] relative" style={{ minHeight: '78vh' }}>
          
          {/* Navigation */}
          <nav className="flex items-center justify-between px-6 md:px-10 py-6 relative z-40">
            {/* Left - Logo */}
            <div className={`flex items-center gap-3 transition-all duration-500 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'}`}>
              <img src="/mascot.png" alt="MB9K" className="w-10 h-10 rounded-full object-cover" />
              <div className="leading-tight">
                <div className="text-white font-bold text-sm tracking-[0.2em] uppercase" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Megabrand</div>
                <div className="text-white font-bold text-sm tracking-[0.2em] uppercase relative inline-block">
                  9000
                  <svg className="absolute -bottom-1.5 left-0 w-full" height="6" viewBox="0 0 50 6" fill="none" preserveAspectRatio="none">
                    <path d="M0 3 Q6 0 12 3 Q18 6 24 3 Q30 0 36 3 Q42 6 50 3" stroke="#F5C518" strokeWidth="2" fill="none"/>
                  </svg>
                </div>
              </div>
            </div>

            {/* Center */}
            <div className={`hidden md:block transition-all duration-500 delay-100 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'}`}>
              <span className="text-white text-lg" style={{ fontFamily: "'Playfair Display', serif" }}>Design Studio</span>
            </div>

            {/* Right - CTA */}
            <div className={`transition-all duration-500 delay-200 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'}`}>
              <button className="bg-[#F5C518] text-[#0D1F0D] font-semibold px-6 py-2.5 rounded-full border-2 border-[#3A5A00]/30 text-sm hover:scale-105 hover:shadow-[0_0_20px_rgba(245,197,24,0.4)] transition-all duration-200">
                Try for Free
              </button>
            </div>
          </nav>

          {/* Hero Content - logo center-left */}
          <div className="flex-1 flex items-center justify-center relative px-6" style={{ minHeight: 'calc(78vh - 80px)' }}>
            <img 
              src="/logo3d.png" 
              alt="Megabrand 9000" 
              className={`w-[55vw] max-w-[800px] relative z-10 -ml-[5vw] transition-all duration-700 delay-200 ${loaded ? 'opacity-100 scale-100' : 'opacity-0 scale-[0.8]'}`}
              style={{ transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)' }}
            />
          </div>
        </div>

        {/* White Bottom Bar */}
        <div className="bg-white rounded-b-[24px] relative z-20 px-6 md:px-10 py-10 md:py-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className={`transition-all duration-600 delay-500 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-[#0D1F0D] text-2xl md:text-3xl lg:text-4xl font-bold leading-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Automate the boring. Elevate the weird.
              <br />
              <span style={{ fontFamily: "'Playfair Display', serif", fontStyle: 'italic', fontWeight: 400 }}>
                Let's freaking go, my dude.
              </span>
            </h2>
          </div>
          <div className={`shrink-0 transition-all duration-600 delay-600 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <button className="bg-[#F5C518] text-[#0D1F0D] font-bold px-8 py-3.5 rounded-full border-2 border-[#3A5A00]/30 text-base md:text-lg whitespace-nowrap hover:scale-105 hover:shadow-[0_0_24px_rgba(245,197,24,0.4)] transition-all duration-200">
              Let's Go <em style={{ fontFamily: "'Playfair Display', serif" }}>Mega Mode</em>
            </button>
          </div>
        </div>

        {/* Mascot - absolutely positioned to overlap both sections */}
        <div 
          className={`absolute right-4 md:right-12 lg:right-20 z-30 pointer-events-none transition-all duration-700 delay-400 ${loaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-24'}`}
          style={{ 
            bottom: '0px',
            transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
          }}
        >
          <img 
            src="/mascot.png" 
            alt="MB9K Mascot" 
            className="h-[280px] md:h-[360px] lg:h-[420px] w-auto drop-shadow-2xl animate-float"
          />
        </div>

      </div>
    </div>
  )
}

export default App
