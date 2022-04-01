import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import { add, list } from '../../api/product'
import AdminNav from '../../components/admin/AdminNav'
import FooterAdmin from '../../components/admin/FooterAdmin'
import { ProductType } from '../../types/product'
import ProductAdd from '../ProductAdd'
import ProductManager from '../ProductManager'

type Props = {}

const AdminLayout = (props: Props) => {
    const [products, setProducts] = useState<ProductType[]>([])

    useEffect(() => {
        const getProducts = async () => {
            const { data } = await list();
            setProducts(data);
        }
        getProducts();
    }, []);

    // const handleAdd = async (product: any) => {
    //     const { data } = await add(product);
    //     setProducts([...products, data]);
    // }
    const handleList = (data: any) => {
        console.log(data)
    }

    return (
        <div>
            <div className="min-h-full">
                <AdminNav />

                <main>
                    <Outlet />
                </main>
                <FooterAdmin />
            </div>
        </div>
    )
}

export default AdminLayout