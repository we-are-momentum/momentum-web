import React from 'react'
import PerformanceList from '../components/PerformanceList'
import { Container, Typography, Box } from '@mui/material'

const Performance = () => {
  // 공연 카드 클릭 시 실행될 핸들러 함수
  const handleCardClick = (performanceId) => {
    console.log(`공연 ID: ${performanceId} 클릭됨`)
    // 이후 상세 페이지로 이동하는 로직 추가 가능
  }

  return (
    <Container sx={{ mt: 4, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Typography variant='h4' gutterBottom>
        공연 리스트
      </Typography>
      <Box width='100%' display='flex' justifyContent='center'>
        <PerformanceList onCardClick={handleCardClick} />
      </Box>
    </Container>
  )
}

export default Performance
