import React, { useEffect } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'
import { read } from '../api/product'
import { ProductType } from '../types/product'
import toastr from 'toastr'
import 'toastr/build/toastr.min.css'
import axios from 'axios'

type ProductEditProps = {
    onUpdate: (product: ProductType) => void
}
type formInputs = {
    img: string,
    name: string,
    nameextra: string,
    pricedrop: number,
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

    let imgUpdate = ""

    const onSubmit: SubmitHandler<formInputs> = async data => {
        try {
            props.onUpdate(data)
            navigate("/admin/product");
            toastr.success("Sửa thành công")
        } catch (error) {
            toastr.error("Lỗi khi sửa")
        }
        if (data.img[0] != 'h') {
            const file = data.img[0]
            const formData = new FormData()

            formData.append("file", file)
            formData.append("upload_preset", "zmppimam")
            const { data: newimg } = await axios({
                url: "https://api.cloudinary.com/v1_1/dqd4urvf6/image/upload",
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-endcoded",
                }, data: formData,
            })
            imgUpdate = newimg.url
            data.img = imgUpdate
            console.log(data.img)
        }
    }

    return (
        <div>
            <header className="bg-white shadow">
                <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold text-gray-900">Edit Product</h1>
                </div>
            </header>
            <div className="w-[500px] mt-[50px] mx-auto">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Image</label>
                        <input type="file" className="form-control" {...register('img', { required: true })} placeholder="Tên sản phẩm" />
                        {errors.name && <span>Bắt buộc phải nhập!</span>}
                    </div>
                    <br />
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Nameextra</label>
                        <input type="text" className="form-control" {...register('nameextra', { required: true })} placeholder="Tên sản phẩm" />
                        {errors.name && <span>Bắt buộc phải nhập!</span>}
                    </div>
                    <br />
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Add Products</label>
                        <input type="text" className="form-control" {...register('name', { required: true })} placeholder="Tên sản phẩm" />
                        {errors.name && <span>Bắt buộc phải nhập!</span>}
                    </div>
                    <br />
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Price Drop</label>
                        <input type="text" className="form-control" {...register('pricedrop', { required: true })} placeholder="Giá sản phẩm" />
                        {errors.price && <span>Bắt buộc phải nhập!</span>}
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
        </div>

    )
}

export default ProductEdit