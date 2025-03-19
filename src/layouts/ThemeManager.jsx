import React, { useEffect } from 'react'

const ThemeManager = ({ children }) => {
  useEffect(() => {
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches
    if (prefersDarkMode) {
      document.documentElement.classList.add('dark') // Tailwind의 다크 모드 활성화
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [])

  return <>{children}</>
}

export default ThemeManager
