import React from 'react'
import ProductList from 'src/components/ProductList'
import AboutImg from '../../assets/about-us.jpg'
import { useNavigate } from 'react-router-dom'

export default function ViewMain() {
  const navigate = useNavigate()
  return (
    <div className='pt-[80px] relative'>
      <div className='sm:-w-full'>
        <img className='h-full w-full object-cover' src={AboutImg} alt='About Us' />
      </div>
      <div className='bg-[#e3f8fe] lg:py-12 max-sm:py-6'>
        <p className='text-center lg:text-[35px] max-sm:text-[14px]'>Nhà phân phối và xuất khẩu độc quyền </p>
        <p className='text-center lg:text-[35px] max-sm:text-[14px]'>sản phẩm bia và nước giải khát</p>
        <div className='mx-auto max-w-[1200px] px-4 mt-6'>
          <div className='grid max-sm:grid-cols-1 lg:grid-cols-12 lg:gap-12 max-sm:gap-3'>
            <div className='lg:col-span-4 max-sm:col-span-1'>
              <p className='text-[#222f6e] max-sm:text-[14px] line-clamp-4 lg:text-base'>
                Navigo là nhà phân phối và xuất khẩu độc quyền sản phẩm bia và nước giải khát của Công ty TNHH Phú Thái
                Sơn - một trong những công ty hàng đầu tại miền Bắc, Việt Nam
              </p>
              <div className='flex gap-1 justify-center mt-4 items-center cursor-pointer'>
                <p className='max-sm:text-[13px] text-base' onClick={() => navigate('/about')}>
                  Xem thêm
                </p>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='w-4 h-4'
                >
                  <path strokeLinecap='round' strokeLinejoin='round' d='M8.25 4.5l7.5 7.5-7.5 7.5' />
                </svg>
              </div>
            </div>
            <div className='lg:col-span-4 max-sm:col-span-1'>
              <p className='text-[#222f6e] line-clamp-4 lg:text-base max-sm:text-[13px]'>
                Lấy cảm hứng từ thành phần thiên nhiên phong phú từ khắp nơi trên đất nước, chúng tôi đã nghiên cứu và
                phát triển sản xuất các sản phẩm đồ uống có chất lượng và hương vị tự nhiên, bổ dưỡng, cung cấp đồ uống
                nhu cầu của người tiêu dùng Việt Nam.
              </p>
              <div className='flex gap-1 justify-center mt-4 items-center cursor-pointer'>
                <p className='text-base max-sm:text-[13px]' onClick={() => navigate('/about')}>
                  Xem thêm
                </p>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='w-4 h-4'
                >
                  <path strokeLinecap='round' strokeLinejoin='round' d='M8.25 4.5l7.5 7.5-7.5 7.5' />
                </svg>
              </div>
            </div>
            <div className='lg:col-span-4 max-sm:col-span-1'>
              <p className='text-[#222f6e] line-clamp-4 lg:text-base max-sm:text-[13px]'>
                Chúng tôi sở hữu hơn 26 nhãn hiệu thực phẩm thơm ngon và các thức uống giàu năng lượng, 2 nhà máy sản
                xuất đạt chuẩn quốc tế và 500 nhân viên không ngừng cống hiến mỗi ngày. Nhiều năm hoạt động tại thị
                trường Việt Nam, đến nay Phú Thái Sơn đã và đang không ngừng cải tiến công nghệ, giữ vững vị trí tiên
                phong trong ngành sản xuất hàng tiêu dùng tại Việt Nam.
              </p>
              <div className='flex gap-1 justify-center mt-4 items-center cursor-pointer'>
                <p className='text-base max-sm:text-[13px]' onClick={() => navigate('/about')}>
                  Xem thêm
                </p>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='w-4 h-4'
                >
                  <path strokeLinecap='round' strokeLinejoin='round' d='M8.25 4.5l7.5 7.5-7.5 7.5' />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='mt-8 text-center'>
        <h3 className='text-center text-[35px] max-sm:text-[15px] font-bold'>SẢN PHẨM</h3>
        <div className='mt-3 italic text-[18px]'>
          <p className='max-sm:text-[15px]'>Với hơn 20 năm kinh nghiệm sản xuất và phân phối</p>
          <p className='max-sm:text-[15px]'>
            Chúng tôi cung cấp đa dạng các nhãn hiệu nước ép trái cây, nước tăng lực, bia
          </p>
        </div>
      </div>
      <ProductList />
    </div>
  )
}
