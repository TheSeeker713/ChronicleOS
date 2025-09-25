import React, { useEffect, useRef } from 'react'

function TrustBadge({ children }) {
  return (
    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-obsidian/20 border border-obsidian/10 text-sm">
      <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden>
        <circle cx="12" cy="12" r="10" stroke="#cba135" strokeWidth="1" fill="none" />
      </svg>
      <span>{children}</span>
    </div>
  )
}

export default function Hero() {
  const canvasRef = useRef(null)

  useEffect(() => {
    // Particle animation effect
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    let width, height, particles = [];
    let animationId;
    
    function resize() { 
      width = canvas.width = canvas.clientWidth; 
      height = canvas.height = canvas.clientHeight; 
    }
    
    function init() { 
      resize(); 
      particles = Array.from({length: Math.max(12, Math.floor(width/120))}).map(() => ({ 
        x: Math.random() * width, 
        y: Math.random() * height, 
        r: Math.random() * 1.8 + 0.2, 
        vx: (Math.random() - 0.5) * 0.2, 
        vy: -Math.random() * 0.2 
      })); 
    }
    
    function step() { 
      ctx.clearRect(0, 0, width, height); 
      ctx.fillStyle = 'rgba(255,240,200,0.06)'; 
      particles.forEach(p => { 
        ctx.beginPath(); 
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2); 
        ctx.fill(); 
        p.x += p.vx; 
        p.y += p.vy; 
        if (p.y < -10) p.y = height + 10; 
        if (p.x < -10) p.x = width + 10; 
        if (p.x > width + 10) p.x = -10; 
      }); 
      animationId = requestAnimationFrame(step); 
    }
    
    const handleResize = () => {
      resize();
      init();
    };
    
    window.addEventListener('resize', handleResize);
    init(); 
    step();
    
    // Cleanup function
    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, []);
  return (
    <section className="relative mt-12 sm:mt-20">
      <div className="absolute inset-0 pointer-events-none opacity-40" aria-hidden>
        <div className="h-full bg-gradient-to-b from-transparent via-black/30 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h1 className="text-3xl sm:text-5xl font-display font-extrabold tracking-tight">The Multiversal Archive Is Coming Online.</h1>
        <p className="mt-4 text-lg text-parchment/90">Collect. Trade. Play. Shape living stories.</p>

        <div className="mt-6 flex items-center justify-center gap-4">
          <a href="#explore" role="button" className="rounded-md px-4 py-2 border border-obsidian/30 bg-obsidian/20">Enter as Guest</a>
          <a href="#reserve" role="button" className="rounded-md px-4 py-2 bg-gold text-ink font-semibold">Reserve Founder’s Cartridge</a>
        </div>

        <div className="mt-6 flex items-center justify-center gap-3">
          <TrustBadge>Rarity Editions</TrustBadge>
          <TrustBadge>Creator Royalties</TrustBadge>
          <TrustBadge>Play-to-Prestige</TrustBadge>
        </div>
      </div>

      <canvas 
        ref={canvasRef}
        className="pointer-events-none absolute inset-0" 
        aria-hidden="true" 
      />
    </section>
  )
}
