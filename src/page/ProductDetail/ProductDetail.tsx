import React, { useEffect, useRef, useState } from 'react'
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
import { useParams } from 'react-router-dom'
import { keyBy } from 'lodash'
const detail = [
  {
    name: 'Bia báo trắng',
    image: biaImg,
    slug: 'bia-bao-trang',
    information: {
      brandName: 'White Panther',
      certification: 'ISO, HACCP',
      logisticsInformation: 'Hai Phong, Viet Nam',
      minimumOrderQuantity: 'Negotiation',
      packaging: 'Aluminum Can',
      specification: '24 cans/carton',
      paymentOption: 'L/C, T/T, Western Union, Paypal',
      placeOfOrigin: 'Viet Nam',
      mainIngredient: 'Malt, Rice, Houblon',
      shelfLife: '12 months',
      volume: '330ml'
    }
  },
  {
    name: 'Nước bí đao',
    image: biDaoLon,
    slug: 'nuoc-bi-dao',
    information: {
      brandName: 'White Panther',
      certification: 'ISO, HACCP',
      logisticsInformation: 'Hai Phong, Viet Nam',
      minimumOrderQuantity: 'Negotiation',
      packaging: 'Aluminum can or plastic bottle',
      specification: '24 cans or bottles/carton',
      paymentOption: 'L/C, T/T, Western Union, Paypal',
      placeOfOrigin: 'Viet Nam',
      mainIngredient: 'siro fructose, concentrated squash juice',
      shelfLife: '12 months',
      volume: '330ml'
    }
  },
  {
    name: 'Nước cam ép',
    image: camEpLon,
    slug: 'nuoc-cam-ep',
    information: {
      brandName: 'White Panther',
      certification: 'ISO, HACCP',
      logisticsInformation: 'Hai Phong, Viet Nam',
      minimumOrderQuantity: 'Negotiation',
      packaging: 'Aluminum can or plastic bottle',
      specification: '24 cans or bottles/carton',
      paymentOption: 'L/C, T/T, Western Union, Paypal',
      placeOfOrigin: 'Viet Nam',
      mainIngredient: 'siro fructose, Fresh orange juice',
      shelfLife: '12 months',
      volume: '330ml'
    }
  },
  { name: 'Nước dưa lưới', image: duaLuoiChai, slug: 'nuoc-dua-luoi' },
  { name: 'Nước dừa nha đam', image: duaNhaDamChai, slug: 'nuoc-dua-nha-dam' },
  { name: 'Nước hồng trà đào', image: hongTraDaoChai, slug: 'nuoc-hong-tra-dao' },
  {
    name: 'Nước me ép',
    image: meEpChai,
    slug: 'nuoc-me-ep',
    information: {
      brandName: 'White Panther',
      certification: 'ISO, HACCP',
      logisticsInformation: 'Hai Phong, Viet Nam',
      minimumOrderQuantity: 'Negotiation',
      packaging: 'Aluminum can or plastic bottle',
      specification: '24 cans or bottles/carton',
      paymentOption: 'L/C, T/T, Western Union, Paypal',
      placeOfOrigin: 'Viet Nam',
      mainIngredient: 'Siro fructose, concentrated tamarind juice',
      shelfLife: '12 months',
      volume: '330ml'
    }
  },
  { name: 'Nước nha đam yến', image: nhaDamYenChai, slug: 'nuoc-nha-dam-yen' },
  { name: 'Nước trà chanh mật ong', image: leMonChai, slug: 'nuoc-tra-chanh-mat-ong' }
]
const detailKeyBy = keyBy(detail, 'slug')
export default function ProductDetail() {
  const { id } = useParams()
  const [name, setName] = useState('')
  const imageRef = useRef<HTMLImageElement>(null)
  const handleZoom = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const img = imageRef.current as HTMLImageElement
    const { height, width } = event.currentTarget.getBoundingClientRect()
    const { naturalHeight, naturalWidth } = img
    const { offsetX, offsetY } = event.nativeEvent
    const top = offsetY * (1 - naturalHeight / height)
    const left = offsetX * (1 - naturalWidth / width)
    img.style.width = naturalWidth + 'px'
    img.style.height = naturalHeight + 'px'
    img.style.maxWidth = 'unset'
    img.style.top = top + 'px'
    img.style.left = left + 'px'
  }
  const handleZoomLeave = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    imageRef.current?.removeAttribute('style')
  }
  useEffect(() => {
    detail.forEach((item) => {
      if (item.slug === id) setName(item.name)
    })
  }, [id])
  return (
    <div className='pt-[80px]'>
      <div className='mx-auto max-w-[1200px] px-4'>
        <div className='lg:grid lg:grid-cols-2 max-sm:grid-cols-1 gap-6'>
          <div className='col-span-1'>
            <div
              className='h-[500px] relative w-full cursor-zoom-in overflow-hidden pt-[100%] max-sm:pointer-events-none'
              onMouseMove={handleZoom}
              onMouseLeave={handleZoomLeave}
            >
              <img
                ref={imageRef}
                className='w-full h-full object-contain pointer-events-none absolute left-0 top-0 bg-white'
                src={detailKeyBy[id as string]?.image}
                alt=''
              />
            </div>
            <div></div>
          </div>
          <div className='col-span-1'>
            <h1 className='text-xl font-bold mb-4 border-b-4 border-red-500 '>{name}</h1>
            {detail.map((item) => {
              if (item.slug === id)
                return (
                  <div>
                    <div className='flex border-b text-[#666666] mb-3 pb-2'>
                      <p className='lg:w-[230px] max-sm:w-[170px]'>Brand Name</p>
                      <p className='max-sm:w-[150px]'>{item.information?.brandName}</p>
                    </div>
                    <div className='flex border-b text-[#666666] mb-3 pb-2'>
                      <p className='lg:w-[230px] max-sm:w-[170px]'>Certification</p>
                      <p className='max-sm:w-[150px]'>{item.information?.certification}</p>
                    </div>
                    <div className='flex border-b text-[#666666] mb-3 pb-2'>
                      <p className='lg:w-[230px] max-sm:w-[170px]'>Logistics Information</p>
                      <p className='max-sm:w-[150px]'>{item.information?.logisticsInformation}</p>
                    </div>
                    <div className='flex border-b text-[#666666] mb-3 pb-2'>
                      <p className='lg:w-[230px] max-sm:w-[170px]'>Minimum Order Quantity</p>
                      <p className='max-sm:w-[150px]'>{item.information?.minimumOrderQuantity}</p>
                    </div>
                    <div className='flex border-b text-[#666666] mb-3 pb-2'>
                      <p className='lg:w-[230px] max-sm:w-[170px]'>Packaging</p>
                      <p className='max-sm:w-[150px]'>{item.information?.packaging}</p>
                    </div>
                    <div className='flex border-b text-[#666666] mb-3 pb-2'>
                      <p className='lg:w-[230px] max-sm:w-[170px]'>Specification</p>
                      <p className='max-sm:w-[150px]'>{item.information?.specification}</p>
                    </div>
                    <div className='flex border-b text-[#666666] mb-3 pb-2'>
                      <p className='lg:w-[230px] max-sm:w-[170px]'>Payment Options</p>
                      <p className='max-sm:w-[150px]'>{item.information?.paymentOption}</p>
                    </div>
                    <div className='flex border-b text-[#666666] mb-3 pb-2'>
                      <p className='lg:w-[230px] max-sm:w-[170px]'>Place of Origin</p>
                      <p className='max-sm:w-[150px]'>{item.information?.placeOfOrigin}</p>
                    </div>
                    <div className='flex border-b text-[#666666] mb-3 pb-2'>
                      <p className='lg:w-[230px] max-sm:w-[170px]'>Main Ingredient</p>
                      <p className='max-sm:w-[150px]'>{item.information?.mainIngredient}</p>
                    </div>
                    <div className='flex border-b text-[#666666] mb-3 pb-2'>
                      <p className='lg:w-[230px] max-sm:w-[170px]'>Shelf Life</p>
                      <p className='max-sm:w-[150px]'>{item.information?.shelfLife}</p>
                    </div>
                    <div className='flex border-b text-[#666666] mb-3 pb-2'>
                      <p className='lg:w-[230px] max-sm:w-[170px]'>Volume</p>
                      <p className='max-sm:w-[150px]'>{item.information?.volume}</p>
                    </div>
                  </div>
                )
            })}
          </div>
        </div>
        {/* <div className='lg:hidden max-sm:block'>
          <div className=''>
            <div className='h-[500px] '>
              <img
                ref={imageRef}
                className='w-full h-full object-contain'
                src={detailKeyBy[id as string]?.image}
                alt=''
              />
            </div>
            <div></div>
          </div>
          <div className=''>
            <h1 className='text-xl font-bold mb-4 border-b-4 border-red-500 '>{name}</h1>
            {detail.map((item) => {
              if (item.slug === id)
                return (
                  <div>
                    <div className='flex border-b text-[#666666] mb-3 pb-2 gap-3'>
                      <p className='w-[150px]'>Brand Name</p>
                      <p className='w-[150px]'>{item.information?.brandName}</p>
                    </div>
                    <div className='flex border-b text-[#666666] mb-3 pb-2 gap-3'>
                      <p className='w-[150px]'>Certification</p>
                      <p className='w-[150px]'>{item.information?.certification}</p>
                    </div>
                    <div className='flex border-b text-[#666666] mb-3 pb-2 gap-3'>
                      <p className='w-[150px]'>Logistics Information</p>
                      <p className='w-[150px]'>{item.information?.logisticsInformation}</p>
                    </div>
                    <div className='flex border-b text-[#666666] mb-3 pb-2 gap-3'>
                      <p className='w-[150px]'>Minimum Order Quantity</p>
                      <p className='w-[150px]'>{item.information?.minimumOrderQuantity}</p>
                    </div>
                    <div className='flex border-b text-[#666666] mb-3 pb-2 gap-3'>
                      <p className='w-[150px]'>Packaging</p>
                      <p className='w-[150px]'>{item.information?.packaging}</p>
                    </div>
                    <div className='flex border-b text-[#666666] mb-3 pb-2 gap-3'>
                      <p className='w-[150px]'>Specification</p>
                      <p className='w-[150px]'>{item.information?.specification}</p>
                    </div>
                    <div className='flex border-b text-[#666666] mb-3 pb-2 gap-3'>
                      <p className='w-[150px]'>Payment Options</p>
                      <p className='w-[150px]'>{item.information?.paymentOption}</p>
                    </div>
                    <div className='flex border-b text-[#666666] mb-3 pb-2 gap-3'>
                      <p className='w-[150px]'>Place of Origin</p>
                      <p className='w-[150px]'>{item.information?.placeOfOrigin}</p>
                    </div>
                    <div className='flex border-b text-[#666666] mb-3 pb-2 gap-3'>
                      <p className='w-[150px]'>Main Ingredient</p>
                      <p className='w-[150px]'>{item.information?.mainIngredient}</p>
                    </div>
                    <div className='flex border-b text-[#666666] mb-3 pb-2 gap-3'>
                      <p className='w-[150px]'>Shelf Life</p>
                      <p className='w-[150px]'>{item.information?.shelfLife}</p>
                    </div>
                    <div className='flex border-b text-[#666666] mb-3 pb-2 gap-3'>
                      <p className='w-[150px]'>Volume</p>
                      <p className='w-[150px]'>{item.information?.volume}</p>
                    </div>
                  </div>
                )
            })}
          </div>
        </div> */}
      </div>
    </div>
  )
}
