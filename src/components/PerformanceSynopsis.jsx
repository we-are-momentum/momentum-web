import React from 'react'

const PerformanceSynopsis = ({ synopsis }) => {
  return (
    <section className='mt-6 max-w-3xl mx-auto px-6'>
      <h2 className='text-2xl md:text-3xl font-bold text-neutral-900 dark:text-neutral-100 mb-8 text-center'>
        Synopsis
      </h2>
      <div className='flex justify-center'>
        <p
          className='text-md md:text-base lg:text-lg 
          text-neutral-600 dark:text-neutral-300 
          leading-relaxed md:leading-loose lg:leading-loose
          tracking-wide
          break-keep
          max-w-2xl
          px-4 md:px-8 lg:px-12
          mx-auto
          text-left
          whitespace-pre-line
        '
        >
          {synopsis}
        </p>
      </div>
    </section>
  )
}

export default PerformanceSynopsis
