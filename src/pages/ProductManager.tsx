import React from 'react'
import { Link } from 'react-router-dom';
import { ProductType } from '../types/product'

type ProductManagerProps = {
    products: ProductType[];
    onRemove: (id: number) => void
}

const ProductManager = (props: ProductManagerProps) => {
    return (
        <div>
            <header className="bg-white shadow">
                <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold text-gray-900">Thống kê</h1>
                </div>
            </header>
            <table className="table table-bordered">
                <tbody>
                    {props.products.map((item, index) => {
                        return <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{item.name}</td>
                            <td>{item.price}</td>
                            <td>
                                <Link to={`/admin/product/${item.id}/edit`}>Edit</Link>
                                <button onClick={() => props.onRemove(item._id)}>Remove</button>
                            </td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default ProductManager