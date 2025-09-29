import Link from 'next/dist/client/link'
import React from 'react'

const Index0915 = () => {
  return (
    <div className="font-sans flex flex-col items-start justify-start h-screen rounded-2xl">
      <div className="flex flex-col items-center justify-center w-full py-8 gap-4">
        <div className='flex flex-col items-center justify-center'>
            <p className="text-3xl md:text-6xl md:leading-20 font-semibold text-ms-800 text-center">กรอกเอกสาร<br />ไม่ใช่เรื่องยากอีกต่อไป</p>
            <p className="lg:text-xl font-medium text-ms-600">ดูฟอร์ม ผู้ช่วยกรอกเอกสารราชการได้อย่างรวดเร็ว</p>
        </div>
        <Link href="https://www.app.dooform.com/" className='px-1.5 h-8 bg-on-900 text-ag-600 rounded-full text-sm font-medium items-center flex justify-center'>
              <p className='px-1.5'>เริ่มต้นใช้งาน</p>
        </Link>
      </div>
      <div className="w-full h-2/3 overflow-hidden rounded-t-2xl flex items-center justify-center">
        <img
          className="h-full w-full object-cover"
          src="/assets/components/example.png"
          alt="logo"
        />
      </div>
    </div>
  )
}

export default Index0915