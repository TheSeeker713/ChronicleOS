import React from 'react'

export default function CTA(){
  return (
    <section id="reserve" className="mt-16">
      <div className="panel-parchment p-6 rounded-xl border border-gold/20 text-center">
        <h2 className="text-2xl font-display font-bold">Become a Founding Archivist.</h2>
        <p className="mt-2 text-sm text-ink/80">Serialized Founder’s Cartridge, early access, exclusive frame & Discord role.</p>
        <div className="mt-4 flex items-center justify-center gap-3">
          <a className="px-4 py-2 bg-gold text-ink rounded-md font-semibold" href="#reserve">Reserve Founder’s Cartridge</a>
          <a className="px-4 py-2 border rounded-md" href="#updates">Get Updates</a>
        </div>
        <p className="mt-3 text-xs text-obsidian/70">Estimated delivery and terms subject to change. This is a pre-sale reservation, not a purchase.</p>
      </div>
    </section>
  )
}
