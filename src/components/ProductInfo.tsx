import React from 'react'

type Props = {}

const ProductInfo = (props: Props) => {
    return (
        <div>
            <div className="content-bottom pt-[50px]">
                <h2 className="text-2xl text-center">THÔNG TIN HỮU ÍCH</h2>
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
    )
}

export default ProductInfo