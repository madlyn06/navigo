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
const initialState = [
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
    name: 'Nước tăng lực Báo Trắng',
    image: tangLucChai
  },
  {
    name: 'Nước trà chanh mật ong',
    image: leMonChai
  }
]
export default function Water() {
  const [water, setWater] = React.useState(initialState)
  return (
    <>
      {water.map((item, index) => (
        <div className='col-span-1' key={index}>
          <div>
            <div className='lg:h-[277px] max-sm:h-[110px] w-full'>
              <img src={item.image} alt='' className='w-full h-full object-contain' />
            </div>
            <p className='text-center max-sm:text-[15px]'>{item.name}</p>
          </div>
        </div>
      ))}
    </>
  )
}
