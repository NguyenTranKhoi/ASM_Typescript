import axios from "axios";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import toastr from 'toastr'
import 'toastr/build/toastr.min.css'

type Inputs = { //Kiểu dữ liệu của từng input
    name: string,
    img: string,
    pricedrop: number,
    price: number,
};

type ProductAddProps = {
    onAdd: (product: Inputs) => void
}

const ProductAdd = (props: ProductAddProps) => {
    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>()
    //Dùng hook useNavigare để chuyển trang
    const navigate = useNavigate()
    const onSubmit: SubmitHandler<Inputs> = (dataInput) => {
        // try {
        //     props.onAdd(dataInput);
        //     //Chuyển trang
        //     navigate("/admin/product");
        //     toastr.success("Thêm thành công")
        // } catch (error) {
        //     toastr.error("Lỗi khi thêm")
        // }
        console.log(dataInput.img[0])
        const file = dataInput.img[0]
        const formData = new FormData()

        formData.append('file', file)
        formData.append("upload_preset", "zmppimam")

        axios({
            url: "https://api.cloudinary.com/v1_1/dqd4urvf6/image/upload",
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-endcoded",
            }, data: formData,
        }).then((res) => {
            dataInput.img = res.data.url
            // console.log(dataInput.img)
            props.onAdd(dataInput)
            navigate("/admin/product");
            toastr.success("Thêm thành công")
        })
        // console.log(dataInput)
    }
    return (
        <div>
            <header className="bg-white shadow">
                <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold text-gray-900">Add Product</h1>
                </div>
            </header>
            <div className="w-[500px] mt-[50px] mx-auto">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Image</label>
                        <input type="file" className="form-control" {...register('img', { required: true })} placeholder="Tên sản phẩm" />
                    </div>
                    <br />
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Name Product</label>
                        <input type="text" className="form-control" {...register('name', { required: true })} placeholder="Tên sản phẩm" />
                    </div>
                    <br />
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Price Drop</label>
                        <input type="text" className="form-control" {...register('pricedrop', { required: true })} placeholder="Giá sản phẩm" />
                    </div>
                    <br />
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Price Product</label>
                        <input type="text" className="form-control" {...register('price', { required: true })} placeholder="Giá sản phẩm" />
                    </div>
                    <br />
                    <button type="submit" className="btn btn-primary w-[100%] bg-indigo-500">Submit</button>
                </form>
            </div>
        </div>

    )
}

export default ProductAdd