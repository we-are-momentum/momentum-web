const PerformanceImportant = () => {
  const notices = [
    '커튼콜을 제외한 모든 촬영은 불가합니다.',
    '커튼콜 촬영은 가능하지만, SNS 및 온라인 업로드는 불가합니다.',
  ]

  return (
    <section className='mt-6'>
      <h2 className='text-3xl font-bold mb-4 flex flex-col items-center text-center'>주의 사항</h2>
      <ol className='text-left space-y-4 p-4'>
        {notices.map((notice, index) => (
          <li
            key={index}
            className='
              relative
              p-4
              bg-white dark:bg-neutral-800
              rounded-lg
              shadow-[0_2px_15px_-3px_rgba(99,102,241,0.1),0_4px_6px_-4px_rgba(99,102,241,0.05)]
              dark:shadow-[0_2px_15px_-3px_rgba(99,102,241,0.05),0_4px_6px_-4px_rgba(99,102,241,0.02)]
              flex
              items-start
              gap-3
            '
          >
            <span className='text-indigo-500 dark:text-indigo-400 flex-shrink-0'>⚠️</span>
            <span className='text-neutral-700 dark:text-neutral-200 sm:text-md leading-relaxed break-keep whitespace-pre-wrap'>
              {notice}
            </span>
          </li>
        ))}
      </ol>
    </section>
  )
}

export default PerformanceImportant
