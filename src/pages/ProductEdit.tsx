import React, { useEffect } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'
import { read } from '../api/product'
import { ProductType } from '../types/product'

type ProductEditProps = {
    onUpdate: (product: ProductType) => void
}
type formInputs = {
    name: string,
    price: number
}

const ProductEdit = (props: ProductEditProps) => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm<formInputs>();
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const getProduct = async () => {
            const { data } = await read(id);
            reset(data);
        }
        getProduct();
    }, []);

    const onSubmit: SubmitHandler<formInputs> = data => {
        props.onUpdate(data)
        navigate("/admin/product");
    }

    return (
        <div className="w-[500px] mt-[50px] mx-auto">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Add Products</label>
                    <input type="text" className="form-control" {...register('name', { required: true })} placeholder="Tên sản phẩm" />
                    {errors.name && <span>Bắt buộc phải nhập!</span>}
                </div>
                <br />
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Price Product</label>
                    <input type="text" className="form-control" {...register('price', { required: true })} placeholder="Giá sản phẩm" />
                    {errors.price && <span>Bắt buộc phải nhập!</span>}
                </div>
                <br />
                <button type="submit" className="btn btn-primary w-[100%] bg-indigo-500">Edit</button>
            </form>
        </div>
    )
}

export default ProductEdit