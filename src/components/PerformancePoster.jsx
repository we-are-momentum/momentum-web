import React, { useState } from 'react'
import { Card, CardContent, CardMedia, Snackbar, Box, Typography } from '@mui/material'
import MuiAlert from '@mui/material/Alert'
import Slide from '@mui/material/Slide'
import ContentCopyIcon from '@mui/icons-material/ContentCopy'

const PerformancePoster = ({
  title,
  date,
  location,
  company,
  supportInfo,
  image,
  accountNumber,
}) => {
  const [open, setOpen] = useState(false)
  const [alertMessage, setAlertMessage] = useState('')
  const [alertSeverity, setAlertSeverity] = useState('success')

  const handleCopyClick = () => {
    navigator.clipboard
      .writeText(accountNumber)
      .then(() => {
        setAlertMessage(`후원금 계좌가 복사되었습니다. ${accountNumber}`)
        setAlertSeverity('success')
        setOpen(true)
      })
      .catch((error) => {
        setAlertMessage('복사에 실패했습니다.')
        setAlertSeverity('error')
        setOpen(true)
        console.error('복사에 실패했습니다.', error)
      })
  }

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }
    setOpen(false)
  }

  return (
    <>
      <Card className='shadow-lg'>
        <CardMedia component='img' height='300' src={image} alt={title} />
        <CardContent className='text-center'>
          <h1 className='text-2xl font-bold'>{title}</h1>
          <Typography variant='body2' color='text.secondary'>
            {date} | {location}
          </Typography>
          <p className='text-gray-600'>{company}</p>
          <Box display='flex' alignItems='left' justifyContent='left'>
            <Box
              display='flex'
              alignItems='center'
              className='text-gray-600'
              onClick={handleCopyClick}
              sx={{ cursor: 'pointer' }}
            >
              <Typography sx={{ textDecoration: 'underline' }}>{supportInfo}</Typography>
              <ContentCopyIcon className='ml-3' />
            </Box>
          </Box>
        </CardContent>
      </Card>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        TransitionComponent={Slide}
      >
        <MuiAlert onClose={handleClose} severity={alertSeverity} sx={{ width: '100%' }}>
          {alertMessage}
        </MuiAlert>
      </Snackbar>
    </>
  )
}

export default PerformancePoster
