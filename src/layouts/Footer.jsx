const staffs = [
  { role: '연출', name: ['황지수'] },
  { role: '조연출', name: ['유세영'] },
  {
    role: 'Staffs',
    name: [
      '김미지',
      '김설이',
      '김연천',
      '소규섭',
      '이신정',
      '정윤경',
      '변주영',
      '이선미',
      '서정환',
      '양유성',
    ],
  },
]

const Footer = () => {
  return (
    <footer className='bg-neutral-100 dark:bg-neutral-950 backdrop-blur-sm py-8'>
      <div className='container mx-auto px-4'>
        <div className='w-full max-w-6xl mx-auto'>
          {/* Momentum 로고 */}
          <div className='mb-8 text-left'>
            <h2 className='text-2xl font-bold text-neutral-900 dark:text-neutral-100'>momentum</h2>
          </div>
          {/* 스태프 목록 */}
          <div className='grid grid-cols-2 md:grid-cols-3 gap-6 mb-8'>
            {staffs.map((staff, index) => (
              <div
                key={index}
                className={`
                  ${
                    index === staffs.length - 1 && staffs.length % 2 !== 0
                      ? 'col-span-2 md:col-span-3'
                      : ''
                  }
                `}
              >
                <h3 className='text-sm font-bold text-neutral-600 dark:text-neutral-400 mb-2 text-left'>
                  {staff.role}
                </h3>
                <ul className='flex flex-wrap gap-x-4 gap-y-1'>
                  {staff.name.map((name, nameIndex) => (
                    <li key={nameIndex} className='text-sm text-neutral-800 dark:text-neutral-200'>
                      {name}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          {/* Copyright */}
          <div className='pt-4 border-t border-neutral-200 dark:border-neutral-800'>
            <p className='text-sm text-neutral-600 dark:text-neutral-400 text-center'>
              © {new Date().getFullYear()} momentum. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
