import React, { ReactNode } from 'react'
import { FaReact } from 'react-icons/fa6'

export default function DoubleBorderBox({children}: {children: ReactNode}) {
  return (
    <div className='md:w-60 md:h-60 w-52 h-52 relative hover:bg-slate-500 transition-all bg-slate-950'>
        <div className='w-full h-full relative'>
            <div className='border w-full h-full'></div>
            <div className='border border-blue-700 bg-slate-950 w-full h-full -translate-x-2 translate-y-2 absolute top-0 left-0'></div>
        </div>
        <div className='absolute top-0 left-0 flex justify-center items-center w-full h-full'>
            {children}
        </div>
    </div>
  )
}
