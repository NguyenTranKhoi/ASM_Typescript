import React from 'react'

type Props = {}

const ContactPage = (props: Props) => {
    return (
        <div>
            <main className="info_connect">
                <div className="box-item" />
                <div className="container_main w-[1160px] m-auto flex justify-between pt-[120px]">
                    <div className="main_part">
                        <div className="left_main">
                            <h2 className="pr-[330px] font-semibold" style={{ color: '#777', fontSize: 25 }}>THÔNG TIN LIÊN HỆ</h2>
                            <p className="pr-[243px] pt-[8px]" style={{ color: '#777' }}>Địa chỉ: Cao Đẳng FPT Polytechnich - Hà Nội</p>
                            <p className="pr-[410px] pt-[8px]" style={{ color: '#777' }}>Hotline: 0983416384</p>
                            <p className="pr-[430px] pt-[8px]" style={{ color: '#777' }}>Zalo: 0983416384</p>
                            <p className="pr-[353px] pt-[8px]" style={{ color: '#777' }}>Email :khoidolce@gmail.com</p>
                            <div className="info_item mt-[32px]">
                                <h2 className="pr-[340px] font-semibold" style={{ color: '#777', fontSize: 20 }}>LIÊN HỆ VỚI CHÚNG TÔI</h2>
                                <div className="box-item2 w-[225px] h-[2px] bg-black opacity-40" />
                            </div>
                        </div>
                        {/* left_main */}
                        <div className="bottom_info mt-[36px]">
                            <form action="">
                                <input type="text" placeholder="Nhập tên của bạn" className="bg-slate-50 p-[5px] rounded-[20px] w-[530px] border-none outline-none mb-[20px] pl-[15px] text-base border-solid border-[2px] border-current" />
                                <br />
                                <input type="text" placeholder="Email của bạn" className=" bg-slate-50 p-[5px] rounded-[20px] w-[530px] border-none outline-none mb-[20px] pl-[15px] text-base border-solid border-[2px] border-current" />
                                <br />
                                <input type="text" placeholder="Số điện thoại" className=" bg-slate-50 p-[5px] rounded-[20px] w-[530px] border-none outline-none mb-[20px] pl-[15px] text-base border-solid border-[2px] border-current" />
                                <br />
                                <textarea cols={30} rows={10} placeholder="Nội dung" className=" bg-slate-50 p-[5px] rounded-[20px] w-[530px] border-none outline-none mb-[20px] pl-[15px] text-base border-solid border-[2px] border-current h-[110px]" defaultValue={""} />
                                <br />
                                <button className="float-left rounded-[20px] py-[8px] px-[25px] border-none mt-[10px] bg-red-600 text-white hover:bg-red-500">Gửi</button>
                            </form>

                        </div>
                        {/* bottom_info */}
                    </div>
                    {/* main_part */}
                    <div className="extra_info">
                        <div className="map_info">
                            <iframe width={600} height={600} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.128603932329!2d106.67734331480098!3d10.801460992304534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175298ed44048e3%3A0x643d9ea357634c06!2sRincoffee!5e0!3m2!1svi!2s!4v1544426810526" frameBorder={0} />
                        </div>
                    </div>
                    {/* extra_info */}
                </div>
                {/* container_main */}
            </main>
            {/* info_connect */}

        </div>
    )
}

export default ContactPage