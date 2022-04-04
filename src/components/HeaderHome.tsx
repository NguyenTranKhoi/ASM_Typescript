import React from 'react'
import { Link } from 'react-router-dom'

type Props = {}

const HeaderHome = (props: Props) => {
    return (
        <div>
            <div className="header">
                <div className="menu bg-neutral-900 flex justify-between fixed p-[5px] w-[100%] z-[3] h-[70px]">
                    <nav>
                        <ul>
                            <li className="inline-block p-[10px] pt-[15px]"><a href="/introduct/page"
                                className="no-underline text-slate-50 hover:text-orange-500">GIỚI THIỆU</a></li>
                            <li className="inline-block p-[10px] pt-[15px]"><a href="/product/page"
                                className="no-underline text-slate-50 hover:text-orange-500">SẢN PHẨM</a></li>
                            <li className="inline-block p-[10px] pt-[15px]"><a href="/contact/page"
                                className="no-underline text-slate-50 hover:text-orange-500">LIÊN HỆ</a></li>
                        </ul>
                    </nav>
                    <div className="logo pt-[10px] mr-[60px]">
                        <a href="/"><img src="../img/logo-mona-watches-white.png" width="130" /></a>
                    </div>
                    <div className="icon pt-[5px] mr-[35px]">
                        <i className="fas fa-search text-slate-50 hover:text-orange-500 p-[10px]"></i>
                        <Link to={'/Signin'}>
                            <a href="" className="no-underline text-slate-50 hover:text-orange-500 p-[10px]">
                                Đăng nhập
                            </a>
                        </Link>

                        <i className="fas fa-cart-plus text-slate-50 hover:text-orange-500 p-[10px]"></i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderHome