const staffs = [
  { role: '연출', name: ['황지수'] },
  { role: '조연출', name: ['유세영'] },
  // {
  //   role: '출연',
  //   name: [''],
  // },
]

const Footer = () => {
  return (
    <footer className='bg-neutral-100 dark:bg-neutral-950 backdrop-blur-sm py-8'>
      <div className='container mx-auto px-4 flex justify-center'>
        {' '}
        {/* flex와 justify-center 추가 */}
        <div className='w-full max-w-4xl'>
          {' '}
          {/* lg:max-w-4xl 대신 max-w-4xl로 변경 */}
          {/* Momentum 로고 */}
          <div className='mb-8'>
            <h2 className='text-2xl font-bold text-neutral-900 dark:text-neutral-100'>Momentum</h2>
          </div>
          {/* 스태프 목록 */}
          <div className='grid grid-cols-2 lg:grid-cols-8 gap-x-4 gap-y-6 mb-8'>
            {staffs.map((staff, index) => (
              <div
                key={index}
                className={`${staff.role === '출연' ? 'col-span-2 lg:col-span-4' : ''}`}
              >
                <h3 className='text-sm font-medium text-neutral-600 dark:text-neutral-400 mb-2'>
                  {staff.role}
                </h3>
                <div className='space-y-1'>
                  {staff.name.map((name, nameIndex) => (
                    <p key={nameIndex} className='text-neutral-800 dark:text-neutral-200 text-sm'>
                      {name}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
          {/* Copyright */}
          <div className='pt-4 border-t border-neutral-200 dark:border-neutral-800'>
            <p className='text-sm text-neutral-600 dark:text-neutral-400 text-center'>
              © {new Date().getFullYear()} Momentum. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
