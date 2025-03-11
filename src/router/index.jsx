import Home from '@/pages/Home'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </Router>
  )
}

export default AppRouter
