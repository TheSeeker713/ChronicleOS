import React from 'react'

const steps = [
  { title: 'Enter the Archive', desc: 'Browse public cartridges or sign up as an Archivist.' },
  { title: 'Collect & Trade', desc: 'Buy, trade, and manage serialized cartridges; market updates value.' },
  { title: 'Battle & Evolve', desc: 'Play matches to increase prestige and CVP.' }
]

export default function HowItWorks(){
  return (
    <section className="mt-16">
      <h2 className="text-2xl font-semibold">How It Works</h2>
      <div className="mt-6 grid sm:grid-cols-3 gap-6">
        {steps.map(s => (
          <div key={s.title} className="panel-parchment p-4 rounded-lg">
            <div className="w-12 h-12 rounded-md bg-obsidian/10 flex items-center justify-center">Icon</div>
            <h3 className="mt-3 font-semibold">{s.title}</h3>
            <p className="mt-1 text-sm text-ink/80">{s.desc}</p>
          </div>
        ))}
      </div>
      <p className="mt-4 text-xs text-obsidian/70">CVP (Card Value Points) are earned by play and trade; diminishing returns apply to repeated actions to encourage diverse engagement.</p>
    </section>
  )
}
