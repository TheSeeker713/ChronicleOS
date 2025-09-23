import React, { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-obsidian/50 border-b border-obsidian/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <a href="#" className="flex items-center gap-3" aria-label="ChronicleOS home">
              <svg width="36" height="36" viewBox="0 0 64 64" aria-hidden="true">
                <circle cx="32" cy="32" r="30" fill="#cba135"/>
                <path d="M18 20h28v6H18zM18 30h22v6H18zM18 40h28v6H18z" fill="#0b1320" opacity="0.95"/>
              </svg>
              <span className="font-display text-lg">ChronicleOS™</span>
            </a>
          </div>

          <nav className="hidden md:flex items-center gap-4">
            <a className="text-sm opacity-90 hover:opacity-100" href="#explore" aria-label="Explore as guest">Explore (Guest)</a>
            <a className="text-sm opacity-90 hover:opacity-100" href="#signin" aria-label="Sign in">Sign In</a>
            <a className="text-sm opacity-90 hover:opacity-100" href="#signup" aria-label="Sign up">Sign Up</a>
            <a className="ml-2 inline-flex items-center rounded-md bg-gold px-4 py-2 text-ink font-semibold" href="#reserve" role="button" aria-pressed="false">Reserve Founder’s Cartridge</a>
          </nav>

          <div className="md:hidden">
            <button type="button" aria-expanded={open} aria-label="Toggle menu" onClick={() => setOpen(!open)} className="p-2 rounded-md focus:outline-none focus-visible:ring-2">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                {open ? <path d="M18 6L6 18M6 6l12 12" /> : <path d="M3 6h18M3 12h18M3 18h18" />}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-obsidian/30">
          <div className="px-4 py-3 space-y-2">
            <a className="block" href="#explore">Explore (Guest)</a>
            <a className="block" href="#signin">Sign In</a>
            <a className="block" href="#signup">Sign Up</a>
            <a className="block font-semibold" href="#reserve">Reserve Founder’s Cartridge</a>
          </div>
        </div>
      )}
    </header>
  )
}
