import NewsService from '../../API/NewsService';


const SET_NEWS_PROFILE = 'SET_NEWS_PROFILE';
const TOGGLE_IS_LOADING = 'TOGGLE_IS_LOADING';
const SET_COMMENT = 'SET_COMMENT';
const RESET_COMMENTS = 'RESET_COMMENTS';
const RESET_KIDS = 'RESET_KIDS';
const SET_KIDS_COMMENT = 'SET_KIDS_COMMENT';
const INCREMENT_COMMENTS_COUNT = 'INCREMENT_COMMENTS_COUNT';
const RESET_COMMENTS_COUNT = 'RESET_COMMENTS_COUNT';
const INCREMENT_DELETE_COMMENTS_COUNT = 'INCREMENT_DELETE_COMMENTS_COUNT';
const RESET_DELETE_COMMENTS_COUNT = 'RESET_DELETE_COMMENTS_COUNT';

let initialState = {
	newsProfile: {},
	comments: [],
	kids: [],
	commentsCount: 0,
	isLoading: false,
	deleteCommentsCount: 0,
}

const newsReducer = (state = initialState, action) => {
	switch(action.type) {
		case SET_NEWS_PROFILE:
			return {
				...state,
				newsProfile: action.newsProfile
			}
		case SET_COMMENT:
			return {
				...state,
				comments: state.comments.length && state.comments[0].time < action.comment.time
				? [action.comment, ...state.comments]
				: [...state.comments, action.comment]
			}
		case SET_KIDS_COMMENT:
			return {
				...state,
				kids: [action.kid, ...state.kids]
			}
		case RESET_COMMENTS:
			return {
				...state,
				comments: []
			}
		case RESET_KIDS:
			return {
				...state,
				kids: []
			}
		case INCREMENT_COMMENTS_COUNT:
			return {
				...state,
				commentsCount: ++state.commentsCount
			}
		case RESET_COMMENTS_COUNT:
			return {
				...state,
				commentsCount: 0
			}
		case INCREMENT_DELETE_COMMENTS_COUNT:
			return {
				...state,
				deleteCommentsCount: ++state.deleteCommentsCount
			}
		case RESET_DELETE_COMMENTS_COUNT:
			return {
				...state,
				deleteCommentsCount: 0
			}
		case TOGGLE_IS_LOADING:
			return {
				...state,
				isLoading: action.isLoading
			}
		default:
			return state;
	}
}

export const setNewsProfile = (newsProfile) => ({type: SET_NEWS_PROFILE, newsProfile});
export const toggleIsLoading = (isLoading) => ({type: TOGGLE_IS_LOADING, isLoading});
export const setComment = (comment) => ({type: SET_COMMENT, comment});
export const setKidsComment = (kid) => ({type: SET_KIDS_COMMENT, kid});
export const resetComments = () => ({type: RESET_COMMENTS});
export const resetKids = () => ({type: RESET_KIDS});
export const incrementCommentsCount = () => ({type: INCREMENT_COMMENTS_COUNT});
export const resetCommentsCount = () => ({type: RESET_COMMENTS_COUNT});
export const incrementDeleteCommentsCount = () => ({type: INCREMENT_DELETE_COMMENTS_COUNT});
export const resetDeleteCommentsCount = () => ({type: RESET_DELETE_COMMENTS_COUNT});


export const getNewsProfile = (newsId) => {
	return (dispatch) => {
		dispatch(toggleIsLoading(true));
		dispatch(resetCommentsCount());
		dispatch(resetComments());
		dispatch(resetDeleteCommentsCount());
		NewsService.getNews(newsId)
		.then(data => {
			dispatch(setNewsProfile(data));
			if (data.kids) {
				data.kids.forEach((item) => {
					dispatch(getComment(item));
				})
			}
			dispatch(toggleIsLoading(false));
		});
	}
};

export const getComment = (commentId) => {
	return (dispatch) => {
		NewsService.getComment(commentId)
		.then(data => {
			if (!data.deleted) {
				dispatch(setComment(data));
				dispatch(incrementCommentsCount());
			} else {
				dispatch(incrementDeleteCommentsCount());
			}
		});
	}
};

export const updateComments = (commentsIds) => {
	return (dispatch) => {
		dispatch(resetCommentsCount());
		dispatch(resetComments());
		dispatch(resetDeleteCommentsCount());
		commentsIds
			? commentsIds.forEach((item) => {dispatch(getComment(item))})
			: dispatch(resetComments());
	}
};

export const getKidsComments = (kidsIds) => {
	return (dispatch) => {
		kidsIds.forEach((item) => dispatch(getKidsComment(item)));
	}
};

export const getKidsComment = (kidId) => {
	return (dispatch) => {
		dispatch(resetKids());
		NewsService.getKidsComment(kidId)
		.then(data => {
			if (!data.deleted) {
				dispatch(setKidsComment(data));
			} 
		});
	}
};



export default newsReducer;