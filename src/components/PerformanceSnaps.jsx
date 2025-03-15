import React from 'react'

const PerformanceSnaps = ({ snaps }) => {
  return (
    <section className='mt-6'>
      <h2 className='text-xl font-bold mb-4 text-center'>Performance Snaps</h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {snaps.map((snap, index) => (
          <div key={index} className='bg-white shadow-lg rounded-lg overflow-hidden'>
            <img src={snap.image} alt={snap.title} className='w-full h-48 object-cover' />
            <div className='p-4'>
              <h3 className='text-lg font-bold'>{snap.title}</h3>
              <p className='text-gray-600'>{snap.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default PerformanceSnaps
