import React from 'react'

type Props = {}

const NewsProduct = (props: Props) => {
    return (
        <div>
            <div className="content pt-[50px]">
                <h2 className="fonts text-center">ĐỒNG HỒ NAM</h2>
                <div className="content-top grid grid-cols-4 pt-[50px]">
                    <div className="content-top-product border-dashed border-2 w-[310px] border-slate-400 text-center m-auto h-[370px] pt-[10px]">
                        <div className="hihi overflow-hidden">
                            <a href="#">
                                <img src="${post.img}" width={200} className="hover:scale-110 duration-700 m-auto" />
                            </a>
                        </div>
                        <p className="pt-[10px] text-sm text-slate-500"></p>
                        <h4 className="text-base"><a href="/chitietsanpham/${post.id}" className="no-underline text-stone-900 hover:text-amber-700"></a></h4>
                        <div className="text">
                            <del>20,217,000đ</del>
                            <strong></strong>
                        </div>
                    </div>
                    {/* content-top-product 1*/}
                    <div className="content-top-product border-dashed border-2 w-[310px] border-slate-400 text-center m-auto h-[370px] pt-[10px]">
                        <div className="hihi overflow-hidden">
                            <a href="#">
                                <img src="${post.img}" width={200} className="hover:scale-110 duration-700 m-auto" />
                            </a>
                        </div>
                        <p className="pt-[10px] text-sm text-slate-500"></p>
                        <h4 className="text-base"><a href="/chitietsanpham/${post.id}" className="no-underline text-stone-900 hover:text-amber-700"></a></h4>
                        <div className="text">
                            <del>5,600,000đ</del>
                            <strong></strong>
                        </div>
                    </div>
                    {/* content-top-product 2*/}
                    <div className="content-top-product border-dashed border-2 w-[310px] border-slate-400 text-center m-auto h-[370px] pt-[10px]">
                        <div className="hihi overflow-hidden">
                            <a href="#">
                                <img src="${post.img}" width={200} className="hover:scale-110 duration-700 m-auto" />
                            </a>
                        </div>
                        <p className="pt-[10px] text-sm text-slate-500">$</p>
                        <h4 className="text-base"><a href="/chitietsanpham/${post.id}" className="no-underline text-stone-900 hover:text-amber-700"></a></h4>
                        {/* <del>5,600,000đ</del> */}
                        <div className="text">
                            <strong>$</strong>
                        </div>
                    </div>
                    {/* content-top-product 3*/}
                    <div className="content-top-product border-dashed border-2 w-[310px] border-slate-400 text-center m-auto h-[370px] pt-[10px]">
                        <div className="hihi overflow-hidden">
                            <a href="#">
                                <img src="${post.img}" width={200} className="hover:scale-110 duration-700 m-auto" />
                            </a>
                        </div>
                        <p className="pt-[10px] text-sm text-slate-500">$</p>
                        <h4 className="text-base"><a href="/chitietsanpham/${post.id}" className="no-underline text-stone-900 hover:text-amber-700"></a></h4>
                        {/* <del>5,600,000đ</del> */}
                        <div className="text">
                            <strong>$</strong>
                        </div>
                    </div>
                    {/* content-top-product 3*/}
                </div>
                {/* content-top*/}
                <div className="content-top-new grid grid-cols-4 pt-[30px]">
                    <div className="content-top-product border-dashed border-2 w-[310px] border-slate-400 text-center m-auto h-[370px] pt-[10px]">
                        <div className="hihi overflow-hidden">
                            <a href="#">
                                <img src="${post.img}" width={200} className="hover:scale-110 duration-700 m-auto" />
                            </a>
                        </div>
                        <p className="pt-[10px] text-sm text-slate-500">$</p>
                        <h4 className="text-base"><a href="/chitietsanpham/${post.id}" className="no-underline text-stone-900 hover:text-amber-700"></a></h4>
                        {/* <del>5,600,000đ</del> */}
                        <div className="text">
                            <del>3,042,000đ</del>
                            <strong>$</strong>
                        </div>
                    </div>
                    {/* content-top-product 4*/}
                    <div className="content-top-product border-dashed border-2 w-[310px] border-slate-400 text-center m-auto h-[370px] pt-[10px]">
                        <div className="hihi overflow-hidden">
                            <a href="#">
                                <img src="${post.img}" width={200} className="hover:scale-110 duration-700 m-auto" />
                            </a>
                        </div>
                        <p className="pt-[10px] text-sm text-slate-500">$</p>
                        <h4 className="text-base"><a href="/chitietsanpham/${post.id}" className="no-underline text-stone-900 hover:text-amber-700"></a></h4>
                        {/* <del>5,600,000đ</del> */}
                        <div className="text">
                            <del>7,680,000đ</del>
                            <strong>$</strong>
                        </div>
                    </div>
                    {/* content-top-product 5*/}
                    <div className="content-top-product border-dashed border-2 w-[310px] border-slate-400 text-center m-auto h-[370px] pt-[10px]">
                        <div className="hihi overflow-hidden">
                            <a href="#">
                                <img src="${post.img}" width={200} className="hover:scale-110 duration-700 m-auto" />
                            </a>
                        </div>
                        <p className="pt-[10px] text-sm text-slate-500">$</p>
                        <h4 className="text-base"><a href="/chitietsanpham/${post.id}" className="no-underline text-stone-900 hover:text-amber-700"></a></h4>
                        {/* <del>5,600,000đ</del> */}
                        <div className="text">
                            {/* <del>7,680,000đ</del> */}
                            <strong>$</strong>
                        </div>
                    </div>
                    {/* content-top-product 7*/}
                    <div className="content-top-product border-dashed border-2 w-[310px] border-slate-400 text-center m-auto h-[370px] pt-[10px]">
                        <div className="hihi overflow-hidden">
                            <a href="#">
                                <img src="${post.img}" width={200} className="hover:scale-110 duration-700 m-auto" />
                            </a>
                        </div>
                        <p className="pt-[10px] text-sm text-slate-500">$</p>
                        <h4 className="text-base"><a href="/chitietsanpham/${post.id}" className="no-underline text-stone-900 hover:text-amber-700"></a></h4>
                        {/* <del>5,600,000đ</del> */}
                        <div className="text">
                            <del>1,863,000đ</del>
                            <strong>$</strong>
                        </div>
                    </div>
                    {/* content-top-product 8*/}
                </div>
                {/* content-top-new*/}

                <div className="content-banner pt-[50px]">
                    <img src="./img/banner-dong-ho-nam-citizen_1534163540.jpg" className="w-[100%]" />
                </div>
                {/* content-banner*/}
                <div className="content-new-heght pt-[50px]">
                    <h2 className="fonts text-center">ĐỒNG HỒ NỮ</h2>
                    <div className="content-top grid grid-cols-4 pt-[50px]">
                        <div className="content-top-product border-dashed border-2 w-[310px] border-slate-400 text-center m-auto h-[370px] pt-[10px]">
                            <div className="hihi overflow-hidden">
                                <a href="#">
                                    <img src="${post.img}" width={200} className="hover:scale-110 duration-700 m-auto" />
                                </a>
                            </div>
                            <p className="pt-[10px] text-sm text-slate-500">$</p>
                            <h4 className="text-base"><a href="/chitietsanpham/${post.id}" className="no-underline text-stone-900 hover:text-amber-700"></a></h4>
                            <div className="text">
                                {/* <del>20,217,000đ</del> */}
                                <strong>$</strong>
                            </div>
                        </div>
                        {/* content-top-product 9*/}
                        <div className="content-top-product border-dashed border-2 w-[310px] border-slate-400 text-center m-auto h-[370px] pt-[10px]">
                            <div className="hihi overflow-hidden">
                                <a href="#">
                                    <img src="${post.img}" width={200} className="hover:scale-110 duration-700 m-auto" />
                                </a>
                            </div>
                            <p className="pt-[10px] text-sm text-slate-500">$</p>
                            <h4 className="text-base"><a href="/chitietsanpham/${post.id}" className="no-underline text-stone-900 hover:text-amber-700"></a></h4>
                            <div className="text">
                                <del>6,800,000đ</del>
                                <strong>$</strong>
                            </div>
                        </div>
                        {/* content-top-product 10*/}
                        <div className="content-top-product border-dashed border-2 w-[310px] border-slate-400 text-center m-auto h-[370px] pt-[10px]">
                            <div className="hihi overflow-hidden">
                                <a href="#">
                                    <img src="${post.img}" width={200} className="hover:scale-110 duration-700 m-auto" />
                                </a>
                            </div>
                            <p className="pt-[10px] text-sm text-slate-500">$</p>
                            <h4 className="text-base"><a href="/chitietsanpham/${post.id}" className="no-underline text-stone-900 hover:text-amber-700"></a></h4>
                            {/* <del>5,600,000đ</del> */}
                            <div className="text">
                                <strong>$</strong>
                            </div>
                        </div>
                        {/* content-top-product 11*/}
                        <div className="content-top-product border-dashed border-2 w-[310px] border-slate-400 text-center m-auto h-[370px] pt-[10px]">
                            <div className="hihi overflow-hidden">
                                <a href="#">
                                    <img src="${post.img}" width={200} className="hover:scale-110 duration-700 m-auto" />
                                </a>
                            </div>
                            <p className="pt-[10px] text-sm text-slate-500">$</p>
                            <h4 className="text-base"><a href="/chitietsanpham/${post.id}" className="no-underline text-stone-900 hover:text-amber-700"></a></h4>
                            <div className="text">
                                <del>4,440,000đ</del>
                                <strong>$</strong>
                            </div>
                        </div>
                        {/* content-top-product 12*/}
                    </div>
                    {/* content-top 2*/}
                    <div className="content-top-new grid grid-cols-4 pt-[30px]">
                        <div className="content-top-product border-dashed border-2 w-[310px] border-slate-400 text-center m-auto h-[370px] pt-[10px]">
                            <div className="hihi overflow-hidden">
                                <a href="#">
                                    <img src="${post.img}" width={200} className="hover:scale-110 duration-700 m-auto" />
                                </a>
                            </div>
                            <p className="pt-[10px] text-sm text-slate-500">$</p>
                            <h4 className="text-base"><a href="/chitietsanpham/${post.id}" className="no-underline text-stone-900 hover:text-amber-700"></a></h4>
                            {/* <del>5,600,000đ</del> */}
                            <div className="text">
                                {/* <del>3,042,000đ</del> */}
                                <strong>$</strong>
                            </div>
                        </div>
                        {/* content-top-product 13*/}
                        <div className="content-top-product border-dashed border-2 w-[310px] border-slate-400 text-center m-auto h-[370px] pt-[10px]">
                            <div className="hihi overflow-hidden">
                                <a href="#">
                                    <img src="${post.img}" width={200} className="hover:scale-110 duration-700 m-auto" />
                                </a>
                            </div>
                            <p className="pt-[10px] text-sm text-slate-500">$</p>
                            <h4 className="text-base"><a href="/chitietsanpham/${post.id}" className="no-underline text-stone-900 hover:text-amber-700"></a></h4>
                            {/* <del>5,600,000đ</del> */}
                            <div className="text">
                                <del>4,700,000đ</del>
                                <strong>$</strong>
                            </div>
                        </div>
                        {/* content-top-product 14*/}
                        <div className="content-top-product border-dashed border-2 w-[310px] border-slate-400 text-center m-auto h-[370px] pt-[10px]">
                            <div className="hihi overflow-hidden">
                                <a href="#">
                                    <img src="${post.img}" width={200} className="hover:scale-110 duration-700 m-auto" />
                                </a>
                            </div>
                            <p className="pt-[10px] text-sm text-slate-500">$</p>
                            <h4 className="text-base"><a href="/chitietsanpham/${post.id}" className="no-underline text-stone-900 hover:text-amber-700"></a></h4>
                            {/* <del>5,600,000đ</del> */}
                            <div className="text">
                                {/* <del>7,680,000đ</del> */}
                                <strong>$</strong>
                            </div>
                        </div>
                        {/* content-top-product 15*/}
                        <div className="content-top-product border-dashed border-2 w-[310px] border-slate-400 text-center m-auto h-[370px] pt-[10px]">
                            <div className="hihi overflow-hidden">
                                <a href="#">
                                    <img src="${post.img}" width={200} className="hover:scale-110 duration-700 m-auto" />
                                </a>
                            </div>
                            <p className="pt-[10px] text-sm text-slate-500">$</p>
                            <h4 className="text-base"><a href="/chitietsanpham/${post.id}" className="no-underline text-stone-900 hover:text-amber-700"></a></h4>
                            {/* <del>5,600,000đ</del> */}
                            <div className="text">
                                <del>851,000đ</del>
                                <strong>$</strong>
                            </div>
                        </div>
                        {/* content-top-product 8*/}

                    </div>
                    {/* content-top-new*/}
                </div>
                {/* content-new-heght*/}
                <div className="content-bottom pt-[50px]">
                    <h2 className="fonts text-center">THÔNG TIN HỮU ÍCH</h2>
                    <div className="content-bottom-informatine grid grid-cols-3 text-center pt-[40px]">
                        <div className="content-informatine">
                            <div className="informatine-img overflow-hidden">
                                <img src="./img/banner.jpg" width="370px" className="h-[200px] m-auto hover:scale-110 duration-700" />
                            </div>
                            <div className="informatine-text">
                                <h4 className="text-lg pt-[10px]"><a className="no-underline text-stone-900 hover:text-stone-800">Duis
                                    luctus elit nisi, et
                                    cursus magna...</a></h4>
                                <p className="text-sm">Lorem ipsum dolor sit amet, consectetur, massa non viverra[...]
                                </p>
                            </div>
                        </div>
                        {/* content-informatine1*/}
                        <div className="content-informatine">
                            <div className="informatine-img overflow-hidden">
                                <img src="./img/banner2.jpg" width="370px" className="h-[200px] m-auto hover:scale-110 duration-700" />
                            </div>
                            <div className="informatine-text">
                                <h4 className="text-lg pt-[10px]"><a className="no-underline text-stone-900 hover:text-stone-800">Mauris tristique pretium
                                    tempus...</a></h4>
                                <p>Donec tempus eu ligula sed blandit. Vivamus iaculis rutrum[...]</p>
                            </div>
                        </div>
                        {/* content-informatine2*/}
                        <div className="content-informatine">
                            <div className="informatine-img overflow-hidden">
                                <img src="./img/banner3.jpg" width="370px" className="h-[200px] m-auto hover:scale-110 duration-700" />
                            </div>
                            <div className="informatine-text">
                                <h4 className="text-lg pt-[10px]"><a className="no-underline text-stone-900 hover:text-stone-800">Aliquam placerat nisl nec
                                    imperdiet...</a></h4>
                                <p>n rutrum tempus purus, ut euismod dui facilisis ac. Fusce[...]</p>
                            </div>
                        </div>
                        {/* content-informatine3*/}
                    </div>
                    {/*content-bottom-informatine */}
                </div>
                {/* content-bottom*/}
            </div>
            {/* content-- >
*/}

        </div >
    )
}

export default NewsProduct