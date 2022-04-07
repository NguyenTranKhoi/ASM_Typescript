import React, { useEffect, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'
import { readct } from '../api/category'

type EditCategoryProps = {
    onUpdateCategory: (editcategory: FormData) => void
}

type FormData = {
    name: string
}

const EditCategory = (props: EditCategoryProps) => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>()
    const navigate = useNavigate()
    const { id } = useParams()

    useEffect(() => {
        const getCategory = async () => {
            const { data } = await readct(id)
            reset(data.category)
        }
        getCategory()
    }, [])

    const onSubmit: SubmitHandler<FormData> = data => {
        props.onUpdateCategory(data)
        navigate('/admin/category')
    }

    return (
        <div>
            <header className="bg-white shadow">
                <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold text-gray-900">Edit Category</h1>
                </div>
            </header>
            <div className="w-[500px] mt-[50px] mx-auto">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Edit Category</label>
                        <input type="text" className="form-control" {...register('name', { required: true })} placeholder="Tên danh mục" />
                        {errors.name && <span>Bắt buộc phải nhập!</span>}
                    </div>
                    <br />
                    <button type="submit" className="btn btn-primary w-[100%] bg-indigo-500">Edit</button>
                </form>
            </div>
        </div>
    )
}

export default EditCategory