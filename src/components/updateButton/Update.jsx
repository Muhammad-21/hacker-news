import { SyncOutlined } from '@ant-design/icons'
import React from 'react'
import styles from './Update.module.css';
export default function Update(props) {
    return (
        <button className={styles.update} onClick={props.onClick}>
            <SyncOutlined/>
            <strong> update</strong>
        </button>
    )
}
