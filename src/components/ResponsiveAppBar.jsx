import React from 'react'
import { Link } from 'react-router-dom'

function ResponsiveAppBar() {
  const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches
  const location = window.location
  const basename = location.pathname.startsWith('/momentum-web') ? '/momentum-web' : ''

  const darkLogoSrc = `${basename}/logo_dark.png`
  const lightLogoSrc = `${basename}/logo_light.png`

  return (
    <div
      className={
        'fixed top-0 left-0 w-full z-50 bg-white dark:bg-gray-800 ring shadow-xl ring-gray-900/5'
      }
    >
      <div className='container mx-auto px-4'>
        <div className='flex items-center justify-between h-16'>
          <Link to='/' className='flex items-center'>
            <img
              src={darkLogoSrc}
              alt='Logo'
              className='h-16 mr-2 hidden dark:block'
              style={{ marginRight: '8px', height: '70px' }}
            />
            <img
              src={lightLogoSrc}
              alt='Logo'
              className='h-16 mr-2 block dark:hidden'
              style={{ marginRight: '8px', height: '70px' }}
            />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ResponsiveAppBar
