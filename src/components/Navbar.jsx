import { Layout, Menu } from 'antd'
import React from 'react'

export default function Navbar() {
    return (
        <Layout.Header style={{position: 'fixed', zIndex: 1, width: '100%'}}>
            <Menu theme="dark" mode="horizontal" style={{color:"white", fontSize: "25px"}}>
                    Hacker-News
            </Menu>
        </Layout.Header>
    )
}
