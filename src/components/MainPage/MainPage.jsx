import { getNewsIds } from '../../store/reducers/main';
import React from 'react';
import { connect } from 'react-redux';
import Loader from '../loader/Loader';
import News from './News';

class MainPage extends React.Component {
	componentDidMount() {
		this.props.getNewsIds()
	}
	render() {
		return (
			this.props.news.length !== 100  
				? <Loader/> 
				: <News {...this.props}/>  
		)
	}
}

let mapStateToProps = (state) => {
	return {
		news: state.mainPage.news,
	}
}

export default connect(mapStateToProps, { getNewsIds }) (MainPage);