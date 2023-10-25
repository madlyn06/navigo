import React from 'react'
import biaImg from '../../../assets/bia.jpg'
import thungbia from '../../../assets/thungbia.jpg'
import thungbia2 from '../../../assets/thungbia2.jpg'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
const initialState = [
  {
    name: 'Bia báo trắng',
    image: biaImg,
    slug: 'bia-bao-trang',
    nameEng: 'White newspaper beer'
  },
  {
    name: 'Thùng 24 lon báo trắng',
    image: thungbia,
    slug: 'thung-24-lon-bao-trang',
    nameEng: 'Box of 24 cans of white newspaper'
  },
  {
    name: 'Thùng 24 lon báo trắng',
    image: thungbia2,
    slug: 'thung-24-lon-bao-trang',
    nameEng: 'Box of 24 cans of white newspaper'
  }
]
export default function Beer() {
  const { t, i18n } = useTranslation()
  const [beer, setBeer] = React.useState(initialState)
  return (
    <>
      {beer.map((item) => (
        <Link to={`/san-pham/${item.slug}`} className='col-span-1'>
          <div>
            <div className='lg:h-[277px] max-sm:h-[110px] w-full'>
              <img src={item.image} alt='' className='w-full h-full object-contain' />
            </div>
            <p className='text-center max-sm:text-[15px]'>
              {i18n.language === 'vn' ? `${item.name}` : `${item.nameEng}`}
            </p>
          </div>
        </Link>
      ))}
    </>
  )
}
