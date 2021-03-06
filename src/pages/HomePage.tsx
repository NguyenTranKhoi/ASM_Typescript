import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { list } from '../api/product'
import BannerHome from '../components/BannerHome'
import BannerIcon from '../components/BannerIcon'
import ProductInfo from '../components/ProductInfo'
import { ProductType } from '../types/product'

type Props = {
    products: ProductType[]
}

const HomePage = (props: Props) => {
    const [products, setproducts] = useState<ProductType[]>([])
    const formatter = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
    });

    useEffect(() => {
        const getPD = async () => {
            const { data } = await list();
            setproducts(data)
        }
        getPD()
    }, [])
    return (
        <div>
            <BannerHome />
            <main>
                <h2 className="text-2xl text-center pt-[50px]">ĐỒNG HỒ NAM</h2>
                <div className="content-top grid grid-cols-4 pt-[50px] gap-[20px] mx-[40px]">
                    {products.map((item, index) => {
                        return <div className="w-full content-top-product border-dashed border-2 border-slate-300 text-center m-auto h-[370px] pt-[10px] rounded-[10px]" key={index}>
                            <div className="hihi overflow-hidden">
                                <Link to={`/products/${item._id}`}>
                                    <a href="#">
                                        <img src={`${item.img}`} width="200" className="hover:scale-110 duration-700 m-auto" />
                                    </a>
                                </Link>
                            </div>
                            <p className="pt-[10px] text-sm text-slate-500" >{item.category.name}</p>
                            <Link to={`/products/${item._id}`}>
                                <h4 className="text-lg font-semibold pt-[5px]"><a href="" className="no-underline text-stone-900 hover:text-amber-700">{item.name}</a></h4>
                            </Link>
                            <div className="text pt-[10px]">
                                <del className="pr-[15px]">{formatter.format(item.pricedrop)}</del>
                                <strong>{formatter.format(item.price)}</strong>
                            </div>
                        </div>
                    })}
                </div>
            </main>
            <BannerIcon />
            <ProductInfo />
        </div>
    )
}

export default HomePage