import Footer from '@/layouts/Footer'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ResponsiveAppBar from '../components/ResponsiveAppBar'
import { AppDispatch, RootState } from '../store'
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
    date: '2025-04-18 ~ 2025-04-20',
    location: '구로 예술나무 씨어터',
    image: `${basename}/logo_dark.png`,
    supportInfo: '79420983227 카카오뱅크 / 예금주: 이*태',
    accountNumber: '79420983227 카카오뱅크',
    synopsis: '시놉시스 내용이 여기에 들어갑니다...',
    schedule: [
      {
        date: '2025-04-18',
        day: '금',
        groups: [
          {
            round: '1',
            time: '19:30',
            actors: [...roka.teamB, ...kpa.teamB, ...goddess.teamB, specialGuest],
          },
        ],
      },
      {
        date: '2025-04-19',
        day: '토',
        groups: [
          {
            round: '2',
            time: '13:00',
            actors: [...roka.teamA, ...kpa.teamA, ...goddess.teamA, specialGuest],
          },
          {
            round: '3',
            time: '16:00',
            actors: [...roka.teamB, ...kpa.teamB, ...goddess.teamA, specialGuest],
          },
          {
            round: '4',
            time: '19:00',
            actors: [...roka.teamA, ...kpa.teamA, ...goddess.teamB, specialGuest],
          },
        ],
      },
      {
        date: '2025-04-20',
        day: '일',
        groups: [
          {
            round: '5',
            time: '14:00',
            actors: [...roka.teamB, ...kpa.teamA, ...goddess.teamB, specialGuest],
          },
          {
            round: '6',
            time: '17:00',
            actors: [...roka.teamA, ...kpa.teamB, ...goddess.teamA, specialGuest],
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

const ResponsiveLayout = ({ children }) => {
  const dispatch = useDispatch<AppDispatch>()
  const performances = useSelector((state: RootState) => state.performances.performances)

  useEffect(() => {
    if (performances.length === 0) {
      dispatch(setPerformances(performancesData))
    }
  }, [dispatch, performances.length])

  return (
    <div className='relative min-h-screen w-full overflow-x-hidden'>
      {/* 공통 AppBar */}
      <ResponsiveAppBar />
      <div className='w-full flex flex-col items-center'>
        <div className='w-full xl:px-0'>{children}</div>
      </div>
      {/* 공통 Footer */}
      <Footer />
    </div>
  )
}

export default ResponsiveLayout
