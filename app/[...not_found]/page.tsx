import Link from 'next/link'
import React from 'react'

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] w-full font-sans">
        <div className='flex flex-col items-start justify-center text-start px-8 py-6'>
            <h1 className='text-2xl font-medium'>ไม่พบหน้าที่คุณกำลังมองหา</h1>
            <p className='mt-1'>โปรดตรวจสอบ URL หรือกลับไปที่หน้าแรก</p>            
            <p className='mt-1 font-mono text-sm px-2 py-1 bg-neutral-200 rounded-lg'>@error: 404 Not Found</p>            
        </div>
        <Link href="/" className='button-lg'>กลับไปที่หน้าแรก</Link>
    </div>
  )
}

export default NotFound