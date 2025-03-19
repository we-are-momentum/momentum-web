import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import useDeviceType from '@/hooks/useDeviceType'
import ResponsiveAppBar from '../components/ResponsiveAppBar'
import Footer from '@/layouts/Footer'
import { RootState, AppDispatch } from '../store'
import { setPerformances } from '../store/performancesSlice'

const location = window.location
const basename = location.pathname.startsWith('/momentum-web') ? '/momentum-web' : ''

const roka = {
  teamA: ['신기은', '임현준', '조강형'],
  teamB: ['김현수', '박동효', '조명식'],
}

const kpa = { teamA: ['양희승', '김재혁', '양정모'], teamB: ['이경태', '이원찬', '김민수'] }

const goddess = {
  teamA: ['양초롱'],
  teamB: ['황지수'],
}
const specialGuest = '김하연'

const performancesData = [
  {
    id: 20250001,
    title: '보이지 않아도',
    company: '극단 모멘텀',
    date: '2025-04-19 ~ 2025-04-20',
    location: '구로 예술나무 씨어터',
    image: `${basename}/logo_dark.png`,
    supportInfo: '79420983227 카카오뱅크 / 예금주: 이*태',
    accountNumber: '79420983227 카카오뱅크',
    synopsis: '시놉시스 내용이 여기에 들어갑니다...',
    schedule: [
      {
        date: '2025-04-19',
        day: '토',
        groups: [
          {
            round: '1',
            time: '13:00',
            actors: ['홍길동', '김길동', '김아영'],
          },
          {
            round: '2',
            time: '16:00',
            actors: ['홍길동', '김길동', '김아영'],
          },
          {
            round: '3',
            time: '19:00',
            actors: ['홍길동', '김길동', '김아영'],
          },
        ],
      },
      {
        date: '2025-04-20',
        day: '일',
        groups: [
          {
            round: '4',
            time: '12:00',
            actors: ['홍길동', '김길동', '김아영'],
          },
          {
            round: '5',
            time: '15:00',
            actors: ['홍길동', '김길동', '김아영'],
          },
          {
            round: '6',
            time: '18:00',
            actors: ['홍길동', '김길동', '김아영'],
          },
        ],
      },
    ],
    staffs: [
      { role: '연출', name: ['황지수'] },
      { role: '조연출', name: ['홍길동'] },
      {
        role: '출연',
        name: [''],
      },
    ],
    snapshots: [
      {
        image: `${basename}/logo.png`,
        title: '샘플',
        description: '샘플 이미지 설명',
      },
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
    <div style={{ width: '100%', height: '100%', overflow: 'hidden' }}>
      {/* 공통 AppBar */}
      <ResponsiveAppBar />

      {/* 모바일과 데스크탑에 따라 다른 레이아웃 렌더링 */}
      {isMobile ? (
        <div style={{ padding: '16px', backgroundColor: '#f9f9f9' }}>{mobileComponent}</div>
      ) : (
        <div
          style={{
            margin: '0 auto',
            maxWidth: '1200px',
            padding: '24px',
            backgroundColor: '#ffffff',
          }}
        >
          {desktopComponent}
        </div>
      )}

      {/* 공통 Footer */}
      <Footer />
    </div>
  )
}

export default ResponsiveLayout
