import { ArrowUpRight } from 'lucide-react'
import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='flex w-full justify-between font-sans text-sm'>
        <div className='flex flex-col items-start w-full text-cb-900 bg-ag-900 border border-qt-700 p-6 gap-6 rounded-xl'>
            <div className='flex flex-col lg:flex-row items-start justify-between w-full lg:gap-2 gap-6'>
                <div className='flex flex-col items-start justify-center gap-2 shrink-0'>            
                    <img src="/logo.svg" alt="logo" className='flex w-full max-w-[128px] shrink-0'/>
                    <div className='flex flex-col gap-2'>
                        <p>© 2025 Dooform by Knight Consultant <br /> Under License of Rinkai</p>            
                        <p>การใช้งานเว็บไซต์นี้นับว่า<br />คุณได้ยอมรับเงื่อนไขในการใช้งานเรียบร้อย</p> 
                    </div>           
                </div>
                <div className='grid md:grid-cols-4 grid-cols-2 lg:flex items-start lg:justify-end w-full gap-6 lg:gap-12'>            
                    <ul className='flex flex-col gap-2'>
                        <li className='font-semibold'>สำหรับพัฒนา</li>
                        <li><Link href="/form" className='footer-link'>Knowledge Base</Link></li>
                        <li><Link href="/components" className='footer-link'>Components</Link></li>
                    </ul>    
                    <ul className='flex flex-col gap-2'>
                        <li className='font-semibold'>เกี่ยวกับแอปพลิเคชั่น</li>
                        <li><Link href="/about" className='footer-link'>รายการเอกสาร</Link></li>
                        <li><Link href="/terms" className='footer-link'>คำแนะนำในการใช้งาน</Link></li>
                        <li><Link href="/privacy" className='footer-link'>เอกสารประกอบการใช้งาน</Link></li>
                        <li><Link href="/privacy" className='footer-link'>รายงานวิเคราะห์คุณภาพ</Link></li>
                        <li><Link href="/privacy" className='footer-link'>ทีมพัฒนา</Link></li>
                        <li><Link href="/privacy" className='footer-link'>เกี่ยวกับเว็บไซต์</Link></li>
                    </ul>        
                    <ul className='flex flex-col gap-2'>
                        <li className='font-semibold'>สำหรับหน่วยงานธุรกิจ</li>
                        <li><Link href="/about" className='footer-link'>แพลนสำหรับหน่วยงาน</Link></li>
                        <li><Link href="/terms" className='footer-link'>ค่าบริการ</Link></li>
                        <li><Link href="/privacy" className='footer-link'>ติดต่อสอบถาม</Link></li>
                    </ul>        
                    <ul className='flex flex-col gap-2'>
                        <li className='font-semibold'>ข้อบังคับทางกฎหมาย</li>
                        <li><Link href="/about" className='footer-link'>ข้อตกลงในการใช้งาน</Link></li>
                        <li><Link href="/terms" className='footer-link'>นโยบายการจัดเก็บข้อมูล</Link></li>
                    </ul>        
                </div>  
            </div>    
            <ul className='flex flex-col items-start justify-start'>
                <li className='flex gap-1 items-center'><Link href="/contact" className='footer-link'>Knight Tech</Link> <ArrowUpRight className='w-4 h-4'/></li>                
                <li className='flex gap-1 items-center'><Link href="https://www.knightvisahelppoint.com/" className='footer-link'>knight consultant worldwide company limited</Link> <ArrowUpRight className='w-4 h-4'/></li>
            </ul>
        </div>        
    </footer>
  )
}

export default Footer