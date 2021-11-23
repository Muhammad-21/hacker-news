import { ArrowRightOutlined, CommentOutlined, UserOutlined } from '@ant-design/icons';
import moment from 'moment'
import React from 'react'

import './News.css';
export default function NewsItem({ newsProfile, commentsCount }) {
    const date = moment.unix(newsProfile.time)
    return (
        <div className="item">
            <div>
                <div><span>{date.format('MMMM, YYYY')}</span></div>
				<div style={{marginLeft:"15px",fontSize: "30px", fontWeight:"700"}}>{date.format('DD')}</div>
				<div style={{marginLeft:"5px",color:"gold"}}><span>{date.format('LTS')}</span></div>
            </div>
            <div style={{marginLeft:"50px", borderLeft:"2px solid black"}}></div>
            <div className="item_info">
                <h2><strong>{newsProfile.title}</strong></h2>
                <div><UserOutlined/> {newsProfile.by}</div>
                <div><CommentOutlined/> {newsProfile.kids ? commentsCount : 0} </div>
                <a rel = "noreferrer" target="_blank" href={`${newsProfile.url}`}><h2><ArrowRightOutlined/> <span>Link</span></h2></a>
            </div>
        </div>
    )
}
