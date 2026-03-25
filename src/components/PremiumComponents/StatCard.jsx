import { useEffect, useRef, useState } from 'react'
import { motion, useInView, animate } from 'motion/react' // Mantenha motion/react se estiver funcionando, ou use 'motion'

const StatCard = ({
  icon: Icon,
  label,
  value,
  suffix = '',
  prefix = '',
  description,
  barColor,
  barWidth,
  delay = 0,
}) => {
  const [displayValue, setDisplayValue] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  useEffect(() => {
    if (isInView) {
      // Na Motion 12, animar um estado simples é mais confiável para contadores
      const controls = animate(0, value, {
        duration: 2,
        delay: delay,
        ease: 'easeOut',
        onUpdate: latest => setDisplayValue(Math.round(latest)),
      })
      return () => controls.stop()
    }
  }, [isInView, value, delay])

  return (
    <div className="flex flex-col h-full" ref={ref}>
      <div className="flex items-center gap-3 mb-6 text-amber-700">
        <Icon size={24} strokeWidth={1.5} />
        <span className="text-sm font-bold tracking-widest uppercase">
          {label}
        </span>
      </div>

      <div className="text-6xl md:text-7xl font-light text-stone-900 mb-6 tabular-nums">
        {prefix}
        {displayValue.toLocaleString('pt-BR')}
        {suffix}
      </div>

      <p className="text-stone-500 font-light leading-relaxed mb-8 min-h-[4.5rem]">
        {description}
      </p>

      <div className="mt-auto">
        <div className="h-1 w-full bg-stone-100 overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: barWidth } : { width: 0 }}
            transition={{ duration: 1.5, ease: 'easeOut', delay: delay }}
            className={`h-full ${barColor}`}
          />
        </div>
      </div>
    </div>
  )
}

export default StatCard
