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
const initialState = [
  {
    name: 'Nước bí đao',
    image: biDaoLon,
    slug: 'nuoc-bi-dao'
  },
  {
    name: 'Nước cam ép',
    image: camEpLon,
    slug: 'nuoc-cam-ep'
  },
  {
    name: 'Nước dưa lưới',
    image: duaLuoiChai,
    slug: 'nuoc-dua-luoi'
  },
  {
    name: 'Nước dừa nha đam',
    image: duaNhaDamChai,
    slug: 'nuoc-dua-nha-dam'
  },
  {
    name: 'Nước hồng trà đào',
    image: hongTraDaoChai,
    slug: 'nuoc-hong-tra-dao'
  },
  {
    name: 'Nước me ép',
    image: meEpChai,
    slug: 'nuoc-me-ep'
  },
  {
    name: 'Nước nha đam yến',
    image: nhaDamYenChai,
    slug: 'nuoc-nha-dam-yen'
  },
  {
    name: 'Nước trà chanh mật ong',
    image: leMonChai,
    slug: 'nuoc-tra-chanh-mat-ong'
  }
]
export default function Water() {
  const [water, setWater] = React.useState(initialState)
  return (
    <>
      {water.map((item, index) => (
        <Link to={`/san-pham/${item.slug}`} className='col-span-1' key={index}>
          <div>
            <div className='lg:h-[277px] max-sm:h-[110px] w-full'>
              <img src={item.image} alt='' className='w-full h-full object-contain' />
            </div>
            <p className='text-center max-sm:text-[15px]'>{item.name}</p>
          </div>
        </Link>
      ))}
    </>
  )
}
