import { ProductType } from "../types/product";
import { isAuthenticate } from "../utils/localStorage";
import instance from "./instance";


export const list = () => {
    const url = `/products`;
    return instance.get(url)
}
export const add = (product: ProductType) => {
    if (localStorage.getItem("user")) {
        const { token, user } = isAuthenticate();

        const url = `/products/${user._id}`;
        console.log(url);
        console.log(token);
        return instance.post(url, product, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        });
    }
}
export const remove = (id: number) => {
    const url = `/products/${id}`;
    return instance.delete(url)
}
export const read = (id: string | undefined) => {
    const url = `/products/${id}`;
    return instance.get(url)
}
export const update = (product: ProductType) => {
    const url = `/products/${product._id}`;
    return instance.put(url, product);
}

function token(token: any) {
    throw new Error("Function not implemented.");
}
