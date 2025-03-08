import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import './styles/index.css'
import App from './App.jsx'
import ThemeManager from './components/ThemeManager.jsx'
import { store } from './store/store'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <ThemeManager>
        <App />
      </ThemeManager>
    </Provider>
  </StrictMode>,
)
