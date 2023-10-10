import React from 'react'
import biaImg from '../../../assets/bia.jpg'
const initialState = [
  {
    name: 'Bia báo trắng',
    image: biaImg
  }
]
export default function Beer() {
  const [beer, setBeer] = React.useState(initialState)
  return (
    <>
      {beer.map((item) => (
        <div className='col-span-1'>
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
