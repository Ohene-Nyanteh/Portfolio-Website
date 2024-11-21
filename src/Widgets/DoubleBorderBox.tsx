import { ReactNode } from 'react';

export default function DoubleBorderBox({children}: {children: ReactNode}) {
  return (
    <div className='md:w-28 md:h-28 lg:w-48 lg:h-48 w-24 h-24 relative hover:bg-slate-500 transition-all bg-slate-950'>
        <div className='w-full h-full relative'>
            <div className='absolute top-0 left-0  border w-full h-full bg-slate-950  -translate-x-2 translate-y-2'></div>
            <div className='border border-blue-700 -z-20  w-full h-full'></div>
        </div>
        <div className='absolute top-0 left-0 flex p-4 justify-center items-center w-full h-full'>
            {children}
        </div>
    </div>
  )
}
