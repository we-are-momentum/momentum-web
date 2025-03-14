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
          <TableHead>
            <TableRow>
              {/* <TableCell>회차</TableCell>
              <TableCell>홍길동</TableCell>
              <TableCell>김길동</TableCell>
              <TableCell>이길동</TableCell> */}
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {schedule.map((row) => (
              <TableRow key={row.round}>
                <TableCell>{row.round}</TableCell>
                <TableCell>{row.groups.members}</TableCell>
                {/* <TableCell>{row.cast.b}</TableCell>
                <TableCell>{row.cast.c}</TableCell> */}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </section>
  )
}

export default PerformanceSchedule
