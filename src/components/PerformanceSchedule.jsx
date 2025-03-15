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
              <TableCell>Date</TableCell>
              <TableCell>Day</TableCell>
              <TableCell>Time</TableCell>
              <TableCell colSpan={7} align='center'>
                출연진
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {schedule.map((daySchedule) => (
              <React.Fragment key={daySchedule.date}>
                {daySchedule.groups.map((group, index) => (
                  <TableRow key={`${daySchedule.date}-${group.round}`}>
                    {index === 0 && (
                      <>
                        <TableCell rowSpan={daySchedule.groups.length}>
                          {daySchedule.date}
                        </TableCell>
                        <TableCell rowSpan={daySchedule.groups.length}>{daySchedule.day}</TableCell>
                      </>
                    )}
                    <TableCell>{group.time}</TableCell>
                    {group.actors.map((actor, idx) => (
                      <TableCell key={idx}>{actor}</TableCell>
                    ))}
                  </TableRow>
                ))}
              </React.Fragment>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </section>
  )
}

export default PerformanceSchedule
