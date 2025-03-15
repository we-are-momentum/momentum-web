import { useMediaQuery, useTheme } from '@mui/material'
import AppBar from '@mui/material/AppBar'
import Container from '@mui/material/Container'
import Toolbar from '@mui/material/Toolbar'
import { Link } from 'react-router-dom'

function ResponsiveAppBar() {
  const theme = useTheme()
  const isDarkMode = useMediaQuery('(prefers-color-scheme: dark)')
  const location = window.location
  const basename = location.pathname.startsWith('/momentum-web') ? '/momentum-web' : ''

  const logoSrc = isDarkMode ? `${basename}/logo_dark.png` : `${basename}/logo_light.png`

  return (
    <AppBar
      position='fixed'
      sx={{
        backgroundColor: isDarkMode ? theme.palette.grey[900] : theme.palette.primary.main,
        color: isDarkMode ? theme.palette.text.primary : theme.palette.text.primary,
      }}
    >
      <Container maxWidth='xl'>
        <Toolbar disableGutters>
          <Link to='/' style={{ marginRight: '8px', height: '70px' }}>
            <img
              src={logoSrc} // 로고 이미지 경로를 여기에 입력하세요
              alt='Logo'
              style={{ marginRight: '8px', height: '70px' }}
            />
          </Link>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default ResponsiveAppBar
