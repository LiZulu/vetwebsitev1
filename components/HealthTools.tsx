import React from 'react'
import Image from 'next/image'

const HealthTools = () => {
  return (
    <section className="flexCenter flex-col">
      <div className="padding-container max-container w-full pb-24">
          <div className="flex flex-wrap justify-between gap-5 lg:gap-10">
            <h2 className="bold-40 lg:bold-64 x1:max-w-[390px] text-green-50"> We are here for you and your pets </h2>
            <p className="regular-16 text-gray-30 xl:,ax-w-[520px]">
              Pet Services we provide: vaccination, deworming, skin treatment, castration, small wound treatment, selling pets products like sampoo, collar
            </p>
          </div>
      </div>

      <div className="flexCenter max-container relative w-full">
          <Image 
            src="./img4.jpg"
            alt="banner"
            width={1440}
            height={580}
            className="w-full object-cover object-center 2x1:rounded-5x1"
          />

          <div className="absolute flex bg-white py-8 pl-5 pr-7 gap-3
            rounded-3x1 border shadow-md md:left-[5%] lg:top-20">

              <div className="flexBetween flex-col">
                <div className='flex w-full flex-col'>
                  <div className="flexBetween w-full">
                    <p className="regular-16 text-gray-20"> Working Time: </p>
                  </div>
                  <p className="bold-20 mt-2 text-green-50"> Mon - Sat: 8AM - 12:30 PM </p>
                  <p className="bold-20 mt-2 text-green-50"> Mon - Sat: 1:30PM - 8:00 PM </p>
                </div>
              </div>
          </div>
        </div>
    </section>
  )
}

export default HealthTools
