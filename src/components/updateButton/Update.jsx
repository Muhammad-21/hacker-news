import { SyncOutlined } from '@ant-design/icons'
import React from 'react'
import styles from './Update.module.css';
export default function Update() {
    return (
        <button className={styles.update}>
            <SyncOutlined/>
            <strong> update</strong>
        </button>
    )
}
