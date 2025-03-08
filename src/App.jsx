import './styles/App.css'
import AppRouter from '@/router'
import { Provider } from 'react-redux'
import { store } from './store/store'
import ThemeManager from './components/ThemeManager'

function App() {
  return (
    <Provider store={store}>
      <ThemeManager>
        <AppRouter />
      </ThemeManager>
    </Provider>
  )
}

export default App
