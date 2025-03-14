import AppRouter from '@/router'
import ThemeManager from './layouts/ThemeManager'
import './styles/App.css'

function App() {
  return (
    <ThemeManager>
      <AppRouter />
    </ThemeManager>
  )
}

export default App
