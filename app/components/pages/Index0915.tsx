import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Banner from '../atom/Banner'
import LargeBanner from '../atom/LargeBanner'

const Index0915 = () => {
  return (
    <div className='relative flex flex-col items-center justify-start min-h-screen w-full overflow-hidden'>
        <LargeBanner
        topSubheading="แพทเทิร์นกรอกฟอร์มสำเร็จรูป"
            mainHeading="กรอกฟอร์มไวด้วย Dooform"
            bottomSubheading="แพทเทิร์นกรอกฟอร์มสำเร็จรูป พร้อมใช้งาน ไม่ต้องเสียเวลาแก้รูปแบบเอกสาร"
            backgroundImage="https://images.ctfassets.net/kftzwdyauwt9/2umXr0voS3ukFj1QdBFLYG/7e9e0fcc902687cd455dd0bd657c8094/Peach_Blog_Post_v2_Hero_1x1.png?w=1920&q=90&fm=webp"
            backgroundType="image"
            linkTo="https://www.app.dooform.com/form"
            showArrow={true}
        />        
        <section className='flex flex-col w-full max-w-6xl my-6 mx-3'>
            <div className='my-4'>
            <h2 className='text-3xl font-semibold'>ให้การกรอกฟอร์มไม่ยุ่งยากอีกต่อไป</h2>
            <h3 className='text-lg'>พารากราฟและบอดี้</h3>
        </div>            
        <div className='flex gap-4 md:flex-row flex-col'>
            <Banner
                topSubheading="อัปเดตล่าสุด 10 กันยายน 2025"
                mainHeading="ดูรายการเอกสาร"
                bottomSubheading="มีเอกสารครบถ้วนพร้อมใช้งาน"
                backgroundImage="/assets/components/banner-example.webp"
                backgroundType="image"
                showArrow={true}
                linkTo='https://www.app.dooform.com/form'
            />    
            <Banner
                topSubheading="อยู่ในช่วงพัฒนา"
                mainHeading="ทดลองใช้งานฟรี"
                bottomSubheading="สมัครสมาชิกเพื่อทดลองใช้งานฟรี"
                backgroundImage="/assets/components/bg-01.webp"
                backgroundType="image"
                showArrow={true}
                linkTo='https://www.app.dooform.com/form'
            />    
            <Banner
                topSubheading="อยู่ในช่วงพัฒนา"
                mainHeading="AI ช่วยแปล"
                bottomSubheading="ใช้ผู้ช่วยเพื่อลดเวลาแปลเอกสาร"
                backgroundImage="https://cdn.openai.com/sora-ga/dev/features/sm/feature-blend-right.mp4.mp4"
                backgroundType="video"
                showArrow={true}
                linkTo='https://gcp-apis-test.dooform.com/login'
            />    
                
        </div> 
        </section>     
    </div>
  )
}

export default Index0915