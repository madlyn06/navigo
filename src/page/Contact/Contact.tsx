import React from 'react'
import bgImg from '../../assets/bgcontact.jpg'
import { off } from 'process'
import { useTranslation } from 'react-i18next'
export default function Contact() {
  const { t, i18n } = useTranslation()
  return (
    <>
      <div className='pt-[80px] max-sm:hidden'>
        <div className='relative '>
          <img src={bgImg} alt='' />
        </div>
        <div className='absolute top-[80px] right-0 mt-16 mr-72'>
          <div className='py-4 px-8 bg-[#fffcf5] rounded-lg'>
            <h1 className='font-bold text-center'>{t('contacthead')}</h1>
            <div className='mt-4 italic'>{t('infor')}</div>
            <form action='' className='flex flex-col gap-4 mt-4'>
              <input type='text' placeholder={t('hovaten')} className='outline-none p-2 py-3 rounded focus:shadow' />
              <input type='text' placeholder={t('phone')} className='outline-none p-2 py-3 rounded focus:shadow' />
              <textarea
                placeholder={t('noidung')}
                cols={30}
                rows={8}
                className='outline-none p-2 py-3 rounded focus:shadow resize-none'
              ></textarea>
            </form>
          </div>
        </div>
        <div className='bg-white'>
          <div className='mx-auto max-w-[1200px] px-4'>
            <div className='grid lg:grid-cols-12 py-12 max-sm:gid-cols-1'>
              <div className='lg:col-span-6 max:sm:col-span-1 max-sm:text-[13px]'>
                <p className='font-bold mb-6'>{t('nameCty')}</p>
                <p className='mb-3'>
                  <p className='font-bold inline-block'>{t('headOffice')}</p>
                  {t('address')}
                </p>
                <p className='mb-3'>
                  <p className='font-bold inline-block'>{t('factorybeer')}</p>
                  {t('addressfactory')}
                </p>
                <div className='font-bold mb-3'>{t('insland')}</div>
                <p className='mb-3'>Tel/Zalo/Viber: 0384584344</p>
                <p className='mb-3'>Whatsapp/Telegram: +79046076576</p>
                <p className='mb-3'>Email: navigojsc@gmail.com</p>
              </div>
              <div className='col-span-2'></div>
              <div className='col-span-4 max-sm:text-[13px]'>
                <h1 className='lg:mb-2 max-sm:mb-1 font-bold'>{t('product')}</h1>
                <ul className='flex flex-col lg:gap-3 max-sm:gap-1 lg:ml-2'>
                  <li>{t('beerText')}</li>
                  <li>{t('waterText')}</li>
                  <li>OEM</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='pt-[80px] lg:hidden max-sm:block'>
        <div className='relative h-[600px]'>
          <img src={bgImg} alt='' className='w-full h-full object-cover' />
        </div>
        <div className='absolute top-0 right-0 mt-28 p-8'>
          <div className='py-4 px-8 bg-[#fffcf5] rounded-lg'>
            <h1 className='font-bold text-center'>{t('contacthead')}</h1>
            <div className='mt-4 italic'>{t('infor')}</div>
            <form action='' className='flex flex-col gap-4 mt-4'>
              <input type='text' placeholder='Họ và tên...' className='outline-none p-2 py-3 rounded focus:shadow' />
              <input type='text' placeholder='Số điện thoại' className='outline-none p-2 py-3 rounded focus:shadow' />
              <textarea
                placeholder='Nội dung...'
                cols={30}
                rows={8}
                className='outline-none p-2 py-3 rounded focus:shadow resize-none'
              ></textarea>
            </form>
          </div>
        </div>
        <div className='bg-white'>
          <div className='mx-auto max-w-[1200px] px-4'>
            <div className='grid lg:grid-cols-12 py-12 max-sm:gid-cols-1'>
              <div className='lg:col-span-6 max:sm:col-span-1 max-sm:text-[13px]'>
                <p className='font-bold mb-6'>{t('nameCty')}</p>
                <p className='mb-3'>
                  <p className='font-bold inline-block'>{t('headOffice')}</p>
                  {t('address')}
                </p>
                <p className='mb-3'>
                  <p className='font-bold inline-block'>{t('factorybeer')}</p>
                  {t('addressfactory')}
                </p>

                <div className='font-bold mb-3'>{t('insland')}</div>
                <p className='mb-3'>Tel/Zalo/Viber: 0384584344</p>
                <p className='mb-3'>Whatsapp/Telegram: +79046076576</p>
                <p className='mb-3'>Email: navigojsc@gmail.com</p>
              </div>
              <div className='col-span-2'></div>
              <div className='col-span-4 max-sm:text-[13px]'>
                <h1 className='lg:mb-2 max-sm:mb-1 font-bold'>{t('product')}</h1>
                <ul className='flex flex-col lg:gap-3 max-sm:gap-1 lg:ml-2'>
                  <li>{t('beerText')}</li>
                  <li>{t('waterText')}</li>
                  <li>OEM</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
