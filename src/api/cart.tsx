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