import React from 'react'
import { Menu } from 'antd'

const Navbar = () => {
    return (
        <Menu mode="horizontal">
            <Menu.Item key="home">
                Home
            </Menu.Item>
            <Menu.Item key="book">
                Books
            </Menu.Item>
            <Menu.Item key="login">
                Login
            </Menu.Item>      
        </Menu>
    )
}

export default Navbar
