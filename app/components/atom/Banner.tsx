import React from 'react'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

interface BannerProps {
  topSubheading: string;
  mainHeading: string;
  bottomSubheading: string;
  backgroundImage: string;
  backgroundType?: 'image' | 'video';
  showArrow?: boolean;
  linkTo: string;
}

const Banner = ({ 
  topSubheading, 
  mainHeading, 
  bottomSubheading, 
  backgroundImage, 
  backgroundType = 'image',
  showArrow = true,
  linkTo
}: BannerProps) => {
  return (
    <Link 
      href={linkTo} 
      className='flex flex-col items-start justify-center w-full border-ag-200 rounded-xl p-3 overflow-hidden relative mx-auto group cursor-pointer'
      prefetch={true}
      aria-label={`${mainHeading} - ${bottomSubheading}`}
    >
        {backgroundType === 'image' ? (
          <div 
            className="absolute inset-0 brightness-70 bg-cover bg-center bg-no-repeat transition-transform duration-300 ease-in-out group-hover:scale-110 rounded-lg"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          />
        ) : (
          <video 
            className='absolute inset-0 w-full h-full object-cover brightness-70 transition-transform duration-300 ease-in-out group-hover:scale-110 rounded-lg'
            autoPlay
            muted
            loop
            playsInline
          >
            <source src={backgroundImage} type="video/mp4" />
          </video>
        )}
        <section className='flex flex-col relative z-10 text-start text-white p-4 rounded-lg gap-32 w-full cursor-pointer'>
            <div>
                <h3 className='text-sm'>{topSubheading}</h3>
            </div>
            <div className='flex items-end justify-between'>
                <div>
                    <h2 className='text-3xl font-semibold'>{mainHeading}</h2>
                    <h3 className='text-lg'>{bottomSubheading}</h3>                
                </div>
                {showArrow && <ArrowRight className='w-6 h-6'/>}
            </div>
        </section>
    </Link>
  )
}

export default Banner