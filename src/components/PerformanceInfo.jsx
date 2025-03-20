import React, { useState, useEffect } from 'react'

const PerformanceInfo = ({ title, date, location, company, supportInfo, accountNumber }) => {
  const [showAlert, setShowAlert] = useState(false)
  const [alertMessage, setAlertMessage] = useState('')
  const [alertType, setAlertType] = useState('success')
  const [scrollY, setScrollY] = useState(0)
  const [scrollDirection, setScrollDirection] = useState('down')
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      // 스크롤 방향 감지
      if (currentScrollY > lastScrollY) {
        setScrollDirection('down')
      } else if (currentScrollY < lastScrollY) {
        setScrollDirection('up')
      }

      setLastScrollY(currentScrollY)
      setScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  const opacity = Math.max(0, Math.min(1, 1 - scrollY / 500))
  const translateY = Math.min(scrollY / 2, 100) // 최대 100px까지 이동

  const handleCopyClick = () => {
    navigator.clipboard
      .writeText(accountNumber)
      .then(() => {
        setAlertMessage(`후원금 계좌가 복사되었습니다. ${accountNumber}`)
        setAlertType('success')
        setShowAlert(true)
        setTimeout(() => setShowAlert(false), 3000)
      })
      .catch((error) => {
        setAlertMessage('복사에 실패했습니다.')
        setAlertType('error')
        setShowAlert(true)
        setTimeout(() => setShowAlert(false), 3000)
      })
  }

  return (
    <div
      className='relative min-h-[90vh] w-full flex items-end justify-center' // min-h-screen에서 min-h-[90vh]로 변경
      style={{
        opacity,
        transform: `translateY(${translateY}px)`,
        transition: `transform ${scrollDirection === 'up' ? '0.3s' : '0.1s'} ${
          scrollDirection === 'up' ? 'cubic-bezier(0.34, 1.56, 0.64, 1)' : 'ease-out'
        }`,
      }}
    >
      {/* 알림 메시지 */}
      {showAlert && (
        <div
          className={`
            fixed left-1/2 bottom-8 z-50 p-4 rounded-lg shadow-lg
            transform -translate-x-1/2
            transition-all duration-300 ease-in-out
            text-sm sm:text-base
            ${showAlert ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}
            ${alertType === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}
          `}
        >
          {alertMessage}
        </div>
      )}

      {/* Hero 섹션 */}
      <div className='w-full flex items-center justify-center mb-32'>
        {' '}
        {/* mb-32에서 mb-24로 변경 */}
        <div className='container max-w-6xl px-8 mx-auto flex items-center justify-center'>
          <div className='z-30 flex flex-col items-center w-full max-w-xl text-center'>
            <h2 className='mb-2 text-2xl text-neutral-800 dark:text-neutral-200 sm:text-lg xl:text-xl'>
              {company}
            </h2>
            <h1 className='relative mb-4 text-3xl font-black leading-tight text-neutral-900 dark:text-neutral-100 sm:text-5xl xl:mb-8'>
              {title}
            </h1>
            <p className='mb-8 text-base text-neutral-800 dark:text-neutral-200 sm:text-lg xl:text-xl'>
              {date}
            </p>
            <p className='mb-8 text-base text-neutral-800 dark:text-neutral-200 sm:text-lg xl:text-xl'>
              {location}
            </p>
            <div
              onClick={handleCopyClick}
              className='group flex flex-wrap items-center justify-center gap-2 px-4 py-4 text-base font-medium text-neutral-800 dark:text-neutral-200 transition-colors duration-200 hover:text-neutral-900 dark:hover:text-white sm:px-8'
            >
              <span className='underline whitespace-normal break-words'>
                79420983227 카카오뱅크
                <span className='whitespace-nowrap'> / </span>
                예금주: 이*태
              </span>
              <button>
                <svg
                  className='w-5 h-5'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2'
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Down 아이콘 */}
      <div
        className='absolute bottom-16 left-1/2 transform -translate-x-1/2 animate-bounce' // bottom-12에서 bottom-16으로 변경
        style={{ opacity }}
      >
        <div className='flex flex-col items-center text-neutral-400 dark:text-neutral-500'>
          <span className='text-sm mb-2'>Scroll</span>
          <svg
            className='w-6 h-6'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M19 14l-7 7m0 0l-7-7m7 7V3'
            />
          </svg>
        </div>
      </div>
    </div>
  )
}

export default PerformanceInfo
