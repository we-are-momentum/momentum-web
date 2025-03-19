import React from 'react'

const PerformanceNavigation = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className='sticky top-16 z-40 w-full bg-white dark:bg-gray-800 shadow-md'>
      <div className='container mx-auto px-4'>
        <div className='flex items-center justify-center space-x-8 h-14'>
          <button
            onClick={() => scrollToSection('performance-important')}
            className='text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200'
          >
            주의사항
          </button>
          <button
            onClick={() => scrollToSection('performance-synopsis')}
            className='text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200'
          >
            시놉시스
          </button>
          <button
            onClick={() => scrollToSection('performance-schedule')}
            className='text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200'
          >
            공연일정
          </button>
          <button
            onClick={() => scrollToSection('performance-snaps')}
            className='text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200'
          >
            스냅샷
          </button>
          <button
            onClick={() => scrollToSection('performance-staffs')}
            className='text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200'
          >
            스태프
          </button>
        </div>
      </div>
    </nav>
  )
}

export default PerformanceNavigation
