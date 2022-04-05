import React from 'react'
import { Navigate } from 'react-router-dom'
import { isAuthenticate } from '../utils/localStorage'

type PrivateRouterProps = {
    children: JSX.Element
}
const { user, token } = isAuthenticate();
const PrivateRouter = (props: PrivateRouterProps) => {
    if (user) {
        if (user.role != 0) {
            return <Navigate to="/signin" />
        } else {
            return <Navigate to="/admin" />
        }
    }
    return props.children
}

export default PrivateRouter
