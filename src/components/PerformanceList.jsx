import React from 'react'
import { Card, CardContent, CardMedia, Typography, Grid, Button } from '@mui/material'

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
    <Grid container spacing={3} justifyContent='center' alignItems='center'>
      {performances.map((performance) => (
        <Grid
          item
          key={performance.id}
          xs={12}
          sm={6}
          md={4}
          display='flex'
          justifyContent='center'
        >
          <Card sx={{ width: '100%', maxWidth: 345, textAlign: 'center' }}>
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
              <Button
                variant='contained'
                color='primary'
                fullWidth
                sx={{ mt: 2 }}
                onClick={() => onCardClick(performance.id)}
              >
                상세 보기
              </Button>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  )
}

export default PerformanceList
