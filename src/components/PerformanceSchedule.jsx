import { useState, useEffect } from 'react'

const PerformanceSchedule = ({ schedule }) => {
  const [selectedDate, setSelectedDate] = useState(null)
  const [selectedGroup, setSelectedGroup] = useState(null)

  useEffect(() => {
    // 현재 날짜와 시간 가져오기
    const now = new Date()
    const currentDate = now.toISOString().split('T')[0]
    const currentTime = `${now.getHours().toString().padStart(2, '0')}:${now
      .getMinutes()
      .toString()
      .padStart(2, '0')}`

    // 오늘 날짜의 스케줄 찾기
    const todaySchedule = schedule.find((day) => day.date === currentDate)

    if (todaySchedule) {
      // 오늘 스케줄이 있으면 설정
      setSelectedDate(todaySchedule)

      // 현재 시간 이후의 가장 가까운 회차 찾기
      const nextGroup = todaySchedule.groups.find((group) => group.time > currentTime)
      if (nextGroup) {
        setSelectedGroup(nextGroup)
      } else {
        setSelectedGroup(todaySchedule.groups[0]) // 없으면 첫 회차 선택
      }
    } else {
      // 오늘 스케줄이 없으면 가장 가까운 날짜 찾기
      const futureSchedule = schedule.find((day) => day.date >= currentDate)
      if (futureSchedule) {
        setSelectedDate(futureSchedule)
        setSelectedGroup(futureSchedule.groups[0]) // 첫 회차 선택
      } else {
        // 모든 공연이 지났으면 마지막 날짜 선택
        setSelectedDate(schedule[schedule.length - 1])
        setSelectedGroup(schedule[schedule.length - 1].groups[0])
      }
    }
  }, [schedule])

  const handleDateClick = (date) => {
    setSelectedDate(date)

    const now = new Date()
    const currentTime = `${now.getHours().toString().padStart(2, '0')}:${now
      .getMinutes()
      .toString()
      .padStart(2, '0')}`

    const nextGroup = date.groups.find((group) => group.time > currentTime)

    if (nextGroup) {
      setSelectedGroup(nextGroup)
    } else {
      setSelectedGroup(date.groups[0]) // If no future group, select the first one
    }
  }

  const handleGroupClick = (group) => {
    setSelectedGroup(group)
  }

  const formatDate = (dateString) => {
    const [year, month, day] = dateString.split('-')
    return `${parseInt(month)}/${parseInt(day)}`
  }

  const specialGuest = '김하연'

  return (
    <section className='relative pt-16 pb-16'>
      {/* 상단 그라데이션 */}
      <div className='absolute top-0 inset-x-0 h-16 bg-gradient-to-b from-white dark:from-neutral-900 to-indigo-50 dark:to-neutral-800' />

      {/* 컨텐츠 영역 */}
      <div className='relative bg-indigo-50 dark:bg-neutral-800 py-8'>
        <h2 className='text-2xl md:text-3xl font-bold text-neutral-900 dark:text-neutral-100 mb-8 text-center'>
          Schedule
        </h2>

        {/* 날짜 선택 탭 */}
        <div className='max-w-3xl mx-auto px-4'>
          <div className='relative'>
            <ul className='grid grid-cols-3 gap-4 mb-8'>
              {schedule.map((daySchedule) => (
                <li
                  key={daySchedule.date}
                  onClick={() => handleDateClick(daySchedule)}
                  className={`
                    p-4 text-center transition-colors cursor-pointer list-none
                    ${
                      selectedDate?.date === daySchedule.date
                        ? 'text-blue-600 dark:text-blue-400'
                        : 'text-neutral-900 dark:text-neutral-100'
                    }
                    hover:bg-neutral-50 dark:hover:bg-neutral-800/50
                  `}
                >
                  <div className='text-sm md:text-base font-medium'>
                    {formatDate(daySchedule.date)}
                  </div>
                  <div className='text-xs md:text-sm mt-1 text-neutral-600 dark:text-neutral-400'>
                    {daySchedule.day}요일
                  </div>
                </li>
              ))}
            </ul>
            <div
              className='absolute bottom-0 h-0.5 bg-blue-600 dark:bg-blue-400 transition-all duration-300 ease-in-out'
              style={{
                left: `${(selectedDate ? schedule.findIndex((d) => d.date === selectedDate.date) : 0) * 33.333}%`,
                width: '33.333%',
              }}
            />
          </div>

          {/* 회차 선택 */}
          {selectedDate && (
            <div className='relative'>
              <ul className='grid grid-cols-3 gap-4 mb-8'>
                {selectedDate.groups.map((group) => (
                  <li
                    key={group.round}
                    onClick={() => handleGroupClick(group)}
                    className={`
                      p-3 text-center transition-colors cursor-pointer list-none
                      ${
                        selectedGroup?.round === group.round
                          ? 'text-blue-600 dark:text-blue-400'
                          : 'text-neutral-900 dark:text-neutral-100'
                      }
                      hover:bg-neutral-50 dark:hover:bg-neutral-800/50
                    `}
                  >
                    <div className='text-sm md:text-base font-medium'>{group.round}회</div>
                    <div className='text-xs md:text-sm mt-1 text-neutral-600 dark:text-neutral-400'>
                      {group.time}
                    </div>
                  </li>
                ))}
              </ul>
              <div
                className='absolute bottom-0 h-0.5 bg-blue-600 dark:bg-blue-400 transition-all duration-300 ease-in-out'
                style={{
                  left: `${(selectedGroup ? selectedDate.groups.findIndex((g) => g.round === selectedGroup.round) : 0) * 33.333}%`,
                  width: '33.333%',
                }}
              />
            </div>
          )}

          {/* 캐스팅 정보 */}
          {selectedGroup && (
            <div className='max-w-sm mx-auto bg-white dark:bg-neutral-800 p-8 shadow-xl shadow-blue-900/5 backdrop-blur-sm'>
              {' '}
              {/* p-6에서 p-8로 변경 */}
              <div className='flex flex-col items-center space-y-4'>
                {selectedGroup.actors.map((role, index) => (
                  <div key={index} className='w-full text-center'>
                    <span className='text-sm font-medium text-neutral-500 dark:text-neutral-400'>
                      {role}
                    </span>
                    <p className='mt-1 text-base font-medium text-neutral-900 dark:text-neutral-100'>
                      {selectedGroup.details[role]}
                    </p>
                    {index !== selectedGroup.actors.length - 1 && (
                      <div className='mt-4 flex justify-center'>
                        <div className='w-16 h-px bg-neutral-200 dark:bg-neutral-700' />
                      </div>
                    )}
                  </div>
                ))}
                <div className='pt-4 text-center'>
                  <span className='block text-sm text-neutral-600 dark:text-neutral-400'>
                    목소리 출연 | {specialGuest}
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* 하단 그라데이션 */}
      <div className='absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-white dark:from-neutral-900 to-indigo-50 dark:to-neutral-800' />
    </section>
  )
}

export default PerformanceSchedule
