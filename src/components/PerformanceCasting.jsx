const PerformanceCasting = ({ casting }) => {
  if (!casting || casting.length === 0) {
    return <p className='text-center text-neutral-500'>출연진 정보가 없습니다.</p>
  }

  return (
    <section className='relative pt-16 pb-16'>
      {/* 상단 그라데이션 */}
      <div className='absolute top-0 inset-x-0 h-16 bg-gradient-to-b from-white dark:from-neutral-900 to-indigo-50 dark:to-neutral-800' />

      {/* 컨텐츠 영역 */}
      <div className='relative bg-indigo-50 dark:bg-neutral-800 py-8'>
        <h2 className='text-2xl md:text-3xl font-bold text-neutral-900 dark:text-neutral-100 mb-6 text-center'>
          Casting
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
          {casting.map((role, index) => (
            <div key={index} className='flex flex-col items-center'>
              <h3 className='text-base font-medium text-neutral-900 dark:text-neutral-100 mb-3'>
                {role.name}
              </h3>
              <p className='text-sm text-neutral-600 dark:text-neutral-400 mb-5'>
                {role.actor.join(' / ')}
              </p>
              {index !== casting.length - 1 && (
                <div className='w-24 h-px bg-indigo-100 dark:bg-neutral-700' />
              )}
            </div>
          ))}
        </div>
      </div>
      {/* 하단 그라데이션 */}
      <div className='absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-white dark:from-neutral-900 to-indigo-50 dark:to-neutral-800' />
    </section>
  )
}

export default PerformanceCasting
