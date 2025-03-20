import React from 'react'

const PerformanceStaffs = ({ staffs }) => {
  return (
    <section className='mt-6 text-center'>
      <h2 className='text-xl font-bold mb-4'>Creative Team</h2>
      <div className='text-neutral-600'>
        {staffs.map((member, index) => (
          <div key={index} className='inline-block mx-2'>
            <span className='font-semibold'>{member.role}</span>: <span>{member.name}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default PerformanceStaffs
