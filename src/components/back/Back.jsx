import { UpCircleFilled } from '@ant-design/icons'
import React from 'react'
import styles from './Back.module.css';
export default function Back(props) {
    let hide = styles.hide;
    if(props.isScroll){
        hide = styles.show;
    }
    return (
        <UpCircleFilled className={[styles.back, hide].join(' ')} onClick={() => props.goBack()}/>
    )
}
