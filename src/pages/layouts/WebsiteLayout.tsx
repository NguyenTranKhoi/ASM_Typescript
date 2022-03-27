import React from 'react'
import { Outlet } from 'react-router-dom'
import BannerHome from '../../components/BannerHome'
import FooterHome from '../../components/FooterHome'
import HeaderHome from '../../components/HeaderHome'

type Props = {}

const WebsiteLayout = (props: Props) => {
    return (
        <div>
            <header>
                <HeaderHome />
                <BannerHome />
            </header>
            <main>
            </main>
            <footer>
                <FooterHome />
            </footer>
        </div>
    )
}

export default WebsiteLayout