import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import FeatureTiles from './components/FeatureTiles'
import RarityStrip from './components/RarityStrip'
import HowItWorks from './components/HowItWorks'
import CTA from './components/CTA'
import Footer from './components/Footer'

export default function App() {
  return (
  <div className="min-h-screen bg-gradient-to-b from-obsidian/90 via-[#041022]/60 to-obsidian/95">
      <Navbar />
      <main className="max-w-6xl mx-auto px-4 sm:px-6">
        <Hero />
        <FeatureTiles />
        <RarityStrip />
        <HowItWorks />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
