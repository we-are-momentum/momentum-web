import Footer from '@/layouts/Footer'
import ResponsiveAppBar from '../components/ResponsiveAppBar'

const ResponsiveLayout = ({ children }) => {
  return (
    <div className='relative min-h-screen w-full overflow-x-hidden'>
      {/* 공통 AppBar */}
      <ResponsiveAppBar />
      <div className='w-full flex flex-col items-center'>
        <div className='w-full xl:px-0'>{children}</div>
      </div>
      {/* 공통 Footer */}
      <Footer />
    </div>
  )
}

export default ResponsiveLayout
