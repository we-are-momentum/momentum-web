import React from 'react'
import useDeviceType from '@/hooks/useDeviceType'
import ResponsiveAppBar from '../components/ResponsiveAppBar'
import Footer from '@/layouts/Footer'
import { Box } from '@mui/material'

const ResponsiveLayout = ({ mobileComponent, desktopComponent }) => {
  const isMobile = useDeviceType()

  return (
    <Box
      sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', alignItems: 'center' }}
    >
      <ResponsiveAppBar />
      <Box component='main' sx={{ flexGrow: 1, pt: '64px' }}>
        {isMobile ? mobileComponent : desktopComponent}
      </Box>
      <Footer />
    </Box>
  )
}

export default ResponsiveLayout
