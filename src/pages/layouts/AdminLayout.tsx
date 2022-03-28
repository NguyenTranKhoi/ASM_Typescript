import React from 'react'
import { Outlet } from 'react-router-dom'
import AdminNav from '../../components/admin/AdminNav'
import ProductAdd from '../ProductAdd'

type Props = {}

const AdminLayout = (props: Props) => {
    const handleAdd = (data: any) => {
        //hàm add
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
                    </div>
                </main>
            </div>
        </div>
    )
}

export default AdminLayout