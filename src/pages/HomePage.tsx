import React, { useEffect, useState } from 'react'
import { list } from '../api/product'
import BannerHome from '../components/BannerHome'
import FooterHome from '../components/FooterHome'
import HeaderHome from '../components/HeaderHome'
import ProductFemle from '../components/ProductFemle'
import ProductInfo from '../components/ProductInfo'
import ProductMale from '../components/ProductMale'
import { ProductType } from '../types/product'

type Props = {
    product: ProductType[]
}

const HomePage = (props: Props) => {
    const [products, setproducts] = useState<ProductType[]>([])

    useEffect(() => {
        const getPD = async () => {
            const { data } = await list();
            setproducts(data)
        }
        getPD()
    }, [])
    props.product
    return (
        <div>
            <header>
                <HeaderHome />
                <BannerHome />
            </header>
            <main>
                <div className="content-top grid grid-cols-4 pt-[50px]">

                    {products.map((item) => {
                        return <div className="content-top-product border-dashed border-2 w-[310px] border-slate-400 text-center m-auto h-[370px] pt-[10px]">
                            <div className="hihi overflow-hidden">
                                <a href="#">
                                    {/* <img src="${pro.img}" width="{200}" className="hover:scale-110 duration-700 m-auto" /> */}
                                </a>
                            </div>
                            <p className="pt-[10px] text-sm text-slate-500" >{item.nameextra}</p>
                            <h4 className="text-base"><a href="/chitietsanpham/${post.id}" className="no-underline text-stone-900 hover:text-amber-700" />{item.name}</h4>
                            <div className="text">
                                <del></del>
                                <strong>{item.price}</strong>
                            </div>
                        </div>
                    })}
                </div>
                {/* <ProductMale products={product} /> */}
                <ProductFemle />
                <ProductInfo />
            </main>
            <footer>
                <FooterHome />
            </footer>
        </div>
    )
}

export default HomePage