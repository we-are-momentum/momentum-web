import PerformanceStaffs from '@/components/PerformanceStaffs'
import PerformancePoster from '@/components/PerformancePoster'
import PerformanceSchedule from '@/components/PerformanceSchedule'
import PerformanceSynopsis from '@/components/PerformanceSynopsis'
import { Container, Typography } from '@mui/material'
import { useParams } from 'react-router-dom'

const PerformanceDetail = () => {
  const { id } = useParams()
  const performanceId = parseInt(id, 10)
  const location = window.location
  const basename = location.pathname.startsWith('/momentum-web') ? '/momentum-web' : ''

  // const performance = useSelector((state: RootState) =>
  //   state.performances.performances.find((perf) => perf.id === performanceId),
  // )
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
      date: '2025.04.19 ~ 2025.04.20',
      location: '구로 예술나무 씨어터',
      image: `${basename}/logo_dark.png`,
      supportInfo: '79420983227 카카오뱅크 / 예금주: 이*태',
      accountNumber: '79420983227 카카오뱅크',
      synopsis: '시놉시스 내용이 여기에 들어갑니다...',
      schedule: [
        {
          date: '4.19',
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
          date: '4.20',
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
        { role: '연출', name: '황지수' },
        { role: '조연출', name: '유세영' },
        { role: '출연', name: '누구누구' },
      ],
    },
    // 다른 공연 데이터 추가 가능
  ]
  const performance = performancesData.find((perf) => perf.id === performanceId)

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
        date={performance.date}
        location={performance.location}
        company={performance.company}
        supportInfo={performance.supportInfo}
        image={performance.image}
        accountNumber={performance.accountNumber}
      />
      <PerformanceSynopsis synopsis={performance.synopsis} />
      <PerformanceSchedule schedule={performance.schedule} />
      <PerformanceStaffs staffs={performance.staffs} />
    </div>
  )
}

export default PerformanceDetail
