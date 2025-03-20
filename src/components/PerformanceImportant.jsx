import React from 'react'
import WarningIcon from '@mui/icons-material/Warning'

const PerformanceImportant = () => {
  return (
    <section className='mt-6'>
      <h2 className='text-xl font-bold mb-4 flex flex-col items-center text-center'>
        <WarningIcon className='h-5 w-5 text-yellow-500 mr-2' />
        주의 사항
      </h2>
      <div className='bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4' role='alert'>
        <div className='overflow-x-auto text-center'>
          <table className='min-w-full divide-y divide-neutral-200'>
            <tbody className='bg-white divide-y divide-neutral-200'>
              <tr>
                <td className='px-6 py-4 whitespace-nowrap text-sm text-neutral-700'>
                  커튼콜을 제외한 모든 촬영은 불가합니다.
                </td>
              </tr>
              <tr>
                <td className='px-6 py-4 whitespace-nowrap text-sm text-neutral-700'>
                  커튼콜 촬영은 가능하지만, SNS 및 온라인 업로드는 불가합니다.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}

export default PerformanceImportant
