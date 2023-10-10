import React from 'react'
import AboutImg from '../../assets/about-us.jpg'
import FactoryImg from '../../assets/factory-about.jpg'
export default function AboutUs() {
  return (
    <div className='pt-[80px]'>
      <div>
        <img src={AboutImg} alt='About Us' />
      </div>
      <div className='mt-4'>
        <div className='mx-auto max-w-[1200px] px-4'>
          <div className='lg:block max-sm:hidden'>
            <div className='grid grid-cols-10 gap-6'>
              <div className='col-span-4'>
                <img src={FactoryImg} alt='Factory About Us' />
              </div>
              <div className='col-span-4 ml-8'>
                <div className='mt-6'>
                  <h1 className='text-2xl text-[#004299] font-bold'>Về chúng tôi?</h1>
                  <p className='mt-4 leading-7 tracking-wider'>
                    Navigo là nhà phân phối và xuất khẩu độc quyền sản phẩm bia và nước giải khát của Công ty TNHH Phú
                    Thái Sơn - một trong những công ty hàng đầu tại miền Bắc, Việt Nam. Với hơn 20 năm kinh nghiệm sản
                    xuất và phân phối, chúng tôi cung cấp đa dạng các nhãn hiệu nước ép trái cây, nước tăng lực, bia...
                    theo tiêu chuẩn ISO, HACCP. Ngoài ra, chúng tôi còn tùy chỉnh và làm OEM cho các thương hiệu riêng
                    theo yêu cầu của khách hàng.
                  </p>
                </div>
              </div>
            </div>
            <div className='grid grid-cols-10 gap-6 mt-6 ml-8 mb-6'>
              <div className='col-span-4'>
                <h1 className='text-2xl text-[#004299] font-bold'>Nguồn cảm hứng</h1>
                <p className='mt-4 leading-7 tracking-wider'>
                  Lấy cảm hứng từ thành phần thiên nhiên phong phú từ khắp nơi trên đất nước, chúng tôi đã nghiên cứu và
                  phát triển sản xuất các sản phẩm đồ uống có chất lượng và hương vị tự nhiên, bổ dưỡng, cung cấp đồ
                  uống nhu cầu của người tiêu dùng Việt Nam. Sản phẩm đáp ứng xu hướng thơm ngon, bổ dưỡng, hương vị tự
                  nhiên hòa quyện với các nguyên liệu đặc trưng từ mọi vùng miền như Yến sào Nha Trang, Nha đam Ninh
                  Thuận, Dừa Bến Tre, chanh dây Đà Lạt,... . Những nguyên liệu này được các chuyên gia của chúng tôi lựa
                  chọn kỹ lưỡng dựa trên tiêu chuẩn về độ tinh khiết và giàu dinh dưỡng và đưa vào sản phẩm để phát
                  triển các dòng nước giải khát có hương vị tự nhiên, trọn vẹn. Với tất cả mong muốn mang đến cho người
                  tiêu dùng những trải nghiệm chân thực như được hòa mình vào thiên nhiên thuần khiết
                </p>
              </div>
              <div className='col-span-4'>
                <img src={FactoryImg} alt='Factory About Us' />
              </div>
            </div>
          </div>
          <div className='lg:hidden max-sm:block'>
            <div className='p-3'>
              <div className='mb-3'>
                <img src={FactoryImg} alt='Factory About Us' />
              </div>
              <h1 className='text-base text-[#004299] font-bold'>Về chúng tôi?</h1>
              <p className='mt-4 leading-7 tracking-wider'>
                Navigo là nhà phân phối và xuất khẩu độc quyền sản phẩm bia và nước giải khát của Công ty TNHH Phú Thái
                Sơn - một trong những công ty hàng đầu tại miền Bắc, Việt Nam. Với hơn 20 năm kinh nghiệm sản xuất và
                phân phối, chúng tôi cung cấp đa dạng các nhãn hiệu nước ép trái cây, nước tăng lực, bia... theo tiêu
                chuẩn ISO, HACCP. Ngoài ra, chúng tôi còn tùy chỉnh và làm OEM cho các thương hiệu riêng theo yêu cầu
                của khách hàng.
              </p>
            </div>
            <div className='bg-[#fef1e1]'>
              <div className='p-3'>
                <img src={FactoryImg} alt='Factory About Us' />
                <h1 className='text-base text-[#004299] font-bold mt-3'>Nguồn cảm hứng</h1>
                <p className='mt-4 leading-7 tracking-wider'>
                  Lấy cảm hứng từ thành phần thiên nhiên phong phú từ khắp nơi trên đất nước, chúng tôi đã nghiên cứu và
                  phát triển sản xuất các sản phẩm đồ uống có chất lượng và hương vị tự nhiên, bổ dưỡng, cung cấp đồ
                  uống nhu cầu của người tiêu dùng Việt Nam. Sản phẩm đáp ứng xu hướng thơm ngon, bổ dưỡng, hương vị tự
                  nhiên hòa quyện với các nguyên liệu đặc trưng từ mọi vùng miền như Yến sào Nha Trang, Nha đam Ninh
                  Thuận, Dừa Bến Tre, chanh dây Đà Lạt,... . Những nguyên liệu này được các chuyên gia của chúng tôi lựa
                  chọn kỹ lưỡng dựa trên tiêu chuẩn về độ tinh khiết và giàu dinh dưỡng và đưa vào sản phẩm để phát
                  triển các dòng nước giải khát có hương vị tự nhiên, trọn vẹn. Với tất cả mong muốn mang đến cho người
                  tiêu dùng những trải nghiệm chân thực như được hòa mình vào thiên nhiên thuần khiết
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
