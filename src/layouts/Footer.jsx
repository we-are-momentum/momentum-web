import React from 'react'
import { Instagram, YouTube, LinkedIn } from '@mui/icons-material'
import { Typography } from '@mui/material'

const Footer = () => {
  return (
    <footer className='mt-6 flex justify-center space-x-4'>
      <Typography>후원 계좌</Typography>
      <Typography variant='body2' className='text-gray-600'>
        79420983227 카카오뱅크 / 예금주: 이*태
      </Typography>
    </footer>
  )
}

export default Footer
