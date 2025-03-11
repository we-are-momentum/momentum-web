import ResponsiveAppBar from '@/components/ResponsiveAppBar'
import Footer from '@/layouts/Footer'
import ResponsiveLayout from '@/layouts/ResponsiveLayout'

const MobileView = () => (
  <div className='flex flex-col min-h-screen bg-gray-50'>
    <main className='flex flex-col items-center gap-4 p-4 mt-14'>
      <section className='w-full bg-blue-500 text-white p-6 rounded-lg shadow-lg'>
        <h2 className='text-xl font-bold'>모바일 최적화 화면</h2>
        <p>모바일 환경에 맞춰 디자인되었습니다.</p>
      </section>
    </main>
  </div>
)

const DesktopView = () => (
  <div className='flex flex-col min-h-screen bg-white'>
    <main className='flex flex-col items-center gap-4 p-10'>
      <section className='w-3/4 bg-green-500 text-white p-8 rounded-lg shadow-lg'>
        <h2 className='text-2xl font-bold'>데스크탑 최적화 화면</h2>
        <p>데스크탑 환경에 맞춰 디자인되었습니다.</p>
      </section>
    </main>
  </div>
)

const Home = () => (
  <div className='min-h-screen bg-gray-50'>
    <ResponsiveAppBar />
    {/* <Header /> */}
    <div className='pt-[64px]'>
      <ResponsiveLayout mobileComponent={<MobileView />} desktopComponent={<DesktopView />} />
    </div>
    <Footer />
  </div>
)

export default Home
