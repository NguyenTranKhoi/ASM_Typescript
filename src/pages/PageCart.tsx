import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getOne, read, removecart, update } from '../api/cart'
import { TypeCart } from '../types/cart'
import toastr from 'toastr'
import 'toastr/build/toastr.min.css'


type Props = {

}

const PageCart = (props: Props) => {
    const formatter = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
    });
    const [cart, setCart] = useState<TypeCart[]>([])
    const [count, setcount] = useState(1)
    const id = JSON.parse(localStorage.getItem("user") as string).user._id

    useEffect(() => {
        const getcart = async () => {
            const { data } = await read(id)
            setCart(data)
        }
        getcart()
    }, [])

    //remove cart
    const onRemoveCart = async (_id: number) => {
        const confirm = window.confirm("Bạn có muốn xoá sản phẩm này ?")
        toastr.success("Xoá sản phẩm thành công")
        if (confirm) {
            removecart(_id)
            setCart(cart.filter(item => item._id !== _id))
        }
    }

    const handleDecrease = async (id: string) => {
        // get info cart
        const { data: cartInfo } = await getOne(id);
        if (cartInfo.quantiny <= 1) {
            toastr.info("Chọn ít nhất 1 sp");
        } else {
            const { data: cartUpdate } = await update({
                ...cartInfo,
                quantiny: --cartInfo.quantiny
            });
            toastr.success("Cập nhật số lượng thành công");

            setCart(cart.map(item => item._id === cartUpdate._id ? cartUpdate : item));
        }

    }

    const handleIncrease = async (id: string) => {
        // get info cart
        const { data: cartInfo } = await getOne(id);
        const { data: cartUpdate } = await update({
            ...cartInfo,
            quantiny: ++cartInfo.quantiny
        });
        toastr.success("Cập nhật số lượng thành công");

        setCart(cart.map(item => item._id === cartUpdate._id ? cartUpdate : item));
    }

    return (
        <div className="h-screen bg-gray-200 pt-[80px] h-[100%]">
            <div className="py-12">
                <div className="max-w-md mx-auto bg-gray-100 shadow-lg rounded-lg md:max-w-5xl">
                    <div className="md:flex ">
                        <div className="w-[100%] p-4 px-5 py-5">
                            <div className="md:grid md:grid-cols-3 gap-2 ">
                                <div className="col-span-2 p-5">
                                    <h1 className="text-2xl font-medium ">Giỏ hàng nè</h1>

                                    {cart.map((item) => {
                                        return <div className="flex justify-between items-center mt-6 pt-6">
                                            <div className="flex items-center">
                                                <img src={`${item.img}`} width={60} className="rounded-full " />
                                                <div className="flex flex-col ml-3">
                                                    <span className="md:text-md font-medium">{item.name}</span>
                                                    <span className="text-xs font-light text-gray-400">{ }</span>
                                                </div>
                                            </div>
                                            <div className="flex justify-center items-center">
                                                <div className="pr-8 flex ">
                                                    <span onClick={() => handleDecrease(item._id)} className='p-[3px] bg-slate-700'><i className="fas fa-minus text-white"></i></span>
                                                    <input className='border-1 border-slate-700 w-[40px] h-[30px] text-center' min="1" value={item.quantiny} />
                                                    <span onClick={() => handleIncrease(item._id)} className='p-[3px] bg-slate-700'><i className="fas fa-plus text-white"></i></span>
                                                </div>
                                                <div className="pr-8 ">
                                                    <span className="text-base font-medium">{formatter.format(item.price)}</span>
                                                </div>
                                                <div>
                                                    <button onClick={() => { onRemoveCart(item._id) }}><i className="fas fa-trash"></i></button>
                                                </div>
                                            </div>
                                        </div>
                                    })}

                                    <div className="flex justify-between items-center mt-6 pt-6 border-t">
                                        <Link to={'/product/page'}>
                                            <div className="flex items-center">
                                                <i className="fa fa-arrow-left text-sm pr-2 text-gray-600 hover:text-gray-500" />
                                                <span className="text-md font-medium text-gray-600 hover:text-gray-500">Tiếp tục mua hàng</span>
                                            </div>
                                        </Link>
                                        <div className="flex justify-center items-end">
                                            <span className="text-sm font-medium text-gray-600 mr-1">Tổng thiệt hại:</span>
                                            <span className="text-lg font-bold text-gray-800 "> $24.90</span>
                                        </div>
                                    </div>
                                </div>
                                <div className=" p-5 bg-gray-800 rounded overflow-visible">
                                    <span className="text-2xl font-medium text-gray-100 block pb-3">Thanh toán nè</span>
                                    <div className="flex justify-center flex-col pt-3">
                                        <label className="text-sm text-gray-400 ">Họ tên khách hàng *</label>
                                        <input type="text" className="focus:outline-none w-full h-6 bg-gray-800 text-white placeholder-gray-300 text-sm border-b border-gray-600 py-4" placeholder="Nhập họ tên người mua" />
                                    </div>
                                    <div className="flex justify-center flex-col pt-3">
                                        <label className="text-sm text-gray-400 ">Địa chỉ *</label>
                                        <input type="text" className="focus:outline-none w-full h-6 bg-gray-800 text-white placeholder-gray-300 text-sm border-b border-gray-600 py-4" placeholder="Nhập địa chỉ người mua" />
                                    </div>
                                    <div className="flex justify-center flex-col pt-3">
                                        <label className="text-sm text-gray-400 ">Số điện thoại *</label>
                                        <input type="text" className="focus:outline-none w-full h-6 bg-gray-800 text-white placeholder-gray-300 text-sm border-b border-gray-600 py-4" placeholder="Nhập SĐT người mua" />
                                    </div>
                                    <div className="flex justify-center flex-col pt-3">
                                        <label className="text-sm text-gray-400 ">Email *</label>
                                        <input type="text" className="focus:outline-none w-full h-6 bg-gray-800 text-white placeholder-gray-300 text-sm border-b border-gray-600 py-4" placeholder="Email" />
                                    </div>
                                    <div className="grid grid-cols-3 gap-2 pt-2 mb-3">
                                        <div className="col-span-2 ">
                                            <label className="text-sm text-gray-400">Ngày đặt sản phẩm</label>
                                            <div className="grid grid-cols-2 gap-2">
                                                <input type="text" className="focus:outline-none w-full h-6 bg-gray-800 text-white placeholder-gray-300 text-sm border-b border-gray-600 py-4" placeholder="Ngày" />
                                                <input type="text" className="focus:outline-none w-full h-6 bg-gray-800 text-white placeholder-gray-300 text-sm border-b border-gray-600 py-4" placeholder="Tháng" />
                                            </div>
                                        </div>
                                        <div>
                                            <label className="text-xs text-gray-400">Năm</label>
                                            <input type="text" className="focus:outline-none w-full h-6 bg-gray-800 text-white placeholder-gray-300 text-sm border-b border-gray-600 py-4" placeholder="XXX" />
                                        </div>
                                    </div>
                                    <button className="h-12 w-full bg-blue-500 rounded focus:outline-none text-white hover:bg-blue-600">Check Out</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default PageCart