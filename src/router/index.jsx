import { useMediaQuery, useTheme } from '@mui/material'
import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import ResponsiveLayout from '../layouts/ResponsiveLayout'
import Home from '../pages/Home'
import PerformanceDetail from '../pages/PerformanceDetail'
import Performance from '../pages/PerformanceList'

function AppRouter() {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))

  return (
    <Router
      basename={import.meta.env.PUBLIC_URL}
      future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
    >
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
        <Route
          path='/performances/:id'
          element={
            <ResponsiveLayout
              mobileComponent={<PerformanceDetail />}
              desktopComponent={<PerformanceDetail />}
            />
          }
        />
      </Routes>
    </Router>
  )
}

export default AppRouter
