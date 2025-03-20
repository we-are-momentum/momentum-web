import React from 'react'

const PerformanceSynopsis = ({ synopsis }) => {
  return (
    <section className='mt-6 max-w-4xl mx-auto'>
      <h2 className='text-2xl md:text-3xl font-bold text-neutral-900 dark:text-neutral-100 mb-6'>
        Synopsis
      </h2>
      <p
        className='text-md md:text-base lg:text-lg 
        text-neutral-600 dark:text-neutral-300 
        leading-relaxed md:leading-loose lg:leading-loose
        tracking-wide
        break-keep
        max-w-prose
        px-4 md:px-0
      '
      >
        {synopsis}
      </p>
    </section>
  )
}

export default PerformanceSynopsis
