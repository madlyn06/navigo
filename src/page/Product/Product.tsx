import React, { useState } from 'react'
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
import Beer from 'src/components/ProductList/Beer'
import Water from 'src/components/ProductList/Water'
import { Link, useNavigate, useParams } from 'react-router-dom'
const initialState = [
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
    name: 'Nước tăng lực Báo Trắng',
    image: tangLucChai
  },
  {
    name: 'Nước bí đao',
    image: biDaoLon
  }
]
export default function Product() {
  const [product, setProduct] = useState(initialState)
  const [status, setStatus] = useState('all')
  const navigation = useNavigate()
  let { id } = useParams()
  return (
    <div className='pt-[80px]'>
      <div className='mx-auto max-w-[1200px] px-4'>
        <div className='border-t mb-4'>
          <div className='lg:grid max-sm:hidden grid-cols-4 gap-4 mt-8 ml-4'>
            <div className='col-span-1'>
              <h1 className='uppercase text-xl font-bold'>Danh mục sản phẩm</h1>
              <ul className='mt-4'>
                <Link
                  to='/product/beer'
                  className='border-b block mt-3 mb-3 pb-2 hover:text-[#004299] cursor-pointer'
                  onClick={() => setStatus('beer')}
                >
                  Bia
                </Link>
                <Link
                  to='/product/water'
                  className='border-b block mt-3 mb-3 pb-2 hover:text-[#004299] cursor-pointer'
                  onClick={() => setStatus('beer')}
                >
                  Nước giải khát
                </Link>
                <li className=' hover:text-[#004299] cursor-pointer'>OEM</li>
              </ul>
            </div>
            <div className='col-span-3'>
              <div className='grid grid-cols-3'>
                {id === 'all' &&
                  product.map((item) => (
                    <div className='col-span-1'>
                      <div className='lg:h-[277px] w-full max-sm:h-[110px]'>
                        <img src={item.image} alt='' className='w-full h-full object-contain' />
                      </div>
                      <p className='text-center max-sm:text-[15px]'>{item.name}</p>
                    </div>
                  ))}
                {id === 'beer' && <Beer />}
                {id === 'water' && <Water />}
              </div>
            </div>
          </div>
          <div className='lg:hidden max-sm:block'>
            <h1 className='uppercase text-base font-bold mt-4'>Danh mục sản phẩm</h1>
            <ul className='mt-4'>
              <Link
                to='/product/beer'
                className='border-b block mt-3 mb-3 pb-2 hover:text-[#004299] cursor-pointer'
                onClick={() => setStatus('beer')}
              >
                Bia
              </Link>
              <Link
                to='/product/water'
                className='border-b block mt-3 mb-3 pb-2 hover:text-[#004299] cursor-pointer'
                onClick={() => setStatus('beer')}
              >
                Nước giải khát
              </Link>
              <li className=' hover:text-[#004299] cursor-pointer'>OEM</li>
            </ul>
            <div className='col-span-3'>
              <div className='grid grid-cols-3'>
                {id === 'all' &&
                  product.map((item) => (
                    <div className='col-span-1'>
                      <div className='lg:h-[277px] w-full max-sm:h-[110px]'>
                        <img src={item.image} alt='' className='w-full h-full object-contain' />
                      </div>
                      <p className='text-center max-sm:text-[15px]'>{item.name}</p>
                    </div>
                  ))}
                {id === 'beer' && <Beer />}
                {id === 'water' && <Water />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
