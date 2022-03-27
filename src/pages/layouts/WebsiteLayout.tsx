import React from 'react'
import { Outlet } from 'react-router-dom'
import BannerHome from '../../components/BannerHome'
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
                <Outlet />
            </main>
            <footer>
                footer
            </footer>
        </div>
    )
}

export default WebsiteLayout