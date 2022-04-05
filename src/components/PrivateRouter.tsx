import React from 'react'
import { Navigate } from 'react-router-dom'
import { isAuthenticate } from '../utils/localStorage'

type PrivateRouterProps = {
    children: JSX.Element
}

const PrivateRouter = (props: PrivateRouterProps) => {
    if (!isAuthenticate() && !isAuthenticate()?.role) {
        return <Navigate to="/signin" />
    } else if (isAuthenticate()?.role == 0) {
        return <Navigate to="/" />
    }

    return props.children
}

export default PrivateRouter
