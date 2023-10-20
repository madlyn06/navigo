import { useTranslation } from 'react-i18next'

export default function Footer() {
  const { t, i18n } = useTranslation()
  return (
    <div className='bg-[#a40707]'>
      <div className='mx-auto max-w-[1200px] px-4'>
        <div className='grid lg:grid-cols-12 text-[#f1f1f1] py-12 max-sm:gid-cols-1'>
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
  )
}
