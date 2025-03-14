import { Card, CardContent, CardMedia, Grid2, Typography } from '@mui/material'
import { useSelector } from 'react-redux'
import { RootState } from '../store'

const PerformanceGrid = ({ onCardClick }) => {
  const performances = useSelector((state: RootState) => state.performances.performances)

  return (
    <Grid2 container spacing={3} justifyContent='center' alignItems='center'>
      {performances.map((performance) => (
        <Grid2
          key={performance.id}
          size={{ xs: 12, sm: 6, md: 4 }}
          sx={{ display: 'flex', justifyContent: 'center' }}
        >
          <Card
            sx={{ width: '100%', maxWidth: 345, textAlign: 'center', cursor: 'pointer' }}
            onClick={() => onCardClick(performance.id)}
          >
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

export default PerformanceGrid
