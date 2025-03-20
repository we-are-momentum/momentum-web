const PerformanceImportant = () => {
  const notices = [
    '커튼콜을 제외한 모든 촬영은 불가합니다.',
    '커튼콜 촬영은 가능하지만, SNS 및 온라인 업로드는 불가합니다.',
  ]

  return (
    <section className='mt-6'>
      <h2 className='text-3xl font-bold mb-4 flex flex-col items-center text-center'>주의 사항</h2>
      <ul className='text-left bg-white text-neutral-700 dark:bg-neutral-800 dark:text-neutral-200 p-4 rounded-lg'>
        {notices.map((notice, index) => (
          <li
            key={index}
            className={`
              px-4 py-3 
              sm:text-md 
              leading-relaxed
              break-keep
              whitespace-pre-wrap
              ${
                index !== notices.length - 1
                  ? 'border-b border-neutral-300 dark:border-neutral-600'
                  : ''
              }
            `}
          >
            {notice}
          </li>
        ))}
      </ul>
    </section>
  )
}

export default PerformanceImportant
