import React from 'react'
import { Instagram, YouTube, LinkedIn } from '@mui/icons-material'

const Footer = () => {
  return (
    <footer className='mt-6 flex justify-center space-x-4'>
      <Instagram className='text-gray-600' />
      <YouTube className='text-gray-600' />
      <LinkedIn className='text-gray-600' />
    </footer>
  )
}

export default Footer
