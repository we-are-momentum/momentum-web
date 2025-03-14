import React from 'react'
import useDeviceType from '@/hooks/useDeviceType'
import ResponsiveAppBar from '../components/ResponsiveAppBar'
import Footer from '@/layouts/Footer'
import { Box } from '@mui/material'

const ResponsiveLayout = ({ mobileComponent, desktopComponent }) => {
  const isMobile = useDeviceType()

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        alignItems: 'center',
        width: '100%',
        maxWidth: '1280px', // 데스크탑 환경에서 최대 너비 설정
        mx: 'auto', // 중앙 정렬
        px: isMobile ? 2 : 4, // 패딩 설정
      }}
    >
      <ResponsiveAppBar />
      <Box
        component='main'
        sx={{
          flexGrow: 1,
          pt: '64px',
          width: '100%',
        }}
      >
        {isMobile ? mobileComponent : desktopComponent}
      </Box>
      <Footer />
    </Box>
  )
}

export default ResponsiveLayout
