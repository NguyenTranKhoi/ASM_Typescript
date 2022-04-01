import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import AdminNav from "../components/admin/AdminNav";
import FooterAdmin from "../components/admin/FooterAdmin";

type Inputs = { //Kiểu dữ liệu của từng input
    name: string,
    img: string,
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
        <div className="w-[500px] mt-[50px] mx-auto">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Add Products</label>
                    <input type="text" className="form-control" {...register('name')} placeholder="Tên sản phẩm" />
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
    )
}

export default ProductAdd