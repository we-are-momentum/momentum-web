import PerformanceMembers from '@/components/PerformanceMembers'
import PerformancePoster from '@/components/PerformancePoster'
import PerformanceSchedule from '@/components/PerformanceSchedule'
import PerformanceSynopsis from '@/components/PerformanceSynopsis'
import { Container, Typography } from '@mui/material'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { RootState } from '../store'

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
    <div className='max-w-2xl mx-auto p-4'>
      <PerformancePoster
        title={performance.title}
        company={performance.company}
        supportInfo={performance.supportInfo}
        image={performance.image}
      />
      <PerformanceSynopsis synopsis={performance.synopsis} />
      <PerformanceSchedule schedule={performance.schedule} />
      <PerformanceMembers members={performance.members} />
    </div>
  )
}

export default PerformanceDetail
