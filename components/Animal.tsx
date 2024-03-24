import React from 'react'
import Image from 'next/image';
import { PEOPLE_URL } from '@/constants';

interface AnimalProps
{
  backgroundImage: string;
  title: string;
  subtitle: string;
}

const AnimalSpecies = ({backgroundImage, title, subtitle}
: AnimalProps) =>
{
  return (
    <div className={`h-full w-full min-w-[1100px] ${backgroundImage}
      bg-cover bg-no-repeat lg:rounded-r-5x1 2x1:rounded-5x1`}>
        <div className="flex h-full flex-col items-start justify-between p-6
          lg:px-20 lg:py-10">
            <div className="flexCenter gap-4">
              <div className="rounded-full">
                <Image
                  src="/rabbit.png"
                  alt="map"
                  width={80}
                  height={80}
                />
              </div>

              <div className="flex flex-col gap-1">
                <h4 className="bold-18 text-white"> {title} </h4>
                <p className="regular-14 text-white"> {subtitle} </p>
              </div>
            </div>
          </div>
    </div>
  )
}

const Animals = () => {
  return (
    <section className="2x1:max-container relative
      flex flex-col py-10 lg:mb-10 lg:py-20 xl:mb-20">
      <div className="hide-scrollbar flex h-[340px] w-full items-start
        justify-start gap-8 overflow-x-auto lg:h-[480ox] xl:h-[640px]">
          <AnimalSpecies 
            backgroundImage="bg-bg-1"
            title="Companion Paws"
            subtitle=" We prioritize your animals well-being"
          />

          <AnimalSpecies
            backgroundImage="bg-bg-2"
            title="Companion Paws"
            subtitle=" Commitment to animals "
          />
        </div>

        <div className="flexEnd mt-10 px-6 lg:-mt-60 lg:mr-6">
          <div className="bg-green-50 p-8 lg:max-w-[500px] xl:max-w-[734px]
            xl:rounded-5xl xl:px-16 xl:py-20 relative w-full overflow-hidden rounded-3x1">
              <h2 className="regular-24 md:regular-32 2x1:regular-64 capitalize text-white">
                <strong> Our Mission  </strong> is to Help You and Your Pets
              </h2>

              <p className="regular-14 xl:regular-16 mt-5 text-white">
                Getting you the results you expect is our number one priority. 
                We understand how important your pets are to your family, which is why we strive to give them the care 
                that they need and deserve. 
              </p>

              <Image
                src="/quote.svg"
                alt="camp-2"
                width={186}
                height={219}
                className="camp-quote"
              />
          </div>
        </div>
    </section>
  )
}

export default Animals
