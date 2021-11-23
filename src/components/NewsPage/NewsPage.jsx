import { SyncOutlined } from '@ant-design/icons'
import { Layout } from 'antd'
import React from 'react'
import Link from '../link/Link'
import Comments from './Comments/Comments'
import NewsItem from './NewsItem'

export default function NewsPage({ newsProfile, comments, kids, 
                                commentsCount, updateComments, getKidsComments, 
                                deleteCommentsCount }) {
    return (
        <Layout.Content style={{padding:"80px 80px 0 4em"}}>
            <Link path="/"/>
            <NewsItem newsProfile={newsProfile} 
					commentsCount={commentsCount}/>
            <div>
                <h2><strong>Comments</strong></h2>
                <button className="update" onClick={() => updateComments()}><SyncOutlined/><strong> update</strong></button>
                <div style={{marginTop:"30px"}}>
                {comments.length
				? <Comments comments={comments} 
							getKidsComments={getKidsComments} 
							kids={kids}
							commentsLength={newsProfile.kids.length}
							deleteCommentsCount={deleteCommentsCount}
							/>
				: <h5>No comments</h5>
			    }
                </div>
            </div>
        </Layout.Content>
    )
}
