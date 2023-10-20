import React from 'react'
import ProductList from 'src/components/ProductList'
import AboutImg from '../../assets/about-us.jpg'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export default function ViewMain() {
  const navigate = useNavigate()
  const { t, i18n } = useTranslation()
  return (
    <div className='pt-[80px] relative'>
      <div className='sm:-w-full'>
        <img className='h-full w-full object-cover' src={AboutImg} alt='About Us' />
      </div>
      <div className='bg-[#e3f8fe] lg:py-12 max-sm:py-6'>
        <p className='text-center lg:text-[35px] max-sm:text-[14px]'>{t('heading')}</p>
        <p className='text-center lg:text-[35px] max-sm:text-[14px]'>{t('heading1')}</p>
        <div className='mx-auto max-w-[1200px] px-4 mt-6'>
          <div className='grid max-sm:grid-cols-1 lg:grid-cols-12 lg:gap-12 max-sm:gap-3'>
            <div className='lg:col-span-4 max-sm:col-span-1'>
              <p className='text-[#222f6e] max-sm:text-[14px] line-clamp-4 lg:text-base'>{t('description1')}</p>
              <div className='flex gap-1 justify-center mt-4 items-center cursor-pointer'>
                <p className='max-sm:text-[13px] text-base' onClick={() => navigate('/about')}>
                  {t('more')}
                </p>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='w-4 h-4'
                >
                  <path strokeLinecap='round' strokeLinejoin='round' d='M8.25 4.5l7.5 7.5-7.5 7.5' />
                </svg>
              </div>
            </div>
            <div className='lg:col-span-4 max-sm:col-span-1'>
              <p className='text-[#222f6e] line-clamp-4 lg:text-base max-sm:text-[13px]'>{t('description2')}</p>
              <div className='flex gap-1 justify-center mt-4 items-center cursor-pointer'>
                <p className='text-base max-sm:text-[13px]' onClick={() => navigate('/about')}>
                  {t('more')}
                </p>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='w-4 h-4'
                >
                  <path strokeLinecap='round' strokeLinejoin='round' d='M8.25 4.5l7.5 7.5-7.5 7.5' />
                </svg>
              </div>
            </div>
            <div className='lg:col-span-4 max-sm:col-span-1'>
              <p className='text-[#222f6e] line-clamp-4 lg:text-base max-sm:text-[13px]'>{t('description3')}</p>
              <div className='flex gap-1 justify-center mt-4 items-center cursor-pointer'>
                <p className='text-base max-sm:text-[13px]' onClick={() => navigate('/about')}>
                  {t('more')}
                </p>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='w-4 h-4'
                >
                  <path strokeLinecap='round' strokeLinejoin='round' d='M8.25 4.5l7.5 7.5-7.5 7.5' />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='mt-8 text-center'>
        <h3 className='text-center text-[35px] max-sm:text-[15px] font-bold'>{t('productHeading')}</h3>
        <div className='mt-3 italic text-[18px]'>
          <p className='max-sm:text-[15px]'>{t('exp')}</p>
          <p className='max-sm:text-[15px]'>{t('provide')}</p>
        </div>
      </div>
      <ProductList />
    </div>
  )
}
