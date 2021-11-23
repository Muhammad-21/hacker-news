import React from 'react';
import CommentsItem from './CommentsItem';
import Loader from '../../loader/Loader';

const Comments = ({ comments, getKidsComments, kids, 
	commentsLength, deleteCommentsCount }) => {
		return (
			<> 
				{comments.length && comments.length !== commentsLength - deleteCommentsCount
					? <Loader/>
					: comments.map(item => <CommentsItem comment={item} 
														key={item.id} 
														getKidsComments={getKidsComments} 
														kids={kids} />)
				}
			</>
		)
	}


export default Comments;