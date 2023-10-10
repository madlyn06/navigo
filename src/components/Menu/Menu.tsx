import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
interface Props {
  menuRef: React.RefObject<HTMLDivElement>
  hiddenRef: React.RefObject<HTMLDivElement>
}
export default function Menu({ menuRef, hiddenRef }: Props) {
  useEffect(() => {
    const handleClickOutside = (e: any) => {
      if (!menuRef.current?.classList.contains('hidden'))
        if (menuRef.current && !menuRef.current.contains(e.target)) {
          hiddenRef.current?.classList.add('hidden')
        }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  })

  return (
    <div ref={hiddenRef} className='absolute top-0 left-0 w-full h-full hidden'>
      <div className='bg-[#938d8db3] w-full h-screen'>
        <div ref={menuRef} className='bg-white h-full w-[260px] inline-block py-5'>
          <ul className='flex flex-col'>
            <Link
              onClick={() => hiddenRef.current?.classList.add('hidden')}
              to='/'
              className='cursor-pointer py-4 text-[#666666d9] px-4 font-bold border-t'
            >
              Trang Chủ
            </Link>
            <Link
              onClick={() => hiddenRef.current?.classList.add('hidden')}
              to='/about'
              className='cursor-pointer py-4 text-[#666666d9] px-4 font-bold border-t'
            >
              Về chúng tôi
            </Link>
            <Link
              onClick={() => hiddenRef.current?.classList.add('hidden')}
              to='/certificate'
              className='cursor-pointer py-4 text-[#666666d9] px-4 font-bold border-t'
            >
              Chứng nhận
            </Link>
            <Link
              onClick={() => hiddenRef.current?.classList.add('hidden')}
              to='/product/all'
              className='cursor-pointer py-4 text-[#666666d9] px-4 font-bold border-t'
            >
              Sản phẩm
            </Link>
            <Link
              onClick={() => hiddenRef.current?.classList.add('hidden')}
              to='/contact'
              className='cursor-pointer py-4 text-[#666666d9] px-4 font-bold border-t'
            >
              Liên Hệ
            </Link>
          </ul>
        </div>
      </div>
    </div>
  )
}
