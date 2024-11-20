import Image from 'next/image'
import Logo from "../../public/Logo Light.png"
import { fullpageApi } from '@fullpage/react-fullpage'

export default function Header({fullpage_api}: {fullpage_api: fullpageApi}) {
  return (
    <div className='w-full p-6 flex justify-between items-center'>
        <Image src={Logo} alt='logo' className='w-[50px] h-[50px]'/>
        <div className='flex gap-2 md:gap-6 font-bold text-xs md:text-base'>
            <a href='#Home' className='hover:text-blue-800'>Home</a >
            <a href='#Projects'  className='hover:text-blue-800'>Projects</a >
            <a href='#Contact' className='hover:text-blue-800'>Contact</a >
            <a href='#About' className='hover:text-blue-800'>About</a >
        </div>
    </div>
  )
}
