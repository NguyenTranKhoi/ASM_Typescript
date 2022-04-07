import React from 'react'
import { Link } from 'react-router-dom'
import { TypeCategory } from '../types/category'

type CategoryManagerProps = {
    categorys: TypeCategory[]
    onRemoveCt: (_id: number) => void
}

const CategoryManager = (props: CategoryManagerProps) => {
    return (
        <div>
            <header className="bg-white shadow">
                <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold text-gray-900">List Category</h1>
                </div>
            </header>

            <table className="table mt-[30px]">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
                    </tr>
                </thead>
                <tbody>
                    {props.categorys.map((item, index) => {
                        return <tr key={index}>
                            <th scope="row">{index + 1}</th>
                            <td>{item.name}</td>
                            <td>
                                <Link to={`/admin/product/${item._id}/edit`}>
                                    <button type="button" className="btn btn-warning bg-yellow-400 mr-[20px]">Edit</button>
                                </Link>
                                <button onClick={() => props.onRemoveCt(item._id)} type="button" className="btn btn-danger bg-red-600">Remove</button>
                            </td>
                        </tr>
                    })}
                </tbody>
            </table>

        </div>
    )
}

export default CategoryManager