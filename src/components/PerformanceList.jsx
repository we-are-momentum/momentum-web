import React from 'react'
import { Card, CardContent, CardMedia, Typography, Grid2, Button } from '@mui/material'

const performances = [
  {
    id: 1,
    title: '뮤지컬 엠바고',
    date: '2025-04-19 ~ 2025-04-20',
    location: '구로 예술나무 씨어터',
    image: 'https://via.placeholder.com/300x200',
  },
]

const PerformanceList = ({ onCardClick }) => {
  return (
    <Grid2 container spacing={3} justifyContent='center'>
      {performances.map((performance) => (
        <Grid2 key={performance.id} size={{ xs: 12, sm: 6, md: 4 }}>
          <Card sx={{ maxWidth: 345 }} onClick={() => onCardClick(performance.id)}>
            <CardMedia
              component='img'
              height='200'
              image={performance.image}
              alt={performance.title}
            />
            <CardContent>
              <Typography variant='h6'>{performance.title}</Typography>
              <Typography variant='body2' color='text.secondary'>
                {performance.date} | {performance.location}
              </Typography>
            </CardContent>
          </Card>
        </Grid2>
      ))}
    </Grid2>
  )
}

export default PerformanceList
