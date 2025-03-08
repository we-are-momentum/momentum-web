import './styles/App.css'
import AppRouter from '@/router'
import { Provider } from 'react-redux'
import ThemeManager from './layouts/ThemeManager'

function App() {
  return (
    // <Provider>
    <ThemeManager>
      <AppRouter />
    </ThemeManager>
    // </Provider>
  )
}

export default App
