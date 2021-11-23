import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { getNewsProfile, updateComments, getKidsComments } from '../../store/reducers/news';
import Loader from '../loader/Loader';
import NewsPage from './NewsPage';



class NewsMain extends React.Component {
	componentDidMount() {
		let newsId = this.props.match.params.newsId;
		this.props.getNewsProfile(newsId);
	}

	render() {
		return (
			this.props.isLoading
				? <Loader/> 
				: <NewsPage {...this.props} />)
	}
}

let mapStateToProps = (state) => {
	return {
		newsProfile: state.newsPage.newsProfile,
		isLoading: state.newsPage.isLoading,
		comments: state.newsPage.comments,
		kids: state.newsPage.kids,
		commentsCount: state.newsPage.commentsCount,
		deleteCommentsCount: state.newsPage.deleteCommentsCount,
	}
}

export default compose (
	connect(mapStateToProps, { getNewsProfile, updateComments, getKidsComments }),
	withRouter
)(NewsMain);