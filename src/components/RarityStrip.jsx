import React from 'react'

const tiers = [
  { name: 'Mythic', color: 'bg-gradient-to-br from-yellow-400 to-yellow-600', stock: '10' },
  { name: 'Legendary', color: 'bg-gradient-to-br from-slate-300 to-slate-100', stock: '100' },
  { name: 'Epic', color: 'bg-gradient-to-br from-white to-gray-800', stock: '1,000' },
  { name: 'Standard', color: 'bg-gray-500', stock: 'Unlimited' }
]

export default function RarityStrip(){
  return (
    <section className="mt-16">
      <h2 className="text-2xl font-semibold">Rarity Editions</h2>
      <div className="mt-4 flex items-stretch gap-4 overflow-x-auto py-2">
        {tiers.map(t => (
          <div key={t.name} className="min-w-[180px] panel-parchment rounded-lg p-4 flex-shrink-0 border border-gold/20">
            <div className={`h-28 rounded-md ${t.color} flex items-center justify-center text-obsidian font-bold`}>Cartridge Front</div>
            <div className="mt-3 flex items-center justify-between">
              <div>
                <div className="text-sm font-semibold">{t.name}</div>
                <div className="text-xs text-ink/70">Front view</div>
              </div>
              <div className="text-sm bg-obsidian/10 px-2 py-1 rounded-full">{t.stock}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
