import React from 'react'
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material'

const PerformanceSchedule = ({ schedule }) => {
  return (
    <section className='mt-6'>
      <h2 className='text-xl font-bold'>Casting Schedule</h2>
      <TableContainer component={Paper} className='mt-2'>
        <Table>
          <TableBody>
            {schedule.map((row) => (
              <TableRow key={row.round}>
                <TableCell>{row.round}</TableCell>
                <TableCell>{row.dateTime}</TableCell>
                {row.groups.map((group, index) => (
                  <React.Fragment key={index}>
                    {group.members.map((member, idx) => (
                      <TableCell key={idx}>{member}</TableCell>
                    ))}
                  </React.Fragment>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </section>
  )
}

export default PerformanceSchedule
