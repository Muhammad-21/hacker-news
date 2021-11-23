import React from 'react'
import { NavLink } from 'react-router-dom'
import { ArrowLeftOutlined } from '@ant-design/icons'
export default function Link(props) {
    return (
        <NavLink to={`${props.path}`}><h2 style={{position:"relative"}} ><ArrowLeftOutlined/> <span>Back</span></h2></NavLink>
    )
}
