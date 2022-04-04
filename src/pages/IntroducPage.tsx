import React from 'react'

type Props = {}

const IntroducPage = (props: Props) => {
    return (
        <div>
            <div className="content pt-[100px]">
                <h2 className="fonts font-bold text-center text-2xl">MONA MEDIA</h2>
                <div className="content-img">
                    <img src="../img/banner3.jpg" className="h-[450px] w-[1200px] m-auto pt-[10px]" />
                </div>
                {/* content-img*/}
                <div className="content-item pt-[20px] grid grid-cols-3 text-center">
                    <div className="item-left">
                        <img src="../img/diamond.png" className="m-auto w-[50px] border-solid border-[2px] border-amber-500 rounded-[30px] hover:bg-amber-500" />
                        <h3 className="text-2xl pt-[15px]">CONCEPT</h3>
                        <p className="text-base pt-[5px]">Lorem ipsum dolor sit amet, consectetuer adipiscing</p>
                        <p className="text-base pt-[5px]">elit, sed diam nonummy nibh euismod tincidunt ut</p>
                        <p className="text-base pt-[5px]">laoreet dolore magna aliquam erat volutpat….</p>
                        <a>
                            <input type="button" defaultValue="CLICK ME!" className="pt-[10px] text-gray-100 bg-black border-none p-[10px] rounded-[30px]" />
                        </a>
                    </div>
                    {/* item-left*/}
                    <div className="item-left">
                        <img src="../img/network.png" className="m-auto w-[50px] border-solid border-[2px] border-amber-500 rounded-[30px] hover:bg-amber-500" />
                        <h3 className="text-2xl pt-[15px]">NETWORK</h3>
                        <p className="text-base pt-[5px]">Lorem ipsum dolor sit amet, consectetuer adipiscing</p>
                        <p className="text-base pt-[5px]">elit, sed diam nonummy nibh euismod tincidunt ut</p>
                        <p className="text-base pt-[5px]">laoreet dolore magna aliquam erat volutpat….</p>
                        <a>
                            <input type="button" defaultValue="CLICK ME!" className="pt-[10px] text-gray-100 bg-black border-none p-[10px] rounded-[30px]" />
                        </a>
                    </div>
                    {/* item-left*/}
                    <div className="item-left">
                        <img src="../img/eye.png" className="m-auto w-[50px] border-solid border-[2px] border-amber-500 rounded-[30px] hover:bg-amber-500" />
                        <h3 className="text-2xl pt-[15px]">SEO</h3>
                        <p className="text-base pt-[5px]">Lorem ipsum dolor sit amet, consectetuer adipiscing</p>
                        <p className="text-base pt-[5px]">elit, sed diam nonummy nibh euismod tincidunt ut</p>
                        <p className="text-base pt-[5px]">laoreet dolore magna aliquam erat volutpat….</p>
                        <a>
                            <input type="button" defaultValue="CLICK ME!" className="pt-[10px] text-gray-100 bg-black border-none p-[10px] rounded-[30px]" />
                        </a>
                    </div>
                    {/* item-left*/}
                </div>
                {/* content-item*/}
            </div>

        </div>
    )
}

export default IntroducPage