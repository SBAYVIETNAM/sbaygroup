
import Image from 'next/image'
import * as Icon from 'react-feather';
import Link from 'next/link';
export default function Footer() {
    return (
        <>
            {/* DV CHÍNH */}
            <footer className="footer grid-rows-1 pl-10 bg-cyan-50 text-xl">
                <span className="footer-title">DỊCH VỤ VÉ MÁY BAY</span>
            </footer>

            <footer className="footer grid-rows-1 px-10 pb-10 mt--10 bg-cyan-50">
                <div>
                    <span className="footer-title">Văn Phòng chính thức</span>
                    <div>
                        <p className='font-bold'>Văn phòng Hà Nội</p>
                        <p className='text-xs'>Số A3012, Tòa nhà Tứ Hiệp Plaza - KĐT Pháp Vân - Tp Hà Nội (Cổng bệnh viện Nội Tiết Trung Ương)</p>
                    </div>
                    <div>
                        <p className='font-bold'>Văn phòng Đà Nẵng</p>
                        <p className='text-xs'>Khách sạn Sbay hotel Đà Nẵng, Số 3 - Đinh Thị Hoà - Q. Sơn Trà - Tp Đà Nẵng</p>
                    </div>
                    <div>
                        <p className='font-bold'>Văn phòng Quảng Ngãi</p>
                        <p className='text-xs'>Số 463 đường Võ Nguyên Giáp, Tp Quảng Ngãi, T Quảng Ngãi</p>
                    </div>

                </div>
                <div>
                    <span className="footer-title">Đại lý/chi nhánh miền Bắc</span>
                    <div>
                        <p className='font-bold'>Bắc Giang</p>
                        <p className='text-xs'>Tam Tầng - Quang Châu - Việt Yên - Bắc Giang</p>
                    </div>
                    <div>
                        <p className='font-bold'>Bắc Ninh</p>
                        <p className='text-xs'>Khu 8 - đường Nguyễn Quyền - P Suối Hoa - Tp Bắc Ninh</p>
                    </div>
                    <div>
                        <p className='font-bold'>Nội Bài</p>
                        <p className='text-xs'>Km 6 - QL2 - Phú Cường - Sóc Sơn - Hà Nội</p>
                    </div>
                    <div>
                        <p className='font-bold'>Hưng Yên</p>
                        <p className='text-xs'>Số 152 đường Thảo Nguyên - KĐT Ecopark - Văn Giang -  Hưng Yên</p>
                    </div>
                    <div>
                        <p className='font-bold'>Vĩnh Phúc</p>
                        <p className='text-xs'>Tam Hồng - Yên Lạc - Vĩnh Phúc</p>
                    </div>
                    <div>
                        <p className='font-bold'>Phú Thọ</p>
                        <p className='text-xs'>Số 13 Thành Công - P Thọ Sơn - Tp Việt Trì - Phú Thọ</p>
                    </div>
                    <div>
                        <p className='font-bold'>Hòa Bình</p>
                        <p className='text-xs'>Tổ 6 Phường Thống Nhất - Tp Hoà Bình - T Hoà Bình</p>
                    </div>
                    <div>
                        <p className='font-bold'>Thái Bình</p>
                        <p className='text-xs'>Bình Minh, Kiến Xương, Thái Bình</p>
                    </div><div>
                        <p className='font-bold'>Bắc Kạn</p>
                        <p className='text-xs'>Số 299 Trường Chinh - Tp Bắc Kạn - Tỉnh Bắc Kạn</p>
                    </div>
                </div>
                <div>
                    <span className="footer-title">Đại lý/chi nhánh miền Nam</span>
                    <div>
                        <p className='font-bold'>Thủ Đức</p>
                        <p className='text-xs'>Số 42/112 đường Tây Hoà - Tp Thủ Đức - Hồ Chí Minh</p>
                    </div>
                    <div>
                        <p className='font-bold'>Bình Dương</p>
                        <p className='text-xs'>Số 86, Khu phố Bình Đức 3. P Bình Hòa - TP Thuận An - Bình Dương</p>
                    </div>
                    <div>
                        <p className='font-bold'>Cần Thơ</p>
                        <p className='text-xs'>A10 - Đường 7B, KĐT Nam Cần Thơ - Q. Cái Răng - TP Cần Thơ</p>
                    </div>
                    <div>
                        <p className='font-bold'>Hậu Giang</p>
                        <p className='text-xs'>84 Nguyễn Huệ - Tp. Ngã Bảy - Hậu Giang</p>
                    </div>
                    <div>
                        <p className='font-bold'>Kiên Giang</p>
                        <p className='text-xs'>Đường 3/2, P Vĩnh Lạc - Tp Rạch Giá - Kiên Giang</p>
                    </div>
                </div>
                <div>
                    <span className="footer-title">Đại lý/chi nhánh miền Trung</span>
                    <div>
                        <p className='font-bold'>Nghệ An</p>
                        <p className='text-xs'>Quốc lộ 48A - Diễn Yên - Diễn Châu - Nghệ An</p>
                    </div>
                    <div>
                        <p className='font-bold'>Quảng Ngãi</p>
                        <p className='text-xs'>463 đường Võ Nguyên Giáp, P. Trương Quang Trọng, TP.Quảng Ngãi, tỉnh Quảng Ngãi</p>
                    </div>
                </div>
            </footer>
            {/* DV KHAC */}
            <footer className="footer grid-rows-1 pl-10 pt-10 bg-sky-500 text-cyan-50 text-xl">
                <span className="footer-title">DỊCH VỤ KHÁC</span>
            </footer>

            <footer className="footer grid-rows-1 px-10 pb-10 mt--10  bg-sky-500 text-cyan-50 justify-between ...">
                <div>
                    <span className="footer-title">Khách sạn Đà Nẵng</span>
                    <div>
                        <p className=''>Standard Double</p>
                    </div>
                    <div>
                        <p className=''>Superior Double</p>
                    </div>
                    <div>
                        <p className=''>Superior Twin</p>
                    </div>
                    <div>
                        <p className=''>Superior Triple</p>
                    </div>
                    <div>
                        <p className=''>Deluxe Double</p>
                    </div>
                    <div>
                        <p className=''>Deluxe Triple</p>
                    </div>
                </div>
                <div>
                    <span className="footer-title">Xe cho thuê</span>
                    <div>
                        <p className=''>Xe 5 chỗ</p>
                    </div>
                    <div>
                        <p className=''>Xe 7 chỗ</p>
                    </div>
                    <div>
                        <p className=''>Xe 14 chỗ</p>
                    </div>
                </div>
                <div>
                    <span className="footer-title">Vé Bà Nà</span>

                    <div>
                        <p className=''>Vé cáp treo</p>
                    </div>
                    <div>
                        <p className=''>Vé combo Cáp treo và Buffet</p>
                    </div>
                    <div>
                        <p className=''>Khách Việt Nam</p>
                    </div>
                    <div>
                        <p className=''>Khách Quốc Tế</p>
                    </div>
                    <div>
                        <p className=''>Khách Đà Nẵng</p>
                    </div>
                </div>
                <div>
                    <span className="footer-title">Khác</span>
                    <div>
                        <p className=''>Đặt Tuor Du Lịch</p>
                    </div>
                    <div>
                        <p className=''>Đặt xe khách</p>
                    </div>
                </div>
            </footer>
            {/* LIEN HE */}
            <footer className="footer grid-rows-1 p-10 bg-sky-700 text-cyan-50 justify-between ...">
                <div>
                    <Image src={'/img/sbay-w-r.png'} width={100} height={30} alt={'Sbay group logo'} className=' rounded-md'></Image>
                    <p className='font-bold text-lg'>CÔNG TY CỔ PHẦN SBAY VIỆT NAM</p>
                    <p className="py-3 text-sm">
                        Sbay Việt Nam hiện đang sở hữu hệ thống chuỗi <br />
                        hơn 500 văn phòng trực thuộc đồng bộ thương hiệu, hơn 8.000 đại lý, <br />
                        phòng vé liên kết phủ khắp 64 tỉnh thành tại Việt Nam.</p>
                    <span className="footer-title">Liên hệ</span>
                    <p className='flex flex-row text-slate-200'><Icon.Phone className='w-4 h-4 mr-2' />Hotline (24h): 0967 041 900</p>
                    <p className='flex flex-row text-slate-200'><Icon.MapPin className='w-4 h-4 mr-2' />Địa chỉ trụ sở chính: Số 3 Đinh Thị Hòa, Sơn Trà, Đà Nẵng</p>
                    <p className='flex flex-row text-slate-200'><Icon.Mail className='w-4 h-4 mr-2' />Email: hanhchinh.sbay@gmail.com</p>

                </div>
                <div>
                    <span className="footer-title">Về chúng tôi</span>

                    <p className="link link-hover">Giới thiệu</p>
                    <p className="link link-hover">Tin tức</p>
                    <p className="link link-hover">Tuyển dụng</p>
                </div>
                <div>
                    <span className="footer-title">Hỗ trợ</span>
                    <p className="link link-hover">Hướng dẫn đặt vé</p>
                    <p className="link link-hover">Hướng dẫn thanh toán</p>
                    <p className="link link-hover">Hướng dẫn giao vé</p>
                    <p className="link link-hover">Chính sách bảo mật</p>
                    <p className="link link-hover">Điều khoản điều kiện</p>
                </div>
                <div>
                    <span className="footer-title">Social</span>

                    <div className="grid grid-flow-col gap-4">
                        <Link href='https://www.facebook.com/sbaygroup247/'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current" ><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></Link>
                        <Link href='https://www.youtube.com/channel/UCenzcf6Qq0v4SZb2Eex2PKw'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></Link>
                    </div>
                </div>
            </footer>
            {/* BAN QUYEN */}
            <footer className="footer px-10 py-4 border-t bg-sky-900 text-cyan-50">
                <div className=' w-full flex justify-between ...'>
                    <div className="flex flex-col">
                        <p className='text-xs'>Bản quyền của SBAY VIETNAM ® 2007. Bảo lưu mọi quyền.</p>
                        <p className='text-xs'>Ghi rõ nguồn <strong>SBAY VIETNAM</strong> khi sử dụng lại thông tin từ website này.</p>
                        <p className='text-xs'>Số ĐKKD: 0102249980</p>
                    </div>
                    <div className='flex flex-row space-x-3 mr-5'>
                        <Image src={'/img/visa.png'} width={50} height={50} alt={'Thanh toán trả góp thẻ Visa'} className=' rounded-md'></Image>
                        <Image src={'/img/mastercard.png'} width={50} height={50} alt={'Thanh toán trả góp thẻ MasterCard'} className=' rounded-md'></Image>
                    </div>

                </div>

            </footer>
        </>
    )
}