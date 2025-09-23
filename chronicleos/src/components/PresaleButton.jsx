import React, { useState } from 'react'

export default function PresaleButton({ label = 'Reserve Founder\'s Cartridge', stripeLink = '#' }){
  const [open, setOpen] = useState(false)
  return (
    <>
      <button onClick={() => setOpen(true)} className="px-4 py-2 bg-gold text-ink rounded-md">{label}</button>
      {open && (
        <div role="dialog" aria-modal="true" className="fixed inset-0 flex items-center justify-center bg-black/50">
          <div className="bg-parchment p-6 rounded-md max-w-sm">
            <h3 className="font-semibold">Presale (placeholder)</h3>
            <p className="mt-2 text-sm">This modal will be wired to Stripe checkout later.</p>
            <div className="mt-4 flex gap-2 justify-end">
              <a href={stripeLink} className="px-3 py-2 bg-gold text-ink rounded">Checkout</a>
              <button onClick={() => setOpen(false)} className="px-3 py-2 border rounded">Close</button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
