import React from 'react'

export default function Footer() {
  return (
    <div className='bg-[#a40707]'>
      <div className='mx-auto max-w-[1200px] px-4'>
        <div className='grid lg:grid-cols-12 text-[#f1f1f1] py-12 max-sm:gid-cols-1'>
          <div className='lg:col-span-6 max:sm:col-span-1 max-sm:text-[13px]'>
            <p className='font-bold mb-6'>Công ty cổ phần Sản xuất và Xuất nhập khẩu NAVIGO</p>
            <p className='mb-3'>
              <p className='font-bold inline-block'>Trụ sở chính:</p> Nhà số 545, đường số 8, Thôn Sáp Mai, Võng La,
              Đông Anh, Hà Nội
            </p>
            <p className='mb-3'>
              <p className='font-bold inline-block'>Nhà máy:</p> Thôn Đông, Xã Phú Minh, Huyện Sóc Sơn, Thành phố Hà Nội
            </p>
            <p className='mb-3'>
              <p className='font-bold inline-block'>Nhà máy bia:</p> Thôn Đông, Xã Phú Minh, Huyện Sóc Sơn, Thành phố Hà
              Nội
            </p>
            <div className='font-bold mb-3'>NỘI ĐỊA:</div>
            <p className='mb-3'>Tel/Zalo/Viber: 0923 145 145</p>
            <p className='mb-3'>Email: rose@abvietnam.com.vn</p>
          </div>
          <div className='col-span-2'></div>
          <div className='col-span-4 max-sm:text-[13px]'>
            <h1 className='lg:mb-2 max-sm:mb-1 font-bold'>SẢN PHẨM</h1>
            <ul className='flex flex-col lg:gap-3 max-sm:gap-1 lg:ml-2'>
              <li>Bia</li>
              <li>Nước giải khát</li>
              <li>OEM</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
