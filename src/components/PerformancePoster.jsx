import React, { useState } from 'react'

const PerformancePoster = ({
  title,
  date,
  location,
  company,
  supportInfo,
  image,
  accountNumber,
}) => {
  const [showAlert, setShowAlert] = useState(false)
  const [alertMessage, setAlertMessage] = useState('')
  const [alertType, setAlertType] = useState('success')

  const handleCopyClick = () => {
    navigator.clipboard
      .writeText(accountNumber)
      .then(() => {
        setAlertMessage(`후원금 계좌가 복사되었습니다. ${accountNumber}`)
        setAlertType('success')
        setShowAlert(true)
        setTimeout(() => setShowAlert(false), 3000)
      })
      .catch((error) => {
        setAlertMessage('복사에 실패했습니다.')
        setAlertType('error')
        setShowAlert(true)
        setTimeout(() => setShowAlert(false), 3000)
      })
  }

  return (
    <div className='relative'>
      {/* 알림 메시지 */}
      {showAlert && (
        <div
          className={`fixed top-4 right-4 z-50 p-4 rounded-lg shadow-lg ${
            alertType === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
          }`}
        >
          {alertMessage}
        </div>
      )}

      {/* Hero 섹션 */}
      <div className='relative items-center justify-center w-full overflow-x-hidden lg:pt-20 lg:pb-20 xl:pt-20 xl:pb-32'>
        <div className='container flex flex-col-reverse items-center justify-between h-full max-w-6xl px-8 mx-auto lg:flex-row'>
          {/* 왼쪽 컨텐츠 */}
          <div className='z-30 flex flex-col items-center w-full max-w-xl pt-48 text-center lg:items-start lg:w-1/2 lg:pt-20 lg:text-left'>
            <h1 className='relative mb-4 text-3xl font-black leading-tight text-gray-900 dark:text-gray-100 sm:text-5xl xl:mb-8'>
              {title}
            </h1>
            <p className='pr-0 mb-8 text-base text-gray-600 dark:text-gray-300 sm:text-lg xl:text-xl lg:pr-20'>
              {date}
            </p>
            <p className='pr-0 mb-8 text-base text-gray-600 dark:text-gray-300 sm:text-lg xl:text-xl lg:pr-20'>
              {location}
            </p>
            <p className='pr-0 mb-8 text-base text-gray-600 dark:text-gray-300 sm:text-lg xl:text-xl lg:pr-20'>
              {company}
            </p>
            <button
              onClick={handleCopyClick}
              className='flex items-center px-8 py-4 text-base font-medium text-gray-600 dark:text-gray-300 transition-colors duration-200 hover:text-gray-900 dark:hover:text-white'
            >
              <span className='underline'>{supportInfo}</span>
              <svg
                className='w-5 h-5 ml-2'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2'
                />
              </svg>
            </button>
          </div>

          {/* 오른쪽 이미지 */}
          <div className='relative z-40 flex flex-col items-end justify-center w-full h-full lg:w-1/2'>
            <div className='container relative left-0 w-full max-w-4xl lg:absolute xl:max-w-6xl lg:w-screen'>
              <img
                src={image}
                alt={title}
                className='w-full h-auto mt-20 mb-20 ml-0 rounded-lg shadow-xl lg:mt-24 xl:mt-40 lg:mb-0 lg:h-full lg:-ml-12'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PerformancePoster
