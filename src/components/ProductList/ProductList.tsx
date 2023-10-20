import React from 'react'
import classNames from 'classnames'
import biaImg from '../../assets/bia.jpg'
import biDaoLon from '../../assets/water/bidaolon.jpg'
import camEpLon from '../../assets/water/cameplon.jpg'
import duaLuoiChai from '../../assets/water/dualuoichai.jpg'
import duaNhaDamChai from '../../assets/water/duanhadamchai.jpg'
import hongTraDaoChai from '../../assets/water/hongtradaochai.jpg'
import leMonChai from '../../assets/water/lemonchai.jpg'
import meEpChai from '../../assets/water/meepchai.jpg'
import nhaDamYenChai from '../../assets/water/nhadamyenchai.jpg'
import tangLucChai from '../../assets/water/tanglucchai.jpg'
import { useTranslation } from 'react-i18next'
const all = [
  {
    name: 'Bia báo trắng',
    image: biaImg
  },
  {
    name: 'Nước bí đao',
    image: biDaoLon
  },
  {
    name: 'Nước cam ép',
    image: camEpLon
  },
  {
    name: 'Nước dưa lưới',
    image: duaLuoiChai
  },
  {
    name: 'Nước dừa nha đam',
    image: duaNhaDamChai
  },
  {
    name: 'Nước hồng trà đào',
    image: hongTraDaoChai
  },
  {
    name: 'Nước me ép',
    image: meEpChai
  },
  {
    name: 'Nước nha đam yến',
    image: nhaDamYenChai
  },
  {
    name: 'Nước trà chanh mật ong',
    image: leMonChai
  }
]
const water = [
  {
    name: 'Nước bí đao',
    image: biDaoLon
  },
  {
    name: 'Nước cam ép',
    image: camEpLon
  },
  {
    name: 'Nước dưa lưới',
    image: duaLuoiChai
  },
  {
    name: 'Nước dừa nha đam',
    image: duaNhaDamChai
  },
  {
    name: 'Nước hồng trà đào',
    image: hongTraDaoChai
  },
  {
    name: 'Nước me ép',
    image: meEpChai
  },
  {
    name: 'Nước nha đam yến',
    image: nhaDamYenChai
  },
  {
    name: 'Nước trà chanh mật ong',
    image: leMonChai
  }
]
const beer = [
  {
    name: 'Bia báo trắng',
    image: biaImg
  }
]
export default function ProductList() {
  const { t, i18n } = useTranslation()
  const [status, setStatus] = React.useState<'all' | 'water' | 'beer'>('all')
  return (
    <div className='mx-auto max-w-[1200px] px-4 my-8'>
      <ul className='flex gap-6 justify-center text-[18px]'>
        <li
          className={classNames('px-3 py-2 rounded-[25px] max-sm:text-[15px]', {
            'bg-red-700': status === 'all',
            'text-white': status === 'all'
          })}
          onClick={() => setStatus('all')}
        >
          {t('allText')}
        </li>
        <li
          className={classNames('px-3 py-2 rounded-[25px] max-sm:text-[15px]', {
            'bg-red-700': status === 'water',
            'text-white': status === 'water'
          })}
          onClick={() => setStatus('water')}
        >
          {t('waterText')}
        </li>
        <li
          className={classNames('px-3 py-2 rounded-[25px] max-sm:text-[15px]', {
            'bg-red-700': status === 'beer',
            'text-white': status === 'beer'
          })}
          onClick={() => setStatus('beer')}
        >
          {t('beerText')}
        </li>
      </ul>
      {status === 'all' && (
        <div className='grid grid-cols-12 max-sm:grid-cols-3'>
          {all.map((_, index) => (
            <div className='max-sm:col-span-1 lg:col-span-3 '>
              <div className='h-[277px] w-full'>
                <img src={_.image} alt='' className='w-full h-full object-contain' />
              </div>
              <p className='text-center max-sm:text-[15px]'>{_.name}</p>
            </div>
          ))}
        </div>
      )}
      {status === 'water' && (
        <div className='grid grid-cols-12 max-sm:grid-cols-3'>
          {water.map((_, index) => (
            <div className='max-sm:col-span-1 lg:col-span-3 '>
              <div className='h-[277px] w-full'>
                <img src={_.image} alt='' className='w-full h-full object-contain' />
              </div>
              <p className='text-center max-sm:text-[15px]'>{_.name}</p>
            </div>
          ))}
        </div>
      )}
      {status === 'beer' && (
        <div className='grid grid-cols-12 max-sm:grid-cols-3'>
          {beer.map((_, index) => (
            <div className='max-sm:col-span-1 lg:col-span-3 '>
              <div className='h-[277px] w-full'>
                <img src={_.image} alt='' className='w-full h-full object-contain' />
              </div>
              <p className='text-center max-sm:text-[15px]'>{_.name}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
