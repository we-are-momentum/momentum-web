import { Box, Container, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import PerformanceGrid from '../components/PerformanceGrid'

const PerformanceList = () => {
  const navigate = useNavigate()
  // 공연 카드 클릭 시 실행될 핸들러 함수
  const handleCardClick = (performanceId) => {
    navigate(`/performances/${performanceId}`)
  }

  return (
    <Container sx={{ mt: 4, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Typography variant='h4' gutterBottom>
        공연 목록
      </Typography>
      <Box width='100%' maxWidth='1200px' display='flex' justifyContent='center'>
        <PerformanceGrid onCardClick={handleCardClick} />
      </Box>
    </Container>
  )
}

export default PerformanceList
