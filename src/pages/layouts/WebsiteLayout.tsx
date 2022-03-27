import React from 'react'
import { Outlet } from 'react-router-dom'
import BannerHome from '../../components/BannerHome'
import FooterHome from '../../components/FooterHome'
import HeaderHome from '../../components/HeaderHome'
import NewsProduct from '../../components/NewsProduct'

type Props = {}

const WebsiteLayout = (props: Props) => {
    return (
        <div>
            <header>
                <HeaderHome />
                <BannerHome />
            </header>
            <main>
                <NewsProduct />
            </main>
            <footer>
                <FooterHome />
            </footer>
        </div>
    )
}

export default WebsiteLayout