import React from 'react';
import Media from 'react-bootstrap/Media';
import moment from 'moment';
import KidsItem from './KidsIem';
import { CommentText } from './CommetText';
import { ClockCircleOutlined, CommentOutlined } from '@ant-design/icons';

const CommentsItem = ({ comment, kids, getKidsComments}) => {
	const date = moment.unix(comment.time);

	return (
		<Media>
			<Media.Body style={{padding:"2%"}}>
				<h5 style={{fontWeight:"700",fontSize:"20px"}}>{comment.by}</h5>
				<div style={{marginLeft:"2%"}}>
                    <CommentText text={comment.text}/>
				</div>
				<strong style={{fontSize:"12px"}}>
					<ClockCircleOutlined/> {date.format('LTS')} 📅 {date.format('LL')} {comment.kids 
							? <div className='btn__more' onClick={ () => {getKidsComments(comment.kids)} }> <CommentOutlined/> {comment.kids.length}</div>
							: <div className='btn'><CommentOutlined/> 0</div>
							}
				</strong>
				{kids.length && kids[0].parent === comment.id
					? kids.map(item => <KidsItem kid={item} key={item.id} />)
					: <div></div>
				}
			</Media.Body>
		</Media>
	)
}

export default CommentsItem;