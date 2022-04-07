import React from 'react'
import { TypeCategory } from '../types/category'

type CategoryManagerProps = {
    categorys: TypeCategory[]
    onRemoveCt: (_id: number) => void
}

const CategoryManager = (props: CategoryManagerProps) => {
    return (
        <div>CategoryManager</div>
    )
}

export default CategoryManager