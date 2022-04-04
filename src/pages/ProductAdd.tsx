import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import AdminNav from "../components/admin/AdminNav";
import FooterAdmin from "../components/admin/FooterAdmin";

type Inputs = { //Kiểu dữ liệu của từng input
    name: string,
    img: string,
    nameextra: string,
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
        // console.log(1234)
        props.onAdd(dataInput);
        //Chuyển trang
        navigate("/admin/product");
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
                        <label htmlFor="exampleInputEmail1">Name Product</label>
                        <input type="text" className="form-control" {...register('name')} placeholder="Tên sản phẩm" />
                    </div>
                    <br />
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Nameextra</label>
                        <input type="text" className="form-control" {...register('nameextra')} placeholder="Tên sản phẩm" />
                    </div>
                    <br />
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Price Product</label>
                        <input type="text" className="form-control" {...register('price')} placeholder="Giá sản phẩm" />
                    </div>
                    <br />
                    <button type="submit" className="btn btn-primary w-[100%] bg-indigo-500">Submit</button>
                </form>
            </div>
        </div>

    )
}

export default ProductAdd