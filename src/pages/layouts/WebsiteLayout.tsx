import React from 'react'
import { Outlet } from 'react-router-dom'
import BannerHome from '../../components/BannerHome'
import FooterHome from '../../components/FooterHome'
import HeaderHome from '../../components/HeaderHome'
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
                <ProductMale />
            </main>
            <footer>
                <FooterHome />
            </footer>
        </div>
    )
}

export default WebsiteLayout