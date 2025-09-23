import React from 'react'

export default function Footer(){
  return (
    <footer className="mt-20 border-t border-obsidian/30 pt-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <div className="font-semibold">© DigiArtifact. ChronicleOS™</div>
          <div className="text-sm text-obsidian/60">Stabilizing multiversal resonance…</div>
        </div>
        <div className="flex items-center gap-4 text-sm">
          <a href="#about">About</a>
          <a href="#creator">Creator Portal</a>
          <a href="#ethics">Ethics & AI</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </footer>
  )
}
