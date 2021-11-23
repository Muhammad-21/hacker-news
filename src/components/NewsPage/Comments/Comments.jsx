import { LoadingOutlined } from '@ant-design/icons';
import React from 'react';
import CommentsItem from './CommentsItem';

const Comments = ({ comments, getKidsComments, kids, 
	commentsLength, deleteCommentsCount }) => {
		return (
			<> 
				{comments.length && comments.length !== commentsLength - deleteCommentsCount
					? <LoadingOutlined style={{fontSize:"40px"}}/>
					: comments.map(item => <CommentsItem comment={item} 
														key={item.id} 
														getKidsComments={getKidsComments} 
														kids={kids} />)
				}
			</>
		)
	}


export default Comments;