import React from 'react';
import Media from 'react-bootstrap/Media';
import moment from 'moment';
import { CommentText } from './CommetText';
import './Comments.css';
import { ClockCircleOutlined } from '@ant-design/icons';
const KidsItem = ({ kid }) => {
	const date = moment.unix(kid.time);

	return (
		<Media>
			<Media.Body className="kid">
				<h6 style={{fontWeight:"700",color:"greenyellow",fontSize:"14px"}}>{kid.by}</h6>
				<div style={{padding:"2%",marginLeft:"20px"}} id={`parentKid${kid.id}`}>
					<CommentText text={kid.text}/>
				</div>
				<strong>
					<ClockCircleOutlined/> {date.format('LTS')} 📅 {date.format('LL')}
				</strong>
			</Media.Body>
		</Media>
	)
}

export default KidsItem;