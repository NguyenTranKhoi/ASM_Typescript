import React from 'react'
import BannerHome from '../components/BannerHome'
import FooterHome from '../components/FooterHome'
import HeaderHome from '../components/HeaderHome'
import ProductFemle from '../components/ProductFemle'
import ProductInfo from '../components/ProductInfo'
import ProductMale from '../components/ProductMale'

type Props = {}

const HomePage = (props: Props) => {
    return (
        <div>
            <header>
                <HeaderHome />
                <BannerHome />
            </header>
            <main>
                <ProductMale products={[]} />
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