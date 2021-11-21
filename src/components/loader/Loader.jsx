import { Layout } from 'antd'
import React from 'react'
import styles from './Loader.module.css'
export default function Loader() {
    return (
        <Layout.Content className={styles.body}>
            <div className={styles.loading}>Loading News</div>
        </Layout.Content>
    )
}
