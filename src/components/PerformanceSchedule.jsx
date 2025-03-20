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
      <h2 className='text-3xl font-bold text-center'>Schedule</h2>
      <TableContainer component={Paper} className='mt-2 overflow-x-auto'>
        <Table className='min-w-full'>
          <TableHead>
            <TableRow>
              <TableCell className='text-xs md:text-base'>Date</TableCell>
              <TableCell className='text-xs md:text-base'>Day</TableCell>
              <TableCell className='text-xs md:text-base'>Time</TableCell>
              <TableCell className='text-xs md:text-base' colSpan={7} align='center'>
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
                        <TableCell
                          className='text-xs md:text-base'
                          rowSpan={daySchedule.groups.length}
                        >
                          {daySchedule.date}
                        </TableCell>
                        <TableCell
                          className='text-xs md:text-base'
                          rowSpan={daySchedule.groups.length}
                        >
                          {daySchedule.day}
                        </TableCell>
                      </>
                    )}
                    <TableCell className='text-xs md:text-base'>{group.time}</TableCell>
                    {group.actors.map((actor, idx) => (
                      <TableCell className='text-xs md:text-base' key={idx}>
                        {actor}
                      </TableCell>
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
