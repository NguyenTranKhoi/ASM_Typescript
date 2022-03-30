import React from 'react'
import { Outlet } from 'react-router-dom'
import HomePage from '../HomePage'



type Props = {}

const WebsiteLayout = (props: Props) => {
    return (
        <div>
            <HomePage />
        </div>
    )
}

export default WebsiteLayout