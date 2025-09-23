import React from 'react'

const features = [
  { title: 'Creator-Powered', body: 'Publish cartridges and earn royalties when they trade or sell.' },
  { title: 'RPG Card Battles', body: 'Attack/Defense/HP mechanics — win matches to increase value.' },
  { title: 'Scarcity That Scales', body: 'Gold, Silver, Pearl, and Standard editions with tiered supply.' },
  { title: 'Ethics Built-In', body: 'AI disclosure and automated stealth-AI detection flags.' }
]

function IconPlaceholder() {
  return (
    <div className="w-10 h-10 rounded-md bg-obsidian/10 flex items-center justify-center text-gold">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#cba135" strokeWidth="1.5"><circle cx="12" cy="12" r="9" /></svg>
    </div>
  )
}

export default function FeatureTiles(){
  return (
    <section className="mt-16">
      <h2 className="text-2xl font-semibold">Key Features</h2>
      <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((f) => (
          <article key={f.title} className="panel-parchment p-4 rounded-xl border border-gold/20 hover:shadow-[0_0_20px_rgba(203,161,53,0.1)] transition">
            <div className="flex items-start gap-3">
              <IconPlaceholder />
              <div>
                <h3 className="font-semibold">{f.title}</h3>
                <p className="mt-1 text-sm text-ink/80">{f.body}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
