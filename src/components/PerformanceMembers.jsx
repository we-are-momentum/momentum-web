import React from 'react'

const PerformanceMembers = ({ members }) => {
  return (
    <section className='mt-6'>
      <h2 className='text-xl font-bold'>Members</h2>
      <ul className='text-gray-600'>
        {members.map((member, index) => (
          <li key={index}>
            {member.role}: {member.name}
          </li>
        ))}
      </ul>
    </section>
  )
}

export default PerformanceMembers
