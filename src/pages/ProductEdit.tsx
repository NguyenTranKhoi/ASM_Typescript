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
        <div>
            <form action="" onSubmit={handleSubmit(onSubmit)}>
                <input type="text" {...register('name', { required: true })} />
                {errors.name && <span>Bắt buộc phải nhập!</span>}
                <input type="number" {...register('price', { required: true })} />
                {errors.price && <span>Bắt buộc phải nhập!</span>}
                <button>Sửa</button>
            </form>
        </div>
    )
}

export default ProductEdit