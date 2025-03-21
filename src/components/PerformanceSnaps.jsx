import React, { useRef, useState, useEffect } from 'react'

const PerformanceSnaps = ({ snaps }) => {
  const scrollRef = useRef(null)
  const [showLeft, setShowLeft] = useState(false)
  const [showRight, setShowRight] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      if (scrollRef.current) {
        setShowLeft(scrollRef.current.scrollLeft > 0)
        setShowRight(
          scrollRef.current.scrollLeft + scrollRef.current.clientWidth <
            scrollRef.current.scrollWidth,
        )
      }
    }

    const scrollEl = scrollRef.current
    if (scrollEl) {
      scrollEl.addEventListener('scroll', handleScroll)
      handleScroll()
    }

    return () => scrollEl && scrollEl.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' })
    }
  }

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' })
    }
  }

  return (
    <section className='mt-6 relative'>
      <h2 className='text-3xl font-bold mb-4 text-center text-neutral-800 dark:text-neutral-200'>
        Snapshot
      </h2>
      <div className='relative flex items-center justify-center max-w-3xl mx-auto px-8'>
        {' '}
        {/* px-8 추가 및 justify-center */}
        {/* 왼쪽 네비게이션 */}
        {showLeft && (
          <div
            onClick={scrollLeft}
            className='absolute left-4 z-10 text-3xl text-neutral-800 dark:text-neutral-200 cursor-pointer hover:text-blue-600 dark:hover:text-blue-400 transition-colors'
          >
            &#10094;
          </div>
        )}
        {/* 스냅 리스트 */}
        <div
          ref={scrollRef}
          className='flex space-x-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide p-4 w-full'
        >
          {snaps.map((snap, index) => (
            <div
              key={index}
              className='flex-shrink-0 w-80 mx-auto bg-transparent dark:bg-neutral-900 overflow-hidden relative p-8 md:p-6 snap-center snap-always'
            >
              {/* 이미지 컨테이너 */}
              <div
                className='w-full h-48 bg-contain bg-no-repeat bg-center relative mx-auto'
                style={{ backgroundImage: `url(${snap.image})` }}
              ></div>
              {/* 텍스트 컨테이너 */}
              <div className='mt-4 text-center'>
                <h3 className='text-lg font-bold text-neutral-800 dark:text-neutral-200'>
                  {snap.title}
                </h3>
                <p className='text-neutral-600 dark:text-neutral-400'>{snap.description}</p>
              </div>
            </div>
          ))}
        </div>
        {/* 오른쪽 네비게이션 */}
        {showRight && (
          <div
            onClick={scrollRight}
            className='absolute right-4 z-10 text-3xl text-neutral-800 dark:text-neutral-200 cursor-pointer hover:text-blue-600 dark:hover:text-blue-400 transition-colors'
          >
            &#10095;
          </div>
        )}
      </div>
    </section>
  )
}

export default PerformanceSnaps
