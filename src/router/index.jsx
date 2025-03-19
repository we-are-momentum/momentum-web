import { useMediaQuery, useTheme } from '@mui/material'
import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import ResponsiveLayout from '../layouts/ResponsiveLayout'
import Home from '../pages/Home'
import PerformanceDetail from '../pages/PerformanceDetail'
import Performance from '../pages/PerformanceList'

function AppRouter() {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))
  const basename = '/momentum-web'

  return (
    <Router basename={basename} future={{ v7_relativeSplatPath: true, v7_startTransition: true }}>
      <Routes>
        <Route
          path='/'
          element={
            isMobile ? (
              <Navigate to={'/performances/20250001'} />
            ) : (
              <ResponsiveLayout>
                <Home />
              </ResponsiveLayout>
            )
          }
        />
        <Route
          path='/performances'
          element={
            <ResponsiveLayout>
              <Performance />
            </ResponsiveLayout>
          }
        />
        <Route
          path='/performances/:id'
          element={
            <ResponsiveLayout>
              <PerformanceDetail />
            </ResponsiveLayout>
          }
        />
      </Routes>
    </Router>
  )
}

export default AppRouter
