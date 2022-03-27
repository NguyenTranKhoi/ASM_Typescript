import React from 'react'

type Props = {}

const FooterHome = (props: Props) => {
    return (
        <div>
            <div className="footter bg-neutral-900 grid grid-cols-3 p-[70px] mt-[70px]">
                <div className="footter-left">
                    <h3 className="text-white pl-[40px]">ĐIỀU HƯỚNG</h3>
                </div>
                <div className="footter-center text-center">
                    <div className="footter-center-logo">
                        <img src="../img/logo-mona-watches-white.png" className="line2 w-[200px] m-auto" />
                    </div>
                    <div className="footter-center-text">
                        <p className="text-white pt-[10px] text-base">Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                            sed diam
                            nonummy
                            nibh euismod tincidunt
                            ut
                            laoreet ...</p>
                    </div>
                    <div className="footter-center-search">
                        <form>
                            <input type="text" placeholder="Email..." className="rounded-[15px] border-none p-[5px] w-[250px] outline-none" />
                            <button className="rounded-[15px] border-none p-[5px] w-[40px] outline-none bg-white">--&gt;</button>
                        </form>
                    </div>
                    <div className="footter-center-content">
                        <p className="text-white pt-[20px]">© All rights reserved. Thiết kế website</p>
                    </div>
                </div>
                <div className="footter-right pl-[180px]">
                    <h3 className="text-white text-xl">THÔNG TIN LIÊN HỆ</h3>
                    <p className="text-white text-base">319 c16 Lý Thường Kiệt, Phường 15, Quận 11, Tp.HCM</p>
                    <h4 className="pt-[10px] text-lg"><a className="text-white no-underline">0983 416 384</a></h4>
                    <h4 className="pt-[10px] text-lg"><a className="text-white no-underline">khointph15388@fpt.edu.vn</a>
                    </h4>
                </div>
            </div>


        </div>
    )
}

export default FooterHome