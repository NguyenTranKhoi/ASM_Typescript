import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { read } from '../api/product';
import { ProductType } from '../types/product';
import { SubmitHandler, useForm } from 'react-hook-form'
import { addcart } from '../api/cart';
import toastr from 'toastr'
import 'toastr/build/toastr.min.css'

type Props = {}

type FormInput = {
    quantiny: number,
    color: string,
    size: string
}
const ProductDetail = (props: Props) => {
    const { register, handleSubmit, formState: { errors } } = useForm<FormInput>()
    const [count, setcount] = useState(1)
    const { id } = useParams();
    const navigate = useNavigate()
    const [product, setProduct] = useState<ProductType>();

    const formatter = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
    });

    useEffect(() => {
        const getProduct = async () => {
            const { data } = await read(id);
            console.log(product)
            setProduct(data);
        };
        getProduct();
    }, [])

    const onSubmit: SubmitHandler<FormInput> = data => {
        const newdata = {
            ...data,
            name: product?.name,
            price: product?.price,
            img: product?.img,
            user: JSON.parse(localStorage.getItem("user") as string).user._id
        }
        console.log(newdata)
        addcart(newdata)
        navigate("/cart/page")
        toastr.success("Thêm sản phẩm thành công")
    }

    return (
        <div>
            <div className="bg-white">
                <div className="pt-20">
                    <nav aria-label="Breadcrumb">
                        <ol role="list" className="max-w-2xl mx-auto px-4 flex items-center space-x-2 sm:px-6 lg:max-w-7xl lg:px-8">
                            <li>
                                <div className="flex items-center">
                                    <a href="/" className="mr-2 text-lg font-medium text-gray-900"> Trang chủ </a>
                                    <svg width={16} height={20} viewBox="0 0 16 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="w-4 h-5 text-gray-300">
                                        <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                                    </svg>
                                </div>
                            </li>
                            <li>
                                <div className="flex items-center">
                                    <a href="/product/page" className="mr-2 text-lg font-medium text-gray-900"> Sản phẩm </a>
                                    <svg width={16} height={20} viewBox="0 0 16 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="w-4 h-5 text-gray-300">
                                        <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                                    </svg>
                                </div>
                            </li>
                        </ol>
                    </nav>
                    {/* Image gallery */}
                    {/* Product info */}
                    <div className="max-w-2xl mx-auto pb-16 px-4 sm:px-6 lg:max-w-7xl lg:pt-10 lg:pb-24 lg:px-8 lg:grid lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8">
                        <div className="lg:col-span-2 lg:border-r lg:border-gray-300 lg:pr-8">
                            <h1 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl float-left">{product?.name}</h1>
                            <br />
                            <br />
                            <p className="pt-[10px] text-lg text-slate-500 float-left">{product?.category.name}</p>
                            <br />
                            <div className="mt-6 max-w-2xl mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-3 lg:gap-x-8 mt-[50px]">
                                <div className="hidden aspect-w-3 aspect-h-4 rounded-lg overflow-hidden lg:block">
                                    <img src={product?.img} alt="Two each of gray, white, and black shirts laying flat." className="w-full h-full object-center object-cover" />
                                </div>
                                <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
                                    <div className="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
                                        <img src={product?.img} alt="Model wearing plain black basic tee." className="w-full h-full object-center object-cover" />
                                    </div>
                                    <div className="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
                                        <img src={product?.img} alt="Model wearing plain gray basic tee." className="w-full h-full object-center object-cover" />
                                    </div>
                                </div>
                                <div className="aspect-w-4 aspect-h-5 sm:rounded-lg sm:overflow-hidden lg:aspect-w-3 lg:aspect-h-4">
                                    <img src={product?.img} alt="Model wearing plain white basic tee." className="w-full h-full object-center object-cover" />
                                </div>
                            </div>
                        </div>
                        {/* Options */}
                        <div className="mt-4 lg:mt-0 lg:row-span-3">
                            <p className="text-3xl text-gray-900">{formatter.format(product?.price)}</p>
                            {/* Reviews */}
                            <div className="mt-6">
                                <h3 className="sr-only">Reviews</h3>
                                <div className="flex items-center">
                                    <div className="flex items-center">
                                        <svg className="text-gray-900 h-5 w-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                        {/* Heroicon name: solid/star */}
                                        <svg className="text-gray-900 h-5 w-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                        {/* Heroicon name: solid/star */}
                                        <svg className="text-gray-900 h-5 w-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                        {/* Heroicon name: solid/star */}
                                        <svg className="text-gray-900 h-5 w-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                        {/* Heroicon name: solid/star */}
                                        <svg className="text-gray-200 h-5 w-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    </div>
                                    <p className="sr-only">4 out of 5 stars</p>
                                    <a href="#" className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">117 reviews</a>
                                </div>
                            </div>
                            <form className="mt-10" onSubmit={handleSubmit(onSubmit)}>
                                {/* Colors */}
                                <div>
                                    <h3 className="text-lg text-gray-900 font-medium float-left">Color</h3>
                                    <br />
                                    <fieldset className="mt-4">
                                        <legend className="sr-only">Choose a color</legend>
                                        <div className="flex items-center space-x-3">

                                            <label className="-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none ring-gray-400">
                                                <input type="radio" name="color-choice" defaultValue="Red" className="sr-only" aria-labelledby="color-choice-0-label" />
                                                <p id="color-choice-0-label" className="sr-only">Red</p>
                                                <span aria-hidden="true" className="h-8 w-8 bg-red-300 border border-black border-opacity-10 rounded-full" />
                                            </label>

                                            <label className="-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none ring-gray-400">
                                                <input type="radio" name="color-choice" defaultValue="Gray" className="sr-only" aria-labelledby="color-choice-1-label" />
                                                <p id="color-choice-1-label" className="sr-only">Gray</p>
                                                <span aria-hidden="true" className="h-8 w-8 bg-stone-400 border border-black border-opacity-10 rounded-full" />
                                            </label>

                                            <label className="-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none ring-gray-900">
                                                <input type="radio" name="color-choice" defaultValue="Black" className="sr-only" aria-labelledby="color-choice-2-label" />
                                                <p id="color-choice-2-label" className="sr-only">Black</p>
                                                <span aria-hidden="true" className="h-8 w-8 bg-gray-900 border border-black border-opacity-10 rounded-full" />
                                            </label>
                                        </div>
                                    </fieldset>
                                </div>
                                {/* Sizes */}
                                <div className="float-left pt-[30px]">
                                    <h3 className="text-lg text-gray-900 font-medium float-left">Số lượng</h3>
                                    <br />
                                    <br />
                                    <span onClick={() => setcount(count - 1)} className='p-[7px] bg-slate-700'><i className="fas fa-minus text-white"></i></span>
                                    <input className='border-1 border-slate-700 w-[50px] h-[33px] text-center' min="1" value={`${count}`} {...register('quantiny')} />
                                    <span onClick={() => setcount(count + 1)} className='p-[7px] bg-slate-700'><i className="fas fa-plus text-white"></i></span>
                                </div>
                                <div className="mt-10 pt-[100px]">
                                    <div className="flex items-center justify-between">
                                        <h3 className="text-lg text-gray-900 font-medium">Size</h3>
                                        <a href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">Size guide</a>
                                    </div>
                                    <fieldset className="mt-4">
                                        <legend className="sr-only">Choose a size</legend>
                                        <div className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4">
                                            {/* Active: "ring-2 ring-indigo-500" */}

                                            <label className="group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 bg-white shadow-sm text-gray-900 cursor-pointer">
                                                <input type="radio" name="size-choice" defaultValue="XS" className="sr-only" aria-labelledby="size-choice-1-label" />
                                                <p id="size-choice-1-label">XS</p>

                                                <div className="absolute -inset-px rounded-md pointer-events-none" aria-hidden="true" />
                                            </label>
                                            {/* Active: "ring-2 ring-indigo-500" */}
                                            <label className="group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 bg-white shadow-sm text-gray-900 cursor-pointer">
                                                <input type="radio" name="size-choice" defaultValue="S" className="sr-only" aria-labelledby="size-choice-2-label" />
                                                <p id="size-choice-2-label">S</p>

                                                <div className="absolute -inset-px rounded-md pointer-events-none" aria-hidden="true" />
                                            </label>
                                            {/* Active: "ring-2 ring-indigo-500" */}
                                            <label className="group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 bg-white shadow-sm text-gray-900 cursor-pointer">
                                                <input type="radio" name="size-choice" defaultValue="M" className="sr-only" aria-labelledby="size-choice-3-label" />
                                                <p id="size-choice-3-label">M</p>

                                                <div className="absolute -inset-px rounded-md pointer-events-none" aria-hidden="true" />
                                            </label>
                                            {/* Active: "ring-2 ring-indigo-500" */}
                                            <label className="group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 bg-white shadow-sm text-gray-900 cursor-pointer">
                                                <input type="radio" name="size-choice" defaultValue="L" className="sr-only" aria-labelledby="size-choice-4-label" />
                                                <p id="size-choice-4-label">L</p>

                                                <div className="absolute -inset-px rounded-md pointer-events-none" aria-hidden="true" />
                                            </label>
                                            {/* Active: "ring-2 ring-indigo-500" */}
                                            <label className="group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 bg-white shadow-sm text-gray-900 cursor-pointer">
                                                <input type="radio" name="size-choice" defaultValue="XL" className="sr-only" aria-labelledby="size-choice-5-label" />
                                                <p id="size-choice-5-label">XL</p>

                                                <div className="absolute -inset-px rounded-md pointer-events-none" aria-hidden="true" />
                                            </label>
                                            {/* Active: "ring-2 ring-indigo-500" */}
                                            <label className="group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 bg-white shadow-sm text-gray-900 cursor-pointer">
                                                <input type="radio" name="size-choice" defaultValue="2XL" className="sr-only" aria-labelledby="size-choice-6-label" />
                                                <p id="size-choice-6-label">2XL</p>

                                                <div className="absolute -inset-px rounded-md pointer-events-none" aria-hidden="true" />
                                            </label>
                                            {/* Active: "ring-2 ring-indigo-500" */}
                                            <label className="group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 bg-white shadow-sm text-gray-900 cursor-pointer">
                                                <input type="radio" name="size-choice" defaultValue="3XL" className="sr-only" aria-labelledby="size-choice-7-label" />
                                                <p id="size-choice-7-label">3XL</p>
                                                <div className="absolute -inset-px rounded-md pointer-events-none" aria-hidden="true" />
                                            </label>
                                        </div>
                                    </fieldset>
                                </div>
                                <button type="submit" className="mt-10 w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Add to cart</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ProductDetail