import PerformanceStaffs from '@/components/PerformanceStaffs'
import PerformancePoster from '@/components/PerformancePoster'
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
    <div className='w-full mx-auto'>
      <PerformancePoster
        title={performance.title}
        date={performance.date}
        location={performance.location}
        company={performance.company}
        supportInfo={performance.supportInfo}
        image={performance.image}
        accountNumber={performance.accountNumber}
      />
      <PerformanceImportant />
      <PerformanceSynopsis synopsis={performance.synopsis} />
      <PerformanceSchedule schedule={performance.schedule} />
      <PerformanceSnaps snaps={performance.snapshots} />
      <PerformanceStaffs staffs={performance.staffs} />
    </div>
  )
}

export default PerformanceDetail
