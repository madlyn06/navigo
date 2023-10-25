import React from 'react'
import biDaoLon from '../../../assets/water/bidaolon.jpg'
import camEpLon from '../../../assets/water/cameplon.jpg'
import duaLuoiChai from '../../../assets/water/dualuoichai.jpg'
import duaNhaDamChai from '../../../assets/water/duanhadamchai.jpg'
import hongTraDaoChai from '../../../assets/water/hongtradaochai.jpg'
import leMonChai from '../../../assets/water/lemonchai.jpg'
import meEpChai from '../../../assets/water/meepchai.jpg'
import nhaDamYenChai from '../../../assets/water/nhadamyenchai.jpg'
import tangLucChai from '../../../assets/water/tanglucchai.jpg'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
const initialState = [
  {
    name: 'Nước bí đao',
    image: biDaoLon,
    slug: 'nuoc-bi-dao',
    nameEng: 'Water melon'
  },
  {
    name: 'Nước cam ép',
    image: camEpLon,
    slug: 'nuoc-cam-ep',
    nameEng: 'Orange juice'
  },
  {
    name: 'Nước dưa lưới',
    image: duaLuoiChai,
    slug: 'nuoc-dua-luoi',
    nameEng: 'Cantaloupe juice'
  },
  {
    name: 'Nước dừa nha đam',
    image: duaNhaDamChai,
    slug: 'nuoc-dua-nha-dam',
    nameEng: 'Aloe vera coconut water'
  },
  {
    name: 'Nước hồng trà đào',
    image: hongTraDaoChai,
    slug: 'nuoc-hong-tra-dao',
    nameEng: 'Peach pink tea'
  },
  {
    name: 'Nước me ép',
    image: meEpChai,
    slug: 'nuoc-me-ep',
    nameEng: 'Tamarind juice'
  },
  {
    name: 'Nước nha đam yến',
    image: nhaDamYenChai,
    slug: 'nuoc-nha-dam-yen',
    nameEng: `Bird's nest aloe vera juice`
  },
  {
    name: 'Nước trà chanh mật ong',
    image: leMonChai,
    slug: 'nuoc-tra-chanh-mat-ong',
    nameEng: 'Honey lemon tea'
  }
]
export default function Water() {
  const { t, i18n } = useTranslation()
  const [water, setWater] = React.useState(initialState)
  return (
    <>
      {water.map((item, index) => (
        <Link to={`/san-pham/${item.slug}`} className='col-span-1' key={index}>
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
