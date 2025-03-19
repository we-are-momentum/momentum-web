import AppRouter from '@/router'
import ThemeManager from './layouts/ThemeManager'
import './styles/App.css'
import './styles/index.css'

function App() {
  return (
    <ThemeManager>
      <AppRouter />
    </ThemeManager>
  )
}

export default App
