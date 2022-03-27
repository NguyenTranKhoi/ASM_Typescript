import React from 'react'
import { Outlet } from 'react-router-dom'
import BannerHome from '../../components/BannerHome'
import FooterHome from '../../components/FooterHome'
import HeaderHome from '../../components/HeaderHome'
import ProductFemle from '../../components/ProductFemle'
import ProductInfo from '../../components/ProductInfo'
import ProductMale from '../../components/ProductMale'


type Props = {}

const WebsiteLayout = (props: Props) => {
    return (
        <div>
            <header>
                <HeaderHome />
                <BannerHome />
            </header>
            <main>
                {/* Sản phẩm nam */}
                <ProductMale />
                {/* Sản phẩm nữ */}
                <ProductFemle />
                {/* Thông tin sản phẩm */}
                <ProductInfo />
            </main>
            <footer>
                <FooterHome />
            </footer>
        </div>
    )
}

export default WebsiteLayout