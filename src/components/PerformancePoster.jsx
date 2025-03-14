import React, { useState } from 'react'
import { Card, CardContent, CardMedia, Snackbar, Button } from '@mui/material'
import MuiAlert from '@mui/material/Alert'
import Slide from '@mui/material/Slide'

const PerformancePoster = ({ title, company, supportInfo, image }) => {
  const [open, setOpen] = useState(false)
  const [alertMessage, setAlertMessage] = useState('')
  const [alertSeverity, setAlertSeverity] = useState('success')

  const handleCopyClick = () => {
    navigator.clipboard
      .writeText(supportInfo)
      .then(() => {
        setAlertMessage('후원금 계좌가 복사되었습니다.')
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
          <p className='text-gray-600'>{company}</p>
          <Button variant='contained' color='primary' className='mt-2' onClick={handleCopyClick}>
            후원금 계좌 복사
          </Button>
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
