import PerformanceStaffs from '@/components/PerformanceStaffs'
import PerformanceInfo from '@/components/PerformanceInfo'
import PerformanceSchedule from '@/components/PerformanceSchedule'
import PerformanceSynopsis from '@/components/PerformanceSynopsis'
import { Container, Typography } from '@mui/material'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { RootState } from '@/store'
import PerformanceImportant from '@/components/PerformanceImportant'
import PerformanceSnaps from '@/components/PerformanceSnaps'

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
        <div className='absolute inset-0 bg-gradient-to-b from-transparent via-white/70 to-white dark:via-neutral-900/70 dark:to-neutral-900' />
      </div>

      {/* 컨텐츠 */}
      <div className='relative z-10'>
        <PerformanceInfo
          title={performance.title}
          date={performance.date}
          location={performance.location}
          company={performance.company}
          supportInfo={performance.supportInfo}
          accountNumber={performance.accountNumber}
        />

        <div className='bg-white dark:bg-neutral-900 backdrop-blur-sm'>
          <div className='max-w-6xl mx-auto px-4'>
            <PerformanceSynopsis synopsis={performance.synopsis} />
            <PerformanceSchedule schedule={performance.schedule} />
            <PerformanceSnaps snaps={performance.snapshots} />
            <PerformanceImportant />
            <PerformanceStaffs staffs={performance.staffs} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default PerformanceDetail
