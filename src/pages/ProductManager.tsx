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
                    <h1 className="text-3xl font-bold text-gray-900">List Product</h1>
                </div>
            </header>
            {/* <table className="table table-bordered">
                <tbody>
                    {props.products.map((item, index) => {
                        return <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{item.name}</td>
                            <td>{item.price}</td>
                            <td>
                                <Link to={`/admin/product/${item._id}/edit`}>Edit</Link>
                                <button onClick={() => props.onRemove(item._id)}>Remove</button>
                            </td>
                        </tr>
                    })}
                </tbody>
            </table> */}

            <table className="table mt-[30px]">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Price</th>
                    </tr>
                </thead>
                <tbody>
                    {props.products.map((item, index) => {
                        return <tr key={index}>
                            <th scope="row">{index + 1}</th>
                            <td>{item.name}</td>
                            <td>{item.price}</td>
                            <td>
                                <Link to={`/admin/product/${item._id}/edit`}>
                                    <button type="button" className="btn btn-warning bg-yellow-400 mr-[20px]">Edit</button>
                                </Link>
                                <button onClick={() => props.onRemove(item._id)} type="button" className="btn btn-danger bg-red-600">Remove</button>
                            </td>
                        </tr>
                    })}
                </tbody>
            </table>

        </div>
    )
}

export default ProductManager