import { ChevronDown } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='font-sans sticky top-0 z-50 flex w-full items-center justify-center p-6 border-b border-b-qt-700 bg-ag-600'>
        <nav className='flex max-w-7xl w-full mx-auto items-center justify-between'>
            <section className='flex items-center gap-12'>
                <img src='/df-01.svg' alt='logo' className='h-6 my-2'></img>
                <ul className='items-center gap-6 text-base font-medium hidden md:flex'>
                    <li className='flex gap-2 items-center'><a href='#'>สำหรับพัฒนา</a><ChevronDown className='w-5'/></li>
                    <li className='flex gap-2 items-center'><a href='#'>สำหรับพัฒนา</a><ChevronDown className='w-5'/></li>
                    <li className='flex gap-2 items-center'><a href='#'>สำหรับพัฒนา</a><ChevronDown className='w-5'/></li>
                    <li className='flex gap-2 items-center'><a href='#'>สำหรับพัฒนา</a><ChevronDown className='w-5'/></li>                    
                </ul>
            </section>
            <Link href="/form" className='px-4 py-2 bg-on-700 text-ag-600 rounded-full'>เริ่มต้นใช้งาน</Link>
        </nav>
    </div>
  )
}

export default Navbar