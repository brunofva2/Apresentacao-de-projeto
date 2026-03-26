/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import BasicVersion from './components/BasicVersion'
import ModernVersion from './components/ModernVersion'
import PremiumVersion from './components/PremiumVersion'
import Proposal from './components/Proposal'
import { Layers } from 'lucide-react'

export default function App() {
  const [version, setVersion] = useState('proposal')

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [version])

  return (
    <div className="relative min-h-screen bg-white">
      <AnimatePresence mode="wait">
        <motion.div
          key={version}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        >
          {/* AQUI ESTÁ A MUDANÇA: Passando a prop setVersion */}
          {version === 'proposal' && <Proposal setVersion={setVersion} />}
          {version === 'basic' && <BasicVersion />}
          {version === 'modern' && <ModernVersion />}
          {version === 'premium' && <PremiumVersion />}
        </motion.div>
      </AnimatePresence>
      

      {/* Fixed Toggle Control - Navegação Flutuante */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] bg-white/90 backdrop-blur-md shadow-2xl rounded-full p-2 border border-gray-200 flex items-center gap-2 transition-all hover:shadow-3xl">
        {/* Label indicativa (esconde no mobile para poupar espaço) */}
        <div className="pl-4 pr-2 flex items-center gap-2 text-gray-500 font-medium text-sm border-r border-gray-200 hidden sm:flex">
          <Layers size={16} />
          <span>Versão:</span>
        </div>

        {/* Botão Proposta */}
        <button
          onClick={() => setVersion('proposal')}
          className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
            version === 'proposal'
              ? 'bg-slate-900 text-amber-400 shadow-md border border-amber-500/30'
              : 'text-gray-600 hover:bg-gray-100'
          }`}
        >
          Proposta
        </button>

        {/* Botão Básica */}
        <button
          onClick={() => setVersion('basic')}
          className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
            version === 'basic'
              ? 'bg-[#002147] text-white shadow-md'
              : 'text-gray-600 hover:bg-gray-100'
          }`}
        >
          Essencial
        </button>

        {/* Botão Moderna */}
        <button
          onClick={() => setVersion('modern')}
          className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
            version === 'modern'
              ? 'bg-blue-600 text-white shadow-md'
              : 'text-gray-600 hover:bg-gray-100'
          }`}
        >
          Profissional
        </button>

        {/* Botão Premium */}
        <button
          onClick={() => setVersion('premium')}
          className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
            version === 'premium'
              ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md shadow-cyan-500/20'
              : 'text-gray-600 hover:bg-gray-100'
          }`}
        >
          Premium
        </button>
      </div>
    </div>
  )
}
