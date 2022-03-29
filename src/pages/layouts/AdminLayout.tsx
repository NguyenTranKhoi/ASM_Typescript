import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import { add, list } from '../../api/product'
import AdminNav from '../../components/admin/AdminNav'
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

    const handleAdd = async (product: any) => {
        const { data } = await add(product);
        // setProducts([...products, data]);
        console.log(data)
    }
    const handleList = (data: any) => {
        console.log(data)
    }

    return (
        <div>
            <div className="min-h-full">
                <AdminNav />
                <header className="bg-white shadow">
                    <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
                    </div>
                </header>
                <main>
                    <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                        <ProductAdd onAdd={handleAdd} />
                        <ProductManager onRemove={handleList} products={products} />
                    </div>
                </main>
            </div>
        </div>
    )
}

export default AdminLayout