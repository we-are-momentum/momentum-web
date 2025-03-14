import React from 'react'

const PerformanceSynopsis = ({ synopsis }) => {
  return (
    <section className='mt-6'>
      <h2 className='text-xl font-bold'>Synopsis</h2>
      <p className='text-gray-600'>{synopsis}</p>
    </section>
  )
}

export default PerformanceSynopsis
