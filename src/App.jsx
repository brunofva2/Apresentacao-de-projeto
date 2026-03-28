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
      

      {/* Fixed Toggle Control - Linha Única Ultra Compacta */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] w-[95vw] max-w-md bg-white/95 backdrop-blur-md shadow-2xl rounded-full p-1 border border-gray-200 flex flex-nowrap items-center justify-between gap-1 transition-all hover:shadow-3xl">
        
        {/* Botão Proposta */}
        <button
          onClick={() => setVersion('proposal')}
          className={`flex-1 min-w-0 px-2 py-2 rounded-full text-[10px] sm:text-xs font-bold truncate transition-all ${
            version === 'proposal'
              ? 'bg-slate-900 text-amber-400 shadow-sm border border-amber-500/30'
              : 'text-gray-500 hover:bg-gray-100'
          }`}
        >
          Proposta
        </button>

        {/* Botão Básica */}
        <button
          onClick={() => setVersion('basic')}
          className={`flex-1 min-w-0 px-2 py-2 rounded-full text-[10px] sm:text-xs font-bold truncate transition-all ${
            version === 'basic'
              ? 'bg-[#002147] text-white shadow-sm'
              : 'text-gray-500 hover:bg-gray-100'
          }`}
        >
          Essencial
        </button>

        {/* Botão Moderna */}
        <button
          onClick={() => setVersion('modern')}
          className={`flex-1 min-w-0 px-2 py-2 rounded-full text-[10px] sm:text-xs font-bold truncate transition-all ${
            version === 'modern'
              ? 'bg-blue-600 text-white shadow-sm'
              : 'text-gray-500 hover:bg-gray-100'
          }`}
        >
          Profissional
        </button>

        {/* Botão Premium */}
        <button
          onClick={() => setVersion('premium')}
          className={`flex-1 min-w-0 px-2 py-2 rounded-full text-[10px] sm:text-xs font-bold truncate transition-all ${
            version === 'premium'
              ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-sm shadow-cyan-500/10'
              : 'text-gray-500 hover:bg-gray-100'
          }`}
        >
          Premium
        </button>
      
      </div>
    </div>
  )
}
