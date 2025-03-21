import PerformanceCasting from '@/components/PerformanceCasting'
import PerformanceImportant from '@/components/PerformanceImportant'
import PerformanceInfo from '@/components/PerformanceInfo'
import PerformanceNavigation from '@/components/PerformanceNavigation'
import PerformanceSchedule from '@/components/PerformanceSchedule'
import PerformanceSnaps from '@/components/PerformanceSnaps'
import PerformanceSynopsis from '@/components/PerformanceSynopsis'
import { Container, Typography } from '@mui/material'
import { useParams } from 'react-router-dom'

const PerformanceDetail = () => {
  const { id } = useParams()
  const location = window.location
  const basename = location.pathname.startsWith('/momentum-web') ? '/momentum-web' : ''
  const stage = import.meta.env.VITE_LOCATION
  const synopsis = import.meta.env.VITE_SYNOPSIS

  // 배우 이름으로 역할을 찾는 헬퍼 함수
  const findRoleByActor = (actor, casting) => {
    for (const role of casting) {
      if (role.actor.includes(actor)) {
        return role.name
      }
    }
    return null
  }

  const performanceData = {
    id: '20250001',
    title: '보이지 않아도',
    company: '극단 모멘텀',
    date: '2025-04-18 ~ 2025-04-20',
    location: stage,
    image: `${basename}/logo_dark.png`,
    supportInfo: '79420983227 카카오뱅크 / 예금주: 이*태',
    accountNumber: '79420983227 카카오뱅크',
    casting: [
      {
        name: 'a',
        actor: ['김현수', '신기은'],
      },
      {
        name: 'b',
        actor: ['박동효', '임현준'],
      },
      {
        name: 'c',
        actor: ['조명식', '조강형'],
      },
      {
        name: 'd',
        actor: ['양희승', '이경태'],
      },
      {
        name: 'e',
        actor: ['김재혁', '이원찬'],
      },
      {
        name: 'f',
        actor: ['김민수', '양정모'],
      },
      {
        name: 'g',
        actor: ['양초롱', '황지수'],
      },
    ],
    schedule: [
      {
        date: '2025-04-18',
        day: '금',
        groups: [
          {
            round: '1',
            time: '19:30',
            actors: ['a', 'b', 'c', 'd', 'e', 'f', 'g'],
            details: {
              a: '김현수',
              b: '박동효',
              c: '조명식',
              d: '이경태',
              e: '이원찬',
              f: '김민수',
              g: '황지수',
            },
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
            actors: ['a', 'b', 'c', 'd', 'e', 'f', 'g'],
            details: {
              a: '신기은',
              b: '임현준',
              c: '조강형',
              d: '양희승',
              e: '김재혁',
              f: '양정모',
              g: '양초롱',
            },
          },
          {
            round: '3',
            time: '16:00',
            actors: ['a', 'b', 'c', 'd', 'e', 'f', 'g'],
            details: {
              a: '김현수',
              b: '박동효',
              c: '조명식',
              d: '이경태',
              e: '이원찬',
              f: '김민수',
              g: '양초롱',
            },
          },
          {
            round: '4',
            time: '19:00',
            actors: ['a', 'b', 'c', 'd', 'e', 'f', 'g'],
            details: {
              a: '신기은',
              b: '임현준',
              c: '조강형',
              d: '양희승',
              e: '김재혁',
              f: '양정모',
              g: '황지수',
            },
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
            actors: ['a', 'b', 'c', 'd', 'e', 'f', 'g'],
            details: {
              a: '김현수',
              b: '박동효',
              c: '조명식',
              d: '양희승',
              e: '김재혁',
              f: '양정모',
              g: '황지수',
            },
          },
          {
            round: '6',
            time: '17:00',
            actors: ['a', 'b', 'c', 'd', 'e', 'f', 'g'],
            details: {
              a: '신기은',
              b: '임현준',
              c: '조강형',
              d: '이경태',
              e: '이원찬',
              f: '김민수',
              g: '양초롱',
            },
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
      {
        image: `${basename}/logo_dark.png`,
        title: '샘플2',
        description: '샘플 이미지 설명',
      },
    ],
    synopsis: synopsis,
  }

  if (!performanceData) {
    return (
      <Container sx={{ mt: 4 }}>
        <Typography variant='h4' gutterBottom>
          공연 정보를 찾을 수 없습니다.
        </Typography>
      </Container>
    )
  }

  return (
    <div className='relative w-auto'>
      {/* 배경 이미지 */}
      <div className='fixed inset-0 z-0'>
        <img
          src={performanceData.image}
          alt={performanceData.title}
          className='w-full h-full object-cover'
        />
        <div className='absolute inset-0 bg-gradient-to-b from-transparent via-white/10 to-white dark:via-neutral-900/70 dark:to-neutral-900' />
      </div>

      {/* 네비게이션 */}
      <PerformanceNavigation />

      {/* 컨텐츠 */}
      <div className='relative z-10 ease-in-out transition-all duration-300'>
        <PerformanceInfo
          title={performanceData.title}
          date={performanceData.date}
          location={performanceData.location}
          company={performanceData.company}
          supportInfo={performanceData.supportInfo}
          accountNumber={performanceData.accountNumber}
        />

        <div className='bg-white dark:bg-neutral-900 backdrop-blur-sm py-8'>
          <div className='mx-auto'>
            <div id='synopsis'>
              <PerformanceSynopsis synopsis={performanceData.synopsis} />
            </div>
            <div id='casting'>
              <PerformanceCasting casting={performanceData.casting} />
            </div>
            <div id='schedule'>
              <PerformanceSchedule schedule={performanceData.schedule} />
            </div>
            <div id='snapshots'>
              <PerformanceSnaps snaps={performanceData.snapshots} />
            </div>
            <PerformanceImportant />
          </div>
        </div>
      </div>
    </div>
  )
}

export default PerformanceDetail
