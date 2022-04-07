import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

type AddCategoryProps = {
    onAddCategory: (category: FormData) => void
}

type FormData = {
    name: string
}

const AddCategory = (props: AddCategoryProps) => {
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>()
    const navigate = useNavigate()
    const onSubmit: SubmitHandler<FormData> = data => {
        props.onAddCategory(data)
        navigate('/admin/category')
    }
    return (
        <div>
            <header className="bg-white shadow">
                <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold text-gray-900">Add Category</h1>
                </div>
            </header>
            <div className="w-[500px] mt-[50px] mx-auto">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Name Category</label>
                        <input type="text" className="form-control" {...register('name', { required: true })} placeholder="Tên danh mục" />
                    </div>
                    <br />
                    <button type="submit" className="btn btn-primary w-[100%] bg-indigo-500">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default AddCategory