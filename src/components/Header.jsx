const Header = () => {
  return (
    <header className='fixed top-0 left-0 w-full bg-white shadow-md z-50 flex justify-between items-center p-4 h-16'>
      <h1 className='text-xl font-bold'>MyApp</h1>
      <button className='text-xl'>&#9776;</button> {/* 햄버거 메뉴 */}
    </header>
  )
}

export default Header
