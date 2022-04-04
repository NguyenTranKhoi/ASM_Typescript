import React from 'react'
import { Outlet } from 'react-router-dom'
import BannerHome from '../../components/BannerHome'
import BannerIcon from '../../components/BannerIcon'
import FooterHome from '../../components/FooterHome'
import HeaderHome from '../../components/HeaderHome'
import ProductInfo from '../../components/ProductInfo'
import HomePage from '../HomePage'



type Props = {}

const WebsiteLayout = (props: Props) => {
    return (
        <div>
            <HeaderHome />
            <Outlet />
            <FooterHome />
        </div>
    )
}

export default WebsiteLayout