import React from 'react'
import { ProductType } from '../types/product'

type PeoductMaleProps = {
    products: ProductType[]
}

const ProductMale = (prop: PeoductMaleProps) => {
    return (
        <div>
            <div className="content pt-[50px]">
                <h2 className="text-2xl text-center">ĐỒNG HỒ NAM</h2>
                <div>
                    <div className="content-top grid grid-cols-4 pt-[50px]">

                        {'{'}/* content-top-product 1*/{'}'}
                        <div className="content-top-product border-dashed border-2 w-[310px] border-slate-400 text-center m-auto h-[370px] pt-[10px]">
                            <div className="hihi overflow-hidden">
                                <a href="#">
                                    <img src="${post.img}" width="{200}" className="hover:scale-110 duration-700 m-auto" />
                                </a>
                            </div>
                            <p className="pt-[10px] text-sm text-slate-500" />
                            <h4 className="text-base"><a href="/chitietsanpham/${post.id}" className="no-underline text-stone-900 hover:text-amber-700" /></h4>
                            <div className="text">
                                <del>5,600,000đ</del>
                                <strong />
                            </div>
                        </div>
                        {'{'}/* content-top-product 2*/{'}'}
                        <div className="content-top-product border-dashed border-2 w-[310px] border-slate-400 text-center m-auto h-[370px] pt-[10px]">
                            <div className="hihi overflow-hidden">
                                <a href="#">
                                    <img src="${post.img}" width="{200}" className="hover:scale-110 duration-700 m-auto" />
                                </a>
                            </div>
                            <p className="pt-[10px] text-sm text-slate-500">$</p>
                            <h4 className="text-base"><a href="/chitietsanpham/${post.id}" className="no-underline text-stone-900 hover:text-amber-700" /></h4>
                            {'{'}/* <del>5,600,000đ</del> */{'}'}
                            <div className="text">
                                <strong>$</strong>
                            </div>
                        </div>
                        {'{'}/* content-top-product 3*/{'}'}
                        <div className="content-top-product border-dashed border-2 w-[310px] border-slate-400 text-center m-auto h-[370px] pt-[10px]">
                            <div className="hihi overflow-hidden">
                                <a href="#">
                                    <img src="${post.img}" width="{200}" className="hover:scale-110 duration-700 m-auto" />
                                </a>
                            </div>
                            <p className="pt-[10px] text-sm text-slate-500">$</p>
                            <h4 className="text-base"><a href="/chitietsanpham/${post.id}" className="no-underline text-stone-900 hover:text-amber-700" /></h4>
                            {'{'}/* <del>5,600,000đ</del> */{'}'}
                            <div className="text">
                                <strong>$</strong>
                            </div>
                        </div>
                        {'{'}/* content-top-product 3*/{'}'}
                    </div>
                    <div className="content-top-new grid grid-cols-4 pt-[30px]">
                        <div className="content-top-product border-dashed border-2 w-[310px] border-slate-400 text-center m-auto h-[370px] pt-[10px]">
                            <div className="hihi overflow-hidden">
                                <a href="#">
                                    <img src="${post.img}" width="{200}" className="hover:scale-110 duration-700 m-auto" />
                                </a>
                            </div>
                            <p className="pt-[10px] text-sm text-slate-500">$</p>
                            <h4 className="text-base"><a href="/chitietsanpham/${post.id}" className="no-underline text-stone-900 hover:text-amber-700" /></h4>
                            {'{'}/* <del>5,600,000đ</del> */{'}'}
                            <div className="text">
                                <del>3,042,000đ</del>
                                <strong>$</strong>
                            </div>
                        </div>
                        {'{'}/* content-top-product 4*/{'}'}
                        <div className="content-top-product border-dashed border-2 w-[310px] border-slate-400 text-center m-auto h-[370px] pt-[10px]">
                            <div className="hihi overflow-hidden">
                                <a href="#">
                                    <img src="${post.img}" width="{200}" className="hover:scale-110 duration-700 m-auto" />
                                </a>
                            </div>
                            <p className="pt-[10px] text-sm text-slate-500">$</p>
                            <h4 className="text-base"><a href="/chitietsanpham/${post.id}" className="no-underline text-stone-900 hover:text-amber-700" /></h4>
                            {'{'}/* <del>5,600,000đ</del> */{'}'}
                            <div className="text">
                                <del>7,680,000đ</del>
                                <strong>$</strong>
                            </div>
                        </div>
                        {'{'}/* content-top-product 5*/{'}'}
                        <div className="content-top-product border-dashed border-2 w-[310px] border-slate-400 text-center m-auto h-[370px] pt-[10px]">
                            <div className="hihi overflow-hidden">
                                <a href="#">
                                    <img src="${post.img}" width="{200}" className="hover:scale-110 duration-700 m-auto" />
                                </a>
                            </div>
                            <p className="pt-[10px] text-sm text-slate-500">$</p>
                            <h4 className="text-base"><a href="/chitietsanpham/${post.id}" className="no-underline text-stone-900 hover:text-amber-700" /></h4>
                            {'{'}/* <del>5,600,000đ</del> */{'}'}
                            <div className="text">
                                {'{'}/* <del>7,680,000đ</del> */{'}'}
                                <strong>$</strong>
                            </div>
                        </div>
                        {'{'}/* content-top-product 7*/{'}'}
                        <div className="content-top-product border-dashed border-2 w-[310px] border-slate-400 text-center m-auto h-[370px] pt-[10px]">
                            <div className="hihi overflow-hidden">
                                <a href="#">
                                    <img src="${post.img}" width="{200}" className="hover:scale-110 duration-700 m-auto" />
                                </a>
                            </div>
                            <p className="pt-[10px] text-sm text-slate-500">$</p>
                            <h4 className="text-base"><a href="/chitietsanpham/${post.id}" className="no-underline text-stone-900 hover:text-amber-700" /></h4>
                            <del>5,600,000đ</del>
                            <div className="text">
                                <del>1,863,000đ</del>
                                <strong>$</strong>
                            </div>
                        </div>
                    </div>
                </div>

                )

                {/* content-banner*/}
            </div>

        </div >
    )
}

export default ProductMale