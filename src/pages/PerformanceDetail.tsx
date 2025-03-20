import PerformanceImportant from '@/components/PerformanceImportant'
import PerformanceInfo from '@/components/PerformanceInfo'
import PerformanceNavigation from '@/components/PerformanceNavigation'
import PerformanceSchedule from '@/components/PerformanceSchedule'
import PerformanceSnaps from '@/components/PerformanceSnaps'
import PerformanceSynopsis from '@/components/PerformanceSynopsis'
import { RootState } from '@/store'
import { Container, Typography } from '@mui/material'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

const PerformanceDetail = () => {
  const { id } = useParams()
  const performanceId = parseInt(id, 10)

  const performance = useSelector((state: RootState) =>
    state.performances.performances.find((perf) => perf.id === performanceId),
  )

  if (!performance) {
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
          src={performance.image}
          alt={performance.title}
          className='w-full h-full object-cover'
        />
        <div className='absolute inset-0 bg-gradient-to-b from-transparent via-white/10 to-white dark:via-neutral-900/70 dark:to-neutral-900' />
      </div>

      {/* 네비게이션 */}
      <PerformanceNavigation />

      {/* 컨텐츠 */}
      <div className='relative z-10 ease-in-out transition-all duration-300'>
        <PerformanceInfo
          title={performance.title}
          date={performance.date}
          location={performance.location}
          company={performance.company}
          supportInfo={performance.supportInfo}
          accountNumber={performance.accountNumber}
        />

        <div className='bg-white dark:bg-neutral-900 backdrop-blur-sm py-8'>
          <div className='max-w-6xl mx-auto px-4'>
            <div id='synopsis'>
              <PerformanceSynopsis synopsis={performance.synopsis} />
            </div>
            <div id='schedule'>
              <PerformanceSchedule schedule={performance.schedule} />
            </div>
            <div id='snapshots'>
              <PerformanceSnaps snaps={performance.snapshots} />
            </div>
            <PerformanceImportant />
          </div>
        </div>
      </div>
    </div>
  )
}

export default PerformanceDetail
