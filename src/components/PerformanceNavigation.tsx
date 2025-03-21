import { useState, useEffect } from 'react'

const PerformanceNavigation = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [activeSection, setActiveSection] = useState('main')

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const posterHeight = window.innerHeight
      setIsVisible(scrollPosition > posterHeight * 0.3)

      // 각 섹션의 위치를 확인하고 현재 활성 섹션 결정
      const sections = ['main', 'synopsis', 'casting', 'schedule', 'snapshots', 'important']
      const navHeight = 108 // AppBar + Navigation 높이

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= navHeight && rect.bottom > navHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const navHeight = 108 // AppBar(64px) + Navigation(44px) 높이
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - navHeight

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      })
    }
  }

  return (
    <nav
      className={`
        fixed top-16 left-0 right-0 z-40
        transition-all duration-150 transform
        ${
          isVisible
            ? 'translate-y-0 opacity-100 bg-white dark:bg-neutral-950 backdrop-blur-sm shadow-lg'
            : '-translate-y-full opacity-0'
        }
      `}
    >
      <div className='container mx-auto'>
        <div className='flex items-center justify-center h-11 gap-8'>
          {[
            { id: 'synopsis', label: 'Synopsis' },
            { id: 'casting', label: 'Casting' },
            { id: 'schedule', label: 'Schedule' },
            { id: 'snapshots', label: 'Snapshots' },
          ].map(({ id, label }) => (
            <div
              key={id}
              onClick={() => scrollToSection(id)}
              className={`
                cursor-pointer transition-colors
                ${
                  activeSection === id
                    ? 'text-blue-600 dark:text-blue-400 font-medium'
                    : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
                }
              `}
            >
              {label}
            </div>
          ))}
        </div>
      </div>
    </nav>
  )
}

export default PerformanceNavigation
