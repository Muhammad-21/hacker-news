import { Layout, Menu } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <Layout.Header style={{ position: 'fixed', zIndex: 1, width: '100%'}}>
            <Menu theme="dark" mode="horizontal">
                    <Link to="/" className="logo">Hacker-News</Link>
            </Menu>
        </Layout.Header>
    )
}
