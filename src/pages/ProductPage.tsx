import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { list } from '../api/product'
import { TypeCategory } from '../types/category'
import { ProductType } from '../types/product'

type Props = {
    products: ProductType[]
    categorys: TypeCategory[]
}

const ProductPage = (props: Props) => {
    const [products, setproducts] = useState<ProductType[]>([])
    const formatter = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
    });

    useEffect(() => {
        const getPD = async () => {
            const { data } = await list();
            setproducts(data)
        }
        getPD()
    }, [])
    return (
        <div className="bg-white">
            <div>
                <div className="fixed inset-0 flex z-40 lg:hidden" role="dialog" aria-modal="true">
                    <div className="fixed inset-0 bg-black bg-opacity-25" aria-hidden="true" />
                    <div className="ml-auto relative max-w-xs w-full h-full bg-white shadow-xl py-4 pb-12 flex flex-col overflow-y-auto">
                        <div className="px-4 flex items-center justify-between">
                            <h2 className="text-lg font-medium text-gray-900">Filters</h2>
                            <button type="button" className="-mr-2 w-10 h-10 bg-white p-2 rounded-md flex items-center justify-center text-gray-400">
                                <span className="sr-only">Close menu</span>
                                {/* Heroicon name: outline/x */}
                                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        {/* Filters */}
                        <form className="mt-4 border-t border-gray-200">
                            <h3 className="sr-only">Categories</h3>
                            <ul role="list" className="font-medium text-gray-900 px-2 py-3">
                                <li>
                                    <a href="#" className="block px-2 py-3"> hi </a>
                                </li>
                                <li>
                                    <a href="#" className="block px-2 py-3"> Backpacks </a>
                                </li>
                                <li>
                                    <a href="#" className="block px-2 py-3"> Travel Bags </a>
                                </li>
                                <li>
                                    <a href="#" className="block px-2 py-3"> Hip Bags </a>
                                </li>
                                <li>
                                    <a href="#" className="block px-2 py-3"> Laptop Sleeves </a>
                                </li>
                            </ul>
                            <div className="border-t border-gray-200 px-4 py-6">
                                <h3 className="-mx-2 -my-3 flow-root">
                                    {/* Expand/collapse section button */}
                                    <button type="button" className="px-2 py-3 bg-white w-full flex items-center justify-between text-gray-400 hover:text-gray-500" aria-controls="filter-section-mobile-0" aria-expanded="false">
                                        <span className="font-medium text-gray-900"> Color </span>
                                        <span className="ml-6 flex items-center">
                                            <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
                                            </svg>
                                            <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                <path fillRule="evenodd" d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z" clipRule="evenodd" />
                                            </svg>
                                        </span>
                                    </button>
                                </h3>
                                {/* Filter section, show/hide based on section state. */}
                                <div className="pt-6" id="filter-section-mobile-0">
                                    <div className="space-y-6">
                                        <div className="flex items-center">
                                            <input id="filter-mobile-color-0" name="color[]" defaultValue="white" type="checkbox" className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500" />
                                            <label htmlFor="filter-mobile-color-0" className="ml-3 min-w-0 flex-1 text-gray-500"> White </label>
                                        </div>
                                        <div className="flex items-center">
                                            <input id="filter-mobile-color-1" name="color[]" defaultValue="beige" type="checkbox" className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500" />
                                            <label htmlFor="filter-mobile-color-1" className="ml-3 min-w-0 flex-1 text-gray-500"> Beige </label>
                                        </div>
                                        <div className="flex items-center">
                                            <input id="filter-mobile-color-2" name="color[]" defaultValue="blue" type="checkbox" defaultChecked className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500" />
                                            <label htmlFor="filter-mobile-color-2" className="ml-3 min-w-0 flex-1 text-gray-500"> Blue </label>
                                        </div>
                                        <div className="flex items-center">
                                            <input id="filter-mobile-color-3" name="color[]" defaultValue="brown" type="checkbox" className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500" />
                                            <label htmlFor="filter-mobile-color-3" className="ml-3 min-w-0 flex-1 text-gray-500"> Brown </label>
                                        </div>
                                        <div className="flex items-center">
                                            <input id="filter-mobile-color-4" name="color[]" defaultValue="green" type="checkbox" className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500" />
                                            <label htmlFor="filter-mobile-color-4" className="ml-3 min-w-0 flex-1 text-gray-500"> Green </label>
                                        </div>
                                        <div className="flex items-center">
                                            <input id="filter-mobile-color-5" name="color[]" defaultValue="purple" type="checkbox" className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500" />
                                            <label htmlFor="filter-mobile-color-5" className="ml-3 min-w-0 flex-1 text-gray-500"> Purple </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="border-t border-gray-200 px-4 py-6">
                                <h3 className="-mx-2 -my-3 flow-root">
                                    {/* Expand/collapse section button */}
                                    <button type="button" className="px-2 py-3 bg-white w-full flex items-center justify-between text-gray-400 hover:text-gray-500" aria-controls="filter-section-mobile-1" aria-expanded="false">
                                        <span className="font-medium text-gray-900"> Category </span>
                                        <span className="ml-6 flex items-center">
                                            <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
                                            </svg>
                                            <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                <path fillRule="evenodd" d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z" clipRule="evenodd" />
                                            </svg>
                                        </span>
                                    </button>
                                </h3>
                                {/* Filter section, show/hide based on section state. */}
                                <div className="pt-6" id="filter-section-mobile-1">
                                    <div className="space-y-6">
                                        <div className="flex items-center">
                                            <input id="filter-mobile-category-0" name="category[]" defaultValue="new-arrivals" type="checkbox" className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500" />
                                            <label htmlFor="filter-mobile-category-0" className="ml-3 min-w-0 flex-1 text-gray-500"> New Arrivals </label>
                                        </div>
                                        <div className="flex items-center">
                                            <input id="filter-mobile-category-1" name="category[]" defaultValue="sale" type="checkbox" className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500" />
                                            <label htmlFor="filter-mobile-category-1" className="ml-3 min-w-0 flex-1 text-gray-500"> Sale </label>
                                        </div>
                                        <div className="flex items-center">
                                            <input id="filter-mobile-category-2" name="category[]" defaultValue="travel" type="checkbox" defaultChecked className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500" />
                                            <label htmlFor="filter-mobile-category-2" className="ml-3 min-w-0 flex-1 text-gray-500"> Travel </label>
                                        </div>
                                        <div className="flex items-center">
                                            <input id="filter-mobile-category-3" name="category[]" defaultValue="organization" type="checkbox" className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500" />
                                            <label htmlFor="filter-mobile-category-3" className="ml-3 min-w-0 flex-1 text-gray-500"> Organization </label>
                                        </div>
                                        <div className="flex items-center">
                                            <input id="filter-mobile-category-4" name="category[]" defaultValue="accessories" type="checkbox" className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500" />
                                            <label htmlFor="filter-mobile-category-4" className="ml-3 min-w-0 flex-1 text-gray-500"> Accessories </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="border-t border-gray-200 px-4 py-6">
                                <h3 className="-mx-2 -my-3 flow-root">
                                    {/* Expand/collapse section button */}
                                    <button type="button" className="px-2 py-3 bg-white w-full flex items-center justify-between text-gray-400 hover:text-gray-500" aria-controls="filter-section-mobile-2" aria-expanded="false">
                                        <span className="font-medium text-gray-900"> Size </span>
                                        <span className="ml-6 flex items-center">
                                            <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
                                            </svg>
                                            <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                <path fillRule="evenodd" d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z" clipRule="evenodd" />
                                            </svg>
                                        </span>
                                    </button>
                                </h3>
                                {/* Filter section, show/hide based on section state. */}
                                <div className="pt-6" id="filter-section-mobile-2">
                                    <div className="space-y-6">
                                        <div className="flex items-center">
                                            <input id="filter-mobile-size-0" name="size[]" defaultValue="2l" type="checkbox" className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500" />
                                            <label htmlFor="filter-mobile-size-0" className="ml-3 min-w-0 flex-1 text-gray-500"> 2L </label>
                                        </div>
                                        <div className="flex items-center">
                                            <input id="filter-mobile-size-1" name="size[]" defaultValue="6l" type="checkbox" className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500" />
                                            <label htmlFor="filter-mobile-size-1" className="ml-3 min-w-0 flex-1 text-gray-500"> 6L </label>
                                        </div>
                                        <div className="flex items-center">
                                            <input id="filter-mobile-size-2" name="size[]" defaultValue="12l" type="checkbox" className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500" />
                                            <label htmlFor="filter-mobile-size-2" className="ml-3 min-w-0 flex-1 text-gray-500"> 12L </label>
                                        </div>
                                        <div className="flex items-center">
                                            <input id="filter-mobile-size-3" name="size[]" defaultValue="18l" type="checkbox" className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500" />
                                            <label htmlFor="filter-mobile-size-3" className="ml-3 min-w-0 flex-1 text-gray-500"> 18L </label>
                                        </div>
                                        <div className="flex items-center">
                                            <input id="filter-mobile-size-4" name="size[]" defaultValue="20l" type="checkbox" className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500" />
                                            <label htmlFor="filter-mobile-size-4" className="ml-3 min-w-0 flex-1 text-gray-500"> 20L </label>
                                        </div>
                                        <div className="flex items-center">
                                            <input id="filter-mobile-size-5" name="size[]" defaultValue="40l" type="checkbox" defaultChecked className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500" />
                                            <label htmlFor="filter-mobile-size-5" className="ml-3 min-w-0 flex-1 text-gray-500"> 40L </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="relative z-10 flex items-baseline justify-between pt-24 pb-6 border-b border-gray-200">
                        {/* <h1 className="text-4xl font-extrabold tracking-tight text-gray-900">Products</h1> */}
                        <nav aria-label="Breadcrumb">
                            <ol role="list" className="max-w-2xl mx-auto px-4 flex items-center space-x-2 sm:px-6 lg:max-w-7xl lg:px-8">
                                <li>
                                    <div className="flex items-center">
                                        <a href="/" className="mr-2 text-lg font-medium text-gray-900 font-semibold text-xl"> Trang ch??? </a>
                                        <svg width={16} height={20} viewBox="0 0 16 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="w-4 h-5 text-gray-300">
                                            <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                                        </svg>
                                    </div>
                                </li>
                                <li>
                                    <div className="flex items-center">
                                        <a href="/product/page" className="mr-2 text-lg font-medium text-gray-900 font-semibold text-xl"> Ph??? ki???n </a>
                                        <svg width={16} height={20} viewBox="0 0 16 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="w-4 h-5 text-gray-300">
                                            <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                                        </svg>
                                    </div>
                                </li>
                            </ol>
                        </nav>
                        <div className="flex items-center">
                            <form className="item-select border-2 p-1 border-slate-300 rounded-[15px]">
                                <select name="" id="">
                                    <option className="text-base" value={1}>Th??? t??? m???c ?????nh</option>
                                    <option className="text-base" value={2}>Th??? t??? theo m???c ????? ph??? bi???n</option>
                                    <option className="text-base" value={3}>Th??? t??? theo ??i???m ????nh gi??</option>
                                    <option className="text-base" value={4}>Th??? t??? theo s???n ph???m m???i</option>
                                    <option className="text-base" value={5}>Th??? t??? theo gi??: th???p ?????n cao</option>
                                    <option className="text-base" value={6}>Th??? t??? theo gi??: cao xu???ng th???p</option>
                                </select>
                            </form>
                            <button type="button" className="p-2 -m-2 ml-5 sm:ml-7 text-gray-400 hover:text-gray-500">
                                <span className="sr-only">View grid</span>
                                {/* Heroicon name: solid/view-grid */}
                                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                                </svg>
                            </button>
                            <button type="button" className="p-2 -m-2 ml-4 sm:ml-6 text-gray-400 hover:text-gray-500 lg:hidden">
                                <span className="sr-only">Filters</span>
                                {/* Heroicon name: solid/filter */}
                                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z" clipRule="evenodd" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <section aria-labelledby="products-heading" className="pt-6 pb-24">
                        <h2 id="products-heading" className="sr-only">Products</h2>
                        <div className="grid grid-cols-1 lg:grid-cols-4 gap-x-8 gap-y-10">
                            {/* Filters */}
                            <form className="hidden lg:block">
                                <li className="text-xl font-semibold list-none float-left">
                                    Th????ng hi???u
                                </li>
                                <ul role="list" className="mt-[50px] text-sm font-medium text-gray-900 space-y-4 pb-6 border-b border-gray-400 mr-[180px]">
                                    <li>
                                        <a href="#">Casio</a>
                                    </li>
                                    <li>
                                        <a href="#">Citizen</a>
                                    </li>
                                    <li>
                                        <a href="#">G-Shock Baby-G</a>
                                    </li>
                                    <li>
                                        <a href="#">Louis Erard</a>
                                    </li>
                                    <li>
                                        <a href="#">Orient</a>
                                    </li>
                                </ul>
                                <div className="border-b border-gray-200 py-6">
                                    <h3 className="-my-3 flow-root">
                                        {/* Expand/collapse section button */}
                                        <button type="button" className="py-3 bg-white w-full flex items-center justify-between text-sm text-gray-400 hover:text-gray-500" aria-controls="filter-section-0" aria-expanded="false">
                                            <span className="font-medium text-gray-900 text-lg font-semibold"> M??u s???c </span>
                                            <span className="ml-6 flex items-center">
                                                <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                    <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
                                                </svg>
                                                <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                    <path fillRule="evenodd" d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z" clipRule="evenodd" />
                                                </svg>
                                            </span>
                                        </button>
                                    </h3>
                                    {/* Filter section, show/hide based on section state. */}
                                    <div className="pt-6" id="filter-section-0">
                                        <div className="space-y-4">
                                            <div className="flex items-center">
                                                <input id="filter-color-0" name="color[]" defaultValue="white" type="checkbox" className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500" />
                                                <label htmlFor="filter-color-0" className="ml-3 text-sm text-gray-600"> Black </label>
                                            </div>
                                            <div className="flex items-center">
                                                <input id="filter-color-1" name="color[]" defaultValue="beige" type="checkbox" className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500" />
                                                <label htmlFor="filter-color-1" className="ml-3 text-sm text-gray-600"> White </label>
                                            </div>
                                            <div className="flex items-center">
                                                <input id="filter-color-2" name="color[]" defaultValue="blue" type="checkbox" defaultChecked className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500" />
                                                <label htmlFor="filter-color-2" className="ml-3 text-sm text-gray-600"> Blue </label>
                                            </div>
                                            <div className="flex items-center">
                                                <input id="filter-color-3" name="color[]" defaultValue="brown" type="checkbox" className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500" />
                                                <label htmlFor="filter-color-3" className="ml-3 text-sm text-gray-600"> Gold </label>
                                            </div>
                                            <div className="flex items-center">
                                                <input id="filter-color-4" name="color[]" defaultValue="green" type="checkbox" className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500" />
                                                <label htmlFor="filter-color-4" className="ml-3 text-sm text-gray-600"> Plink </label>
                                            </div>
                                            <div className="flex items-center">
                                                <input id="filter-color-5" name="color[]" defaultValue="purple" type="checkbox" className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500" />
                                                <label htmlFor="filter-color-5" className="ml-3 text-sm text-gray-600"> Brown </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="border-b border-gray-200 py-6">
                                    <h3 className="-my-3 flow-root">
                                        {/* Expand/collapse section button */}
                                        <button type="button" className="py-3 bg-white w-full flex items-center justify-between text-sm text-gray-400 hover:text-gray-500" aria-controls="filter-section-1" aria-expanded="false">
                                            <span className="font-medium text-gray-900 text-lg font-semibold"> Danh m???c </span>
                                            <span className="ml-6 flex items-center">
                                                <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                    <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
                                                </svg>
                                                <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                    <path fillRule="evenodd" d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z" clipRule="evenodd" />
                                                </svg>
                                            </span>
                                        </button>
                                    </h3>
                                    {/* Filter section, show/hide based on section state. */}
                                    <div className="pt-6" id="filter-section-1">
                                        <div className="space-y-4">
                                            {props.categorys.map((item) => {
                                                return <div className="flex items-center">
                                                    <input id="filter-category-0" name="category[]" defaultValue="new-arrivals" type="checkbox" className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500" />
                                                    <label htmlFor="filter-category-0" className="ml-3 text-sm text-gray-600"> {item.name} </label>
                                                </div>
                                            })}
                                        </div>
                                    </div>
                                </div>
                                <div className="border-b border-gray-200 py-6">
                                    <h3 className="-my-3 flow-root">
                                        {/* Expand/collapse section button */}
                                        <button type="button" className="py-3 bg-white w-full flex items-center justify-between text-sm text-gray-400 hover:text-gray-500" aria-controls="filter-section-2" aria-expanded="false">
                                            <span className="font-medium text-gray-900 text-lg font-semibold"> K??ch c??? </span>
                                            <span className="ml-6 flex items-center">
                                                <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                    <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
                                                </svg>
                                                <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                    <path fillRule="evenodd" d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z" clipRule="evenodd" />
                                                </svg>
                                            </span>
                                        </button>
                                    </h3>
                                    {/* Filter section, show/hide based on section state. */}
                                    <div className="pt-6" id="filter-section-2">
                                        <div className="space-y-4">
                                            <div className="flex items-center">
                                                <input id="filter-size-0" name="size[]" defaultValue="2l" type="checkbox" className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500" />
                                                <label htmlFor="filter-size-0" className="ml-3 text-sm text-gray-600"> 2L </label>
                                            </div>
                                            <div className="flex items-center">
                                                <input id="filter-size-1" name="size[]" defaultValue="6l" type="checkbox" className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500" />
                                                <label htmlFor="filter-size-1" className="ml-3 text-sm text-gray-600"> 6L </label>
                                            </div>
                                            <div className="flex items-center">
                                                <input id="filter-size-2" name="size[]" defaultValue="12l" type="checkbox" className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500" />
                                                <label htmlFor="filter-size-2" className="ml-3 text-sm text-gray-600"> 12L </label>
                                            </div>
                                            <div className="flex items-center">
                                                <input id="filter-size-3" name="size[]" defaultValue="18l" type="checkbox" className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500" />
                                                <label htmlFor="filter-size-3" className="ml-3 text-sm text-gray-600"> 18L </label>
                                            </div>
                                            <div className="flex items-center">
                                                <input id="filter-size-4" name="size[]" defaultValue="20l" type="checkbox" className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500" />
                                                <label htmlFor="filter-size-4" className="ml-3 text-sm text-gray-600"> 20L </label>
                                            </div>
                                            <div className="flex items-center">
                                                <input id="filter-size-5" name="size[]" defaultValue="40l" type="checkbox" defaultChecked className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500" />
                                                <label htmlFor="filter-size-5" className="ml-3 text-sm text-gray-600"> 40L </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                            {/* Product grid */}
                            <div className="lg:col-span-3 border-4 border-dashed border-gray-200 rounded-lg h-96 lg:h-[1260px]">
                                <div className="content-top grid grid-cols-3 pt-[50px] gap-[20px] mx-[40px]">
                                    {products.map((item, index) => {
                                        return <div className="w-full content-top-product border-dashed border-2 border-slate-300 text-center m-auto h-[370px] pt-[10px] rounded-[10px]" key={index}>
                                            <div className="hihi overflow-hidden">
                                                <Link to={`/products/${item._id}`}>
                                                    <a href="#">
                                                        <img src={`${item.img}`} width="200" className="hover:scale-110 duration-700 m-auto" />
                                                    </a>
                                                </Link>
                                            </div>
                                            <p className="pt-[10px] text-sm text-slate-500" >{item.category.name}</p>
                                            <Link to={`/products/${item._id}`}>
                                                <h4 className="text-lg font-semibold pt-[5px]"><a href="" className="no-underline text-stone-900 hover:text-amber-700">{item.name}</a></h4>
                                            </Link>
                                            <div className="text pt-[10px]">
                                                <del className="pr-[15px]">{formatter.format(item.pricedrop)}</del>
                                                <strong>{formatter.format(item.price)}</strong>
                                            </div>
                                        </div>
                                    })}
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </div>

    )
}

export default ProductPage


