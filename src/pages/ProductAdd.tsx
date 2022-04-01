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
        <div>
            <form action="" onSubmit={handleSubmit(onSubmit)}>
                <input type="text" {...register('img')} placeholder='Ảnh' />
                <input type="text" {...register('name')} placeholder='Tên sản phẩm' />
                <input type="number" {...register('price')} placeholder='Giá sản phẩm' />
                <button>Thêm</button>
            </form>
        </div>
    )
}

export default ProductAdd