import React from 'react'
import { Navigate } from 'react-router-dom'
import { isAuthenticate } from '../utils/localStorage'

type PrivateRouterProps = {
    children: JSX.Element
}

const PrivateRouter = (props: PrivateRouterProps) => {
    const { user } = JSON.parse(localStorage.getItem('user'))
    if (user.role != 1) {
        return <Navigate to="/signin" />
    }

    return props.children
}

export default PrivateRouter
