import { TypeCart } from "../types/cart"
import instance from "./instance"

export const read = (id: string) => {
    const url = `/cart/${id}`
    return instance.get(url)
}
export const listcart = () => {
    const url = `/cart`
    return instance.get(url)
}
export const addcart = (productcart: TypeCart) => {
    const url = `/cart`
    return instance.post(url, productcart)
}
export const removecart = (id: number) => {
    const url = `/cart/${id}`
    return instance.delete(url)
}
export const getOne = (cartId: string) => {
    const url = `/cart/getItem/${cartId}`;
    return instance.get(url);
}
export const update = (productCart: TypeCart) => {
    const url = `/cart/${productCart._id}`;
    return instance.put(url, productCart);
}