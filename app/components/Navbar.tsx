import { ChevronDown } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='font-sans sticky top-0 z-50 flex w-full items-center justify-center px-6 border-b border-b-qt-700 bg-pl-300 h-16'>
        <nav className='flex max-w-7xl w-full mx-auto items-center justify-between'>
            <section className='flex items-center gap-12'>
                <Link href="/" className='flex items-center'>
                    <img src='/Dooform-NoIcon.svg' alt='logo' className='h-8 my-2'></img>
                </Link>
                <ul className='items-center gap-6 text-sm font-medium hidden md:flex text-ms-500'>
                    <li className='flex gap-2 items-center'><a href='#'>ผลิตภัณฑ์</a><ChevronDown className='w-5'/></li>
                    <li className='flex gap-2 items-center'><a href='#'>สำหรับธุรกิจ</a><ChevronDown className='w-5'/></li>
                    <li className='flex gap-2 items-center'><a href='#'>แพ็คเกจ</a><ChevronDown className='w-5'/></li>
                    <li className='flex gap-2 items-center'><a href='#'>เกี่ยวกับเว็บไซต์</a><ChevronDown className='w-5'/></li>                    
                </ul>
            </section>
            <Link href="https://www.app.dooform.com/" className='px-1.5 h-8 bg-on-900 text-ag-600 rounded-full text-sm font-medium items-center flex justify-center'>
              <p className='px-1.5'>เริ่มต้นใช้งาน</p>
            </Link>
        </nav>
    </div>
  )
}

export default Navbar