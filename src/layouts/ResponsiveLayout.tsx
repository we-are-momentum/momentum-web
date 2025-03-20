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
    synopsis: `한국 전쟁이 한창이던 당시.
국군대위 한영범은 인민군 이창섭, 류순호, 변주화, 조동현을 포로수용소로 이송하는 특별임무를 부여 받고, 부하 신석구와 함께 이송선에 오른다.
그러나 포로들은 배 위에서 폭동을 일으키고, 폭동 중에 기상악화로 고장 나버린 이송선 때문에 여섯 명의 병사들은 무인도에 고립된다.
유일하게 배를 수리할 수 있는 순호는 전쟁후유증으로 정신을 놓은 상태.
생존 본능만 남겨진 채 병사들은 점점 야만적으로 변해간다.
그 와중에 인질이 된 영범은 악몽에 시달리는 순호에게 여신 이야기를 만들어 들려주고, 순호는 여신님에 빠져 안정을 되찾아 간다.
모두는 순호를 변화시키기 위해 ‘여신님이 보고 계셔 대작전’을 시작하고 가상의 여신님을 위한 공동의 규칙을 세우는데……

'살아남기 위해 그들이 만든 신비의 여신.
과연 그들은 여신님과 함께 무사히 살아갈 수 있을까?'`,
    schedule: [
      {
        date: '2025-04-18',
        day: '금',
        groups: [
          {
            round: '1',
            time: '19:30',
            actors: [...roka.teamB, ...kpa.teamB, ...goddess.teamB],
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
            actors: [...roka.teamA, ...kpa.teamA, ...goddess.teamA],
          },
          {
            round: '3',
            time: '16:00',
            actors: [...roka.teamB, ...kpa.teamB, ...goddess.teamA],
          },
          {
            round: '4',
            time: '19:00',
            actors: [...roka.teamA, ...kpa.teamA, ...goddess.teamB],
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
            actors: [...roka.teamB, ...kpa.teamA, ...goddess.teamB],
          },
          {
            round: '6',
            time: '17:00',
            actors: [...roka.teamA, ...kpa.teamB, ...goddess.teamA],
          },
        ],
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
