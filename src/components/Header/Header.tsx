import React, { useEffect, useRef, useState } from 'react'
import logo from '../../assets/logo.jpg'
import american from '../../assets/american-flag.png'
import { Link, useNavigate } from 'react-router-dom'
import Menu from '../Menu'
import {
  useFloating,
  autoUpdate,
  offset,
  flip,
  shift,
  useHover,
  useFocus,
  useDismiss,
  useRole,
  useInteractions,
  safePolygon
} from '@floating-ui/react'
export default function Header() {
  const navigate = useNavigate()
  const logoMenuRef = useRef<HTMLDivElement>(null)
  const menuRef = useRef<HTMLDivElement>(null)
  const hiddenRef = useRef<HTMLDivElement>(null)

  const [isOpen, setIsOpen] = useState(false)
  const { refs, floatingStyles, context } = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
    middleware: [offset(10), flip(), shift()],
    whileElementsMounted: autoUpdate
  })

  const hover = useHover(context, {
    handleClose: safePolygon()
  })
  const focus = useFocus(context)
  const dismiss = useDismiss(context)
  const role = useRole(context, { role: 'tooltip' })

  const { getReferenceProps, getFloatingProps } = useInteractions([hover, focus, dismiss, role])
  useEffect(() => {
    const showButton = () => {
      console.log(hiddenRef.current)
      hiddenRef.current?.classList.remove('hidden')
    }
    logoMenuRef.current?.addEventListener('click', showButton)
    return () => {
      logoMenuRef.current?.removeEventListener('click', showButton)
    }
  })
  return (
    <div className='left-0 right-0 fixed z-30'>
      <div className='h-[80px] flex items-center bg-white rounded-b-3xl'>
        <div className='mx-auto w-[1200px] px-4'>
          <div className='grid-cols-12 gap-4 items-center lg:grid sm:hidden max-sm:hidden'>
            <Link to={'/'} className='col-span-1 w-28'>
              <img className='w-full h-full' src={logo} alt='' />
            </Link>
            <div className='col-span-8'>
              <ul className='flex justify-center gap-4 text-[16px] font-bold text-[#666666d9] flex-wrap'>
                <Link to='/' className='cursor-pointer hover:text-[orange]'>
                  TRANG CHỦ
                </Link>
                <Link to='/about' className='cursor-pointer hover:text-[orange]'>
                  VỀ CHÚNG TÔI
                </Link>
                <Link to='/certificate' className='cursor-pointer hover:text-[orange]'>
                  CHỨNG NHẬN
                </Link>
                <li
                  className='flex items-center cursor-pointer hover:text-[orange]'
                  ref={refs.setReference}
                  {...getReferenceProps()}
                >
                  <Link to='/product/all'>
                    <p>SẢN PHẨM</p>
                  </Link>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={1.5}
                    stroke='currentColor'
                    className='w-5 h-5'
                  >
                    <path strokeLinecap='round' strokeLinejoin='round' d='M19.5 8.25l-7.5 7.5-7.5-7.5' />
                  </svg>
                </li>
                {isOpen && (
                  <div ref={refs.setFloating} style={floatingStyles} {...getFloatingProps()}>
                    <ul className='bg-white px-5 py-5 flex flex-col gap-5 shadow-lg'>
                      <Link to={'/product/beer'} className='cursor-pointer hover:text-[orange]'>
                        Bia
                      </Link>
                      <Link to={'/product/water'} className='cursor-pointer hover:text-[orange]'>
                        Nước giải khát
                      </Link>
                      <li className='cursor-pointer hover:text-[orange]'>OEM</li>
                    </ul>
                  </div>
                )}
                <Link to='/contact' className='cursor-pointer hover:text-[orange]'>
                  LIÊN HỆ
                </Link>
              </ul>
            </div>
            <div className='col-span-3'>
              <div className='flex text-[16px] font-bold text-[#666666d9] gap-2 justify-end'>
                <p>ENGLISH</p>
                <img src={american} alt='' width={25} height={25} />
              </div>
            </div>
          </div>

          <div className='flex items-center lg:hidden sm:flex flex-nowrap'>
            <div className='' ref={logoMenuRef}>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='w-6 h-6'
              >
                <path strokeLinecap='round' strokeLinejoin='round' d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5' />
              </svg>
            </div>
            <div className='flex-1 flex justify-center'>
              <div className='w-28' onClick={() => navigate('/')}>
                <img className='w-full h-full' src={logo} alt='' />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Menu menuRef={menuRef} hiddenRef={hiddenRef} />
    </div>
  )
}
