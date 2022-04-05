import { Logout } from 'heroicons-react'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

type Props = {}

const HeaderHome = (props: Props) => {
    const navigate = useNavigate()
    const logout = () => {
        localStorage.removeItem("user")
        navigate("/")
    }
    return (
        <div>
            <div className="header">
                <div className="menu bg-neutral-900 flex justify-between fixed p-[5px] w-[100%] z-20 h-[70px]">
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
                    <div className="logo pt-[10px] mr-[125px]">
                        <a href="/"><img src="../img/logo-mona-watches-white.png" width="130" /></a>
                    </div>
                    <div className="icon pt-[5px] mr-[35px]">
                        <div className="box h-[35px] absolute top-[26%] right-[13%] translate-[-50%,-50%] bg-white rounded-[50px] p-[6px]">
                            <form className="sbox" action="/search" method="get">
                                <input className="stext border-none outline-none" type="text" name="q" placeholder="Tìm kiếm bài viết..." />
                                <a className="sbutton text-black float-right w-[40px] h-[40px] rounded-[50%] " type="submit" href="javascript:void(0);">
                                    <i className="fa fa-search" />
                                </a>
                            </form>
                        </div>
                        <div className="flex">
                            {localStorage.getItem("user") ?
                                <Link to={'/Signin'}>
                                    <div className="user flex items-center">
                                        <a href="" className="no-underline text-slate-50 hover:text-orange-500 p-[10px]">
                                            <i className="fas fa-user"></i>
                                        </a>
                                        <div onClick={() => logout()} className="text-white">Logout</div>
                                    </div>
                                </Link> :
                                <Link to={'/Signin'}>
                                    <div className="pt-[10px]">
                                        <a href="" className="no-underline text-slate-50 hover:text-orange-500 p-[10px]">
                                            Signin
                                        </a>
                                    </div>
                                </Link>
                            }
                            <i className="fas fa-cart-plus text-slate-50 hover:text-orange-500 p-[10px] pt-[12px]"></i>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderHome