import React from 'react'
import {ClockCircleOutlined, CommentOutlined, StarOutlined, UserOutlined} from '@ant-design/icons';
import moment from 'moment';
export default function NewsItem({news}) {
    const date = moment.unix(news.time);
    return (
        <div className="news">
            <div className="title">
                <strong>{news.title}</strong>
            </div>
            <div className="info">
                <div style={{wordSpacing:'0.5em'}}>
                    <UserOutlined/> {news.by} <CommentOutlined/> {news.kids
					? news.kids.length
					: 0} <StarOutlined/> {news.score}
                </div>
                <div><ClockCircleOutlined/> {date.format('LTS')}  📅 {date.format('LL')}</div>
            </div>
        </div>
    )
}
