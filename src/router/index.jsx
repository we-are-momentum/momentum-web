import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import ResponsiveLayout from '../layouts/ResponsiveLayout'
import PerformanceDetail from '../pages/PerformanceDetail'
import Performance from '../pages/PerformanceList'

function AppRouter() {
  const basename = '/momentum-web'

  return (
    <Router basename={basename}>
      <Routes>
        <Route path='/' element={<Navigate to={'/performances/20250001'} />} />
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
