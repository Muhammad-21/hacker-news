import React from 'react'
import {ClockCircleOutlined, CommentOutlined, StarOutlined, UserOutlined} from '@ant-design/icons';
import moment from 'moment';
import { useHistory } from 'react-router-dom';
export default function NewsItem({news}) {
    const date = moment.unix(news.time);
    const router = useHistory();
    return (
        <div className="news" onClick={() => router.push(`/news/${news.id}`)}>
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
