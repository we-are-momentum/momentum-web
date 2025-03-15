import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import useDeviceType from '@/hooks/useDeviceType'
import ResponsiveAppBar from '../components/ResponsiveAppBar'
import Footer from '@/layouts/Footer'
import { Box } from '@mui/material'
import { RootState, AppDispatch } from '../store'
import { setPerformances } from '../store/performancesSlice'

const location = window.location
const basename = location.pathname.startsWith('/momentum-web') ? '/momentum-web' : ''

const performancesData = [
  {
    id: 20250001,
    title: '보이지 않아도',
    company: '극단 모멘텀',
    date: '2025-04-19 ~ 2025-04-20',
    location: '구로 예술나무 씨어터',
    image: `${basename}/logo_dark.png`,
    supportInfo: '카카오뱅크 01-1234-12456 / 예금주: 이*태',
    accountNumber: '카카오뱅크 01-1234-12456',
    synopsis: '시놉시스 내용이 여기에 들어갑니다...',
    schedule: [
      {
        round: '1회차',
        groups: [{ members: ['홍길동', '김길동'] }],
      },
    ],
    members: [
      { role: '연출', name: '홍길동' },
      { role: '조연출', name: '홍길동' },
      { role: '배우', name: '누구누구' },
    ],
  },
  // 다른 공연 데이터 추가 가능
]

const ResponsiveLayout = ({ mobileComponent, desktopComponent }) => {
  const isMobile = useDeviceType()
  const dispatch = useDispatch<AppDispatch>()
  const performances = useSelector((state: RootState) => state.performances.performances)

  useEffect(() => {
    if (performances.length === 0) {
      dispatch(setPerformances(performancesData))
    }
  }, [dispatch, performances.length])

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
