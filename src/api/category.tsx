import { TypeCategory } from "../types/category";
import instance from "./instance";

export const listct = () => {
    const url = `/category`;
    return instance.get(url)
}
export const addct = (category: TypeCategory) => {
    const url = `/category`;
    return instance.post(url, category)
}
export const removect = (_id: number) => {
    const url = `/category/${_id}`
    return instance.delete(url)
}
export const readct = (slug: string | undefined) => {
    const url = `/category/${slug}`
    return instance.get(url)
}
export const updatect = (category: TypeCategory) => {
    const url = `/category/${category._id}`
    return instance.put(url, category)
}
