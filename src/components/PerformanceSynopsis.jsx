import React, { useEffect, useRef, useState } from 'react'

const PerformanceSynopsis = ({ synopsis }) => {
  const [isVisible, setIsVisible] = useState(false)
  const synopsisRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
      },
      {
        threshold: 0.1, // 10% 이상 보이면 활성화
        rootMargin: '-50px', // 상단에서 50px 여유를 둠
      },
    )

    if (synopsisRef.current) {
      observer.observe(synopsisRef.current)
    }

    return () => {
      if (synopsisRef.current) {
        observer.unobserve(synopsisRef.current)
      }
    }
  }, [])

  return (
    <section
      ref={synopsisRef}
      className={`
        mt-6 p-8 rounded-lg 
        transition-all duration-700 transform
        ${
          isVisible
            ? 'translate-y-0 opacity-100 bg-white/95 dark:bg-neutral-900/95'
            : 'translate-y-20 opacity-0 bg-transparent'
        }
      `}
    >
      <h2 className='text-2xl font-bold mb-4 text-neutral-900 dark:text-neutral-100'>Synopsis</h2>
      <p className='text-neutral-600 dark:text-neutral-300 leading-relaxed'>{synopsis}</p>
    </section>
  )
}

export default PerformanceSynopsis
