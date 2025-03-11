import { useMediaQuery, useTheme } from '@mui/material'
import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import ResponsiveLayout from '../layouts/ResponsiveLayout'
import Home from '../pages/Home'
import Performance from '../pages/Performance'

function AppRouter() {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))

  return (
    <Router>
      <Routes>
        <Route
          path='/'
          element={
            isMobile ? (
              <Navigate to='/performances' />
            ) : (
              <ResponsiveLayout mobileComponent={<Home />} desktopComponent={<Home />} />
            )
          }
        />
        <Route
          path='/performances'
          element={
            <ResponsiveLayout
              mobileComponent={<Performance />}
              desktopComponent={<Performance />}
            />
          }
        />
      </Routes>
    </Router>
  )
}

export default AppRouter
