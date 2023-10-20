import React from 'react'
import AboutImg from '../../assets/about-us.jpg'
import FactoryImg from '../../assets/factory-about.jpg'
import { useTranslation } from 'react-i18next'
export default function AboutUs() {
  const { t, i18n } = useTranslation()
  return (
    <div className='pt-[80px]'>
      <div>
        <img src={AboutImg} alt='About Us' />
      </div>
      <div className='mt-4'>
        <div className='mx-auto max-w-[1200px] px-4'>
          <div className='lg:block max-sm:hidden'>
            <div className='grid grid-cols-10 gap-6'>
              <div className='col-span-4'>
                <img src={FactoryImg} alt='Factory About Us' />
              </div>
              <div className='col-span-4 ml-8'>
                <div className='mt-6'>
                  <h1 className='text-2xl text-[#004299] font-bold'>{t('aboutus')}</h1>
                  <p className='mt-4 leading-7 tracking-wider'>{t('aboutusdes')}</p>
                </div>
              </div>
            </div>
            <div className='grid grid-cols-10 gap-6 mt-6 ml-8 mb-6'>
              <div className='col-span-4'>
                <h1 className='text-2xl text-[#004299] font-bold'>{t('inspiration')}</h1>
                <p className='mt-4 leading-7 tracking-wider'>{t('inspirationdes')}</p>
              </div>
              <div className='col-span-4'>
                <img src={FactoryImg} alt='Factory About Us' />
              </div>
            </div>
          </div>
          <div className='lg:hidden max-sm:block'>
            <div className='p-3'>
              <div className='mb-3'>
                <img src={FactoryImg} alt='Factory About Us' />
              </div>
              <h1 className='text-base text-[#004299] font-bold'>{t('aboutus')}</h1>
              <p className='mt-4 leading-7 tracking-wider'>{t('aboutusdes')}</p>
            </div>
            <div className='bg-[#fef1e1]'>
              <div className='p-3'>
                <img src={FactoryImg} alt='Factory About Us' />
                <h1 className='text-base text-[#004299] font-bold mt-3'>{t('inspiration')}</h1>
                <p className='mt-4 leading-7 tracking-wider'>{t('inspirationdes')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
