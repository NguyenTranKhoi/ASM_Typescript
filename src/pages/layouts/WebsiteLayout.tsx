import React from 'react'
import { Outlet } from 'react-router-dom'

type Props = {}

const WebsiteLayout = (props: Props) => {
    return (
        <div>
            <header>
                Header website
            </header>
            <main>
                <Outlet />
            </main>
            <footer>
                footer
            </footer>
        </div>
    )
}

export default WebsiteLayout