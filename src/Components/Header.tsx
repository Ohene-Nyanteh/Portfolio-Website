import Image from 'next/image'
import Logo from "../../public/Logo Light.png"
import Link from 'next/link'

export default function Header() {
  return (
    <div className='w-full p-6 flex justify-between items-center'>
        <Image src={Logo} alt='logo' className='w-[50px] h-[50px]'/>
        <div className='flex gap-2 md:gap-6 font-bold text-xs md:text-base'>
            <Link href={'/Projects'} className='hover:text-blue-800'>Projects</Link >
            <Link href={'/Services'} className='hover:text-blue-800'>Services</Link >
            <Link href={'/Contact'} className='hover:text-blue-800'>Contact</Link >
            <Link href={'/About'} className='hover:text-blue-800'>About</Link >
        </div>
    </div>
  )
}
