import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import './styles/index.css'
import AppRouter from './router/index'
import ThemeManager from '@/layouts/ThemeManager'
import { store } from './store'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <ThemeManager>
        <AppRouter />
      </ThemeManager>
    </Provider>
  </StrictMode>,
)
